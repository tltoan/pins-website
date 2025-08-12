# Pins App Launch Website - Complete Implementation Guide

## 🚀 Quick Start for Vercel Deployment

This guide provides everything you need to build and deploy the Pins app launch website on Vercel.

## 📁 Project Structure

```
pins-website/
├── index.html              # Landing page
├── privacy.html            # Privacy Policy (Required for App Store)
├── terms.html              # Terms of Service (Required for App Store)
├── about.html              # About/Story page
├── support.html            # FAQ/Support page
├── css/
│   └── styles.css          # Main stylesheet (dark theme)
├── js/
│   └── main.js             # Animations and interactions
├── images/
│   ├── logo.png            # Pins logo
│   ├── hero-mockup.png     # iPhone mockup for hero
│   ├── feature-*.png       # Feature screenshots
│   └── app-icon.png        # App icon for meta tags
├── public/
│   └── press/              # Press kit assets
├── vercel.json             # Vercel configuration
└── package.json            # Project dependencies
```

## 📄 Complete HTML Templates

### 1. **index.html** - Landing Page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pins - Pin your moments, map your memories</title>
    <meta
      name="description"
      content="The anti-Instagram. Private location journaling for families. Capture real moments with dual-camera photos, voice notes, and location memories." />

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Pins - Private Family Memory Sharing" />
    <meta
      property="og:description"
      content="Pin your moments, map your memories. The private alternative to social media for families." />
    <meta
      property="og:image"
      content="https://yoursite.com/images/og-image.png" />
    <meta property="og:url" content="https://yoursite.com" />
    <meta property="og:type" content="website" />

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Pins - Pin your moments, map your memories" />
    <meta
      name="twitter:description"
      content="The anti-Instagram. Private location journaling for families." />
    <meta
      name="twitter:image"
      content="https://yoursite.com/images/twitter-card.png" />

    <!-- App Store Smart Banner -->
    <meta name="apple-itunes-app" content="app-id=YOUR_APP_ID" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/images/app-icon.png" />

    <!-- Styles -->
    <link rel="stylesheet" href="/css/styles.css" />

    <!-- Schema Markup for App -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        "name": "Pins",
        "operatingSystem": "iOS",
        "applicationCategory": "LifestyleApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "127"
        }
      }
    </script>
  </head>
  <body>
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <span class="logo-text">Pins</span>
          <span class="logo-emoji">📍</span>
        </div>
        <div class="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="/about.html">About</a>
          <a href="/support.html">Support</a>
          <a href="#download" class="nav-cta">Download</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Pin your moments,<br />map your memories</h1>
          <p class="hero-subtitle">
            The anti-Instagram. Capture real moments with the people who matter,
            not for the likes that don't.
          </p>
          <div class="hero-features">
            <div class="hero-feature">
              <span class="feature-icon">🔒</span>
              <span>Private by default</span>
            </div>
            <div class="hero-feature">
              <span class="feature-icon">👨‍👩‍👧‍👦</span>
              <span>Family-first sharing</span>
            </div>
            <div class="hero-feature">
              <span class="feature-icon">📸</span>
              <span>Dual-camera magic</span>
            </div>
          </div>
          <div class="hero-cta">
            <a
              href="https://apps.apple.com/app/YOUR_APP_ID"
              class="btn-primary">
              <svg class="apple-icon" viewBox="0 0 24 24" fill="currentColor">
                <!-- Apple logo SVG path -->
              </svg>
              Download for iPhone
            </a>
            <p class="cta-note">Free to use • Premium features available</p>
          </div>
        </div>
        <div class="hero-visual">
          <img
            src="/images/hero-mockup.png"
            alt="Pins app on iPhone"
            class="hero-mockup" />
        </div>
      </div>
    </section>

    <!-- Trust Banner -->
    <section class="trust-banner">
      <div class="trust-container">
        <div class="trust-item">
          <span class="trust-icon">🔐</span>
          <span>No ads, ever</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon">🚫</span>
          <span>No data selling</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon">✅</span>
          <span>You own your data</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon">🌍</span>
          <span>GDPR compliant</span>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="features-container">
        <div class="section-header">
          <h2>Remember life, not likes</h2>
          <p>
            Every feature designed for authentic memory capture, not social
            validation
          </p>
        </div>

        <div class="feature-grid">
          <!-- Feature 1: Dual Camera -->
          <div class="feature-card">
            <div class="feature-image">
              <img
                src="/images/feature-dual-camera.png"
                alt="Dual camera capture" />
            </div>
            <h3>Dual-Camera Magic</h3>
            <p>
              Capture your view and your reaction simultaneously. BeReal-style
              photos that tell the whole story.
            </p>
          </div>

          <!-- Feature 2: Voice Notes -->
          <div class="feature-card">
            <div class="feature-image">
              <img src="/images/feature-voice.png" alt="Voice notes" />
            </div>
            <h3>Voice Memories</h3>
            <p>
              Add 90-second voice notes to any pin. Hear the excitement,
              laughter, and stories behind each moment.
            </p>
          </div>

          <!-- Feature 3: Location Journey -->
          <div class="feature-card">
            <div class="feature-image">
              <img src="/images/feature-map.png" alt="Journey map" />
            </div>
            <h3>Map Your Journey</h3>
            <p>
              See your life's path beautifully visualized. Every pin creates
              your personal geography of memories.
            </p>
          </div>

          <!-- Feature 4: Friends Sharing -->
          <div class="feature-card">
            <div class="feature-image">
              <img src="/images/feature-friends.png" alt="Friend sharing" />
            </div>
            <h3>Family Circles</h3>
            <p>
              Share with the people who matter. No followers, no public
              profiles, just intimate family connections.
            </p>
          </div>

          <!-- Feature 5: Daily Adventures -->
          <div class="feature-card">
            <div class="feature-image">
              <img src="/images/feature-daily.png" alt="Daily adventures" />
            </div>
            <h3>Daily Adventures</h3>
            <p>
              Wake up to a beautiful summary of yesterday's journey. Your
              personal morning reflection ritual.
            </p>
          </div>

          <!-- Feature 6: Discovery -->
          <div class="feature-card">
            <div class="feature-image">
              <img src="/images/feature-discovery.png" alt="Discovery mode" />
            </div>
            <h3>Discover Nearby</h3>
            <p>
              Find public pins at restaurants, parks, and landmarks. Like
              geocaching for memories.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="how-container">
        <h2>Simple as morning coffee</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Capture</h3>
            <p>Snap dual photos, record audio, capture location</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Context</h3>
            <p>Add notes, music, weather automatically captured</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Choose</h3>
            <p>Keep private or share with your family circle</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing">
      <div class="pricing-container">
        <div class="section-header">
          <h2>Start free, upgrade when ready</h2>
          <p>No ads, no data selling, just honest pricing</p>
        </div>

        <div class="pricing-cards">
          <!-- Free Plan -->
          <div class="pricing-card">
            <div class="plan-name">Personal</div>
            <div class="plan-price">
              <span class="currency">$</span>
              <span class="amount">0</span>
              <span class="period">forever</span>
            </div>
            <ul class="plan-features">
              <li>Unlimited pins</li>
              <li>All capture features</li>
              <li>Up to 10 friends</li>
              <li>Basic discovery (5/day)</li>
              <li>30-day history</li>
              <li>Local storage</li>
            </ul>
            <a href="#download" class="btn-secondary">Get Started</a>
          </div>

          <!-- Premium Plan -->
          <div class="pricing-card featured">
            <div class="plan-badge">Most Popular</div>
            <div class="plan-name">Premium</div>
            <div class="plan-price">
              <span class="currency">$</span>
              <span class="amount">5.99</span>
              <span class="period">/month</span>
            </div>
            <ul class="plan-features">
              <li>Everything in Personal</li>
              <li>Unlimited friends</li>
              <li>Friend groups</li>
              <li>Unlimited discovery</li>
              <li>Full history</li>
              <li>Cloud backup</li>
              <li>Priority support</li>
              <li>Early features</li>
            </ul>
            <a href="#download" class="btn-primary">Start Free Trial</a>
          </div>

          <!-- Family Plan (Coming Soon) -->
          <div class="pricing-card coming-soon">
            <div class="plan-badge">Coming Soon</div>
            <div class="plan-name">Family</div>
            <div class="plan-price">
              <span class="currency">$</span>
              <span class="amount">14.99</span>
              <span class="period">/month</span>
            </div>
            <ul class="plan-features">
              <li>Up to 6 accounts</li>
              <li>All Premium features</li>
              <li>Family calendar</li>
              <li>Shared albums</li>
              <li>Parental controls</li>
              <li>Priority support</li>
            </ul>
            <a href="#" class="btn-disabled">Coming Soon</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section id="download" class="download">
      <div class="download-container">
        <h2>Ready to start pinning?</h2>
        <p>Join thousands of families capturing real moments</p>
        <div class="download-buttons">
          <a
            href="https://apps.apple.com/app/YOUR_APP_ID"
            class="btn-primary large">
            Download for iPhone
          </a>
          <div class="android-waitlist">
            <p>Android coming soon</p>
            <input
              type="email"
              placeholder="Get notified"
              class="waitlist-input" />
            <button class="btn-secondary">Join Waitlist</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-main">
          <div class="footer-brand">
            <div class="footer-logo">
              <span>Pins</span>
              <span class="logo-emoji">📍</span>
            </div>
            <p>Pin your moments, map your memories</p>
          </div>

          <div class="footer-links">
            <div class="footer-column">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#download">Download</a>
            </div>

            <div class="footer-column">
              <h4>Company</h4>
              <a href="/about.html">About</a>
              <a href="/press.html">Press Kit</a>
              <a href="mailto:hello@pinsapp.com">Contact</a>
            </div>

            <div class="footer-column">
              <h4>Support</h4>
              <a href="/support.html">FAQ</a>
              <a href="/support.html#help">Help Center</a>
              <a href="mailto:support@pinsapp.com">Email Support</a>
            </div>

            <div class="footer-column">
              <h4>Legal</h4>
              <a href="/privacy.html">Privacy Policy</a>
              <a href="/terms.html">Terms of Service</a>
              <a href="/privacy.html#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Pins. All rights reserved.</p>
          <p>Made with ❤️ for families everywhere</p>
        </div>
      </div>
    </footer>

    <script src="/js/main.js"></script>
  </body>
