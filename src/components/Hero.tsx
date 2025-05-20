
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  imgUrl?: string;
  imgAlt?: string;
  overlay?: boolean;
}

const Hero = ({
  title = 'Quality Electrical Services You Can Trust',
  subtitle = 'Licensed professionals serving Brisbane with safe, reliable electrical solutions for homes and businesses.',
  showCTA = true,
  imgUrl = 'https://images.unsplash.com/photo-1621894147887-41227f9d0847?q=80&w=2070&auto=format&fit=crop',
  imgAlt = 'Electrician working on electrical panel',
  overlay = true
}: HeroProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgUrl} 
          alt={imgAlt}
          className="w-full h-full object-cover"
        />
        {overlay && <div className="absolute inset-0 bg-black opacity-50"></div>}
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            {title}
          </h1>
          <p className="text-white text-lg md:text-xl mb-6 md:mb-8">
            {subtitle}
          </p>
          
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="btn btn-primary btn-lg"
              >
                Get a Free Quote
              </Link>
              <Link 
                to="/services" 
                className="btn bg-white text-ardrey hover:bg-gray-100 btn-lg inline-flex items-center"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
