import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="relative min-h-[60vh] overflow-hidden bg-black">
        {/* 3D Animated Background Layer */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full animate-float" />
            <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-white/15 animate-float-reverse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-white/10 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[60vh] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-light tracking-widest text-white/80 uppercase">
                Products
              </p>
              <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
                Campus
                <span className="block text-3xl md:text-5xl mt-2 font-extralight">Essentials</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Browse practical items for class, study, commute, and everyday campus routines.
              </p>
            </div>

            <div className="flex justify-center">
              <a 
                href="/"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden border border-white/20 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                <span className="relative z-10 text-sm font-medium tracking-wide">Back Home</span>
                <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-light tracking-widest text-gray-400 uppercase">
              Collection
            </p>
            <h2 className="mt-3 text-3xl font-light text-gray-900">Featured Products</h2>
          </div>

          <ProductList products={products} />
        </div>
      </section>
    </div>
  );
}

export default ProductListPage;

<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @keyframes float-reverse {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(-180deg); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-float-reverse {
    animation: float-reverse 8s ease-in-out infinite;
  }
`}</style>