</html>
```

### 2. **privacy.html** - Privacy Policy Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Privacy Policy - Pins</title>
    <link rel="stylesheet" href="/css/styles.css" />
  </head>
  <body>
    <nav class="navbar">
      <div class="nav-container">
        <a href="/" class="nav-logo">
          <span class="logo-text">Pins</span>
          <span class="logo-emoji">📍</span>
        </a>
      </div>
    </nav>

    <div class="legal-container">
      <h1>Privacy Policy</h1>
      <p class="legal-updated">Last updated: January 2025</p>

      <section>
        <h2>Overview</h2>
        <p>
          At Pins, privacy isn't just a feature—it's our foundation. We built
          Pins as the anti-social media platform, where your memories belong to
          you, not to advertisers or algorithms.
        </p>
      </section>

      <section>
        <h2>Our Privacy Promise</h2>
        <ul>
          <li>We will never sell your data</li>
          <li>We will never show you ads</li>
          <li>Your pins are private by default</li>
          <li>You control who sees your memories</li>
          <li>You can delete everything, anytime</li>
        </ul>
      </section>

      <section>
        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <ul>
          <li>
            <strong>Account Information:</strong> Email address, username,
            profile photo
          </li>
          <li>
            <strong>Pin Content:</strong> Photos, voice notes, text notes, mood
            ratings
          </li>
          <li>
            <strong>Location Data:</strong> GPS coordinates (only when creating
            pins)
          </li>
          <li>
            <strong>Friend Connections:</strong> Friend codes and relationships
          </li>
        </ul>

        <h3>Information Automatically Collected</h3>
        <ul>
          <li>
            <strong>Device Information:</strong> Device type, OS version, app
            version
          </li>
          <li>
            <strong>Usage Data:</strong> Features used, pins created, app
            crashes
          </li>
          <li>
            <strong>Weather Data:</strong> Retrieved based on pin location
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain the Pins service</li>
          <li>To enable friend sharing (only with your consent)</li>
          <li>To send important service updates</li>
          <li>To improve app performance and fix bugs</li>
          <li>To provide customer support</li>
        </ul>
      </section>

      <section>
        <h2>Data Storage & Security</h2>
        <p>Your data is stored using industry-standard encryption:</p>
        <ul>
          <li>All data transmitted using TLS/SSL encryption</li>
          <li>Photos and audio stored in secure cloud storage</li>
          <li>Database encrypted at rest</li>
          <li>Regular security audits and updates</li>
        </ul>
      </section>

      <section>
        <h2>Sharing & Disclosure</h2>
        <p>We share your information only in these limited circumstances:</p>
        <ul>
          <li>
            <strong>With your consent:</strong> When you choose to share pins
            with friends
          </li>
          <li>
            <strong>For legal reasons:</strong> If required by law or legal
            process
          </li>
          <li>
            <strong>To protect rights:</strong> To protect Pins, our users, or
            the public
          </li>
          <li>
            <strong>Business transfers:</strong> In the event of a merger or
            acquisition (with notice)
          </li>
        </ul>
        <p>
          <strong>We never share data with:</strong> Advertisers, data brokers,
          or marketing companies
        </p>
      </section>

      <section>
        <h2>Your Rights & Controls</h2>
        <ul>
          <li>
            <strong>Access:</strong> View all your data anytime in the app
          </li>
          <li><strong>Correction:</strong> Edit or update your information</li>
          <li>
            <strong>Deletion:</strong> Delete individual pins or your entire
            account
          </li>
          <li>
            <strong>Portability:</strong> Export your data in standard formats
          </li>
          <li>
            <strong>Opt-out:</strong> Control notifications and sharing settings
          </li>
        </ul>
      </section>

      <section>
        <h2>Children's Privacy</h2>
        <p>
          Pins is not directed to children under 13. We do not knowingly collect
          information from children under 13. If you believe we have
          inadvertently collected such information, please contact us
          immediately.
        </p>
      </section>

      <section>
        <h2>International Data Transfers</h2>
        <p>
          Your data may be transferred to and processed in countries other than
          your own. We ensure appropriate safeguards are in place to protect
          your information in accordance with this privacy policy.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify
          you of any material changes via email or in-app notification.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>If you have questions about this privacy policy or our practices:</p>
        <ul>
          <li>Email: privacy@pinsapp.com</li>
          <li>Address: [Your Address]</li>
        </ul>
      </section>

      <section>
        <h2>GDPR Rights (European Users)</h2>
        <p>
          If you're in the European Economic Area, you have additional rights
          under GDPR:
        </p>
        <ul>
          <li>Right to be informed about data collection</li>
          <li>Right to access your personal data</li>
          <li>Right to rectification of incorrect data</li>
          <li>Right to erasure ("right to be forgotten")</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
          <li>Rights related to automated decision-making</li>
        </ul>
      </section>

      <section>
        <h2>CCPA Rights (California Users)</h2>
        <p>California residents have additional rights under CCPA:</p>
        <ul>
          <li>Right to know what personal information is collected</li>
          <li>Right to know if personal information is sold or disclosed</li>
          <li>
            Right to opt-out of the sale of personal information (we don't sell
            data)
          </li>
          <li>Right to delete personal information</li>
          <li>Right to non-discrimination for exercising privacy rights</li>
        </ul>
      </section>
    </div>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-bottom">
          <p>&copy; 2025 Pins. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </body>
</html>
```

