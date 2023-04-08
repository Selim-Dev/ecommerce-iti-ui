import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import Head from "next/head";
import Image from "next/image";
import Feeback from "../components/Feeback";

// export async function getStaticProps(){
//   return fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(json=>{
//       console.log("data",json)
//       return {
//         props:{
//           products:json
//         }
//       }
//     })
// }
export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(()=>{
    setIsLoading(true)
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
      console.log("data",json)
      setIsLoading(false)
      setProducts(json)
    })
  },[]);
  if(isLoading) return <p>Loadding...</p>
  return (
    <div>
      <Head >
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Welcome to My Ecommerce Website</h1>
              <p>Find all your favorite products at the best prices</p>
            </div>
            <div className="col-md-6" style={{position:"relative",width:"100vw",height:"300px"}}>
              <Image  src="/hero-image.jpg" alt="Hero Image" className='image' layout="fill"   />

            </div>
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <Link href="/about">
          <a className={styles.button} >About</a>
        </Link>
        <Link href="/user-profile">
          <a className={styles.button} >User Profile</a>
        </Link>
        <Link href="/products">
          <a className={styles.button} >products</a>
        </Link>
      </div>
      <Product isMain products={products}/>
      <Feeback />
    </div>
  );
}
