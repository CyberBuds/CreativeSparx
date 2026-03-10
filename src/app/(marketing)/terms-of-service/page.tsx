
export default function TermsOfServicePage() {
  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="bg-card shadow-soft">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-h1 text-transparent bg-clip-text bg-primary-gradient">
            Terms of Service
          </h1>
          <p className="text-body text-text-secondary mt-4 max-w-2xl mx-auto">
            Last updated: July 20, 2024
          </p>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 prose dark:prose-invert max-w-4xl">
          <p className="text-lg text-text-secondary mb-12">
            By accessing the website at CreativeSparx, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>

          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">1. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on CreativeSparx&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on CreativeSparx&apos;s website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
              </ul>
              <p className="mt-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by CreativeSparx at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">2. Disclaimer</h2>
              <p>The materials on CreativeSparx&apos;s website are provided on an &apos;as is&apos; basis. CreativeSparx makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              <p className="mt-4">Further, CreativeSparx does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">3. Limitations</h2>
              <p>In no event shall CreativeSparx or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CreativeSparx&apos;s website, even if CreativeSparx or a CreativeSparx authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">4. Accuracy of Materials</h2>
              <p>The materials appearing on CreativeSparx&apos;s website could include technical, typographical, or photographic errors. CreativeSparx does not warrant that any of the materials on its website are accurate, complete or current. CreativeSparx may make changes to the materials contained on its website at any time without notice. However CreativeSparx does not make any commitment to update the materials.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">5. Links</h2>
              <p>CreativeSparx has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CreativeSparx of the site. Use of any such linked website is at the user&apos;s own risk.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">6. Modifications</h2>
              <p>CreativeSparx may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h2 className="text-h2 mt-0">7. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