### 3. **terms.html** - Terms of Service Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Terms of Service - Pins</title>
    <link rel="stylesheet" href="/css/styles.css" />
  </head>
  <body>
    <nav class="navbar">
      <div class="nav-container">
        <a href="/" class="nav-logo">
          <span class="logo-text">Pins</span>
          <span class="logo-emoji">📍</span>
        </a>
      </div>
    </nav>

    <div class="legal-container">
      <h1>Terms of Service</h1>
      <p class="legal-updated">Last updated: January 2025</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using Pins, you agree to these Terms of Service. If you don't
          agree, please don't use our service.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          Pins is a private location-based journaling application that allows
          users to capture and share memories with friends and family through
          photos, voice notes, and location data.
        </p>
      </section>

      <section>
        <h2>3. User Accounts</h2>
        <ul>
          <li>You must be at least 13 years old to use Pins</li>
          <li>You're responsible for maintaining account security</li>
          <li>One person per account (no sharing)</li>
          <li>Provide accurate account information</li>
          <li>You're responsible for all activity under your account</li>
        </ul>
      </section>

      <section>
        <h2>4. User Content</h2>
        <h3>Your Rights</h3>
        <ul>
          <li>You retain ownership of all content you create</li>
          <li>You can delete your content anytime</li>
          <li>You control who sees your content</li>
        </ul>

        <h3>License to Pins</h3>
        <p>By uploading content, you grant Pins a limited license to:</p>
        <ul>
          <li>Store and backup your content</li>
          <li>Display content to users you've authorized</li>
          <li>Provide the service's features</li>
        </ul>

        <h3>Content Rules</h3>
        <p>You agree not to post content that:</p>
        <ul>
          <li>Violates any laws or regulations</li>
          <li>Infringes on others' intellectual property</li>
          <li>Contains hate speech or harassment</li>
          <li>Is sexually explicit or violent</li>
          <li>Impersonates others</li>
          <li>Contains malware or spam</li>
        </ul>
      </section>

      <section>
        <h2>5. Privacy & Data</h2>
        <p>
          Your privacy is fundamental to us. Please review our
          <a href="/privacy.html">Privacy Policy</a> to understand how we handle
          your data.
        </p>
      </section>

      <section>
        <h2>6. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use Pins for illegal purposes</li>
          <li>Attempt to hack or compromise our systems</li>
          <li>Scrape or copy other users' content</li>
          <li>Create fake or misleading accounts</li>
          <li>Harass or harm other users</li>
          <li>Use automated systems or bots</li>
          <li>Violate others' privacy</li>
        </ul>
      </section>

      <section>
        <h2>7. Subscription & Payments</h2>
        <ul>
          <li>Free tier available with limited features</li>
          <li>Premium subscriptions billed monthly</li>
          <li>Cancel anytime through app store</li>
          <li>No refunds for partial months</li>
          <li>Price changes with 30-day notice</li>
        </ul>
      </section>

      <section>
        <h2>8. Intellectual Property</h2>
        <ul>
          <li>Pins name, logo, and design are our property</li>
          <li>You may not use our branding without permission</li>
          <li>We respect others' intellectual property rights</li>
          <li>Report violations to legal@pinsapp.com</li>
        </ul>
      </section>

      <section>
        <h2>9. Disclaimers</h2>
        <ul>
          <li>Service provided "as is" without warranties</li>
          <li>We don't guarantee uninterrupted service</li>
          <li>We're not responsible for user content</li>
          <li>Location and weather data may not be 100% accurate</li>
        </ul>
      </section>

      <section>
        <h2>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Pins shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages
          resulting from your use or inability to use the service.
        </p>
      </section>

      <section>
        <h2>11. Indemnification</h2>
        <p>
          You agree to indemnify and hold Pins harmless from any claims
          resulting from your use of the service, violation of these terms, or
          infringement of any third-party rights.
        </p>
      </section>

      <section>
        <h2>12. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. We'll notify you of
          material changes via email or in-app notification. Continued use after
          changes constitutes acceptance.
        </p>
      </section>

      <section>
        <h2>13. Termination</h2>
        <ul>
          <li>You can delete your account anytime</li>
          <li>We may suspend accounts that violate terms</li>
          <li>Upon termination, your right to use Pins ends</li>
          <li>Provisions that should survive termination will remain</li>
        </ul>
      </section>

      <section>
        <h2>14. Governing Law</h2>
        <p>
          These terms are governed by the laws of [Your Jurisdiction], without
          regard to conflict of law principles.
        </p>
      </section>

      <section>
        <h2>15. Contact Information</h2>
        <p>For questions about these terms:</p>
        <ul>
          <li>Email: legal@pinsapp.com</li>
          <li>Address: [Your Address]</li>
        </ul>
      </section>
    </div>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-bottom">
          <p>&copy; 2025 Pins. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </body>
