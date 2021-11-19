import { useHistory } from "react-router";
import "./index.scss";
import "./media.scss";

interface IProps {
    src: string;
    name: string;
    to: string;
};

const CooperationCard: React.FC<IProps> = (props) => {
    let history = useHistory();
    let { src, name, to } = props;  

    return (
        <div
            className="cooperation-card"
            onClick={() => { history.push(to) }}
        >
            <div className="cooperation-card-img">
                <img src={src} alt="" />
            </div>
            <div className="cooperation-card-title">
                <h3 className="size16px">{name}</h3>
            </div>
        </div>
    );
};

export default CooperationCard;