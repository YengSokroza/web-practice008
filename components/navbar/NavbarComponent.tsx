"use client";
import Link from "next/link";
import {
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";

type MenuItem = {
	name: string;
	path: string;
	active: boolean;
};

export default function NavbarComponent() {
	const pathname = usePathname();
	const [menu, setMenu] = useState<MenuItem[]>(MenuList);

	// const updateMenu = (path: string) => {
	// 	const newMenu = menu.map((item) => {
	// 		if(path=== item.path){
	// 			return {
	// 				...item,
	// 				active: true
	// 			}
	// 		}else{
	// 			return {
	// 				...item,
	// 				active: false
	// 			}
	// 		}
	// 	})

	// 	setMenu(newMenu)
	// }

	return (
		<Navbar fluid rounded className="w-full fixed border-b-2 z-50 ">
			<NavbarBrand as={Link} href="https://flowbite-react.com">
				<img
					src="/logo.png"
					className="mr-3 sm:h-9 h-7 "
					alt="Flowbite React Logo"
				/>
				
			</NavbarBrand>
			<NavbarToggle />
			<NavbarCollapse>
				{menu.map((item, index) => (
					<NavbarLink
						key={index}
						as={Link}
						href={item.path}
						active={item.path === pathname}
						className="text-red-100 hover:text-red-60"
					>
						{item.name}
					</NavbarLink>
				))}
			</NavbarCollapse>
		</Navbar>
	);
}
