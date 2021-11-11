import {
    BrowserRouter,
    Redirect,
    Switch,
    Route
} from 'react-router-dom';
import Nav from "@/components/Nav";
import Footer from '@/components/Footer';
import routers from './router';


const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Nav></Nav>
            <Switch>
                <Redirect path="/" exact to="/home"></Redirect>
                {
                    routers.map(({path, component}) => {
                        return (
                            <Route key={path} path={path} component={component}></Route>
                        )
                    })
                }
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default Router;