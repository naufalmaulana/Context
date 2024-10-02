import { News, Tags } from "@/types";
import Card from "@/components/card";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  let response = await fetch("https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=548P14k8GEhOfB4nbi09PeKk8ALDvtB3");
  if (!response.ok) throw Error("error fetch data");
  const data = await response.json();
  console.log(data.results[0].des_facet[0]);
  
  let posts: News[] = data.results;
  let tags: Tags[] = data.results;
  let headline = posts[0];
  let headlineImage = headline.media?.[0]?.['media-metadata']?.[2]?.url || "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <>
      <main className="bg-zinc-950">
        <div className="home container m-auto py-12">
          <div className="flex flex-col md:flex-row md:justify-center items-center md:items-start">
            <div className="homeLeft w-full md:w-8/12 px-6">
              <Link href={headline.url}>
                <div className="homeLeftHeadline bg-base-100 shadow-xl rounded-lg overflow-hidden mb-6 relative">
                  <div className="homeLeftHeadlineImage h-64 md:h-96 overflow-hidden">
                    <img src={headlineImage} 
                    alt="title" className="w-full h-full object-cover" />
                  </div>

                  <div className="homeLeftHeadlineMasking absolute w-full h-full top-0 left-0"></div>

                  <div className="homeLeftHeadlineContent p-6 absolute bottom-0 left-0">
                    <p className="badge badge-ghost">{headline.section}</p>
                    <h1 className="text-3xl font-bold text-white mt-2 line-clamp-2">{headline.title}</h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="homeRight w-full md:w-4/12 px-6">
              <div className="homeRightAds w-full h-32 md:h-48 relative bg-slate-200 flex justify-center items-center mb-2">
                  <p className="m-0 text-slate-500 text-sm text-center font-bold">
                    CONTEXT <br />
                    advertisement
                  </p>
              </div>
              <div className="homeRightTags">
                <h2 className="m-0 text-xl uppercase text-white">
                  popular tags
                </h2>
                <div className="homeRightTagsContent">
                  {tags.slice(0, 6).map((el: Tags, i: number) => (
                    <div className="badge badge-ghost badge-lg inline-block m-1 black" key={i}>{el.des_facet[0]}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl uppercase text-white text-center mt-12 mb-8">most popular</h2>
          <div className="flex flex-wrap justify-between">
            {posts.map((el: News) => (
              <Card data={el} key={el.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
