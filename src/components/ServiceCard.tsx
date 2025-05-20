
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imgUrl?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  imgUrl
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {imgUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imgUrl} 
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon && <div className="text-ardrey mr-3">{icon}</div>}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <Link 
          to="/contact"
          className="inline-flex items-center text-ardrey hover:text-ardrey-accent font-medium"
        >
          Request Service
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
