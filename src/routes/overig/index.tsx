import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="container m-auto p-8 flex flex-col gap-8 leading-normal">

            <h2 class="text-3xl font-bold md:text-4xl xl:text-5xl">
                Algemene informatie over heien
            </h2>

            <h3 class="font-bold text-2xl md:text-3xl xl:text-4xl">
                Sonderen
            </h3>

            <p>
                Sonderen is bodemonderzoek. Dit gebeurd vaak vóór het heiwerk.
                Door een bodemonderzoek te doen kunnen we zien hoe lang de heipaal moet worden.
                Op het sonderingsrapport van onderstaande foto is te zien dat een heipaal ongeveer 19 meter lang dient te zijn.
            </p>


            <a href="/media/sonderen.jpeg" target="_blank" class="max-w-xs">
                <img src="/media/sonderen.jpeg" />
            </a>

            <p>
                Maaiveld hoogte is -1 meter N.A.P. en het gewenste inheiniveau is -20 meter N.A.P.
                Dat is een verschil van 19 meter en dus tevens de benodigde heipaal lengte.
            </p>

            <p>
                Door meerdere sonderingen te maken kan de benodigde heipaal lengte nauwkeuriger worden bepaald.
            </p>

            <h3 class="font-bold text-2xl md:text-3xl xl:text-4xl">
                Trillingsmeters
            </h3>

            <p>
                Trillingsmeters zijn meters die trillingen waarnemen.
                Door de trillingen te monitoren kunnen we zien of deze binnen de norm blijven.
            </p>

            <a href="/media/trillingsmeter.jpeg" target="_blank" class="max-w-xs">
                <img src="/media/trillingsmeter.jpeg" />
            </a>


            <h3 class="font-bold text-2xl md:text-3xl xl:text-4xl">
                Kalenderen van heipalen
            </h3>

            <p>
                Door op de laatste meters van de heipaal om de 25cm strepen te zetten, vervolgens het aantal slagen te tellen,
                kan een constructeur berekenen of de heipaal draagkrachtig is.
                De constructeur wil geïnformeerd worden over het gewicht van het heiblok en de valhoogte
            </p>

            <a href="/media/kalenderen.jpeg" target="_blank" class="max-w-xs">
                <img src="/media/kalenderen.jpeg" />
            </a>

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
