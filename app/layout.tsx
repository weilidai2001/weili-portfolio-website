import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import JsonLdSchema from './components/JsonLdSchema';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Weili Dai - Full-Stack Developer',
	description:
		'Welcome to my portfolio! I am a passionate full-stack developer who bridges the gap between frontend and backend development. Specializing in creating complete web solutions, from beautiful user interfaces to robust server architectures.',
	keywords: [
		'Full-Stack Developer',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'React',
		'Next.js',
		'Node.js',
		'TypeScript',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'DevOps',
		'System Architecture',
		'Web Development',
		'Weili Dai',
	],
	authors: [{ name: 'Weili Dai' }],
	creator: 'Weili Dai',
	openGraph: {
		title: 'Weili Dai - Full-Stack Developer Portfolio',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		url: 'https://www.weilidai.co.uk',
		siteName: 'Weili Dai - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Weili Dai - Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="canonical" href="https://www.weilidai.co.uk" />
				<JsonLdSchema />
				<Script id="clarity-script" strategy="afterInteractive">
					{`(function(c,l,a,r,i,t,y){
						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
						t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
						y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "s8lfixsft5");`}
				</Script>

				{/* Google tag (gtag.js) */}
				<Script
					id="gtag-js"
					src="https://www.googletagmanager.com/gtag/js?id=G-RJV1F5D1QR"
					strategy="afterInteractive"
					async
				/>
				<Script id="gtag-init" strategy="afterInteractive">
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-RJV1F5D1QR');
					`}
				</Script>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