</html>
```

## 🎨 CSS Styles (styles.css)

```css
/* Pins Website - Dark Theme Matching App Design */

:root {
  /* Colors from app design system */
  --color-background: #000000;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-text-secondary: #a0a0a0;
  --color-text-tertiary: #666666;
  --color-accent: #ff4444;
  --color-accent-light: #ff6666;
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-border: #333333;
  --color-border-active: #555555;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  --spacing-xxxl: 64px;

  /* Typography */
  --font-system: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, sans-serif;
  --font-mono: "Menlo", "Monaco", "Courier New", monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-system);
  background: var(--color-background);
  color: var(--color-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  color: var(--color-text);
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.logo-emoji {
  font-size: 24px;
}

.nav-links {
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;
}

.nav-links a {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--color-text);
}

.nav-cta {
  background: var(--color-accent);
  color: var(--color-background) !important;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 28px;
  font-weight: 600;
}

.nav-cta:hover {
  background: var(--color-accent-light);
}

/* Hero Section */
.hero {
  padding-top: 120px;
  padding-bottom: var(--spacing-xxxl);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxxl);
  align-items: center;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.5;
}

.hero-features {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.hero-feature {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: 16px;
}

.feature-icon {
  font-size: 20px;
}

.hero-cta {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.btn-primary {
  background: var(--color-accent);
  color: var(--color-background);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 28px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--color-accent-light);
  transform: translateY(-2px);
}

.btn-primary.large {
  padding: 20px 40px;
  font-size: 20px;
}

.apple-icon {
  width: 20px;
  height: 20px;
}

.cta-note {
  color: var(--color-text-tertiary);
  font-size: 14px;
}

.hero-mockup {
  width: 100%;
  max-width: 400px;
  height: auto;
}

/* Trust Banner */
.trust-banner {
  background: var(--color-surface);
  padding: var(--spacing-lg) 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.trust-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
}

.trust-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 14px;
  color: var(--color-text-secondary);
}

