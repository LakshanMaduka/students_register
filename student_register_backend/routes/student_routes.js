const router = require("express").Router();
const Student = require("../models/Student.js");



// save student details in the database
router.route("/add").post( async (req,res)=>{
    const {name,email,phoneNumber,gender,birthday,address} = req.body;
    const newStudent = {
        name,
        email,
        phoneNumber,
        gender,
        birthday,
        address,
        
    };
  try{
    
    const existingUser = await Student.findOne({email});
    if(existingUser){
      return res.status(400).json({msg:"Email already exsists"})
    }
  
    const saveStudent =await Student.create(newStudent);
   return res.status(200).json({msg:"Registration Successful"});
    
  } catch(e){
    console.log(e)
  return res.status(500).json({error: e.message})
  
  }
});

// gat all data from database
router.route("/").get( async (req,res)=>{
 try{
    const studentDetails= await Student.find()
    res.json(studentDetails);
 } catch(e){
   console.log(e);
 }
});

//update Student
router.route("/update/:id").put(
  async  (req,res)=>{
    let userId = req.params.id;
    const {name,email,phoneNumber,gender,dob,address} = req.body;
    const updatedStudent = {
        name,
        email,
        phoneNumber,
        gender,
        dob,
        address,
        
    };

 try{
    const update = await Student.findByIdAndUpdate(userId,updatedStudent);
res.send({message:"Sucess",user:update});

 }catch(e){
    console.log(e);
 }
});


//delete user
router.route("/delete/:id").delete(async (req,res)=>{
    let userId = req.params.id;
    try {
        await Student.findOneAndDelete(userId);
        res.send("delete sucessfully");
    } catch (error) {
        console.log(error);
    }

})

module.exports = router;