import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const SingleFeedback = () => {
	const router = useRouter();
	const {feedbackId} = router.query;
	const [feedback,setFeedback] = useState(null);

	useEffect(()=>{
		if(feedbackId){
			fetch(`/api/feedback/${feedbackId}`)
			.then((res)=>res.json())
			.then((data)=>{
				setFeedback(data.feedback)
			})
		}
	},[feedbackId])

	if(!feedback)return <p>Loading...</p>
	return (
		<div>
			<h1>{feedback.email}</h1>
			<h2>{feedback.message}</h2>
		</div>
	)
}

export default SingleFeedback