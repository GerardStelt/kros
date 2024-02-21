import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="container m-auto p-8 flex flex-col gap-8 leading-normal">

            <h2 class="text-3xl font-bold leading-tight md:text-4xl xl:text-5xl">
                Over ons
            </h2>

            <p>
                Met onze ruime ervaring met machines voor kleine funderingen zijn wij dé specialist op het gebied van heien en boren van heipalen en boorpalen op krappe locaties.
                Wij kunnen het volledige offerte traject bij verschillende heibedrijven voor u verzorgen. Ook lichten wij toe hoe u aan een kick melding komt, waar veel heibedrijven om vragen.
            </p>

            <h3 class="text-xl font-bold leading-tight md:text-1xl xl:text-2xl">
                Wat kunt u van ons advies verwachten?
            </h3>
            <ul class="list-disc ml-5">
                <li>Welke hei- of boorpaal is het meest voordelig en welke het meest geschikt voor de heiwerkzaamheden. Dat kan zijn een houten paal, stalen buispaal, beton paal of boorpaal.</li>
                <li>Hoeveel ruimte is er nodig voor de heiwerkzaamheden</li>
                <li>We geven uitleg over de bouwput en hoe deze dient te zijn zodat de heier snel en eenvoudig kan werken</li>
                <li>De hei locatie wordt volledig op foto vastgelegd zodat het heibedrijf weet hoeveel ruimte er beschikbaar is en wat de grootte van de machine kan zijn</li>
                <li>Er worden meerdere offertes bij heibedrijven voor u opgevraagd zodat u zelf kunt kiezen welke het beste bij u past. Uiteraard begeleiden wij u hierbij.</li>
                <li>Door goed geïnformeerd te zijn kunt u veel geld besparen en komt u niet voor verrassingen te staan.</li>
            </ul>

            <div class="font-semibold text-sm text-neutral-500">
                <div>
                    Voor een vanaf prijs van <b>€200 excl. btw</b> kom ik al bij u langs en nemen we alles samen door.
                </div>
                <div>
                    U ontvangt van ons een factuur welke voor bedrijven fiscaal aftrekbaar is.
                </div>
            </div>

        </div>
    );
});

export const head: DocumentHead = {
    title: "Over ons | Kros heiwerk service",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
