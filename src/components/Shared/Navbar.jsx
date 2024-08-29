
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/image/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    // const { user, logOut } = useContext(AuthContext)


    const handleRegister = () => {
        logOut()
            .then()
            .catch()
    }


    const navLinks =
        <>
            <li className="hover:bg-sky-700 rounded-md"><Link to="/">Home</Link></li>
            <li className="hover:bg-sky-700 rounded-md"><Link to="/addBook">Add Books</Link></li>
            <li className="hover:bg-sky-700 rounded-md"><Link to="/addCraft">All Books</Link></li>
            <li className="hover:bg-sky-700 rounded-md"><Link to="/myArtList">Borrowed Books
            </Link></li>



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
                <Link to={'/'} title="Craft Maker" className="btn btn-ghost text-stone-700 font-extrabold text-2xl hover:bg-sky-700 ">
                    <img className="w-12 rounded" src={logo} alt="" />
                    Oxford Library

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            <ul className='menu menu-horizontal px-1'>
                    {/* <li> */}
                        {/* <Link onClick={logOut}>Logout</Link> */}
                        {/* <li className='mt-2'>
                                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
                            </li> */}
                    {/* </li> */}

                    {!user && (
                        < li >
                            <Link to={'/login'}>Login</Link>
                        </li>
                    )}
                    {user &&(
                        
                         <div className='w-10 rounded-full' title={user?.displayName}>
                         <img
                             referrerPolicy='no-referrer'
                             alt='User Profile Photo'
                             src={user?.photoURL}
                         />
                             <Link onClick={logOut}>Logout</Link>
                     </div>
                    )}
                </ul>


            </div>


        </div>
    )
};

export default Navbar;