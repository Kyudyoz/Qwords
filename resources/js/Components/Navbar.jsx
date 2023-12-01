import { Link } from "@inertiajs/react";

const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white border text-black rounded-box w-52">
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">
                    <img
                        data-no-lazy="1"
                        src="https://www.qwords.com/wp-content/themes/qwords/assets/images/icons/logo-qw-light.webp"
                        alt="qwords.webp"
                        width="89.63px"
                        height="35px"
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex text-black font-black">
                <ul className="menu menu-horizontal px-1">
                    <li className="dropdown dropdown-hover">
                        <div tabIndex={0}>Cloud Hosting</div>
                        <ul className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-white border">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <div tabIndex={0}>Server</div>
                        <ul className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-white border">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <div tabIndex={0}>Domain</div>
                        <ul className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-white border">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <div tabIndex={0}>Email Suite</div>
                        <ul className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-white border">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <div tabIndex={0}>Services</div>
                        <ul className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-white border">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <div tabIndex={0}>Internet Access</div>
                        <ul className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-white border">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <div tabIndex={0}>Customer Care</div>
                        <ul className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-white border">
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Item 2</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end font-black">
                {!user ? (
                    <>
                        <Link
                            className="btn btn-outline text-orange-500 bg-white hover:bg-orange-400 hover:text-white"
                            href={route("login")}
                            as="button"
                        >
                            Login
                        </Link>

                        <Link
                            className="btn btn-outline text-orange-500 bg-white hover:bg-orange-400 hover:text-white"
                            href={route("register")}
                            as="button"
                        >
                            Register
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            className="btn btn-outline text-orange-500 bg-white hover:bg-orange-400 hover:text-white"
                            href={route("logout")}
                            as="button"
                            method="post"
                        >
                            Logout
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
