import React from 'react';
import Hero from "@/components/Landing/Hero";
import Feature from "@/components/Landing/Feature";

function Landing() {
    return (
        <div className="flex flex-col mx-auto max-w-5xl px-8">
            <Hero/>
            <Feature/>
        </div>
    );
}

export default Landing;
