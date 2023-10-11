import Link from 'next/link';




function CardAdminProducts({ product }) {
  return (
    <Link
      className="bg-gray-400 text-white rounded-md hover:cursor-pointer hover:bg-gray-700 my-1"
      href={`/adminProducts/${product._id}`}
    >
      <div className="relative">
        {product.imageUrl && (
          <img
            src={product.imageUrl}
            className="w-full h-48 object-cover rounded-t-lg"
            alt=""
          />
        )}
        <div className="p-4">
          <h1 className="text-lg font-bold">{product.title}</h1>
          <h2 className="text-2xl">{product.category}</h2>
          <h2 className="text-sm text-slate-600">{product.description}</h2>
        </div>
      </div>
    </Link>
  );
}
export default CardAdminProducts
