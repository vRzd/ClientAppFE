import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>

            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/math/operation">Math operations</Link>
                    </li>
                    <li>
                        <Link to="/string/operation">String operations</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <hr></hr>
            <Outlet />
        </>
    )
};

export default Layout;