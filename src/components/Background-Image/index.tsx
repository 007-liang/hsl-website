import "./index.scss";

interface IProps {
    url: string;
    position?: string;
    size?: string;
}

const BackgroundImage: React.FC<IProps> = (props) => {
    let { url, position, size } = props;

    let style = {
        backgroundImage: `url(${url})`,
        backgroundPosition: position || "center",
        backgroundSize: size || "cover"
    }

    return (
        <div className="background-image" style={style}></div>
    );
};

export default BackgroundImage;