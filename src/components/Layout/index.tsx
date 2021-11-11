import "./index.scss"

interface IProps {
    gap?: string
}

const Layout: React.FC<IProps> = (props) => {
    let { gap } = props;
    return (
        <div
            className="layout"
            style={{
                gap
            }}
        >
            {props.children}
        </div>
    );
};

export default Layout;