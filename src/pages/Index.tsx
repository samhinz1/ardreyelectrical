
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { Phone, Zap, ShieldCheck, Clock, LightbulbIcon, Wrench } from "lucide-react";

const Index = () => {
  // Sample services
  const services = [
    {
      title: "Residential Electrical",
      description: "Complete electrical solutions for your home including wiring, lighting, repairs, and safety inspections.",
      icon: <Zap size={24} />,
      imgUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Commercial Electrical",
      description: "Professional electrical services for offices, retail spaces, and commercial properties.",
      icon: <ShieldCheck size={24} />,
      imgUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Lighting Installation",
      description: "Expert installation of all types of lighting fixtures, including energy-efficient options.",
      icon: <LightbulbIcon size={24} />,
      imgUrl: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency electrical repair services to keep your home or business safe.",
      icon: <Wrench size={24} />,
      imgUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
    }
  ];
  
  // Sample testimonials
  const testimonials = [
    {
      content: "Ardrey Electrical provided exceptional service when we needed our home rewired. The team was professional, efficient, and left our home spotless after completing the job.",
      author: "Sarah Johnson",
      location: "Brisbane"
    },
    {
      content: "I've used Ardrey for several projects in my office building. Their work is consistently high-quality, on-time, and reasonably priced. I wouldn't call anyone else.",
      author: "Michael Stevens",
      location: "Brisbane"
    },
    {
      content: "After experiencing electrical problems late at night, Ardrey's emergency service was a lifesaver. Quick response, professional diagnosis, and fixed the issue right away.",
      author: "Rebecca Taylor",
      location: "Brisbane"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Services Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="section-title">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer a comprehensive range of electrical services for both residential and commercial properties.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                imgUrl={service.imgUrl}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn btn-primary btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Choose Ardrey Electrical?</h2>
              
              <div className="space-y-6 mt-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">
                      Our team consists of fully licensed electricians with proper insurance coverage, guaranteeing safe and compliant work.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center">
                      <LightbulbIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experienced Professionals</h3>
                    <p className="text-gray-600">
                      With over 10 years of experience, our electricians handle residential and commercial projects with expertise and attention to detail.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Prompt & Reliable Service</h3>
                    <p className="text-gray-600">
                      We respect your time and schedule, arriving promptly and completing projects efficiently without sacrificing quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-ardrey flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
                    <p className="text-gray-600">
                      We take pride in our quality workmanship and use only the best materials and equipment for every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
                alt="Electrician working"
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our electrical services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" 
            alt="Electrical service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ardrey-dark opacity-80"></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote on your electrical project. Our team is ready to provide the service you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-ardrey hover:bg-gray-100 btn-lg">
              Request a Quote
            </Link>
            
            <a href="tel:0712345678" className="btn bg-ardrey-accent text-white hover:bg-ardrey-light btn-lg inline-flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call (07) 1234 5678
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                Have questions or ready to schedule service? Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </div>
            
            <div className="lg:mt-16">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                {/* Google Map would go here */}
                <div className="w-full h-64 bg-gray-200 rounded-lg mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.812514261929!2d153.0223626!3d-27.4697707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a045cf620bb%3A0x502a35af3de1950!2sBrisbane%20City%20QLD%204000!5e0!3m2!1sen!2sau!4v1651141360356!5m2!1sen!2sau" 
                    className="w-full h-full rounded-lg"
                    style={{border: 0}}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location"
                  ></iframe>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-ardrey flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-gray-600">1234 Main Street<br />Brisbane, QLD 4000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-ardrey flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">(07) 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 text-ardrey flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">info@ardreyelectrical.com.au</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 text-ardrey flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 7am - 5pm<br />
                        Saturday: 8am - 2pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
