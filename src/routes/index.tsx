import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import image1 from "~/media/image1.jpeg";
import image2 from "~/media/image2.jpeg";
import image3 from "~/media/image3.jpeg";
import image4 from "~/media/image4.jpeg";
import image5 from "~/media/image5.jpeg";
import image6 from "~/media/image6.jpeg";
import image7 from "~/media/image7.jpeg";
import image8 from "~/media/image8.jpeg";


export default component$(() => {
    return (
        <div class="container m-auto p-8 flex flex-col gap-20">

            {/* intro */}
            <section>
                <h2 class="mb-2 text-3xl font-bold leading-tight md:text-4xl xl:text-5xl">
                    Uw heiwerk specialist
                </h2>
                <p class="text-lg">
                    Met onze ruime ervaring met machines voor kleine funderingen zijn wij dé specialist op het gebied van heien en boren van heipalen en boorpalen op krappe locaties.
                    Wij kunnen het volledige offerte traject bij verschillende heibedrijven voor u verzorgen. Ook lichten wij toe hoe u aan een kick melding komt, waar veel heibedrijven om vragen.
                </p>
            </section>

            {/* shots */}
            <section class="grid md:grid-cols-2 gap-8">

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 md:h-auto w-full object-cover md:w-1/3 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image1} />
                    <div class="flex flex-col p-6">
                        <h5
                            class="mb-2 text-xl font-medium text-neutral-800">
                            Torenkraan
                        </h5>
                        <p class="mb-4 text-base text-neutral-600">
                            Heistelling wordt met een mobiele torenkraan over een flat gehesen om daar te heien voor een fundatie voor een aanbouw.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 md:h-auto w-full object-cover md:w-1/3 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image2} />
                    <div class="flex flex-col p-6">
                        <h5
                            class="mb-2 text-xl font-medium text-neutral-800">
                            Stalen buispalen
                        </h5>
                        <p class="mb-4 text-base text-neutral-600">
                            Stalen buispalen heien in huis. Door korte elementen aan elkaar te lassen kom je toch op het gewenste inheiniveau .
                        </p>
                    </div>
                </div>

            </section>

            {/* services */}
            <section class="self-center">
                <ul class="grid auto-rows-fr md:grid-cols-2 md:gap-20 items-center gap-6">
                    <li>
                        <a href="#" class="flex items-center gap-4 hover:underline">
                            <img src={image3} class="w-32 object-fit rounded-lg shadow-lg" />
                            <span class="font-bold text-xl">Heien op krappe locaties</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center gap-4 hover:underline">
                            <img src={image5} class="w-32 object-fit rounded-lg shadow-lg" />
                            <span class="font-bold text-xl">Stalen buispalen</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center gap-4 hover:underline">
                            <img src={image6} class="w-32 object-fit rounded-lg shadow-lg" />
                            <span class="font-bold text-xl">Houten palen</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center gap-4 hover:underline">
                            <img src={image7} class="w-32 object-fit rounded-lg shadow-lg" />
                            <span class="font-bold text-xl">Stalen boorpalen</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center gap-4 hover:underline">
                            <img src={image8} class="w-32 object-fit rounded-lg shadow-lg" />
                            <span class="font-bold text-xl">Beton/prefab palen</span>
                        </a>
                    </li>
                </ul>
            </section>


            <div class="grid md:grid-cols-2 gap-8">

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg" src={image3} />
                    <div class="p-6 flex flex-col w-full justify-between">
                        <div>
                            <h3
                                class="mb-2 text-xl font-medium text-neutral-800">
                                Heien op krappe locaties
                            </h3>
                            <p class="mb-4 text-base text-neutral-600">
                                Korte introductie
                            </p>
                        </div>
                        <button
                            type="button"
                            href="#"
                            class="w-full self-end md:w-2/5 inline-block rounded bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-xl focus:bg-blue-600 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-xl"
                        >
                            Meer informatie
                        </button>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row rounded-lg bg-white shadow-2xl">
                    <img class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-1/3 md:rounded-none md:rounded-l-lg" src={image4} />
                    <div class="p-6 flex flex-col w-full justify-between">
                        <div>
                            <h3
                                class="mb-2 text-xl font-medium text-neutral-800">
                                Stalen buizen
                            </h3>
                            <p class="mb-4 text-base text-neutral-600">
                                Korte introductie
                            </p>
                        </div>
                        <button
                            type="button"
                            href="#"
                            class="w-full self-end md:w-2/5 inline-block rounded bg-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-xl focus:bg-blue-600 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-xl"
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
            name: "description",
            content: "Qwik site description",
        },
    ],
};
