import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="container m-auto p-8 flex flex-col gap-8 leading-normal">

            <h2 class="text-3xl font-bold md:text-4xl xl:text-5xl">
                Heien op krappe locaties
            </h2>

            <p>
                Heien op krappe locaties is bijvoorbeeld:
            </p>

            <ul class="list-disc ml-5 leading-loose">
                <li>Aanbouw achter een huis</li>
                <li>Erker voor het huis</li>
                <li>Terras onderheien</li>
                <li>Inpandig heien in een huis of bedrijfspand</li>
                <li>Onder een huis voor een kelder</li>
                <li>Grote machines onderheien</li>
                <li>Achter een flat heien</li>
            </ul>

            <p>
                Dit wordt gedaan met boorpalen, stalen buispalen, kleine betonnen palen en houten palen.
            </p>

        </div>
    );
});

export const head: DocumentHead = {
    title: "Krappe locaties | Kros heiwerk service",
    meta: [
        {
            name: "Krappe locaties",
            content: "Heien op krappe locaties",
        },
    ],
};
