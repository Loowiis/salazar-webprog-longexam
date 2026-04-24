import logo from '../../assets/img/nubdexchange_logo.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="relative min-h-screen overflow-hidden bg-black">
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
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center space-y-12">
            <div className="space-y-8">
              <p className="text-sm font-light tracking-widest text-white/80 uppercase">
                About Our Store
              </p>
              <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
                BulldogEx
                <span className="block text-3xl md:text-5xl mt-2 font-extralight">Campus Shop</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                A campus marketplace focused on useful products and simple ordering, designed for students who value both quality and convenience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="relative overflow-hidden rounded-full">
                <img 
                  src={logo} 
                  alt="BulldogEx" 
                  className="h-32 w-32 object-contain transition-transform duration-300 hover:scale-110" 
                />
              </div>
              <div className="text-left space-y-4">
                <p className="text-white/60 text-sm max-w-md">
                  We keep the design minimal while presenting clear product categories, quick actions, and straightforward store information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/"
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden border border-white/20 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
                  >
                    <span className="relative z-10 text-sm font-medium tracking-wide">Back Home</span>
                    <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                  <a 
                    href="/products"
                    className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-white/80 transition-all duration-300 hover:text-white"
                  >
                    <span className="relative z-10 text-sm font-medium tracking-wide">View Products</span>
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-light tracking-widest text-gray-400 uppercase">
              Numbers
            </p>
            <h2 className="mt-3 text-3xl font-light text-gray-900">Store Overview</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
                <div className="absolute inset-0 border border-gray-200 rounded-full transition-all duration-300 group-hover:border-gray-400" />
                <p className="text-2xl font-light text-gray-900">08</p>
              </div>
              <p className="text-xs font-light tracking-wide text-gray-500 uppercase">
                Items
              </p>
            </div>
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
                <div className="absolute inset-0 border border-gray-200 rounded-full transition-all duration-300 group-hover:border-gray-400" />
                <p className="text-2xl font-light text-gray-900">06</p>
              </div>
              <p className="text-xs font-light tracking-wide text-gray-500 uppercase">
                Categories
              </p>
            </div>
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
                <div className="absolute inset-0 border border-gray-200 rounded-full transition-all duration-300 group-hover:border-gray-400" />
                <p className="text-2xl font-light text-gray-900">03</p>
              </div>
              <p className="text-xs font-light tracking-wide text-gray-500 uppercase">
                Pickup Slots
              </p>
            </div>
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
                <div className="absolute inset-0 border border-gray-200 rounded-full transition-all duration-300 group-hover:border-gray-400" />
                <p className="text-2xl font-light text-gray-900">24</p>
              </div>
              <p className="text-xs font-light tracking-wide text-gray-500 uppercase">
                Orders
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-light tracking-widest text-gray-400 uppercase">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-light text-gray-900">How It Works</h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <article className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-gray-400">
                    <span className="text-gray-600 font-light">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Curated Catalog</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Products are grouped by daily need so shoppers can scan faster and find exactly what they're looking for.
                    </p>
                  </div>
                </div>
              </article>

              <article className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-gray-400">
                    <span className="text-gray-600 font-light">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Simple Checkout</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Product pages keep price, stock, and action buttons easy to find for a seamless shopping experience.
                    </p>
                  </div>
                </div>
              </article>

              <article className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-gray-400">
                    <span className="text-gray-600 font-light">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-3">Pickup Ready</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Store information stays direct for students who need quick order updates and convenient pickup options.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <p className="text-xs font-light tracking-widest text-gray-400 uppercase mb-6">
                Categories
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center group hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-16 h-16 border border-gray-300 rounded transition-all duration-300 group-hover:border-gray-400" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center group hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-16 h-16 border border-gray-300 rounded transition-all duration-300 group-hover:border-gray-400" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center group hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-16 h-16 border border-gray-300 rounded transition-all duration-300 group-hover:border-gray-400" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center group hover:bg-gray-50 transition-colors duration-300">
                  <div className="w-16 h-16 border border-gray-300 rounded transition-all duration-300 group-hover:border-gray-400" />
                </div>
              </div>
              <a 
                href="/products" 
                className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300 group mt-8"
              >
                <span>View Products</span>
                <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">.</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

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
