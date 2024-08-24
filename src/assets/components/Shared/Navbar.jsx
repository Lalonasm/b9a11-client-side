
import { Link, NavLink } from "react-router-dom";




const Navbar = () => {

    // const { user, logOut } = useContext(AuthContext)

    
    const handleRegister = () => {
        logOut()
            .then()
            .catch()
    }


    const navLinks =
        <>
            <li className="hover:bg-sky-700 rounded-md"><NavLink to="/">Home</NavLink></li>
            <li className="hover:bg-sky-700 rounded-md"><NavLink to="/allArtCraft">All Art & craft Items</NavLink></li>
            <li className="hover:bg-sky-700 rounded-md"><NavLink to="/addCraft">Add Craft Item</NavLink></li>
            <li className="hover:bg-sky-700 rounded-md"><NavLink to="/myArtList">My Art&Craft List
            </NavLink></li>

           

        </>

    return (




        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'} title="Craft Maker" className="btn btn-ghost text-red-300 font-extrabold text-2xl hover:bg-sky-700 ">Craft Maker 
         
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    // user
                        // ?
                        // <button onClick={handleRegister} className="btn">Sign Out</button>
                        // :
                        <div className="navbar-end">
                            <Link to={'/login'} className="btn hover:bg-sky-700">Login</Link>
                            <Link to={'/register'} className="btn hover:bg-sky-700">Register</Link>
                        </div>
                }
             

            </div>
        </div>
    );
};

export default Navbar;