import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import "./index.scss";
import "./media.scss";


ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById('root')
);
