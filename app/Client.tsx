
import Link from "next/link";
import Image from "next/image";
import React from 'react'

export default function Client({data, data2}: {data: any, data2: any}) {
  
  return (
    <>
      <div className="flex flex-col gap-10 p-5">
        {/* Top-trending showcase */}
        <div className="flex flex-row gap-5">
          <Link href={`/movies/${data[0].id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${data[0].backdrop_path}`}
                alt={data[0].title}
                width={1500}
              height={1500}
              className="object-contain flex flex-col w-full h-96 opacity-70 "
              />
          </Link>
          <h2 className="text-3xl font-semibold">{data[0].title}</h2>
        </div>
        {/* Trending Movies */}
        <h1 className="text-2xl font-light">Top Trending Movies</h1>
        <div bg-inherit></div>
      </div>
    </>
  );
}
