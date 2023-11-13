import HomeHeader from "@/components/HomeHeader";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center justify-center gap-5 mt-24">
        <Image
          src={"/Google_logo.png"}
          width={300}
          height={300}
          alt="logo google"
        />
        <SearchBar />
      </div>
    </div>
  );
}
