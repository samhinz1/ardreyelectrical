
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Contact Us"
        subtitle="Get in touch with our team for all your electrical needs or to request a free quote."
        imgUrl="https://images.unsplash.com/photo-1553708881-112abc53fe54?q=80&w=2070&auto=format&fit=crop"
        showCTA={false}
      />
      
      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question about our services or would like to request a quote? Fill out the form and we'll get back to you as soon as possible. You can also reach us directly using the contact information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">Main: (07) 1234 5678</p>
                    <p className="text-gray-600">Emergency: 0400 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">General: info@ardreyelectrical.com.au</p>
                    <p className="text-gray-600">Quotes: quotes@ardreyelectrical.com.au</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Location</h3>
                    <p className="text-gray-600 mb-1">1234 Main Street</p>
                    <p className="text-gray-600">Brisbane, QLD 4000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Hours</h3>
                    <p className="text-gray-600 mb-1">Monday - Friday: 7am - 5pm</p>
                    <p className="text-gray-600 mb-1">Saturday: 8am - 2pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                    <p className="text-ardrey font-medium mt-2">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Map */}
      <section className="bg-white pb-12 md:pb-20">
        <div className="container">
          <div className="border rounded-xl overflow-hidden shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.812514261929!2d153.0223626!3d-27.4697707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a045cf620bb%3A0x502a35af3de1950!2sBrisbane%20City%20QLD%204000!5e0!3m2!1sen!2sau!4v1651141360356!5m2!1sen!2sau" 
              width="100%" 
              height="450" 
              style={{border: 0}}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Areas We Service</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide electrical services throughout Brisbane and the surrounding suburbs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">Brisbane CBD</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">South Brisbane</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">West End</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">New Farm</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">Fortitude Valley</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">Paddington</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">Milton</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">Newstead</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">Bulimba</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">Hamilton</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">Ascot</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="font-medium">And More...</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Not sure if we service your area? <a href="tel:0712345678" className="text-ardrey font-medium">Call us</a> to find out!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
