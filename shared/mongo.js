const {MongoClient} = require("mongodb")

const client =new MongoClient(process.env.MONGODB_URL)


module.exports={
    db:null,
    users:null,

    async connect()
    {
        await client.connect()
        console.log("connected to MongoDB",process.env.MONGODB_URL)

        this.db=client.db(process.env.MONGODB_NAME)
        console.log("Database selected",process.env.MONGODB_NAME)

        this.users=this.db.collection("users")
    }
}