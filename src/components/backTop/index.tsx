import { trottle } from '@/utils';
import { DoubleRightOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import "./index.scss";

let proxy: () => void;
let AnimationId: number;
const BackTop: React.FC = () => {
    let [show, setShow] = useState(false);
    let [displayNone, setDisplayNone] = useState(false);
    let startAnimation = () => (AnimationId = window.requestAnimationFrame(animation));
    let stopAnimation = () => (window.cancelAnimationFrame(AnimationId));
    let animation = () => {
        if (window.scrollY > 0) {
            let top = window.scrollY - 200;
            window.scrollTo({ top, left: 0 });
            startAnimation();
        } else {
            stopAnimation();
            window.addEventListener('scroll', proxy);
        }
    }

    let scroll = () => {
        let scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            setShow(false);
        } else {
            // 当超出一屏幕显示返回顶部按钮
            setDisplayNone(true);
            console.log(document.body.offsetHeight);
            setShow(true);
        }
    }

    let backTop = () => {
        startAnimation();
        setDisplayNone(false);
        window.removeEventListener('scroll', proxy);
    };

    let transitionEnd = () => {
        !show && setDisplayNone(false);
    }

    useEffect(() => {
        proxy = trottle(scroll, 200);
        window.addEventListener('scroll', proxy);
        return () => {
            window.removeEventListener('scroll', proxy);
        }
    }, []);

    return (
        <div
            className={`
                back-top 
                ${show ? "show-back-top" : ""} 
                ${displayNone ? "" : "displayNone"}
            `}
            onClick={backTop}
            onTransitionEnd={transitionEnd}
        >
            <DoubleRightOutlined />
        </div>
    );
};

export default BackTop;