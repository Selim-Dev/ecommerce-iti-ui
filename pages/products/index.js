import Link from 'next/link';
import React from 'react'
import styles from "../../styles/Product.module.css";
import Product from '../../components/Product';
import Head from 'next/head';
import Image from 'next/image';

export async function getServerSideProps(){
	const data = await fetch('https://fakestoreapi.com/products')
	const products = await data.json();
	return {
		props:{
			products
		}
	}
}
const Products = ({products}) => {
	if(!products) return <p>loading...</p>
	return (
		<>
			<Head >
        <title>Products Page</title>
      </Head>
			<section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6" style={{margin:'10px'}}>
              <h1>Products Page</h1>
            </div>
						<Link href="/"  style={{margin:'10px'}}>
          <a className={styles.button}>Go to Main Page</a>
        </Link>
            <div className="col-md-6"  style={{margin:'10px'}}>
              <img src="/hero-image.jpg" alt="Hero Image" className='image'  />
            </div>
          </div>
        </div>
      </section>
			<Product products={products}/>
		</>
	)
}

export default Products