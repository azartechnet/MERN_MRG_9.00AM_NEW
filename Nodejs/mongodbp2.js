const {MongoClient}=require('mongodb')
var url="mongodb+srv://admin:admin@cluster0.j8tqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var client=new MongoClient(url);

async function run()
{
    try
    {
        const db=client.db('nishadb');
        const collection=db.collection('nishacollection');
        var obj=[{name:"mohamed",age:34,email:"mohamed@gmail.com"},
            {name:"azar1",age:36,email:"azar1@gmail.com"}]
        await collection.insertMany(obj);
        console.log("DataInserted...")
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)