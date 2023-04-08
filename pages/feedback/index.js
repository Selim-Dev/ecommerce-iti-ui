import React from 'react'
import {useRouter} from 'next/router'
import { getFeebackData} from '../api/feedback'


export const getServerSideProps = async (context)=>{
	const data = await getFeebackData();
	const serializedData = data.map(feedback=>({
		...feedback,
		_id:feedback._id.toString(),
	}))
	return {
		props:{
			data:serializedData || []
		}
	}
}



const Feedback = (props) => {
	const router = useRouter();

	const {data} = props;
	if(!data.length)return <p>No Feedback  Yet</p>
	const handleFeedback = (id)=>{
		router.push(`/feedback/${id}`)
	}
	return (
		<div>
			{data.map(feedback=>(
				<h1 key={feedback._id} onClick={handleFeedback.bind(null,feedback._id)}>
					{feedback.email}
				</h1>
			))}
		</div>
	)
}

export default Feedback