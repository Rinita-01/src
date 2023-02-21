 const getAllnotes = (req , res)=> {
   res.json({message : "success"})
     
 }
 const savenote = (req , res)=> {
   res.json({message : "success"})

 }

 module.exports = {
    getAllnotes,
    saveNote
 }