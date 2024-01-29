import React from 'react';
import Link from "next/link";

function Header() {
    return (
        <div className="w-full px-8 py-4 flex justify-between items-center">
            <Link href="/">
                <img className="h-10 md:h-14 w-auto" alt="steuerscout logo" src="/logo.png"/>
            </Link>
            <Link className="hidden md:block" href="/steuerberater">
                <p className="underline">Steuerberater</p>
            </Link>
        </div>
    );
}

export default Header;
