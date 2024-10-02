import Link from "next/link";

export default function Navbar() {
  return (
    <>
    <div className="navbar bg-base-100 w-100">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                        d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li className="capitalize"><Link href={"/"}>Home</Link></li>
                    <li className="capitalize"><Link href={"/categories/arts"}>arts</Link></li>
                    <li className="capitalize"><Link href={"/categories/automobiles"}>automotives</Link></li>
                    <li className="capitalize"><Link href={"/categories/books"}>books</Link></li>
                    <li className="capitalize"><Link href={"/categories/fashion"}>fashion</Link></li>
                    {/* <li className="capitalize"><Link href={"/categories/food"}>foods</Link></li> */}
                    <li className="capitalize"><Link href={"/categories/movies"}>movies</Link></li>
                    <li className="capitalize"><Link href={"/categories/sports"}>sports</Link></li>
                    <li className="capitalize"><Link href={"/categories/technology"}>technology</Link></li>
                </ul>
            </div>
        </div>
        <div className="navbar-center">
            <Link href={"/"}>
                <img src="https://context.id/assets/images/context-logo.svg" alt="logo" className="max-w-full "/>
            </Link>
        </div>
        <div className="navbar-end">
            {/* <button className="btn btn-ghost btn-circle">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button> */}
            <Link href={"https://www.youtube.com/watch?v=zDBrQWq82-Q"} className="btn btn-ghost btn-circle">
                <div className="indicator">
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
            </Link>
        </div>
    </div>
    </>
  )
}
