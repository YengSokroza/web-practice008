"use client";
import { useRouter } from "next/navigation";

// change this to null to see the error page
// const session = null
const session = "some session data";

export default function Home() {
	const router = useRouter();

	// error.tsx will be rendered if session is null
	if (!session) {
		throw new Error("Auth is required to access this resource");
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-60">
			<div>
				<h1 className="text-6xl font-medium">Home Page</h1>
				
			</div>
		</main>
	);
}
