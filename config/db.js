const mongo=require('mongoose')



const connectDB=async (mongoURI)=>{
    try{
        await mongo.connect(mongoURI);
        console.log("mongo connected")
       

    }catch(error){
        console.error("Error Occured",error.message);

    }
};
module.exports=connectDB;





