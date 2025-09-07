import { component$ } from "@builder.io/qwik";
import { type DocumentHead, useNavigate } from "@builder.io/qwik-city";


export default component$(() => {

    const nav = useNavigate();

    return (
        <div class="container m-auto p-8 flex flex-col gap-20">

            {/* intro */}
            <section>
                <h2 class="mb-2 text-3xl font-bold leading-tight md:text-4xl xl:text-5xl">
                    Uw heiwerk specialist
                </h2>
                <p class="text-lg">
                    Met onze ruime ervaring met machines voor kleine funderingen zijn wij dé specialist op het gebied van heien en boren van heipalen en boorpalen op krappe locaties.
                    Wij kunnen het volledige offerte traject bij verschillende heibedrijven voor u verzorgen. Ook lichten wij toe hoe u aan een Klic melding komt, waar veel heibedrijven om vragen.
                </p>
            </section>

            {/* shots */}
            <section class="grid md:grid-cols-2 gap-8">

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 md:h-auto w-full object-cover md:w-1/2 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/media/kros_heistelling-over-flat.jpeg" />
                    <div class="flex flex-col p-6">
                        <p class="mb-4 text-base text-neutral-600">
                            Heistelling wordt met een mobiele torenkraan over een flat gehesen om daar te heien voor een fundatie voor een aanbouw.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 md:h-auto w-full object-cover md:w-1/2 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/media/kros_kleine-heistelling-binnen.jpeg" />
                    <div class="flex flex-col p-6">
                        <p class="mb-4 text-base text-neutral-600">
                            Stalen buispalen heien in huis. Door korte elementen aan elkaar te lassen kom je toch op het gewenste inheiniveau .
                        </p>
                    </div>
                </div>

            </section>

            <div class="flex flex-col gap-8">
                <h2 class="font-bold leading-tight text-3xl md:text-4xl">
                    Wat kunt u van ons advies verwachten
                </h2>

                <ul class="list-disc ml-5 leading-loose">
                    <li>Welke hei- of boorpaal het meest voordelig- en welke het meest geschikt is voor de heiwerkzaamheden. Dat kan zijn een houten paal, stalen buispaal, beton paal of boorpaal.</li>
                    <li>Hoeveel ruimte er nodig is voor de heiwerkzaamheden.</li>
                    <li>We geven uitleg over de bouwput en hoe deze opgezet dient te zijn zodat de heier snel en eenvoudig kan werken.</li>
                    <li>De hei locatie wordt volledig op foto vastgelegd zodat het heibedrijf weet hoeveel ruimte er beschikbaar is en wat de grootte van de machine kan zijn.</li>
                    <li>Er worden meerdere offertes bij heibedrijven voor u opgevraagd zodat u zelf kunt kiezen welke het beste bij u past. Uiteraard begeleiden wij u hierbij.</li>
                    <li>Door goed geïnformeerd te zijn kunt u veel geld besparen en komt u niet voor verrassingen te staan.</li>
                </ul>

            </div>

            {/* services */}
            <div class="grid md:grid-cols-2 gap-8 auto-rows-fr">

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg" src="/media/kros_krappe-locatie.jpeg" />
                    <div class="p-6 flex flex-col w-full justify-between">
                        <div>
                            <h3
                                class="mb-2 text-xl font-medium text-neutral-800">
                                Heien op krappe locaties
                            </h3>
                            {/* <p class="mb-4 text-base text-neutral-600">
                                Korte introductie
                            </p> */}
                        </div>
                        <button
                            onClick$={() => nav("/krappe-locaties")}
                            type="button"
                            class="w-full self-end md:w-2/5 inline-block rounded bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out focus:bg-blue-600 focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-xl"
                        >
                            Meer informatie
                        </button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg" src="/media/kros_stalen-buispalen-gestapeld.jpeg" />
                    <div class="p-6 flex flex-col w-full justify-between">
                        <div>
                            <h3
                                class="mb-2 text-xl font-medium text-neutral-800">
                                Stalen buispalen
                            </h3>
                            {/* <p class="mb-4 text-base text-neutral-600">
                                Korte introductie
                            </p> */}
                        </div>
                        <button
                            onClick$={() => nav("/stalen-buis")}
                            type="button"
                            class="w-full self-end md:w-2/5 inline-block rounded bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out focus:bg-blue-600 focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-xl"
                        >
                            Meer informatie
                        </button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg" src="/media/kros_houten-palen-gestapeld.jpeg" />
                    <div class="p-6 flex flex-col w-full justify-between">
                        <div>
                            <h3
                                class="mb-2 text-xl font-medium text-neutral-800">
                                Houten heipalen
                            </h3>
                            {/* <p class="mb-4 text-base text-neutral-600">
                                Korte introductie
                            </p> */}
                        </div>
                        <button
                            onClick$={() => nav("/houten-palen")}
                            type="button"
                            class="w-full self-end md:w-2/5 inline-block rounded bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out focus:bg-blue-600 focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-xl"
                        >
                            Meer informatie
                        </button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg" src="/media/kros_beton-prefab-gestapeld.jpeg" />
                    <div class="p-6 flex flex-col w-full justify-between">
                        <div>
                            <h3
                                class="mb-2 text-xl font-medium text-neutral-800">
                                Beton / prefab heipalen
                            </h3>
                            {/* <p class="mb-4 text-base text-neutral-600">
                                Korte introductie
                            </p> */}
                        </div>
                        <button
                            onClick$={() => nav("/beton-prefab")}
                            type="button"
                            class="w-full self-end md:w-2/5 inline-block rounded bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out focus:bg-blue-600 focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-xl"
                        >
                            Meer informatie
                        </button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg" src="/media/kros_stalen-boorpalen-gestapeld.jpeg" />
                    <div class="p-6 flex flex-col w-full justify-between">
                        <div>
                            <h3
                                class="mb-2 text-xl font-medium text-neutral-800">
                                Stalen boorpalen
                            </h3>
                            {/* <p class="mb-4 text-base text-neutral-600">
                                Korte introductie
                            </p> */}
                        </div>
                        <button
                            onClick$={() => nav("/stalen-boor")}
                            type="button"
                            class="w-full self-end md:w-2/5 inline-block rounded bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out focus:bg-blue-600 focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-xl"
                        >
                            Meer informatie
                        </button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg" src="/media/kros_heimachine-klein.jpeg" />
                    <div class="p-6 flex flex-col w-full justify-between">
                        <div>
                            <h3
                                class="mb-2 text-xl font-medium text-neutral-800">
                                Algemene informatie over heien
                            </h3>
                        </div>
                        <button
                            onClick$={() => nav("/overig")}
                            type="button"
                            class="w-full self-end md:w-2/5 inline-block rounded bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out focus:bg-blue-600 focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-xl"
                        >
                            Meer informatie
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
});

export const head: DocumentHead = {
    title: "Home | Kros heiwerk service",
    meta: [
        {
            name: "Kros heiwerk service",
            content: "Kros heiwerk service | Voor het beste advies omtrent heien",
        },
    ],
};
