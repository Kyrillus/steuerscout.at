"use client"
import React, {useState} from 'react';
import {Steuerberater} from "@/types/collection";
import Image from "next/image";
import { Rating } from '@mantine/core';

function SteuerberaterCard(steuerberater: Steuerberater) {
    const [error, setError] = useState(false);
    return (
        <div className="border rounded-lg shadow p-5">
            <div className="flex justify-between">
                <div className="flex gap-10">
                    <Image unoptimized width={50} height={50} onError={() => setError(true)}
                           src={!error ? steuerberater["Logo URL"]??"/favicon.svg" : '/favicon.svg'} className="object-contain w-12 md:w-24 h-12" alt={"company_logo"} priority/>
                    <div className="flex flex-col">
                        <p className="text-sm md:text-lg">{steuerberater.Firmenname}</p>
                        <p className="text-xs md:text-sm">{steuerberater.PLZ}, {steuerberater.Stadt}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Rating value={steuerberater["Google Rating"]??0} fractions={2} readOnly />
                    <p className="text-gray-700 text-xs md:text-sm">{steuerberater["Google Rating Anzahl"]} Bewertungen</p>
                </div>

            </div>


        </div>
    );
}

export default SteuerberaterCard;
