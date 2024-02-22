import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="container m-auto p-8 flex flex-col gap-8 leading-normal">

            <h2 class="text-3xl font-bold md:text-4xl xl:text-5xl">
                Stalen boorpalen
            </h2>

            <p>
                Stalen boorpalen worden gebruikt op locaties waar geen trillingen mogen ontstaan.
                Denk bijvoorbeeld aan monumentale gebouwen of naast oude huizen die niet onderheid zijn.
            </p>

            <p>
                Nadelen van stalen boorpalen zijn dat ze meer tijd in beslag nemen en dat de kosten hoger zijn. <br/>
                Dit komt doordat het ijzer dikker moet zijn dan bij stalen buispalen.
            </p>

            <p>
                Na het boren wordt de boorpaal gevuld met beton en gaat er kopwapening in.
            </p>

        </div>
    );
});

export const head: DocumentHead = {
    title: "Stalen buispalen | Kros heiwerk service",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
