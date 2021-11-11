import { contact, footerNav } from "./data";
import "./index.scss";

const Footer: React.FC = () => {

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
                                    <ul key={i}>
                                        <div className="footer-nav-title size18px">{foote.title}</div>
                                        {
                                            foote.list.map(item => {
                                                return (
                                                    <li>
                                                        <a href={item.to}>{item.name}</a>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
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
    )
}

export default Footer;