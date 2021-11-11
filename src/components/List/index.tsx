import "./index.scss";

interface IProps {
    title: string;
    dis: string;
    time: string;
};

const List: React.FC<IProps> = (props) => {
    let { title, dis, time } = props;

    return (
        <div className="list">
            <div className="list-title">
                <h4>{title}</h4>
            </div>
            <div className="discription size16px">
                <p>{dis}</p>
            </div>
            <div className="tips-time">
                <div className="tips">更多新闻</div>
                <div className="time">{time}</div>
            </div>
        </div>
    );
};

export default List;