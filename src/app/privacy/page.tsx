import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Privacy Policy
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Last updated: March 31, 2025
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p className="text-gray-500">
                  Brandium (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.brandium.cc and use our application at app.brandium.cc (collectively, the &quot;Service&quot;).
                </p>
                <p className="text-gray-500">
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Service. We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mt-6">Personal Data</h3>
                <p className="text-gray-500">
                  While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, but is not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6">Usage Data</h3>
                <p className="text-gray-500">
                  We may also collect information about how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>

                <h3 className="text-xl font-semibold mt-6">Tracking & Cookies Data</h3>
                <p className="text-gray-500">
                  We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
                </p>
                <p className="text-gray-500">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. Use of Data</h2>
                <p className="text-gray-500">
                  Brandium uses the collected data for various purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500">
                  <li>To provide and maintain the Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                  <li>To provide customer care and support</li>
                  <li>To provide analysis or valuable information so that we can improve the Service</li>
                  <li>To monitor the usage of the Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Transfer of Data</h2>
                <p className="text-gray-500">
                  Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.
                </p>
                <p className="text-gray-500">
                  If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Disclosure of Data</h2>
                <h3 className="text-xl font-semibold mt-6">Legal Requirements</h3>
                <p className="text-gray-500">
                  Brandium may disclose your Personal Data in the good faith belief that such action is necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500">
                  <li>To comply with a legal obligation</li>
                  <li>To protect and defend the rights or property of Brandium</li>
                  <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                  <li>To protect the personal safety of users of the Service or the public</li>
                  <li>To protect against legal liability</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Security of Data</h2>
                <p className="text-gray-500">
                  The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Service Providers</h2>
                <p className="text-gray-500">
                  We may employ third party companies and individuals to facilitate our Service (&quot;Service Providers&quot;), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Links to Other Sites</h2>
                <p className="text-gray-500">
                  Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">9. Children&apos;s Privacy</h2>
                <p className="text-gray-500">
                  Our Service does not address anyone under the age of 18 (&quot;Children&quot;). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-500">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">11. Contact Us</h2>
                <p className="text-gray-500">
                  If you have any questions about this Privacy Policy, please contact us at privacy@brandium.cc or through our contact page.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}