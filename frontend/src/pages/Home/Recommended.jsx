import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import BookCard from '../books/BookCard';


const Recommended = () => {

    const [books,setBooks]=useState([])
  

  

 
  useEffect(()=>{
   fetch("books.json")
   .then(res=>res.json())
   .then((data)=>setBooks(data))
  },[])


  return (
    <div className='py-16'>
       <h2 className='text-3xl font-semibold mb-6'>Recommended for you </h2>
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
           books.length > 0 && books.slice(8,18).map((book,index)=>{
            return(
              <SwiperSlide key={index}>  <BookCard book={book} /></SwiperSlide>
             
            )
           })
        }
       
       
      </Swiper>
       
    </div>
  )
}

export default Recommended
