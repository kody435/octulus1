"use client";

import Link from "next/link";
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react";
import Image from "next/image";
import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
 


export default function MovieCard({ data }: { data: any }){
    const POPULARITY_THRESHOLD = 500;
    const trend = data.filter((movie: { popularity: any}) => movie.popularity > POPULARITY_THRESHOLD);

// Define your popularity threshold based on your requirement

    return(
      <div>
      <Carousel
            className="w-full h-96 rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                />
                ))}
            </div>
            )}
        >
            {trend.map(
                (movie: {
                    id: Key | null | undefined;
                    backdrop_path: any;
                    poster_path: any;
                    vote_average: any;
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
                        <figure className="relative h-96 w-full">
                            <Image
                            className="h-full w-full rounded-xl object-cover object-center"
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={(movie.title as string) + " poster"}
                            width={500}
                            height={500}
                            />
                            {/* <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt={(movie.title as string) + " poster"}
                                className="object-contain w-40 h-40 absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                            />                           
                            <Avatar
                              size="xl"
                              variant="circular"
                              alt={(movie.title as string) + " poster"}
                              className="border-2 border-white"
                              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            /> */}
                            
                            <figcaption className="absolute bottom-0 left-2/4 flex w-full -translate-x-2/4 justify-between rounded-xl bg-black/75 py-4 px-6 shadow-lg shadow-black/5 backdrop-blur-lg">
                                <div>
                                <h3>
                                    {movie.title}
                                </h3>
                                <h5 className="mt-2">
                                Rating: {movie.vote_average} <i className="fas fa-star star-icon text-orange-500" /> 
                                <link
                                rel="stylesheet"
                                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                                crossOrigin="anonymous"
                                referrerPolicy="no-referrer"
                                />
                                </h5>
                                </div>
                                <h4>
                                <Button variant="filled" color="orange" className="flex items-center gap-3 mt-2 rounded-full"><i className="fas fa-play" /> Play Now</Button>
                                </h4>
                            </figcaption>

                        </figure>
                    </Link>
                  )
            )}
        </Carousel>
      </div>
    );
};
