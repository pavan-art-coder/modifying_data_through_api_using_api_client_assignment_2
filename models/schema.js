const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:{
      type:String,
      required:[true,'Menu item  required name']
    },
    description:{
       type:String,
    },
    price:{
       type:Number,
       required:[true,'Menu item required price ']
    },

})

const Menuitem=mongoose.model('user',userSchema);

module.exports=Menuitem;