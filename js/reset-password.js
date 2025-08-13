const SUPABASE_URL = window.SUPABASE_URL || 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

let supabase;
let isValidSession = false;

function initSupabase() {
    if (typeof window.supabase === 'undefined') {
        console.error('Supabase client not loaded');
        showMessage('Error loading authentication service. Please refresh the page.', 'error');
        return false;
    }

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY || 
        SUPABASE_URL === 'YOUR_SUPABASE_URL' || 
        SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
        console.error('Supabase credentials not configured');
        showMessage('Authentication service not configured. Please contact support.', 'error');
        return false;
    }

    try {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        return true;
    } catch (error) {
        console.error('Failed to initialize Supabase:', error);
        showMessage('Failed to initialize authentication service.', 'error');
        return false;
    }
}

function showMessage(text, type = 'info') {
    const messageEl = document.getElementById('message');
    const messageTextEl = document.getElementById('messageText');
    
    messageEl.className = 'message show ' + type;
    messageTextEl.textContent = text;
}

function hideMessage() {
    const messageEl = document.getElementById('message');
    messageEl.className = 'message';
}

async function checkSession() {
    if (!supabase) return;

    try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
            console.error('Session check error:', error);
            showMessage('Error checking session. Please try again.', 'error');
            return;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const type = urlParams.get('type');
        const accessToken = urlParams.get('access_token');
        const refreshToken = urlParams.get('refresh_token');

        if (type === 'recovery' && accessToken) {
            isValidSession = true;
            showMessage('Please enter your new password below', 'info');
            document.getElementById('resetForm').classList.add('show');
            
            const { error: setSessionError } = await supabase.auth.setSession({
                access_token: accessToken,
                refresh_token: refreshToken
            });
            
            if (setSessionError) {
                console.error('Failed to set session:', setSessionError);
            }
        } else if (session) {
            isValidSession = true;
            showMessage('Please enter your new password below', 'info');
            document.getElementById('resetForm').classList.add('show');
        } else {
            isValidSession = false;
            showMessage('Invalid or expired reset link. Please request a new password reset.', 'error');
            document.getElementById('resetForm').classList.remove('show');
        }
    } catch (error) {
        console.error('Unexpected error checking session:', error);
        showMessage('An unexpected error occurred. Please try again.', 'error');
    }
}

async function handleResetPassword(e) {
    e.preventDefault();
    
    if (!isValidSession) {
        showMessage('Invalid session. Please request a new password reset.', 'error');
        return;
    }
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const submitButton = document.getElementById('submitButton');
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters', 'error');
        return;
    }
    
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="loading-spinner"></span> Updating Password...';
    hideMessage();
    
    try {
        const { error } = await supabase.auth.updateUser({
            password: password
        });
        
        if (error) {
            showMessage('Error updating password: ' + error.message, 'error');
            submitButton.disabled = false;
            submitButton.textContent = 'Update Password';
        } else {
            showMessage('Password updated successfully! Redirecting to login...', 'success');
            
            await supabase.auth.signOut();
            
            setTimeout(() => {
                const loginUrl = '/login.html?message=' + encodeURIComponent('Password updated successfully');
                window.location.href = loginUrl;
            }, 2000);
        }
    } catch (error) {
        showMessage('An unexpected error occurred. Please try again.', 'error');
        console.error('Reset password error:', error);
        submitButton.disabled = false;
        submitButton.textContent = 'Update Password';
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    if (!initSupabase()) {
        return;
    }

    await checkSession();

    if (supabase) {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                console.log('Auth event:', event, session);
                
                if (event === 'PASSWORD_RECOVERY') {
                    isValidSession = true;
                    showMessage('Please enter your new password below', 'info');
                    document.getElementById('resetForm').classList.add('show');
                } else if (event === 'SIGNED_IN' && session) {
                    isValidSession = true;
                    document.getElementById('resetForm').classList.add('show');
                } else if (event === 'SIGNED_OUT') {
                    isValidSession = false;
                    showMessage('Session expired. Please request a new password reset.', 'error');
                    document.getElementById('resetForm').classList.remove('show');
                }
            }
        );
    }

    const form = document.getElementById('resetForm');
    form.addEventListener('submit', handleResetPassword);
});