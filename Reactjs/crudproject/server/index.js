const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods:['PUT','GET','POST','DELETE']
}))

app.use(express.json())

const FoodModel=require("./models/Food")
mongoose.connect("mongodb+srv://admin:admin@cluster0.j8tqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food")
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

//Inserted the data

app.post("/insert",async(req,res)=>{
    const {foodName,description}=req.body;
    const food=new FoodModel({
        foodName:foodName,
        description:description
        })
        try{
            const result=await food.save()
            res.send(result)
            console.log(result)
        }
        catch(err)
        {
            console.log(err)
        }
})
//Read the data
app.get("/read",async(req,res)=>{
    try{
        const food=await FoodModel.find();
        res.send(food)
    }
    catch(err)
    {
         res.send("Error")
    }
})

//Updating the data

app.put("/update",async(req,res)=>{
    const {newFoodName,id}=req.body;
    try{
         const updateFood=await FoodModel.findById(id);
         if(!updateFood)
         {
          return res.status(404).send("Data not found")
         }
         updateFood.foodName=newFoodName;
         await updateFood.save()
         res.send("Data updated successfully")
      }
      catch(err)
      {
        console.log(err)
      }
  })
  //Deleting the data
  app.delete("/delete/:id",async(req,res)=>{
    const id = req.params.id; 
    try{
      const result=await FoodModel.findByIdAndDelete(id);
      if(!result)
      {
         return res.status(404).send("Food items not found")
      }
      res.send("Food item deleted successfully")
    }catch(err){
          console.error(err);
          res.status(500).send("Error deleting food item")
      }
    });
  
app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})