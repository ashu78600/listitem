import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = () => {
  return ( 
  <div>
    <h1 className={styles.title}>HomePage</h1>
    <p className={styles.text}>implify your everyday project work by using this 
    innovative design software. The free design program
     enables you to create rules-based 3D engineering 
     solutions directly in your browser. At the click 
     of a button, you will receive the entire project
      documentation, assembly guide and CAD data, and 
      online ordering is just a click away, too.
</p>
    <p className={styles.text}> Simple. Online. Engineering.</p>
    <Link href="/items" ><a className={styles.btn}>GoTo Item Listing</a></Link>
  </div> );
}
 
export default Home;
