import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const phone = "+919876543210";
  const whatsapp = "919876543210";

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Page Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-500 mt-4">
          We'd love to hear from you. Send us a message and we'll respond soon.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-8">

          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <MapPin className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-500">
                Karimpur, Nadia, West Bengal, India
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            {/* <div className="bg-blue-100 p-3 rounded-lg">
              <Phone className="text-blue-600" />
            </div> */}

            <div>
              {/* <h3 className="font-semibold text-lg">Phone</h3> */}

              <div className="flex gap-3 mt-2">

                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  <Phone size={16} />
                  Call
                </a>

                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

              </div>

            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Mail className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-500">
                support@shopsphere.com
              </p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-xl p-8 space-y-6">

          <div>
            <label className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

      {/* Google Map */}
      <div className="mt-16">

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Our Location
        </h2>

        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=karimpur%20west%20bengal&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />

        </div>

      </div>

    </div>
  );
};

export default Contact;