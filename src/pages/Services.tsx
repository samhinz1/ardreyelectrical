
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { Phone, Zap, ShieldCheck, LightbulbIcon, Wrench, Home, Building, Activity, Clock, Settings } from "lucide-react";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="Our Electrical Services"
        subtitle="Comprehensive electrical solutions for residential and commercial properties in Brisbane."
        imgUrl="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
      />
      
      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Comprehensive Electrical Solutions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At Ardrey Electrical, we offer a wide range of electrical services to meet all your needs, from small repairs to complete installations.
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Residential Services */}
            <div>
              <h3 className="section-subtitle flex items-center">
                <Home className="mr-2 text-ardrey" /> 
                Residential Electrical Services
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">New Home Wiring</h4>
                  <p className="text-gray-600 mb-4">
                    Complete electrical wiring for new home construction, ensuring safety, efficiency, and code compliance.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                    alt="New Home Wiring"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Home Renovations</h4>
                  <p className="text-gray-600 mb-4">
                    Upgrading existing electrical systems during home remodeling projects to meet modern standards.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
                    alt="Home Renovations"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Lighting Installation</h4>
                  <p className="text-gray-600 mb-4">
                    Expert installation of all types of lighting fixtures, including energy-efficient options.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2070&auto=format&fit=crop" 
                    alt="Lighting Installation"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Outlet & Switch Installation</h4>
                  <p className="text-gray-600 mb-4">
                    Adding new outlets, switches, and dedicated circuits for enhanced convenience and safety.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2070&auto=format&fit=crop" 
                    alt="Outlet Installation"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Ceiling Fan Installation</h4>
                  <p className="text-gray-600 mb-4">
                    Professional mounting and wiring of ceiling fans for improved comfort and energy efficiency.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1613153476236-958a515465c2?q=80&w=2070&auto=format&fit=crop" 
                    alt="Ceiling Fan Installation"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Safety Inspections</h4>
                  <p className="text-gray-600 mb-4">
                    Comprehensive electrical safety audits to identify and address potential hazards in your home.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
                    alt="Safety Inspections"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Commercial Services */}
            <div>
              <h3 className="section-subtitle flex items-center">
                <Building className="mr-2 text-ardrey" /> 
                Commercial Electrical Services
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Commercial Wiring</h4>
                  <p className="text-gray-600 mb-4">
                    Complete electrical wiring for offices, retail spaces, and other commercial properties.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop" 
                    alt="Commercial Wiring"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Lighting Systems</h4>
                  <p className="text-gray-600 mb-4">
                    Energy-efficient lighting solutions for commercial spaces to reduce costs and improve ambiance.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1534190239940-9ba8944ea261?q=80&w=2089&auto=format&fit=crop" 
                    alt="Commercial Lighting"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Electrical Maintenance</h4>
                  <p className="text-gray-600 mb-4">
                    Regular maintenance programs to keep your commercial electrical systems running efficiently.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" 
                    alt="Electrical Maintenance"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Data & Network Cabling</h4>
                  <p className="text-gray-600 mb-4">
                    Structured cabling solutions for voice and data networks in commercial environments.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=2070&auto=format&fit=crop" 
                    alt="Network Cabling"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Emergency Lighting</h4>
                  <p className="text-gray-600 mb-4">
                    Installation and maintenance of emergency lighting systems to ensure workplace safety.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop" 
                    alt="Emergency Lighting"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Commercial Inspections</h4>
                  <p className="text-gray-600 mb-4">
                    Comprehensive electrical safety and compliance inspections for commercial properties.
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="Commercial Inspections"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Specialized Services */}
            <div>
              <h3 className="section-subtitle flex items-center">
                <Settings className="mr-2 text-ardrey" /> 
                Specialized Electrical Services
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Emergency Repairs</h4>
                  <p className="text-gray-600 mb-4">
                    24/7 emergency electrical repair services for residential and commercial properties.
                  </p>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-ardrey" />
                    <span className="text-ardrey font-medium">Available 24/7</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Surge Protection</h4>
                  <p className="text-gray-600 mb-4">
                    Whole-house surge protection systems to safeguard your electronics and appliances.
                  </p>
                  <div className="flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-2 text-ardrey" />
                    <span className="text-ardrey font-medium">Protect Your Devices</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Smart Home Integration</h4>
                  <p className="text-gray-600 mb-4">
                    Installation and setup of smart home electrical systems and devices.
                  </p>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-ardrey" />
                    <span className="text-ardrey font-medium">Modern Solutions</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Energy Efficiency Audits</h4>
                  <p className="text-gray-600 mb-4">
                    Comprehensive assessments to identify opportunities for electrical energy savings.
                  </p>
                  <div className="flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-ardrey" />
                    <span className="text-ardrey font-medium">Save on Energy Bills</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Electrical Troubleshooting</h4>
                  <p className="text-gray-600 mb-4">
                    Expert diagnosis and resolution of complex electrical problems and failures.
                  </p>
                  <div className="flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-ardrey" />
                    <span className="text-ardrey font-medium">Fix It Right</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-2">Outdoor Lighting</h4>
                  <p className="text-gray-600 mb-4">
                    Design and installation of landscape lighting, security lighting, and more.
                  </p>
                  <div className="flex items-center">
                    <LightbulbIcon className="w-5 h-5 mr-2 text-ardrey" />
                    <span className="text-ardrey font-medium">Enhance Your Property</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Service Process</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We follow a systematic approach to ensure quality and satisfaction with every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
              <p className="text-gray-600">
                We discuss your needs, answer questions, and provide initial guidance on your electrical project.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">On-Site Assessment</h3>
              <p className="text-gray-600">
                Our electricians evaluate your property and electrical systems to determine the best approach.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Detailed Quote</h3>
              <p className="text-gray-600">
                We provide a comprehensive quote outlining the scope of work, materials, timeline, and costs.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Execution</h3>
              <p className="text-gray-600">
                Our team completes the work with attention to detail, cleanliness, and adherence to all safety codes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-ardrey">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Professional Electrical Service?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Whether you need electrical repairs, installations, or maintenance, our team is ready to provide expert service. Contact us today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn bg-white text-ardrey hover:bg-gray-100 btn-lg"
            >
              Request a Quote
            </Link>
            <a 
              href="tel:0712345678" 
              className="btn bg-ardrey-accent text-white hover:bg-ardrey-light btn-lg inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" /> 
              Call (07) 1234 5678
            </a>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Find answers to common questions about our electrical services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Do you offer emergency electrical services?</h4>
              <p className="text-gray-600">
                Yes, we provide 24/7 emergency electrical services for both residential and commercial clients. If you're experiencing an electrical emergency, please call our emergency line immediately.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Are your electricians licensed and insured?</h4>
              <p className="text-gray-600">
                Absolutely. All our electricians are fully licensed, insured, and certified to perform electrical work in Brisbane and surrounding areas. We adhere to all local codes and regulations.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">How do you price your electrical services?</h4>
              <p className="text-gray-600">
                We provide transparent, detailed quotes based on the scope of work, materials required, and estimated time. We don't have hidden fees, and we're happy to explain all costs before beginning any work.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">Do you provide warranties on your work?</h4>
              <p className="text-gray-600">
                Yes, we stand behind our work with a comprehensive warranty. Most of our electrical work comes with a 12-month warranty on labor, and manufacturer warranties apply to all parts and equipment we install.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-2">What areas do you serve?</h4>
              <p className="text-gray-600">
                We provide electrical services throughout Brisbane and surrounding suburbs within a 50km radius. Please contact us to confirm if we service your specific location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
