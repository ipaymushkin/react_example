import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#10b981', // emerald-500
          borderRadius: 8,
          colorBgContainer: '#18181b', // zinc-900
          colorBorder: '#27272a', // zinc-800
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
