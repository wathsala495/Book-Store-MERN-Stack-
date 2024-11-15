const Book = require('./book.model')
const postABook=async(req,res)=>{
    // console.log(req.body)
    try {
        const newBook=await Book({...req.body})
        await newBook.save()
        res.status(200).send({message:"Book posted succefully",book:newBook})
    } catch (error) {
        console.log("Error creating book",error)
        res.status(500).send({message:"Failed to create book",error})
    }
}

// get All books
const getAllBooks=async(req,res)=>{
      try {
         const books=await Book.find().sort({createdAt:-1})
         res.status(200).send(books)
      } catch (error) {
        console.log("Error fetching books",error)
        res.status(500).send({message:"Failed to fetch books",error})
      }
    }

    // get single book
    const getSingleBook=async(req,res)=>{
        try {
            const {id}=req.params;
            const book=await Book.findById(id)
            if(!book){
                res.status(404).send({message:"Book not found"})
            }
            res.status(200).send(book)
         } catch (error) {
           console.log("Error fetching book",error)
           res.status(500).send({message:"Failed to fetch books",error})
         }
    }
//   update a book
    const updateBook=async(req,res)=>{
           try {
            const {id}=req.params;
            const updatedBook=await Book.findByIdAndUpdate(id,req.body,{new:true})
            if(!updatedBook){
                res.status(404).send({message:"Book not found"})
            }
            res.status(200).send({message:"Book updated succefully",book:updatedBook})
           } 
           catch (error) {
            console.log("Error Updating a book",error)
            res.status(500).send({message:"Failed to update a books",error})
           }
    }
    // delete a book
    const deleteBook=async(req,res)=>{
        try {
           const {id}=req.params;
           const deletedBook=await Book.findByIdAndDelete(id) 
           if(!deletedBook){
            res.status(404).send({message:"Book not found"})
        }
        res.status(200).send({message:"Book deleted succesfully",book:deletedBook})
        } catch (error) {
            console.log("Error deleting a book",error)
            res.status(500).send({message:"Failed to delete a book",error})  
        }
    }



    
module.exports={postABook,getAllBooks,getSingleBook,updateBook,deleteBook}