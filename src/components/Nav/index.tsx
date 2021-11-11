import routers from "@/router/router";
import { NavLink } from "react-router-dom";

import './index.scss';

const Nav: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <h1><img src="/images/5f50b42768a4a2.30275879@2x.png" alt="" /></h1>
                    <div className="tel">
                        <img src="/images/AD0ItZClDRAEGAAg0d2FigYo2PvepAMwsAk4sAk.png" alt="" />
                        <div className="size18px">
                            <div>服务热线</div>
                            <div>1235-087</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navMenu">
                <div className="container">
                    {
                        routers.map(({ path, name }) => {
                            return (
                                <NavLink key={name} to={path}>
                                    <div className="link">
                                        {name}
                                    </div>
                                </NavLink>
                            );
                        })
                    }
                </div>
            </div>
        </header>
    )
}

export default Nav;