import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/feature/cart/booksApi';

const category=["Choose a genre","Business","Fiction","Horror","Adventure"]

const TopSellers = () => {
 
  // const [books,setBooks]=useState([])
  const [selectedCategory,setselectedCategory]=useState("Choose a genre")
  const {data:books=[]}=useFetchAllBooksQuery();
  console.log(books)

  const filteredBooks= selectedCategory==="Choose a genre"?books:books.filter(book=>book.category===selectedCategory.toLowerCase())

  
  // console.log(filteredBooks)
  // useEffect(()=>{
  //  fetch("books.json")
  //  .then(res=>res.json())
  //  .then((data)=>setBooks(data))
  // },[])

  
  return (
    <div>
      <div className="py-10">
        <h2 className='text-3xl font-semibold mb-6'>Top Sellers</h2>
        {/* category filtering */}
        <div>
          <select name="category" id="catogory" onChange={(e)=>setselectedCategory(e.target.value)}
          className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
            {category.map((category,index)=>{
              return(
                <option key={index} value={category}>{category}</option>
              )
            })}
            
          </select>
        </div>
        <Swiper
        navigation={true} 
        slidesPerView={1}
        spaceBetween={30}
      
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
         {
           filteredBooks.map((book,index)=>{
            return(
              <SwiperSlide key={index}>  <BookCard book={book} /></SwiperSlide>
             
            )
           })
        }
       
       
      </Swiper>
       
      </div>
    </div>
  )
}

export default TopSellers
