import { Component } from 'react';
import Home from '+/pages/Home/Home';
import Login from '+/pages/Login';
import Content from '+/pages/Content';

const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/content', component: Content, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
