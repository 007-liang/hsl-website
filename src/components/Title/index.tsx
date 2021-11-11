import "./index.scss";


interface IProp {
    name: string;
    english: string;
};

const Title: React.FC<IProp> = ({ name, english }) => {

    return (
        <div className="title">
            <h1>{ name }</h1>
            <div className="discription">
                <span>{ english }</span>
            </div>
        </div>
    );
};

export default Title;