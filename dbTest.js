const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://jokkol506:g0drdMDABPBspJa1@cluster0.fibnrws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connected to MongoDB!");
  } catch (error) {
    console.error("❌ Failed to connect:", error);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
