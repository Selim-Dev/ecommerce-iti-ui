import {getFeebackData} from './index'
import {connectDatabase} from '../../../helpers/mongo'
import { ObjectId } from 'mongodb';
export default async function handler(req,res){
	const {feedbackId} = req.query;
	let client
	try{
		client = await connectDatabase();
	}catch(err){
		res.status(500).json({message:"error connecting to database"})
	}
	const db = client.db();
	const feedbackItem = await db.collection('feedback').findOne({_id: new ObjectId(feedbackId)})
	console.log("🚀 ~ file: [feedbackId].js:9 ~ handler ~ feedbackItem:", feedbackItem)
	client.close();
	res.status(200).json({feedback:{...feedbackItem,_id:feedbackItem._id.toString()}})
}