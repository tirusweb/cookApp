import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '+/routes';
import { DefaultLayout } from '+/components/Layout';
import Home from '+/pages/Home/Home';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if(route.layout){
                            Layout = route.layout;
                        }else if(route.layout === null){
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })} */}
                    <Route path="/" element={<DefaultLayout children={<Home />} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
