import totebag from '../assets/img/totebag.jpg';
import bundle from '../assets/img/bundle.jpg';
import tumbler from '../assets/img/tumbler.png';
import lamp from '../assets/img/lamp.jpg';
import hoodie from '../assets/img/hoodie.jpg';
import deskorganizer from '../assets/img/deskorganizer.jpg';
import lanyardnu from '../assets/img/lanyardnu.jpg';
import kitkat from '../assets/img/kitkat.png';

const ProductCard = ({ product, index }) => {
  const isCampusToteBag = product.title === "Campus Tote Bag";
  const isDailyNotesPack = product.title === "Daily Notes Pack";
  const isStainlessTumbler = product.title === "Stainless Tumbler";
  const isWirelessStudyLamp = product.title === "Wireless Study Lamp";
  const isHoodieJacket = product.title === "Hoodie Jacket";
  const isDeskOrganizerKit = product.title === "Desk Organizer Kit";
  const isIDLanyardSet = product.title === "ID Lanyard Set";
  const isExamWeekCarePack = product.title === "Exam Week Care Pack";
  
  return (
    <article className="group bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        {isCampusToteBag ? (
          <img 
            src={totebag} 
            alt="Campus Tote Bag" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : isDailyNotesPack ? (
          <img 
            src={bundle} 
            alt="Daily Notes Pack" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : isStainlessTumbler ? (
          <img 
            src={tumbler} 
            alt="Stainless Tumbler" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : isWirelessStudyLamp ? (
          <img 
            src={lamp} 
            alt="Wireless Study Lamp" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : isHoodieJacket ? (
          <img 
            src={hoodie} 
            alt="Hoodie Jacket" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : isDeskOrganizerKit ? (
          <img 
            src={deskorganizer} 
            alt="Desk Organizer Kit" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : isIDLanyardSet ? (
          <img 
            src={lanyardnu} 
            alt="ID Lanyard Set" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : isExamWeekCarePack ? (
          <img 
            src={kitkat} 
            alt="Exam Week Care Pack" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 border border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-xs font-light text-gray-500 uppercase tracking-wide">Item</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-light tracking-widest text-gray-400 uppercase">
            {product.category} {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="text-xl font-light text-gray-900 leading-tight">
            {product.title === "ID Lanyard Set" ? "ID Lanyard" : product.title}
          </h3>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-lg font-light text-gray-900">{product.price}</p>
        </div>
        
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {product.content[0].substring(0, 120)}...
        </p>
        
        <a 
          href={`/products/${product.name}`}
          className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
        >
          <span>View Product</span>
          <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">.</span>
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
