import { NavLink, Outlet } from "react-router-dom"
import logo from '../src/assets/logo.avif'
import { useContext, useState } from "react"
import { AuthContext } from "./Provider/AuthProvider"
import Swal from "sweetalert2"

function App() {
  const { user, logOut } = useContext(AuthContext)
  console.log(user, logOut);
  const [showDropdown, setShowDropdown] = useState(false);





  const handelLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout"
    })
      .then(result => {
        if (result.isConfirmed) {
          return logOut();
        } else {
          // The user clicked the cancel button
          throw new Error('Logout canceled');
        }
      })
      .then(() => {
        Swal.fire({
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          icon: "success"
        });
      })
      .catch(error => {
        Swal.fire("Error", "Logout not successful: " + error.message, "error");
      });
  }
  return (
    <>


      <div className="drawer  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className=" bg-gradient-to-r from-white  to-[#FC82BD] z-[10] sticky top-0">

            <div className="w-full navbar max-w-7xl px-2 mx-auto gap-3 md:gap-5">
              <div className="flex-1 px-2 mx-2">
                <img className="w-[140px]" src={logo} alt="BABY CARE" />
              </div>
              <div className="flex-none hidden lg:block">
                <ul className=" ">
                  {/* Navbar menu content here */}
                  <div className="flex flex-row justify-center items-center gap-5 font-semibold text-white uppercase ">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/addProduct'>Add Product</NavLink></li>
                    <li> <NavLink to='/myCart'> My Cart</NavLink></li>
                  </div>
                </ul>
              </div>
              <div>
                <div className="profile">
                  {
                    user ? <> <li>
                      {
                        user ? <>

                          <div
                            // onClick={() => setShowDropdown(!showDropdown)}
                            className="cursor-pointer"
                          >
                            <div onClick={() => setShowDropdown(!showDropdown)} className="avatar">
                              <div className="w-8 rounded">
                                <img className="profile" src={user?.photoURL} />
                              </div>
                              {showDropdown && (
                                <ul className="absolute top-14 right-0  bg-white border  rounded-md shadow-md p-4 transition-all ">
                                  <li className="text-md text-[#69BFF1]">{user.displayName}</li>
                                  <li className="text-sm lowercase text-gray-500">{user.email}</li>
                                  <li className="text-md text-white border text-center rounded mt-5 bg-[#FC82BD]" onClick={handelLogout}> <NavLink to='/login'>Logout</NavLink></li>

                                </ul>
                              )}
                            </div>

                          </div></> : <></>
                      }

                    </li></> : <><li className="hidden md:block font-semibold uppercase rounded py-1 bg-[#FEEB26] px-4  "> <NavLink to='/login'>Login</NavLink></li></>
                  }
                </div>
              </div>
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-ghost text-white ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div>
            </div>
          </div>

          {/* Page content here */}
          <div className="">
            <Outlet></Outlet>
          </div>

        </div>
        <div className="drawer-side z-[11]">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 min-h-full bg-[#FC82BD] flex flex-col">
            {/* Sidebar content here */}
            <div className="flex flex-col mt-32  text-white justify-center items-center uppercase font-semibold">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/addProduct'>Add Product</NavLink></li>
              <li> <NavLink to='/myCart'> My Cart</NavLink></li>
              <li> <NavLink to='/login'>Login</NavLink></li>

            </div>
          </ul>
        </div>
      </div>
      {/* children render components  */}

    </>
  )
}

export default App
