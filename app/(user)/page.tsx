"use client";
import SliderComponent from "@/components/card/SliderComponent";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import HeroText from "@/components/text-group/HeroText";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import VideoComponent from "@/components/video/VideoComponent.jsx";
import { ButtonGroup, Slider } from "@material-tailwind/react";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { title } from "process";

// change this to null to see the error page
// const session = null
const session = "some session data";

const myItems = [
	{
		quote: "Lorem ipsum dolor sit amet.",
		name: "John Doe",
		title: "Developer",
		direction: "left",
		speed: "fast",
		pauseOnHover: true,
	},

	// Add more items as needed
];

export default function Home() {
	const router = useRouter();

	// error.tsx will be rendered if session is null
	if (!session) {
		throw new Error("Auth is required to access this resource");
	}

	return (

		<main >
			<ContainerScroll titleComponent={<HeroText />} children={<VideoComponent />} />
			<section className=" bg-red-60 " >
				<div className=" p-16 h-screen rounded-lg xl:space-y-4">  
					<p className="xl:text-lg  text-md font-black">Unleash Your Inner You </p>
					<h1 className="xl:text-6xl  text-3xl font-semibold">Discover's Big Style Sale!</h1>
					<p className="xl:text-lg  text-md font-medium">Get ready to express yourself with incredible deals on clothes, jewelry, and bags for both men and women! Discover your perfect outfit at a fraction of the price. Don't miss out – this sale won't last forever!</p>
					<button className="bg-gray-50 px-8 py-2 rounded-md font-semibold text-gray-800" onClick={() => {
						router.push('./service')
					}} >Shop Now </button>
					<SliderComponent />
				</div>
				<div className=" grid xl:grid-cols-4 grid-cols-1 gap-4">
					<div className="bg-white">
							
					</div>
					<div></div>
					<div></div>
					<div></div>
				</div>



			</section>
		</main>

	);
}
