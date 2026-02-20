import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { searchContext } from '../searchprovider'

const Products = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { search } = useContext(searchContext)

  useEffect(() => {
    const products = async () => {
      try {
        const fetchapi = await fetch("https://fakestoreapi.com/products")
        const apijson = await fetchapi.json()
        setData(apijson)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }

    products()
  }, [])

  

  const filter = data.filter((item) =>
    `${item.description} ${item.title}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  if (loading) {
    return (
      <h1 className='min-h-screen text-center text-4xl font-bold'>
        Loading....
      </h1>
    )
  }

  return (
    <div className="grid mt-16 bg-black grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {filter.map((item) => (
        <div
          key={item.id}
          className="border bg-white text-black rounded-xl p-4 shadow hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-40 w-full object-contain mb-4 rounded"
          />
          <h2 className="font-semibold text-lg mb-1">{item.title}</h2>
          <p className="text-sm text-gray-600 mb-1">{item.category}</p>
          <p className="font-bold mb-1">₹{item.price}</p>
          <p className="text-gray-500 text-sm line-clamp-3">
            {item.description}
          </p>

          <Link to={`/buy/${item.id}`}>
            <button className='border rounded-2xl p-3 mt-3'>
              Buy now
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Products
