import SmallCard from "@/components/SmallCard";
import { Nearby } from "@/utils/types";

export default async function Page() {
  const data = await getData();
  return (
    <main className=" max-w-7xl mx-auto  px-8 sm:px-16">
      <section className=" pt-6 ">
        <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        {data?.map((dataItem : Nearby) => (
          <SmallCard key={dataItem.id} dataItem={dataItem}/>
        ))}
      </section>
    </main>
  );
}

async function getData() {
  const exploreData = await fetch("http://localhost:8000/nearby");
  return exploreData.json();
}
