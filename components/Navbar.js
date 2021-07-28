import Link from 'next/link'
const Navbar = () => {
    return ( <nav>
        <div className="logo">
            <h1>Item list</h1>
        </div>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/items'><a>Item listing</a></Link>
    </nav> );
}
 
export default Navbar;