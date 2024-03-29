import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { inter, suwannaphum , localCustomFont} from "@/app/fonts";
import { Metadata } from "next";

export const metadata : Metadata = {
	title: "ISTAD Ecommerce Web",
	description: "ISTAD Ecommerce Web is a web application for selling products",
	openGraph:{
		title: "ISTAD Ecommerce Web",
		description: "ISTAD Ecommerce Web is a web application for selling products",
		images: 'https://i.pinimg.com/564x/2c/d2/bb/2cd2bb67520620ed94d2734bc407489a.jpg'
	}
}
export default function RootLayout({
	children,
}: Readonly<{
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
			</body>
		</html>
	);
}
