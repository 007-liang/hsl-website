import { useHistory } from "react-router";

import "./index.scss"; 

interface IProps {
    title: string,
    dis: string,
    src: string,
    to: string
}

const Card: React.FC<IProps> = (props) => {
    let history = useHistory();

    let { title, dis, src, to } = props;

    return (
        <div className="card" onClick={() => history.push(to)}>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-dis size16px">
                {dis}
            </div>
            <div className="card-img">
                <img src={src} alt="展示图" />
            </div>
        </div>
    );
};

export default Card;