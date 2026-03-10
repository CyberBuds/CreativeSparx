
export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="bg-card shadow-soft">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-h1 text-transparent bg-clip-text bg-primary-gradient">
            Privacy Policy
          </h1>
          <p className="text-body text-text-secondary mt-4 max-w-2xl mx-auto">
            Last updated: July 20, 2024
          </p>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 prose dark:prose-invert max-w-4xl">
          <p className="text-lg text-text-secondary mb-12">
            Your privacy is important to us. It is CreativeSparx&apos;s policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
          </p>

          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">1. Information We Collect</h2>
              <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">2. How We Use Your Information</h2>
              <p>We use the information we collect or receive to provide you with your requested service. We only retain collected information for as long as necessary to fulfill this purpose.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">3. Data Storage and Security</h2>
              <p>What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification. We are committed to ensuring that your information is secure.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">4. Sharing Your Information</h2>
              <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law or with your explicit consent.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">5. External Links</h2>
              <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">6. Your Rights</h2>
              <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">7. Contact Us</h2>
              <p>If you have any questions about how we handle user data and personal information, feel free to contact us at <a href="mailto:privacy@creativesparx.io" className="text-primary hover:underline">privacy@creativesparx.io</a>.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
