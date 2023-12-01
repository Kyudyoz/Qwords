import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Homepage/Hero";
import Card from "@/Components/Homepage/Card";
import Testi from "@/Components/Homepage/Testi";
import Footer from "@/Components/Homepage/Footer";

export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-neutral-800 ">
            <Head title={props.title}>
                <link rel="favicon" href="/img/logo.png" />
            </Head>
            <Navbar user={props.auth.user} />
            <Hero />
            <Card />
            <Testi />
            <Footer />
        </div>
    );
}
