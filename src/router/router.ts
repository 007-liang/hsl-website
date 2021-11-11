import About from "@/views/About";
import Home from "@/views/Home";
import Service from "@/views/Service";

const router = [
    {
        path: '/home',
        name: "首页",
        component: Home
    },
    {
        path: '/service',
        name: "业务中心",
        component: Service
    },
    {
        path: '/about',
        name: "关于我们",
        component: About
    }
];

export default router;