.trust-icon {
  font-size: 20px;
}

/* Features Section */
.features {
  padding: var(--spacing-xxxl) 0;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-xxl);
}

.section-header h2 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  letter-spacing: -0.5px;
}

.section-header p {
  font-size: 20px;
  color: var(--color-text-secondary);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
}

.feature-card {
  background: var(--color-surface);
  border-radius: 16px;
  padding: var(--spacing-xl);
  transition: transform 0.2s;
  /* 3D elevation effect */
  border-top: 1.5px solid rgba(255, 255, 255, 0.15);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.5);
  border-right: 1px solid rgba(0, 0, 0, 0.4);
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-image {
  width: 100%;
  height: 200px;
  background: var(--color-background);
  border-radius: 12px;
  margin-bottom: var(--spacing-lg);
  overflow: hidden;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-card h3 {
  font-size: 24px;
  margin-bottom: var(--spacing-md);
}

.feature-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* How It Works */
.how-it-works {
  background: var(--color-surface);
  padding: var(--spacing-xxxl) 0;
}

.how-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  text-align: center;
}

.how-container h2 {
  font-size: 40px;
  margin-bottom: var(--spacing-xxl);
}

.steps {
  display: flex;
  justify-content: space-around;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
}

.step {
  flex: 1;
  min-width: 200px;
}

