import App from "next/app";
import path from 'path'
import fs from 'fs'
import { connectDatabase } from "../../../helpers/mongo";
export const  getFeebackData = async ()=>{
	// const filePath = path.join(process.cwd(),"data","feedback.json")
	// const fileData  = fs.readFileSync(filePath);
	// const data = JSON.parse(fileData);
	// return data;
	const client = await connectDatabase();
	const db =client.db();
	const data = await  db.collection("feedback").find().toArray();
	client.close();
	return data;
}

export default async function handler(req,res){
	
	if(req.method==="POST"){
		const {email,message} = req.body;
		const client = await connectDatabase();
		const db = client.db();
		await db.collection("feedback").insertOne({email,message})
		client.close();
		res.status(201).json({status:'success',feedback: {email,message}})
		// const data = getFeebackData();
		// data.push(newFeedback);
		// fs.writeFileSync(
		// 	filePath,
		// 	JSON.stringify(data,null,2)
		// )
		// res.status(201).json({status:'success',feedback: newFeedback})
	}else{
		const data = getFeebackData();
		res.status(200).json({message:"hello",data})
	}
}


