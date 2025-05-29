
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ocean Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-900 via-ocean-800 to-deep-950" />
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-900/90 via-deep-900/40 to-deep-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-playfair font-bold text-white mb-6">
              Contact <span className="ocean-text-gradient">Us</span>
            </h1>
            <p className="text-xl text-blue-200 font-inter max-w-3xl mx-auto mb-12">
              Have questions about our ocean-themed products? We'd love to hear from you.
            </p>
            
            <div className="glass-card p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl font-playfair font-semibold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-blue-200 font-inter mb-6">
                Our contact form is coming soon. For now, you can reach us at:
              </p>
              <div className="space-y-3 text-blue-200 font-inter">
                <p>📧 hello@orcas-store.com</p>
                <p>📞 1-800-ORCAS-1</p>
                <p>🏢 123 Ocean Drive, Marine City, MC 12345</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
