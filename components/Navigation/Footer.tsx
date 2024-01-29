import React from 'react';
import {Divider} from "@mantine/core";

function Footer() {
    return (
        <section className="relative py-20 overflow-hidden">

            <Divider my="md" />
            <div className="mt-15 text-center">
                <span className="text-gray-500">&copy; 2024 WeAmplify e.U. All rights reserved.</span>
            </div>

        </section>
    );
}

export default Footer;
