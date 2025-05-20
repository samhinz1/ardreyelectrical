
import Hero from "@/components/Hero";
import { Check, User, Zap, Award, Wrench, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="About Ardrey Electrical"
        subtitle="Learn about our team, our history, and our commitment to providing top-quality electrical services."
        imgUrl="https://images.unsplash.com/photo-1621894147952-f39268bc6020?q=80&w=2073&auto=format&fit=crop"
      />
      
      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Ardrey Electrical was founded in 2010 with a simple mission: to provide reliable, high-quality electrical services to homes and businesses in Brisbane and surrounding areas.
              </p>
              <p className="text-gray-600 mb-4">
                As a locally owned and operated company, we understand the unique electrical needs of our community. From the beginning, we've been committed to delivering exceptional workmanship, fair pricing, and outstanding customer service.
              </p>
              <p className="text-gray-600">
                Over the years, we've grown from a small team to a trusted electrical service provider with a reputation for excellence. Despite our growth, we've maintained our core values: integrity, quality, and dedication to customer satisfaction.
              </p>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559529644-9d0e98e78ce4?q=80&w=2070&auto=format&fit=crop" 
                alt="Electrician working on electrical panel"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our experienced electricians are licensed, insured, and dedicated to providing exceptional electrical services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-ardrey flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">John Smith</h3>
                <p className="text-ardrey text-center mb-4">Master Electrician</p>
                <p className="text-gray-600 text-center">
                  With over 15 years of experience, John leads our team with expertise in all aspects of electrical work, specializing in commercial installations.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-ardrey flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Michael Brown</h3>
                <p className="text-ardrey text-center mb-4">Licensed Electrician</p>
                <p className="text-gray-600 text-center">
                  Michael has been with us for 8 years and excels in residential electrical work, smart home installations, and lighting design.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-ardrey flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Sarah Johnson</h3>
                <p className="text-ardrey text-center mb-4">Electrical Technician</p>
                <p className="text-gray-600 text-center">
                  Sarah specializes in electrical troubleshooting, repairs, and safety inspections with attention to detail that ensures every job is done right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At Ardrey Electrical, we are guided by these core values in everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Workmanship</h3>
              <p className="text-gray-600">
                We take pride in the quality of our work and never cut corners. Every project is completed to the highest standards of safety and craftsmanship.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-600">
                When we make a commitment, we keep it. Our clients can count on us to show up on time, communicate clearly, and complete projects as promised.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay current with the latest electrical technologies and techniques to offer our clients the most efficient and effective electrical solutions.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our business dealings, providing fair pricing and honest assessments of our clients' needs.
              </p>
            </div>
            
            {/* Value 5 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients are our priority. We listen to their needs, address their concerns, and go the extra mile to ensure their complete satisfaction.
              </p>
            </div>
            
            {/* Value 6 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safety</h3>
              <p className="text-gray-600">
                We prioritize safety in every aspect of our work, protecting our clients, their property, and our team with strict safety protocols.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Certifications</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We maintain the highest standards of quality and safety through continuous education and certification.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {/* Certification 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
                <Award className="w-12 h-12 text-ardrey" />
              </div>
              <p className="font-medium text-center">Licensed Electrical Contractor</p>
            </div>
            
            {/* Certification 2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
                <ShieldCheck className="w-12 h-12 text-ardrey" />
              </div>
              <p className="font-medium text-center">Safety Certified</p>
            </div>
            
            {/* Certification 3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
                <Zap className="w-12 h-12 text-ardrey" />
              </div>
              <p className="font-medium text-center">Energy Efficiency Specialist</p>
            </div>
            
            {/* Certification 4 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-ardrey" />
              </div>
              <p className="font-medium text-center">Master Electrician</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-ardrey">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your electrical needs or to schedule a service appointment.
          </p>
          <Link to="/contact" className="btn bg-white text-ardrey hover:bg-gray-100 btn-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
