import mongoose from 'mongoose';

const MONGO_DB_URI = "mongodb+srv://rajatdevpandey_db_user:FcxbepvinG3dOM5O@cluster1.np6pamm.mongodb.net/chat-app?appName=Cluster1";

async function deleteAll() {
    try {
        await mongoose.connect(MONGO_DB_URI);
        console.log("Connected to MongoDB for cleanup...");

        const db = mongoose.connection.db;
        
        const usersRes = await db.collection('users').deleteMany({});
        console.log(`Deleted all users (${usersRes.deletedCount}).`);

        // Delete conversations
        const convRes = await db.collection('conversations').deleteMany({});
        console.log(`Deleted all conversations (${convRes.deletedCount}).`);

        // Delete messages
        const msgRes = await db.collection('messages').deleteMany({});
        console.log(`Deleted all messages (${msgRes.deletedCount}).`);

        console.log("Cleanup complete!");
    } catch (error) {
        console.error("Cleanup failed:", error);
    } finally {
        await mongoose.disconnect();
    }
}

deleteAll();