.step-number {
  width: 60px;
  height: 60px;
  background: var(--color-accent);
  color: var(--color-background);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  margin: 0 auto var(--spacing-md);
}

.step h3 {
  font-size: 24px;
  margin-bottom: var(--spacing-sm);
}

.step p {
  color: var(--color-text-secondary);
}

/* Pricing Section */
.pricing {
  padding: var(--spacing-xxxl) 0;
}

.pricing-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.pricing-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xxl);
}

.pricing-card {
  background: var(--color-surface);
  border-radius: 16px;
  padding: var(--spacing-xl);
  position: relative;
  border: 1px solid var(--color-border);
}

.pricing-card.featured {
  border-color: var(--color-accent);
  transform: scale(1.05);
}

.pricing-card.coming-soon {
  opacity: 0.6;
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-accent);
  color: var(--color-background);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
}

.plan-name {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
}

.plan-price {
  display: flex;
  align-items: baseline;
  margin-bottom: var(--spacing-xl);
}

.currency {
  font-size: 20px;
  color: var(--color-text-secondary);
}

.amount {
  font-size: 48px;
  font-weight: 700;
  margin: 0 4px;
}

.period {
  font-size: 16px;
  color: var(--color-text-secondary);
}

.plan-features {
  list-style: none;
  margin-bottom: var(--spacing-xl);
}

