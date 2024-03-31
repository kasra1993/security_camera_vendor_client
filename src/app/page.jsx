import React from "react";
import { HomeContainer } from "../components";

export default function Home() {
  console.log(process.env.VITE_REACT_APP);
  return (
    <main className="flex  flex-col items-center justify-between  overflow-hidden pb-32">
      <HomeContainer />
    </main>
  );
}
