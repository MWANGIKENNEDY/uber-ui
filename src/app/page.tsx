import Footer from "@/components/Footer";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import { MediumCardType, Nearby } from "@/utils/types";

export default async function Page() {
  const data = await getData();

  const data2 = await getData2();
  return (
    <>
      <main className=" max-w-7xl mx-auto  px-8 sm:px-16">
        <section className=" pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map((dataItem: Nearby) => (
              <SmallCard key={dataItem.id} dataItem={dataItem} />
            ))}
          </div>
        </section>
        <section>
          <h2 className=" text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex overflow-scroll  space-x-4 scrollbar-hide p-3 -ml-5  ">
            {data2?.map((data: MediumCardType) => (
              <MediumCard data={data} />
            ))}
          </div>
        </section>
        <LargeCard />
      </main>
      <Footer />
    </>
  );
}

async function getData() {
  const exploreData = await fetch("http://localhost:8000/nearby");
  return exploreData.json();
}

async function getData2() {
  const exploreData = await fetch("http://localhost:8000/live-anywhere");
  return exploreData.json();
}