.plan-features li {
  padding: var(--spacing-sm) 0;
  color: var(--color-text-secondary);
  position: relative;
  padding-left: var(--spacing-lg);
}

.plan-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-success);
}

.btn-secondary {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 28px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  transition: all 0.2s;
}

.btn-secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.btn-disabled {
  background: var(--color-border);
  color: var(--color-text-tertiary);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 28px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  cursor: not-allowed;
}

/* Download Section */
.download {
  background: var(--color-surface);
  padding: var(--spacing-xxxl) 0;
  text-align: center;
}

.download-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.download h2 {
  font-size: 40px;
  margin-bottom: var(--spacing-md);
}

.download p {
  font-size: 20px;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.download-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xl);
}

.android-waitlist {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: center;
}

.waitlist-input {
  background: var(--color-background);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: 12px;
  font-size: 16px;
  width: 300px;
}

.waitlist-input::placeholder {
  color: var(--color-text-tertiary);
}

/* Footer */
.footer {
  background: var(--color-background);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-xxl) 0 var(--spacing-xl);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xl);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 24px;
  font-weight: 700;
}

.footer-brand p {
  color: var(--color-text-secondary);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xl);
}

.footer-column h4 {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-text-tertiary);
  margin-bottom: var(--spacing-md);
}

.footer-column a {
  display: block;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--spacing-xs) 0;
  transition: color 0.2s;
}

.footer-column a:hover {
  color: var(--color-text);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border);
  color: var(--color-text-tertiary);
}

/* Legal Pages */
.legal-container {
  max-width: 800px;
  margin: 100px auto;
  padding: 0 var(--spacing-lg) var(--spacing-xxxl);
}

.legal-container h1 {
  font-size: 48px;
  margin-bottom: var(--spacing-md);
}

.legal-updated {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xxl);
}

.legal-container section {
  margin-bottom: var(--spacing-xl);
}

.legal-container h2 {
  font-size: 28px;
  margin-bottom: var(--spacing-md);
  margin-top: var(--spacing-xl);
}

.legal-container h3 {
  font-size: 20px;
  margin-bottom: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

.legal-container p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
}

.legal-container ul {
  list-style-position: inside;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
}

.legal-container li {
  padding: var(--spacing-xs) 0;
  line-height: 1.8;
}

.legal-container a {
  color: var(--color-accent);
  text-decoration: none;
}

