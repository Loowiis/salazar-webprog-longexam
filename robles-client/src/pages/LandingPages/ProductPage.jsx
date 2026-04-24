import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';
import totebag from '../../assets/img/totebag.jpg';
import bundle from '../../assets/img/bundle.jpg';
import tumbler from '../../assets/img/tumbler.png';
import lamp from '../../assets/img/lamp.jpg';
import hoodie from '../../assets/img/hoodie.jpg';
import deskorganizer from '../../assets/img/deskorganizer.jpg';
import lanyardnu from '../../assets/img/lanyardnu.jpg';
import kitkat from '../../assets/img/kitkat.png';

function ProductPage() {
  const { name } = useParams();
  const product = products.find(product => product.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-zinc-900">Product not found</h1>
            <Button to="/products" className="mt-6">Back to Products</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/products">Back to Products</Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            {product.title}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
            <span className="font-bold text-zinc-900">{product.price}</span>
            <span>{product.stock}</span>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 aspect-4/3 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
            {product.title === "Campus Tote Bag" ? (
              <img 
                src={totebag} 
                alt="Campus Tote Bag" 
                className="w-full h-full object-cover"
              />
            ) : product.title === "Daily Notes Pack" ? (
              <img 
                src={bundle} 
                alt="Daily Notes Pack" 
                className="w-full h-full object-cover"
              />
            ) : product.title === "Stainless Tumbler" ? (
              <img 
                src={tumbler} 
                alt="Stainless Tumbler" 
                className="w-full h-full object-cover"
              />
            ) : product.title === "Wireless Study Lamp" ? (
              <img 
                src={lamp} 
                alt="Wireless Study Lamp" 
                className="w-full h-full object-cover"
              />
            ) : product.title === "Hoodie Jacket" ? (
              <img 
                src={hoodie} 
                alt="Hoodie Jacket" 
                className="w-full h-full object-cover"
              />
            ) : product.title === "Desk Organizer Kit" ? (
              <img 
                src={deskorganizer} 
                alt="Desk Organizer Kit" 
                className="w-full h-full object-cover"
              />
            ) : product.title === "ID Lanyard Set" ? (
              <img 
                src={lanyardnu} 
                alt="ID Lanyard Set" 
                className="w-full h-full object-cover"
              />
            ) : product.title === "Exam Week Care Pack" ? (
              <img 
                src={kitkat} 
                alt="Exam Week Care Pack" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center border-2 border-gray-300 bg-gray-100 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
                  Item
                </div>
              </div>
            )}
          </div>

          <div className="prose prose-sm max-w-none space-y-4 text-zinc-700">
            {product.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-zinc-700 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-zinc-900 pt-6">
            <Button variant="primary" className="mr-3">Add to Cart</Button>
            <Button to="/products">Back to Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
