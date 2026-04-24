const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
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
        <div className="relative z-10 text-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-8">
              <p className="text-sm font-light tracking-widest text-white/80 uppercase">
                Error
              </p>
              <h1 className="text-8xl md:text-9xl font-light text-white leading-tight">
                404
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Page not found. The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-light tracking-widest text-gray-400 uppercase">
              Navigation
            </p>
            <h2 className="mt-3 text-3xl font-light text-gray-900">Explore the Site</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <a 
              href="/"
              className="group bg-white rounded-lg border border-gray-200 p-8 transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-gray-900 group-hover:text-gray-700 transition-colors duration-300">Home</h3>
                <p className="text-gray-600 leading-relaxed">Return to the homepage and discover our campus marketplace</p>
                <div className="inline-flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span>Go Home</span>
                  <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">.</span>
                </div>
              </div>
            </a>
            
            <a 
              href="/products"
              className="group bg-white rounded-lg border border-gray-200 p-8 transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-gray-900 group-hover:text-gray-700 transition-colors duration-300">Products</h3>
                <p className="text-gray-600 leading-relaxed">Browse all featured store items and campus essentials</p>
                <div className="inline-flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span>View Products</span>
                  <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">.</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage;

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
