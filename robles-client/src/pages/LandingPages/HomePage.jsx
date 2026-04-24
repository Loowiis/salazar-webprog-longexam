import HeroBanner from '../../components/HeroBanner';
import dailyessentials from '../../assets/img/dailyessentials.jpg';
import notebook from '../../assets/img/notebook.jpg';
import nusweat from '../../assets/img/nusweat.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col">
            <HeroBanner />

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
                                Products
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
                                <p className="text-2xl font-light text-gray-900">24</p>
                            </div>
                            <p className="text-xs font-light tracking-wide text-gray-500 uppercase">
                                Orders
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
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-light tracking-widest text-gray-400 uppercase">
                            Categories
                        </p>
                        <h2 className="mt-3 text-3xl font-light text-gray-900">Shop Collection</h2>
                    </div>

                    <div className="grid gap-12 md:grid-cols-3">
                        <article className="group text-center">
                            <div className="relative mb-8 overflow-hidden">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                    <img 
                                        src={dailyessentials} 
                                        alt="Daily Essentials" 
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                            </div>
                            <h3 className="text-xl font-light text-gray-900 mb-3">Daily Essentials</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-xs mx-auto">
                                Bags, tumblers, lanyards, and items used every school day.
                            </p>
                            <a 
                                href="/products" 
                                className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                            >
                                <span>View Products</span>
                                <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">.</span>
                            </a>
                        </article>

                        <article className="group text-center">
                            <div className="relative mb-8 overflow-hidden">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                    <img 
                                        src={notebook} 
                                        alt="Study Supplies" 
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                            </div>
                            <h3 className="text-xl font-light text-gray-900 mb-3">Study Supplies</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-xs mx-auto">
                                Notes, desk tools, and study kits for class and review weeks.
                            </p>
                            <a 
                                href="/products" 
                                className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                            >
                                <span>Shop Supplies</span>
                                <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">.</span>
                            </a>
                        </article>

                        <article className="group text-center">
                            <div className="relative mb-8 overflow-hidden">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                    <img 
                                        src={nusweat} 
                                        alt="Campus Apparel" 
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                            </div>
                            <h3 className="text-xl font-light text-gray-900 mb-3">Campus Apparel</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-xs mx-auto">
                                Comfortable pieces for class days, commute days, and weekends.
                            </p>
                            <a 
                                href="/products" 
                                className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                            >
                                <span>View Apparel</span>
                                <span className="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">.</span>
                            </a>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
