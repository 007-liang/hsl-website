import Layout from "@/components/Layout";
import Title from "@/components/Title";
import List from "@/components/List";
import { news } from "../Home/data";
import { useState } from "react";
import { PaginationProps, Pagination } from "antd";
import "./index.scss";
import BackgroundImage from "@/components/Background-Image";

const News: React.FC = () => {
    let [newsList, setNewsList] = useState(news.slice(0, 5));
    let changePage: PaginationProps["onChange"] = (page, pageSize) => {
        let start = (page - 1) * pageSize!;
        setNewsList(news.slice(start, start + pageSize!));
    }

    return (
        <div className="news">
            <BackgroundImage 
                url="images/businessman-2682712_1920.jpg"
            ></BackgroundImage>
            <Title name="新闻资讯" english="News"></Title>
            <div className="container">
                <Layout column={true}>
                    {
                        newsList.map((item, i) => {
                            return (
                                <List
                                    key={i}
                                    maxWidth="none"
                                    title={item.title}
                                    dis={item.dis}
                                    time={item.time}
                                ></List>
                            );
                        })
                    }
                </Layout>

                <Pagination
                    total={20}
                    defaultCurrent={1}
                    defaultPageSize={5}
                    showTotal={total => `一共 ${total} 条新闻`}
                    onChange={changePage}
                />
            </div>
        </div>
    );
};

export default News;