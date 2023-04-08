import { MongoClient } from "mongodb";


export const connectDatabase = async () => {
	const client = await MongoClient.connect(process.env.MONGO_URI)
	return client;
}