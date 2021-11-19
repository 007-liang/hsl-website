import { RightOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { contact, footerNav } from "./data";
import "./index.scss";
import "./media.scss";


let list: NodeListOf<HTMLUListElement>;
const Footer: React.FC = () => {
    let [index, setIndex] = useState(-1);
    let [show, setShow] = useState(false);
    let showUl = (i: number, len: number) => {
        return () => {
            if (document.body.clientWidth > 1050) return;
            list.forEach(item => item.style.height = "0px");
            if (i !== index) {
                setIndex(i);
                setShow(true);
                let currentUl = list[i];
                currentUl.style.height = len * 43 + "px";
            } else {
                setShow(!show);
                if (show) {
                    let currentUl = list[i];
                    currentUl.style.height = "0px";
                } else {
                    let currentUl = list[i];
                    currentUl.style.height = len * 43 + "px";
                }
            }
        }
    };

    useEffect(() => {
        list = document.querySelectorAll('.footer-menu ul');
    }, [])

    return (
        <footer>
            <div className="container">
                <h2>红树林教育科技有限公司</h2>
                <div className="nav-container">
                    <div className="contact">
                        <ul>
                            <div className="footer-nav-title size18px">{contact.title}</div>
                            {
                                contact.list.map((item, i) => {
                                    return <li key={i}>{item}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="footer-nav">
                        {
                            footerNav.map((foote, i) => {
                                return (
                                    <div key={i} className={`
                                        footer-menu 
                                        ${(show && i === index) ? "footer-nav-show" : ""}
                                    `}>
                                        <div
                                            className="footer-nav-title size18px"
                                            tabIndex={i}
                                            onClick={showUl(i, foote.list.length)}
                                        >
                                            {foote.title}
                                            <RightOutlined className="icon-arrow" />
                                        </div>
                                        <ul>
                                            {
                                                foote.list.map((item, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <a href={item.to}>{item.name}</a>
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="footer-follow">
                        <div className="size18px">
                            关注我们
                        </div>
                        <img src="/images/图像 7.png" alt="" />
                        <p>微信公众号</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                版权信息
            </div>
        </footer>
    );
};

export default Footer;