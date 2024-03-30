
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import thumbnailhome from "@/public/thumbnailhome.png"
import thumbnail2 from "@/public/thumbnail2.svg"
import thumbnail3 from "@/public/thumbnail3.svg"
import thumbnail4 from "@/public/thumbnail4.svg"

export default function SliderComponent() {
    return (
        <div className="hidden sm:block sm:h-64 xl:h-80 2xl:h-96">
            <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
                <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
                    <Image src={thumbnail3} alt="thumbnail" layout="responsive" objectPosition="center" />
                </div>
                <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
                    <Image src={thumbnail2} alt="thumbnail" layout="responsive" objectPosition="center" />
                </div>
                <div className="flex h-full items-center justify-center bg-transparent dark:bg-gray-700 dark:text-white">
                    <Image src={thumbnail4} alt="thumbnail" layout="responsive" objectPosition="center" />
                </div>
            </Carousel>
        </div>
    );
}
