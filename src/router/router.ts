import About from "@/views/About";
import Education from "@/views/Education";
import Home from "@/views/Home";
import Industry from "@/views/Industry";
import News from "@/views/News";
import Service from "@/views/Service";

const router = [
    {
        path: "/home",
        name: "首页",
        component: Home
    },
    {
        path: "/service",
        name: "业务中心",
        component: Service
    },
    {
        path: "/about",
        name: "关于我们",
        component: About
    },
    {
        path: "/news",
        name: "新闻资讯",
        component: News
    },
    {
        path: "/education",
        name: "教育体系",
        component: Education
    },
    {
        path: "/industry",
        name: "行业背景",
        component: Industry
    }
];

export default router;