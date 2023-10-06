
import Link from "next/link";
import Image from "next/image";
import React from 'react'
import MovieCard from "@/components/MovieCard";


export default function Client({data, data2}: {data: any, data2: any}) {
  
  return (
    <>
    <div className="flex flex-col gap-10 p-5">
      <div className="bg-inherit">
        <MovieCard data = { data } />
      </div>
      <h1 className="text-4xl font-bold">Top Trending Movies</h1>

      <div bg-inherit>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 bg-inherit ">
          {data2.map(
            (movie: {
              id: Key | null | undefined;
              poster_path: any;
              title:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | PromiseLikeOfReactNode
                | null
                | undefined;
            }) => (
              <Link
                href={`/movie/${movie.id}`}
                key={movie.id}
                className="flex flex-col gap-1 justify-start items-center "
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={(movie.title as string) + " poster"}
                  className="w-full h-56 rounded-xl"
                  width={200}
                  height={450}
                />
                <div className="flex flex-col gap-5 ">
                  <h2 className="text-md font-light text-center">
                    {movie.title}
                  </h2>
                </div>
              </Link>
            )
          )}
        </div>
        {/* Trending Movies */}
        <h1 className="text-2xl font-light">Top Trending Movies</h1>
        <div bg-inherit></div>
      </div>
    </>
  );
}
