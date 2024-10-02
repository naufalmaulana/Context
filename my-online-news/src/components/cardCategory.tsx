import { NewsCategory } from "@/types";
import Link from "next/link";
export default function CardCategory({ data }: { data: NewsCategory }) {
    // console.log(data.multimedia[0].url);
    let imgUrl = data.multimedia[0].url;
  return (
    <>
    <Link href={data.url} className="d-block w-full md:w-4/12 p-5 md:p-2">
        <div className="card bg-transparent text-white w-full shadow-xl">
            <figure>
                <img
                src={imgUrl}
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
