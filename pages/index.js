import Head from 'next/head'
import { Header } from '../components/header'
import { Main } from '../components/main'
import { Loader } from '../components/loader'
import favicon from "../public/favicon.ico"


export default function Home() {


  return (
    <div >
      <Head>
        <meta name="description" content="Digital Product Designer Crafting Magic" />
        <meta name="keywords" content="interface design, prototyping, webflow, and product design" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:image" content="../public/favicon.ico" />
        <meta property="og:description" content="Digital Product Designer Crafting Magic" />
        <meta property="og:site_name" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="Digital Product Designer Crafting Magic" />
        <meta name="twitter:image" content="../public/favicon.ico" />
        <title>Home</title>
        <link rel="icon" href="../public/favicon.ico" />
          <link rel="preload" as="image" href="https://res.cloudinary.com/dimejiscloud/image/upload/v1669638914/mrlongwiththepose_cufhyc.png" />
      </Head>
      <Loader />
      <Header />
      <Main />
    </div>
  )
}
