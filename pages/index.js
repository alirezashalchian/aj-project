import Head from "next/head";
import ResponsiveAppBar from "@/Components/Navbar";

export default function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <Head>
        <title>Home</title>
      </Head>
    </div>
  );
}
