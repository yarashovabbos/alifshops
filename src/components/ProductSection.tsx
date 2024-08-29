
import { useProductStore } from "../store/productStore"
import ProductCard from './ProductCard'

interface ProductSectionProps {
  title: string
}

export default function ProductSection({ title }: ProductSectionProps) {
  const { products } = useProductStore()

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}