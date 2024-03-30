import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { inter, suwannaphum , localCustomFont} from "@/app/fonts";
import { Metadata } from "next";
import FooterComponent from "@/components/footer/FooterComponent";

export const metadata : Metadata = {
	title: "Discover by ISTAD.co",
	description: "Discover is a web application for selling everyday's need.",
	keywords: "clothes",
	openGraph:{
		title: "Discover by ISTAD.co",
		description: "Discover is a web application for selling everyday's need",
		images: 'https://store.istad.co/media/brand_images/thumbnailstore.jpg'
	}
}
export default function RootLayout({
	children,}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${suwannaphum.variable} ${inter.variable} ${localCustomFont.variable} } h-screen flex flex-col`}>
				<header>
					<NavbarComponent />
				</header>
				<ErrorBoundary errorComponent={Error}>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</ErrorBoundary>
				<footer>
					<FooterComponent/>
				</footer>
			</body>
		</html>
	);
}
