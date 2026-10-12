import type { Metadata } from "next";
import { DesktopNav, MobileMenu } from "@/components/layout/navbar";
import { LegalLayout, type LegalSection } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Cookies Policy — XlassicStudio",
  description:
    "How XlassicStudio uses cookies and similar technologies on xlassicstudio.com.",
};

const sections: LegalSection[] = [
  {
    id: "what",
    index: "01",
    title: "What are cookies?",
    content: (
      <>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. They help websites remember your preferences, keep you logged
          in, or measure how the site is being used.
        </p>
        <p>
          This policy also covers related technologies — such as{" "}
          <code>localStorage</code>, <code>sessionStorage</code>, and pixel tags —
          which work in similar ways.
        </p>
      </>
    ),
  },
  {
    id: "which",
    index: "02",
    title: "Cookies we use",
    content: (
      <>
        <p>
          We keep cookies to an absolute minimum. This Site uses{" "}
          <strong>no advertising cookies</strong> and{" "}
          <strong>no cross-site tracking cookies</strong>.
        </p>

        <h3>Strictly necessary</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>xls-loaded</td>
              <td>
                Stored in <code>sessionStorage</code>. Prevents our intro loader
                from replaying on every page navigation within the same session.
              </td>
              <td>Until you close the browser tab</td>
            </tr>
          </tbody>
        </table>

        <h3>Analytics (optional)</h3>
        <p>
          If enabled, we may use <strong>Vercel Analytics</strong> — a
          privacy-respecting analytics service that does <strong>not</strong> use
          cookies, does not fingerprint visitors, and does not track you across
          other websites. It records aggregate page views and anonymised
          performance data only.
        </p>

        <h3>Third-party services</h3>
        <p>
          When you make a purchase or submit a form, our processors (Stripe,
          Lemon Squeezy, FormSubmit) may set their own cookies on their domains.
          These are governed by their own policies:
        </p>
        <ul>
          <li>
            Stripe —{" "}
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              stripe.com/privacy
            </a>
          </li>
          <li>
            Lemon Squeezy —{" "}
            <a
              href="https://www.lemonsqueezy.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              lemonsqueezy.com/privacy
            </a>
          </li>
          <li>
            FormSubmit —{" "}
            <a href="https://formsubmit.co/privacy" target="_blank" rel="noreferrer">
              formsubmit.co/privacy
            </a>
          </li>
          <li>
            Vercel —{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">
              vercel.com/legal/privacy-policy
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "why",
    index: "03",
    title: "Why we use them",
    content: (
      <>
        <ul>
          <li>
            <strong>Functionality:</strong> to remember that you have already seen
            the intro loader;
          </li>
          <li>
            <strong>Security & fraud prevention:</strong> through our payment and
            form providers;
          </li>
          <li>
            <strong>Performance:</strong> to understand which pages load slowly or
            fail, so we can fix them;
          </li>
          <li>
            <strong>Legal compliance:</strong> to record tax residency for VAT
            purposes at checkout.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> use cookies to build advertising profiles or
          to serve you targeted ads.
        </p>
      </>
    ),
  },
  {
    id: "manage",
    index: "04",
    title: "Managing cookies",
    content: (
      <>
        <p>
          You can control and delete cookies through your browser settings.
          Instructions for common browsers:
        </p>
        <ul>
          <li>
            <strong>Chrome:</strong> Settings → Privacy and security → Third-party
            cookies
          </li>
          <li>
            <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
          </li>
          <li>
            <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and
            Site Data
          </li>
          <li>
            <strong>Edge:</strong> Settings → Cookies and site permissions
          </li>
        </ul>
        <p>
          Blocking <strong>strictly necessary</strong> cookies may affect how the
          Site behaves — for example, the intro loader may replay on every visit.
          Blocking third-party cookies may prevent checkout from working.
        </p>
      </>
    ),
  },
  {
    id: "consent",
    index: "05",
    title: "Your consent",
    content: (
      <>
        <p>
          Because we use only strictly necessary cookies by default, and our
          analytics are cookie-free, we do not display a cookie banner. Under the{" "}
          <strong>Data Protection Act, 2024</strong> of Botswana and the EU/UK
          ePrivacy rules, strictly necessary cookies do not require prior consent.
        </p>
        <p>
          If, in future, we introduce cookies that require consent (for example,
          advertising or non-essential analytics), we will ask for your consent
          first via an on-screen banner, and this policy will be updated.
        </p>
      </>
    ),
  },
  {
    id: "changes-cookies",
    index: "06",
    title: "Changes to this policy",
    content: (
      <>
        <p>
          We may update this Cookies Policy to reflect changes in the cookies we
          use or applicable law. The &ldquo;Last updated&rdquo; date at the top
          reflects the current version.
        </p>
      </>
    ),
  },
  {
    id: "contact-cookies",
    index: "07",
    title: "Contact",
    content: (
      <>
        <p>Questions about cookies or this policy?</p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@xlassicstudio.com">hello@xlassicstudio.com</a>
          </li>
          <li>
            <strong>Postal:</strong> [Your Street Address], Gaborone, Botswana
          </li>
        </ul>
      </>
    ),
  },
];

export default function CookiesPage() {
  return (
    <>
      <MobileMenu />
      <DesktopNav />
      <LegalLayout
        label="Cookies"
        title="Cookies policy"
        updated="18 September 2026"
        intro="How XlassicStudio uses cookies and similar technologies. Short version: we barely use any, and none of them track you across other sites."
        sections={sections}
      />
    </>
  );
}