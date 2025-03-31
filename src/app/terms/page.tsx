import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Terms of Service
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
                  Welcome to Brandium (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) govern your use of our website located at www.brandium.cc and our web application at app.brandium.cc (together or individually &quot;Service&quot;) operated by Brandium.
                </p>
                <p className="text-gray-500">
                  By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Communications</h2>
                <p className="text-gray-500">
                  By creating an account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. Subscriptions</h2>
                <p className="text-gray-500">
                  Some parts of the Service are billed on a subscription basis (&quot;Subscription(s)&quot;). You will be billed in advance on a recurring and periodic basis (&quot;Billing Cycle&quot;). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
                </p>
                <p className="text-gray-500">
                  At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Brandium cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting Brandium customer support team.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Free Trial</h2>
                <p className="text-gray-500">
                  Brandium may, at its sole discretion, offer a Subscription with a free trial for a limited period of time (&quot;Free Trial&quot;).
                </p>
                <p className="text-gray-500">
                  You may be required to enter your billing information in order to sign up for the Free Trial. If you do enter your billing information when signing up for the Free Trial, you will not be charged by Brandium until the Free Trial has expired. On the last day of the Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable subscription fee for the type of Subscription you have selected.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Content</h2>
                <p className="text-gray-500">
                  Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (&quot;Content&quot;). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
                </p>
                <p className="text-gray-500">
                  By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Accounts</h2>
                <p className="text-gray-500">
                  When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
                </p>
                <p className="text-gray-500">
                  You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Intellectual Property</h2>
                <p className="text-gray-500">
                  The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Brandium and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Brandium.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Links To Other Web Sites</h2>
                <p className="text-gray-500">
                  Our Service may contain links to third party web sites or services that are not owned or controlled by Brandium.
                </p>
                <p className="text-gray-500">
                  Brandium has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">9. Termination</h2>
                <p className="text-gray-500">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
                <p className="text-gray-500">
                  If you wish to terminate your account, you may simply discontinue using the Service. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">10. Changes</h2>
                <p className="text-gray-500">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
                <p className="text-gray-500">
                  By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">11. Contact Us</h2>
                <p className="text-gray-500">
                  If you have any questions about these Terms, please contact us at legal@brandium.cc or through our contact page.
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