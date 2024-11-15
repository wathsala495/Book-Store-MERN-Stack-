import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchBookByIdQuery } from '../../redux/feature/cart/booksApi'
import { getImgurl } from '../../utils/getImgUrl'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/feature/cart/CartSlice'

const SIngleBook = () => {
    const {id}=useParams()
    const{data:book ,isLoading,isError}=useFetchBookByIdQuery(id)
    const distpatch=useDispatch()

    if(isLoading) return <div>loading....</div>
    if(isError) return <div>Error happening to Load Book info</div>

    const handleAddToCart=(product)=>[
        distpatch(addToCart(product))
    ]
  return (
    <div className="max-w-lg shadow-md p-5">
    <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

    <div className=''>
        <div>
            <img
                src={`${getImgurl(book.coverImage)}`}
                alt={book.title}
                className="mb-8"
            />
        </div>

        <div className='mb-5'>
            <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p>
            <p className="text-gray-700 mb-4">
                <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4 capitalize">
                <strong>Category:</strong> {book?.category}
            </p>
            <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
        </div>

        <button onClick={() => handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
            <FiShoppingCart className="" />
            <span>Add to Cart</span>

        </button>
    </div>
</div>
  )
}

export default SIngleBook
