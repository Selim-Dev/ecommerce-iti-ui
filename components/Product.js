import React from 'react'
import Image from 'next/image'
const Product = ({products,isMain}) => {
	return (
		<div className="card-container" style={{maxWidth:"80%",margin:"auto"}} >
		{products?.filter((_,index)=>isMain ? index<4 :true)?.map((product) => (
			<div key={product.id} className="card">
				<h3>{product.title}</h3>
						{/* <img src={product.image} alt={product.title} width="200px" height="200px" /> */}
						<Image src={product.image} alt={product.title} width="200px" height="200px"/>
				<p>{product.description}</p>
				<p>{product.price}</p>
			</div>
	))}
		</div>
	)
}

export default Product