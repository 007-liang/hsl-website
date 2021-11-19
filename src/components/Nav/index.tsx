import routers from "@/router/router";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import './index.scss';
import './media.scss';

const Nav: React.FC = () => {
    let [show, setShow] = useState(false);
    let isShow = `${show ? "show" : ""}`;

    let hidden = useCallback(() => {
        if (!show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [show]);

    let showFn = () => {
        setShow(!show);
        hidden();
    }

    useEffect(() => {
        let close = () => {
            if (show) {
                setShow(false);
                hidden();
            }
        };
        document.addEventListener('click', close);
        return () => {
            document.removeEventListener('click', close);
        }
    }, [show, hidden]);

    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="phone-but" onClick={showFn}>
                        <div className={"phone-line " + isShow}></div>
                    </div>
                    <h1><img src="/images/5f50b42768a4a2.30275879@2x.png" alt="logo" /></h1>
                    <div className="tel">
                        <img src="/images/AD0ItZClDRAEGAAg0d2FigYo2PvepAMwsAk4sAk.png" alt="" />
                        <div className="size18px">
                            <div>服务热线</div>
                            <div>1235-087</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"navMenu " + isShow}>
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