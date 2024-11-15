const express = require('express')

const { postABook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller')
const router=express.Router()

// post a book
router.post("/create-book",postABook)

// get all books
router.get("/",getAllBooks)

// get a book
router.get("/:id",getSingleBook)

// update a book
router.put("/edit/:id",updateBook)

// delete book
router.delete("/delete/:id",deleteBook)

module.exports=router