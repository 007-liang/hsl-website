import "./index.scss";
import "./media.scss";


interface IProps {
    title: string;
    dis: string;
    time: string;
    maxWidth?: string;
    tips?: string;
};

const List: React.FC<IProps> = (props) => {
    let { 
        title, 
        dis, 
        time, 
        maxWidth, 
        tips 
    } = props;

    return (
        <div className="list" style={{ maxWidth }}>
            <div className="list-title">
                <h4>{title}</h4>
            </div>
            <div className="discription size16px">
                <p>{dis}</p>
            </div>
            <div className="tips-time">
                <div className="tips">{tips || "新闻动态"}</div>
                <div className="time">{time}</div>
            </div>
        </div>
    );
};

export default List;