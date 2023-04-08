import Link from 'next/link'
import React from 'react'

const Error = () => {
	return (
		<>
		<div>Something Wrong Happened</div>
		<Link href="/"><button style={{color:'green'}}>Go Back</button></Link>
		</>
	)
}

export default Error