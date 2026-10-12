import type { Metadata } from "next";
import { DesktopNav, MobileMenu } from "@/components/layout/navbar";
import { LegalLayout, type LegalSection } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Legal Notice — XlassicStudio",
  description:
    "Legal information, publisher details, and applicable law for XlassicStudio.",
};

const sections: LegalSection[] = [
  {
    id: "publisher",
    index: "01",
    title: "Site publisher",
    content: (
      <>
        <p>
          This website, <strong>xlassicstudio.com</strong> (the &ldquo;Site&rdquo;), is
          owned and operated by:
        </p>
        <ul>
          <li>
            <strong>XlassicStudio</strong> — a sole proprietorship registered in the
            Republic of Botswana
          </li>
          <li>
            <strong>Registered address:</strong> [Your Street Address], Gaborone,
            Botswana
          </li>
          <li>
            <strong>Contact email:</strong>{" "}
            <a href="mailto:hello@xlassicstudio.com">hello@xlassicstudio.com</a>
          </li>
          <li>
            <strong>Contact phone:</strong> [Your phone number]
          </li>
          <li>
            <strong>Tax Identification Number (TIN):</strong> [Your TIN]
          </li>
          <li>
            <strong>Value Added Tax (VAT) registration:</strong> [VAT number if
            registered — VAT is currently 14% in Botswana]
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "hosting",
    index: "02",
    title: "Hosting & infrastructure",
    content: (
      <>
        <p>
          The Site is hosted by <strong>Vercel Inc.</strong> (440 N Barranca Ave
          #4133, Covina, CA 91723, United States). Domain registration and DNS
          services are provided by [your registrar].
        </p>
        <p>
          Payments for digital products are processed by <strong>Stripe, Inc.</strong>{" "}
          and <strong>Lemon Squeezy</strong> (as applicable). Form submissions are
          handled by <strong>FormSubmit</strong>. Analytics, if enabled, are provided
          by <strong>Vercel Analytics</strong>.
        </p>
      </>
    ),
  },
  {
    id: "ip",
    index: "03",
    title: "Intellectual property",
    content: (
      <>
        <p>
          All content on this Site — including but not limited to text, code,
          design, layout, graphics, logos, and the &ldquo;XlassicStudio&rdquo; name
          and mark — is the property of XlassicStudio and is protected under the{" "}
          <strong>Copyright and Neighbouring Rights Act (Cap. 68:02)</strong> of
          Botswana and applicable international treaties.
        </p>
        <p>
          <strong>Digital products</strong> (email templates, premade websites)
          sold through the Store are licensed, not sold. Upon purchase, you receive
          a non-exclusive, non-transferable licence to use the product as described
          on the product page. You may not resell, redistribute, or claim authorship
          of the underlying source code.
        </p>
        <p>
          Client work — including commissioned websites, brands, and designs — is
          governed by the individual contract agreed with each client. Unless
          otherwise stated, ownership of final deliverables transfers to the client
          upon full payment.
        </p>
      </>
    ),
  },
  {
    id: "use",
    index: "04",
    title: "Permitted use of the Site",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the Site in any way that violates the{" "}
            <strong>Cybercrime and Computer Related Crimes Act, 2018</strong> of
            Botswana or any applicable law;
          </li>
          <li>
            Attempt to gain unauthorised access to any part of the Site, its
            servers, or any connected systems;
          </li>
          <li>
            Scrape, mirror, or replicate the Site or its contents for commercial
            purposes without written permission;
          </li>
          <li>
            Transmit malware, spam, or any other harmful code through the Site;
          </li>
          <li>
            Impersonate XlassicStudio, its employees, or any other person.
          </li>
        </ul>
        <p>
          We reserve the right to suspend or refuse service to any user who breaches
          these terms, and to report criminal activity to the Botswana Police
          Service or other relevant authorities.
        </p>
      </>
    ),
  },
  {
    id: "consumer",
    index: "05",
    title: "Consumer rights & digital product sales",
    content: (
      <>
        <p>
          Our Store operates in accordance with the{" "}
          <strong>Consumer Protection Act, 2018</strong> of Botswana.
        </p>
        <p>
          <strong>Right of withdrawal:</strong> Under Section 15 of the Consumer
          Protection Act, consumers normally have the right to cancel a distance
          contract within 14 days. However, this right does not apply to{" "}
          <strong>digital content delivered immediately</strong> (such as email
          templates and premade website source code) once download has begun — in
          accordance with standard exemptions for digital goods.
        </p>
        <p>
          If you have purchased a digital product and it is materially different
          from its description, or fails to function as advertised, please contact
          us within <strong>14 days</strong> at{" "}
          <a href="mailto:hello@xlassicstudio.com">hello@xlassicstudio.com</a> for a
          refund or remedy.
        </p>
        <p>
          <strong>EU and UK customers:</strong> Where EU or UK consumer law provides
          additional protections, we honour those rights. You may contact your
          local consumer protection authority or, in Botswana, the Competition and
          Consumer Authority (CCA).
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    index: "06",
    title: "Pricing, taxes & currency",
    content: (
      <>
        <p>
          All prices are displayed in <strong>US Dollars (USD)</strong> unless
          otherwise indicated. Prices are exclusive of any applicable taxes.
        </p>
        <p>
          <strong>Botswana VAT:</strong> If you are a Botswana resident and we are
          registered for VAT, 14% VAT will be added at checkout in accordance with
          the Value Added Tax Act (Cap. 50:03).
        </p>
        <p>
          <strong>International customers:</strong> Prices do not include your
          local import duties, sales tax, or VAT. Any such charges are your
          responsibility. Stripe and Lemon Squeezy may handle tax collection and
          remittance on our behalf for certain jurisdictions.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    index: "07",
    title: "Limitation of liability",
    content: (
      <>
        <p>
          The Site and its content are provided <strong>&ldquo;as is&rdquo;</strong>{" "}
          without warranties of any kind, express or implied. While we take care to
          ensure information is accurate, we make no guarantees about completeness
          or fitness for a particular purpose.
        </p>
        <p>
          To the fullest extent permitted by Botswana law, XlassicStudio shall not
          be liable for any indirect, incidental, or consequential damages arising
          from your use of the Site or its products. Where liability cannot be
          excluded, our total liability is limited to the amount you paid for the
          relevant product or service.
        </p>
        <p>Nothing in this notice limits rights you have under mandatory consumer law.</p>
      </>
    ),
  },
  {
    id: "links",
    index: "08",
    title: "External links",
    content: (
      <>
        <p>
          The Site may contain links to third-party websites. We are not
          responsible for the content, privacy practices, or availability of those
          sites. Links do not imply endorsement.
        </p>
      </>
    ),
  },
  {
    id: "law",
    index: "09",
    title: "Governing law & jurisdiction",
    content: (
      <>
        <p>
          This Legal Notice and any dispute or claim arising out of or in
          connection with the Site shall be governed by the laws of the{" "}
          <strong>Republic of Botswana</strong>.
        </p>
        <p>
          The courts of Botswana shall have exclusive jurisdiction, save that —
          where mandatory consumer protection laws in your country of residence
          provide otherwise — you may also bring proceedings in your local courts.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    index: "10",
    title: "Changes to this notice",
    content: (
      <>
        <p>
          We may update this Legal Notice from time to time to reflect changes in
          our practices or applicable law. The &ldquo;Last updated&rdquo; date at
          the top of this page indicates when it was last revised. Continued use of
          the Site after changes constitutes acceptance.
        </p>
      </>
    ),
  },
  {
    id: "contact-legal",
    index: "11",
    title: "Contact",
    content: (
      <>
        <p>For any legal inquiries:</p>
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

export default function LegalPage() {
  return (
    <>
      <MobileMenu />
      <DesktopNav />
      <LegalLayout
        label="Legal"
        title="Legal notice"
        updated="18 September 2026"
        intro="Legal information about XlassicStudio, including who we are, how we operate, and the terms that apply to your use of this website and our digital products. This notice is issued under the laws of the Republic of Botswana."
        sections={sections}
      />
    </>
  );
}