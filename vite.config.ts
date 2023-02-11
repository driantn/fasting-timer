import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === 'development' ? '/' : '/fasting-timer/',
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'Fasting timer',
          description: 'Simple fasting timer',
          theme_color: '#075985',
          background_color: '#075985',
          icons: [
            {
              src: '128x128.png',
              sizes: '128x128',
              type: 'image/png',
            },
            {
              src: '256x256.png',
              sizes: '256x256',
              type: 'image/png',
            },
            {
              src: '512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
        devOptions: {
          enabled: mode === 'development',
        },
      }),
    ],
    server: {
      host: 'localhost',
      port: 3000,
    },
  };
});
