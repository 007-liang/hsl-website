import Card from "@/components/Card";
import Layout from "@/components/Layout";
import { cards } from "../Home/data";
import "./index.scss";

const Service: React.FC = () => {
    return (
        <div className="service">
            <div className="container">
                <Layout gap="40px">
                    {
                        cards.map((card, i) => {
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
        </div>
    )
}

export default Service;