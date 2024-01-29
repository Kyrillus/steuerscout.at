import React from 'react';
import Image from "next/image";
import Link from 'next/link';

function Hero() {
    return (
        <div className="flex my-24 gap-12 items-center">
            <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-bold">Ihr idealer Steuerberater - nur <span className="text-primary">einen Klick</span> entfernt.
                </h1>
                <p className="text-gray-700">Finden Sie mit Leichtigkeit den passenden Steuerberater, der Ihre
                    finanziellen Ziele versteht und Sie effektiv unterstützt. Vertrauen und Expertise vereint</p>
                <Link className="hidden md:block" href="/steuerberater">
                    <button className="bg-primary rounded px-8 py-1.5 text-center w-fit text-white mt-5">Steuerberater
                        finden
                    </button>
                </Link>
            </div>

            <Image alt={"law_statue"} className="rounded-lg shadow object-cover shadow-gray-500 hidden md:block"
                   src={'/landing/law_statue.jpg'} width={300} height={500} priority/>

        </div>
    );
}

export default Hero;
