
"use client";

import { Footer } from "flowbite-react";


export default function FooterComponent() {
  return (
    <Footer container>
      <Footer.Copyright href="/" by="Discover™" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="/">Home</Footer.Link>
        <Footer.Link href="/service">Service</Footer.Link>
        <Footer.Link href="/about">About</Footer.Link>
        <Footer.Link href="/contact">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
