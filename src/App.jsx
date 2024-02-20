import { NavLink, Outlet } from "react-router-dom"


function App() {


  return (
    <>


      <div className="drawer  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className=" bg-gradient-to-r from-white  to-[#FC82BD] z-[10] sticky top-0">

            <div className="w-full navbar max-w-7xl px-2 mx-auto">
              <div className="flex-1 px-2 mx-2">
                <img className="w-[140px]" src="../src/assets/logo.avif" alt="" />
              </div>
              <div className="flex-none hidden lg:block">
                <ul className=" ">
                  {/* Navbar menu content here */}
                  <div className="flex flex-row justify-center items-center gap-5 font-semibold text-white uppercase ">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/addProduct'>Add Product</NavLink></li>
                    <li> <NavLink to='/myCart'> My Cart</NavLink></li>
                    <li> <NavLink to='/login'>Login</NavLink></li>
                  </div>
                </ul>
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
