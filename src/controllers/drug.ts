const {drugs  } = require("../../models");

  export const all_drugs=async(req:any,res:any)=>{
    
  const data=await drugs.findAll()
  console.log(data)
  res.send(data)
    
  }
 
  