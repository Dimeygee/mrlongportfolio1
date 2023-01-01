import { AboutHeader } from "../components/aboutheader";
import { AboutContent } from "../components/aboutcontent";
import { Loader } from "../components/loader";
import Head from "next/head";



export default function About() {


    return(
        <>
            <Head>
            <meta name="description" content="Digital Product Designer Crafting Magic" />
            <meta name="keywords" content="interface design, prototyping, webflow, and product design" />
            <meta property="og:url" content="" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="" />
            <meta property="og:image" content="../public/favicon.ico" />
            <meta property="og:description" content="A Digital Sisterhood for Ambitious females to connect, educate and empower females" />
            <meta property="og:site_name" content="" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="" />
            <meta name="twitter:url" content="" />
            <meta name="twitter:title" content="" />
            <meta name="twitter:description" content="Digital Product Designer Crafting Magic" />
            <meta name="twitter:image" content="../public/favicon.ico" />
            <title>About</title>
            <link rel="icon" href="../public/favicon.ico" />
            <link rel="preload" as="image" href="https://res.cloudinary.com/dimejiscloud/image/upload/v1672127584/Image_2_wmouwx.png" />
            </Head>
            <Loader />
            <AboutHeader />
            <AboutContent /> 
        </>
    )

}