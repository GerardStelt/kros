import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="container m-auto p-8 flex flex-col gap-8">

            <h2 class="text-3xl font-bold leading-tight md:text-4xl xl:text-5xl">
                Prijzen
            </h2>

            <ul class="list-disc flex flex-col gap-4 ml-5">
                <li>Advies vanaf €200,- excl. btw</li>
                <li>Advies incl. 3 offertes vanaf €300,- excl. btw</li>
                <li>Advies incl. 5 offertes vanaf €400,- excl. btw</li>
            </ul>

            <div class="font-semibold text-neutral-500 text-sm">Inclusief de eerste 40km, daarna €1,- per gereden kilometer (gerekend vanaf postcode 4214)</div>

        </div>
    );
});

export const head: DocumentHead = {
    title: "Prijzen | Kros heiwerk service",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
