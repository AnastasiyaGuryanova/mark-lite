import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{html,css,js,ico,png,svg,woff2}'],
			},
			devOptions: {
				enabled: true,
			},
			manifest: {
				name: 'MarkLite',
				short_name: 'MarkLiteApp',
				description: 'Приложение для создания заметок с поддержкой',
				theme_color: '#777c91',
				background_color: '#4a5167',
				orientation: 'portrait-primary',
				display: 'standalone',
				start_url: '/',

				icons: [
					{
						src: '/icons/icon-notes-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
					{
						src: '/icons/icon-notes-256.png',
						sizes: '256x256',
						type: 'image/png',
					},
					{
						src: '/icons/icon-notes-128.png',
						sizes: '128x128',
						type: 'image/png',
					},
					{
						src: '/icons/icon-notes-64.png',
						sizes: '64x64',
						type: 'image/png',
					},
				],

				screenshots: [
					{
						src: '/screenshots/desktop.png',
						type: 'image/png',
						sizes: '1478x798',
						form_factor: 'wide',
					},
					{
						src: '/screenshots/mobile.png',
						type: 'image/png',
						sizes: '374x668',
						form_factor: 'narrow',
					},
				],
			},
		}),
	],

	resolve: {
		alias: {
			app: path.resolve(__dirname, 'src/app'),
			pages: path.resolve(__dirname, 'src/pages'),
			widgets: path.resolve(__dirname, 'src/widgets'),
			features: path.resolve(__dirname, 'src/features'),
			entities: path.resolve(__dirname, 'src/entities'),
			shared: path.resolve(__dirname, 'src/shared'),
		},
	},
});
