import React, { useState } from 'react'
import styles from '../styles/Feedback.module.css'
const Feeback = () => {
	const [email,setEmail] = useState("");
	const [message,setMessage] = useState("");
	const handleSubmit = async (e)=>{
		e.preventDefault();
		const response =  await fetch('/api/feedback',{
			method:"POST",
			body:JSON.stringify({email,message}),
			headers:{
				"Content-Type":"application/json"
			}
		})
		const data = await response.json();
	}
	return (
		<div className={styles["form-container"]}>
			<h2> Feedback Form</h2>
			<form onSubmit={handleSubmit} >
				<div className={styles["form-group"]}>
					<label htmlFor="email">Email</label>
					<input 
						type="email"
						id="email"
						value={email}
						onChange={(e)=>setEmail(e.target.value)}
						required
					/>
				</div>
				<div className={styles["form-group"]}>
					<label htmlFor="message">message</label>
					<textarea 
						type="message"
						id="message"
						value={message}
						onChange={(e)=>setMessage(e.target.value)}
						required
					/>
				</div>
				<button type="submit" className={styles['submit-btn']}>Submit</button>
			</form>
		</div>
	)
}

export default Feeback