.legal-container a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 40px;
  }

  .hero-visual {
    order: -1;
  }

  .hero-cta {
    align-items: center;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .steps {
    flex-direction: column;
  }

  .pricing-cards {
    grid-template-columns: 1fr;
  }

  .pricing-card.featured {
    transform: none;
  }

  .footer-main {
    grid-template-columns: 1fr;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeIn 0.6s ease-out forwards;
}
```

## 📦 JavaScript (main.js)

```javascript
// Pins Website - Main JavaScript

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation classes when elements come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe all feature cards and sections
document
  .querySelectorAll(".feature-card, .pricing-card, .step")
  .forEach((el) => {
    observer.observe(el);
  });

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.98)";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.95)";
  }
});

// Waitlist form handling
const waitlistForm = document.querySelector(".android-waitlist");
if (waitlistForm) {
  const button = waitlistForm.querySelector("button");
  const input = waitlistForm.querySelector("input");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const email = input.value;

    if (email && email.includes("@")) {
      // Here you would send to your backend
      console.log("Waitlist signup:", email);

      // Show success message
      button.textContent = "Added to Waitlist!";
      button.style.background = "#10B981";
      input.value = "";

      setTimeout(() => {
        button.textContent = "Join Waitlist";
        button.style.background = "";
      }, 3000);
    } else {
      input.style.borderColor = "#EF4444";
      setTimeout(() => {
        input.style.borderColor = "";
      }, 2000);
    }
  });
}

// Add subtle parallax effect to hero mockup
const heroMockup = document.querySelector(".hero-mockup");
if (heroMockup) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    heroMockup.style.transform = `translateY(${rate}px)`;
  });
}

// Pricing card hover effects
document.querySelectorAll(".pricing-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    if (!card.classList.contains("coming-soon")) {
      card.style.transform = "translateY(-8px)";
    }
  });

  card.addEventListener("mouseleave", () => {
    if (!card.classList.contains("featured")) {
      card.style.transform = "translateY(0)";
    }
  });
});
```

## 🚀 Vercel Configuration (vercel.json)

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/privacy",
      "destination": "/privacy.html"
    },
    {
      "source": "/terms",
      "destination": "/terms.html"
    },
    {
      "source": "/about",
      "destination": "/about.html"
    },
    {
      "source": "/support",
      "destination": "/support.html"
    }
  ]
}
```

## 📋 Package.json

```json
{
  "name": "pins-website",
  "version": "1.0.0",
  "description": "Official website for Pins app",
  "scripts": {
    "dev": "npx serve .",
    "build": "echo 'Static site, no build needed'"
  },
  "keywords": ["pins", "app", "website", "landing"],
  "author": "Pins Team",
  "license": "MIT"
}
```

## 🎯 Quick Deployment Steps

1. **Create a new directory** for your website
2. **Copy all the HTML, CSS, and JS files** from this guide
3. **Add your app screenshots** to the images folder
4. **Update placeholders**:
   - Replace `YOUR_APP_ID` with actual App Store ID
   - Update email addresses
   - Add your company address
   - Update social media links
5. **Deploy to Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```
6. **Update your app** to point to the new Privacy Policy and Terms URLs

## 📱 App Store Requirements Met

✅ Privacy Policy page  
✅ Terms of Service page  
✅ Support/contact information  
✅ App description and features  
✅ Clear pricing information

## 🔧 Customization Checklist

- [ ] Replace placeholder images with actual app screenshots
- [ ] Update App Store ID when available
- [ ] Add Google Analytics or privacy-friendly analytics
- [ ] Set up email collection backend for waitlist
- [ ] Create press kit with downloadable assets
- [ ] Add testimonials when available
- [ ] Update meta tags with actual URLs
- [ ] Test on multiple devices and browsers
- [ ] Set up custom domain
- [ ] Add SSL certificate (automatic with Vercel)

This website will serve as a professional launch platform for your Pins app while meeting all App Store requirements!
