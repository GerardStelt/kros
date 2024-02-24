import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="container m-auto p-8 flex flex-col gap-8 leading-normal">

            <h2 class="text-3xl font-bold md:text-4xl xl:text-5xl">
                Beton / prefab heipalen
            </h2>

            <p>
                Prefab heipalen worden het meest gebruikt voor heiwerkzaamheden.
                Het is ook één van de goedkoopste en snelste manieren van heien.
                In één dag kan een eensgezinswoning geheid worden.
            </p>

            <p>
                Voor prefab heipalen op een krappe locatie kunnen de prefab palen niet langer zijn dan ongeveer 10 meter.
                Dit omdat anders de heimachine te groot wordt. <br />
                Moeten de heipalen langer zijn dan worden stalen buispalen- of boorpalen gebruikt.
            </p>

            <p>
                Op elke prefab heipaal zit een kaartje met daarop de leverancier, productiedatum en het gewicht van de prefab paal.
                De prefab heipaal <u>moet uitgehard zijn</u> voordat deze de grond ingeslagen wordt.
            </p>

            <a href="/media/kros_beton-prefab-kaartje.jpeg" target="_blank" class="max-w-xs">
                <img src="/media/kros_beton-prefab-kaartje.jpeg" />
            </a>

        </div>
    );
});

export const head: DocumentHead = {
    title: "Beton-prefab | Kros heiwerk service",
    meta: [
        {
            name: "beton-prefab",
            content: "Beton/prefab heipalen",
        },
    ],
};
