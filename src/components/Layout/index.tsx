import "./index.scss";
import "./media.scss";

interface IProps {
    gap?: string;
    column?: boolean;
}

const Layout: React.FC<IProps> = (props) => {
    let { gap, column,  } = props;
    let flexDirection: "column" | "row" = column ? "column" : "row";

    return (
        <div
            className="layout"
            style={{
                gap,
                flexDirection,
            }}
        >
            {props.children}
        </div>
    );
};

export default Layout;