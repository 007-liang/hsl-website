import { Carousel } from "antd";
import { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import { CarouselRef } from "antd/lib/carousel";
import Title from "@/components/Title";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import List from "@/components/List";
import CooperationCard from "@/components/Cooperation-Card"
import { useHistory } from "react-router";
import { 
    srcs,
    cards, 
    cooperation,
    news
} from "./data";

import "./index.scss";
import "./media.scss";

const Home: React.FC = () => {
    let history = useHistory();
    let carouselRef = useRef<CarouselRef>(null);
    let pre = () => {
        carouselRef.current?.prev();
    }
    let next = () => {
        carouselRef.current?.next();
    }
    let ArrowPre = () => {
        return (
            <div className="slick-arrow slick-prev" onClick={pre}>
                <LeftOutlined></LeftOutlined>
            </div>
        )
    };
    let ArrowNext = () => {
        return (
            <div className="slick-arrow slick-next" onClick={next}>
                <RightOutlined></RightOutlined>
            </div>
        );
    };

    return (
        <div className="home">
            <Carousel
                autoplay
                draggable
                dots={false}
                arrows={true}
                ref={carouselRef}
                prevArrow={<ArrowPre />}
                nextArrow={<ArrowNext />}
            >
                {
                    srcs.map((src, i) => {
                        return (
                            <div key={i}>
                                <img src={src} alt="banner" />
                            </div>
                        )
                    })
                }
            </Carousel>
            <div className="container">
                <Title name="业务中心" english="Business Center"></Title>
                <Layout gap="20px">
                    {
                        cards.map((card, i) => {
                            if (i > 2) return;
                            return (
                                <Card
                                    key={i}
                                    title={card.title}
                                    dis={card.dis}
                                    src={card.src}
                                    to="/"
                                ></Card>
                            );
                        })
                    }
                </Layout>
            </div>
            <div className="home-about" style={{ backgroundImage: 'url(/images/apple-1868496_1280.png)' }}>
                <div className="container">
                    <div className="about-img">
                        <img src="/images/蒙版组 1.png" alt="" />
                    </div>
                    <div className="about-container">
                        <h3>
                            <span style={{ fontWeight: 600 }}>关于我们 </span>
                            <span>ABOUT US</span>
                        </h3>
                        <p className="about-text size14px">
                            广州红树林教育科技有限公司隶属于广州市高新教育集团，专业从事教育投资和教学管理输出，业务涵盖技能培训、 就业输出、专业共建、学校托管等领域。目前拥有合作职业院校20余所，在册学生达10万+。
                        </p>
                        <p className="about-text size14px">
                            公司以“打造有世界影响力的 技能教育品牌”为目标，整合优质资源，探索出与职业学校联合办学的管理新模式。 我们以对客户负责、对奋斗者负责、对社会负责的企业价值观，致力培养具有中国灵魂和国际视野的优秀学生为目标， 致力成为中国知名培养和输送优秀职业人的基地，嫁接各类名校，植入先进理念，大胆实践，积极创新办学模式，目前已 经总结和形成了具有红树林特征的办学经验，取得了辉煌的成绩。
                        </p>
                        <div
                            className="about-but"
                            onClick={() => { history.push("/about") }}
                        >
                            <span className="size16px">查看更多</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-cooperation" style={{ backgroundImage: 'url(/images/workplace-5517744_1920.png)' }}>
                <div className="container">
                    <Title name="携手合作" english="Join Forces"></Title>
                    <Layout gap="20px">
                        {
                            cooperation.map(((data, i) => {
                                return (
                                    <CooperationCard
                                        key={i}
                                        to={data.to}
                                        src={data.src} 
                                        name={data.name}
                                    ></CooperationCard>
                                );
                            }))
                        }
                    </Layout>
                </div>
            </div>
            <div className="home-news">
                <div className="container">
                    <Title name="新闻资讯" english="News" ></Title>
                    <Layout gap="0px 20px">
                        {
                            news.map((item, i) => {
                                if (i > 3) return null;
                                return (
                                    <List 
                                        key={i}
                                        dis={item.dis}
                                        time={item.time}
                                        title={item.title}
                                    ></List>
                                )
                            })
                        }
                    </Layout>
                </div>
            </div>
        </div>
    );
};

export default Home;