/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'node:url';
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'robots.txt'],
            manifest: {
                name: 'Web-Hacks — News & Tips',
                short_name: 'Web-Hacks',
                description: 'Latest tech news and developer tips.',
                theme_color: '#0ea5e9',
                background_color: '#ffffff',
                display: 'standalone',
                start_url: '/',
                icons: [
                    { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
                    { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
                ],
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: function (_a) {
                            var url = _a.url;
                            return url.origin === 'https://gnews.io';
                        },
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'gnews-api',
                            expiration: { maxEntries: 50, maxAgeSeconds: 3600 },
                        },
                    },
                    {
                        urlPattern: function (_a) {
                            var request = _a.request;
                            return request.destination === 'image';
                        },
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'images',
                            expiration: { maxEntries: 100, maxAgeSeconds: 86400 },
                        },
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/test/setup.ts'],
    },
});
