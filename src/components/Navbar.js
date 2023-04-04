import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className = "navbar">
            <h1><Link to="/hamro-ghar-app/">KHAJA GHAR</Link></h1>
            <div className = "links">
                
                <Link to="/hamro-ghar-app/create" style={{color: "#61DAFB"}}>
                    Create Order
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;