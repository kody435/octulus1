"use client";

import Link from "next/link";
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react";
import Image from "next/image";
import React from 'react';


export default function MovieCard(data){
    const trend = data.filter((movie) => movie.popularity > POPULARITY_THRESHOLD);

// Define your popularity threshold based on your requirement
const POPULARITY_THRESHOLD = 500;
    return(

    );
};
