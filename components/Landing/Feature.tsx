import React from 'react';
import Image from "next/image";

function Feature() {
    return (
        <div className="flex md:flex-row flex-col flex-col-reverse my-24 gap-12 items-center">
            <Image alt={"berater_stock"} className="rounded-lg shadow object-cover shadow-gray-500" src={'/landing/stock_berater.jpg'} width={400} height={200} priority/>
            <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-bold">Österreichs größte Steuerberater <span className="text-primary">Datenbank</span></h1>
                <p className="text-gray-700">Ganz gleich, ob Sie komplexe Steuerfragen klären oder Ihre Jahresabrechnung optimieren möchten – hier treffen Sie auf Experten, die Sie zielführend unterstützen.</p>
            </div>
        </div>
    );
}

export default Feature;
