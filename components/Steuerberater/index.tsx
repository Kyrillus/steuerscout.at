import React from 'react';
import {Steuerberater} from "@/types/collection";
import SteuerberaterCard from "@/components/Steuerberater/SteuerberaterCard";

async function getSteuerberater() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/steuerberater`, {cache: 'no-store'})
    const steuerberater = await res.json()

    return steuerberater.data
}

async function SteuerberaterView() {
    const steuerberaterList: Steuerberater[] = await getSteuerberater()

    return (
        <div className="max-w-5xl mx-auto gap-5 flex flex-col my-12 px-2">
            <h1 className="text-3xl font-semibold py-5">Finde deinen idealen Steuerberater</h1>
            <p className="text-gray-700">{steuerberaterList.length} Steuerberater</p>
            {/* Liste aller Steuerberater */}
            {steuerberaterList.map((steuerberater: Steuerberater) => (
                <SteuerberaterCard {...steuerberater}/>
            ))}
        </div>
    );
}

export default SteuerberaterView;
