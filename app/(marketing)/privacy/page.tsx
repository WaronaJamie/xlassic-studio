import type { Metadata } from "next";
import { DesktopNav, MobileMenu } from "@/components/layout/navbar";
import { LegalLayout, type LegalSection } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — XlassicStudio",
  description:
    "How XlassicStudio collects, uses, and protects your personal data under Botswana's Data Protection Act, 2024.",
};

const sections: LegalSection[] = [
  {
    id: "intro",
    index: "01",
    title: "Introduction",
    content: (
      <>
        <p>
          XlassicStudio (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
          respects your privacy. This Privacy Policy explains how we collect, use,
          store, and protect your personal data when you visit{" "}
          <strong>xlassicstudio.com</strong>, purchase our digital products, or
          contact us.
        </p>
        <p>
          We process personal data in accordance with the{" "}
          <strong>Data Protection Act, 2024 (Act No. 26 of 2024)</strong> of
          Botswana, supervised by the{" "}
          <strong>Information and Data Protection Commission</strong>. Where our
          activities reach individuals in the EU, UK, or other jurisdictions with
          their own data protection laws, we also aim to comply with those laws
          (including the GDPR).
        </p>
        <div className="callout">
          <strong>Data controller:</strong> XlassicStudio, [Your Street Address],
          Gaborone, Botswana. Contact:{" "}
          <a href="mailto:hello@xlassicstudio.com">hello@xlassicstudio.com</a>.
        </div>
      </>
    ),
  },
  {
    id: "collect",
    index: "02",
    title: "What data we collect",
    content: (
      <>
        <p>We only collect what we need to run the studio and serve you well.</p>
        <h3>Data you give us directly</h3>
        <ul>
          <li>
            <strong>Contact & project briefs:</strong> name, email, company name,
            optional website URL, budget range, timeline, service interest, and
            the details you write in a form.
          </li>
          <li>
            <strong>Store purchases:</strong> name, email, billing country, and
            any tax ID you provide. Card details are handled entirely by our
            payment processor — we never see or store card numbers.
          </li>
          <li>
            <strong>Correspondence:</strong> the content of emails, calls, and
            messages you send to us.
          </li>
        </ul>

        <h3>Data collected automatically</h3>
        <ul>
          <li>
            <strong>Log data:</strong> IP address, browser type and version,
            device type, pages visited, referrer, and timestamps — collected by our
            hosting provider (Vercel).
          </li>
          <li>
            <strong>Analytics:</strong> aggregated, anonymised usage statistics
            (no cross-site tracking, no advertising profiles).
          </li>
        </ul>

        <h3>Data from third parties</h3>
        <ul>
          <li>
            <strong>Payment processors</strong> (Stripe, Lemon Squeezy) share
            transaction confirmations and, where relevant, tax residency info.
          </li>
          <li>
            <strong>FormSubmit</strong> forwards the contents of our forms to our
            inbox on your behalf.
          </li>
        </ul>

        <p>
          We do <strong>not</strong> knowingly collect special-category data
          (health, religion, ethnicity, political views, biometric data) and ask
          that you do not send such data to us.
        </p>
      </>
    ),
  },
  {
    id: "basis",
    index: "03",
    title: "Legal basis for processing",
    content: (
      <>
        <p>
          Under the Data Protection Act, 2024 and — for EU/UK visitors — under the
          GDPR, we rely on the following legal bases:
        </p>
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Legal basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Responding to your inquiry or brief</td>
              <td>Performance of a contract / steps prior to entering one</td>
            </tr>
            <tr>
              <td>Delivering purchased digital products</td>
              <td>Performance of a contract</td>
            </tr>
            <tr>
              <td>Sending project-related updates</td>
              <td>Legitimate interest (running the studio)</td>
            </tr>
            <tr>
              <td>Analytics & site security</td>
              <td>Legitimate interest (improving and protecting the Site)</td>
            </tr>
            <tr>
              <td>Compliance with tax & accounting law</td>
              <td>Legal obligation</td>
            </tr>
            <tr>
              <td>Marketing emails (if you opt in)</td>
              <td>Consent — withdrawable at any time</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: "use",
    index: "04",
    title: "How we use your data",
    content: (
      <>
        <ul>
          <li>To reply to your messages and prepare proposals</li>
          <li>To deliver products you have purchased</li>
          <li>To issue invoices and receipts, and to comply with tax law</li>
          <li>To improve the Site, its copy, and its performance</li>
          <li>To detect and prevent fraud, abuse, or security threats</li>
          <li>
            To send occasional studio updates — only if you have explicitly opted
            in
          </li>
        </ul>
        <p>
          We will <strong>never sell</strong> your personal data. We do not use it
          for automated decision-making or profiling that produces legal effects.
        </p>
      </>
    ),
  },
  {
    id: "share",
    index: "05",
    title: "Who we share data with",
    content: (
      <>
        <p>
          We share personal data only with service providers that are necessary to
          operate the Site and the store:
        </p>
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vercel Inc.</td>
              <td>Website hosting & CDN</td>
              <td>United States (global edge)</td>
            </tr>
            <tr>
              <td>Stripe, Inc.</td>
              <td>Payment processing</td>
              <td>United States / Ireland</td>
            </tr>
            <tr>
              <td>Lemon Squeezy</td>
              <td>Merchant of record (digital sales)</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>FormSubmit</td>
              <td>Form delivery</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>Vercel Analytics</td>
              <td>Anonymised site analytics</td>
              <td>United States / global edge</td>
            </tr>
            <tr>
              <td>Google Fonts</td>
              <td>Typeface delivery (self-hosted via Next.js)</td>
              <td>United States (self-hosted, no direct call)</td>
            </tr>
          </tbody>
        </table>
        <p>
          We may also disclose personal data where required by law, court order, or
          a lawful request from the Botswana Police Service, the Information and
          Data Protection Commission, or another competent authority.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    index: "06",
    title: "International transfers",
    content: (
      <>
        <p>
          Many of our service providers are based outside Botswana. When personal
          data leaves Botswana, we rely on:
        </p>
        <ul>
          <li>
            The provider&apos;s own data protection commitments and standard
            contractual clauses (SCCs);
          </li>
          <li>
            Adequacy decisions where they exist (for example, the European
            Commission&apos;s adequacy findings);
          </li>
          <li>
            Your explicit consent where no other mechanism is available — for
            example, when you voluntarily submit a brief that is processed through
            a US-based form service.
          </li>
        </ul>
        <p>
          If you would prefer us to handle your data without any international
          transfer, please contact us before submitting a brief and we will make
          alternative arrangements.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    index: "07",
    title: "How long we keep data",
    content: (
      <>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Retention</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contact form submissions / briefs</td>
              <td>Up to 24 months from last contact</td>
            </tr>
            <tr>
              <td>Client project records</td>
              <td>7 years (accounting & tax law)</td>
            </tr>
            <tr>
              <td>Purchase records & receipts</td>
              <td>7 years (accounting & tax law)</td>
            </tr>
            <tr>
              <td>Newsletter subscribers</td>
              <td>Until you unsubscribe, then deleted within 30 days</td>
            </tr>
            <tr>
              <td>Server logs</td>
              <td>Up to 30 days (Vercel default)</td>
            </tr>
          </tbody>
        </table>
        <p>
          When retention periods end, we securely delete or anonymise the data.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    index: "08",
    title: "Your rights",
    content: (
      <>
        <p>
          Under the Data Protection Act, 2024 — and equivalent laws such as the
          GDPR — you have the following rights:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> request a copy of the personal data we hold
            about you;
          </li>
          <li>
            <strong>Rectification:</strong> ask us to correct inaccurate or
            incomplete data;
          </li>
          <li>
            <strong>Erasure:</strong> ask us to delete your data where there is no
            overriding legal reason for us to keep it;
          </li>
          <li>
            <strong>Restriction:</strong> ask us to pause processing while a
            dispute is resolved;
          </li>
          <li>
            <strong>Portability:</strong> receive your data in a structured,
            machine-readable format;
          </li>
          <li>
            <strong>Objection:</strong> object to processing based on legitimate
            interests;
          </li>
          <li>
            <strong>Withdraw consent:</strong> at any time, where processing is
            based on consent.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <a href="mailto:hello@xlassicstudio.com">hello@xlassicstudio.com</a>. We
          will respond within <strong>30 days</strong>. We may ask for proof of
          identity to protect your data.
        </p>
      </>
    ),
  },
  {
    id: "security",
    index: "09",
    title: "Security",
    content: (
      <>
        <p>
          We take reasonable technical and organisational measures to protect your
          personal data, including:
        </p>
        <ul>
          <li>HTTPS encryption across the entire Site;</li>
          <li>
            Reliance on PCI-DSS compliant payment processors — no card data ever
            touches our servers;
          </li>
          <li>Access controls and two-factor authentication on internal tools;</li>
          <li>
            Encryption at rest and in transit with our hosting and form
            providers.
          </li>
        </ul>
        <p>
          No system is perfect. If we become aware of a personal data breach that
          is likely to result in a risk to your rights, we will notify the
          Information and Data Protection Commission and affected individuals
          without undue delay, in accordance with Section 26 of the Data
          Protection Act, 2024.
        </p>
      </>
    ),
  },
  {
    id: "children",
    index: "10",
    title: "Children",
    content: (
      <>
        <p>
          Our Site and products are not directed at children under 18. We do not
          knowingly collect personal data from children. If you believe a child
          has provided us with personal data, please contact us and we will delete
          it promptly.
        </p>
      </>
    ),
  },
  {
    id: "complaints",
    index: "11",
    title: "Complaints",
    content: (
      <>
        <p>
          If you are unhappy with how we handle your personal data, please contact
          us first at{" "}
          <a href="mailto:hello@xlassicstudio.com">hello@xlassicstudio.com</a> — we
          will try to resolve the issue directly.
        </p>
        <p>You also have the right to lodge a complaint with:</p>
        <ul>
          <li>
            <strong>
              The Information and Data Protection Commission (Botswana)
            </strong>
            <br />
            Email: info@idpc.org.bw
            <br />
            Website: idpc.org.bw
          </li>
          <li>
            <strong>EU/EEA residents:</strong> your local supervisory authority
            (for example, the ICO in the UK, or your national DPA).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "changes-privacy",
    index: "12",
    title: "Changes to this policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy to reflect changes in our practices or
          law. The &ldquo;Last updated&rdquo; date at the top will always reflect
          the current version. Material changes will be highlighted on the Site.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <MobileMenu />
      <DesktopNav />
      <LegalLayout
        label="Privacy"
        title="Privacy policy"
        updated="18 September 2026"
        intro="How we collect, use, and protect your personal data. Written to comply with Botswana's Data Protection Act, 2024, and — where it applies to you — the EU and UK GDPR."
        sections={sections}
      />
    </>
  );
}