import { News } from "@/types";
import Link from "next/link";
export default function Card({ data }: { data: News }) {
const imageUrl = data.media?.[0]?.['media-metadata']?.[2]?.url || "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";;
// console.log(imageUrl);

  return (
    <>
        <Link href={data.url} className="d-block w-full md:w-4/12 p-5 md:p-2">
            <div className="card bg-transparent text-white w-full shadow-xl">
                <figure>
                    <img
                    src={imageUrl}
                    alt={data.title} />
                </figure>
                <div className="card-body px-0">
                    <div className="badge badge-neutral">{data.section}</div>
                    <h2 className="card-title line-clamp-2">{data.title}</h2>
                    <p className="line-clamp-3">{data.abstract}</p>
                </div>
            </div>
        </Link>
    </>
  )
}
