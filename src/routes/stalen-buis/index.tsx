import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="container m-auto p-8 flex flex-col gap-8 leading-normal">

            <h2 class="text-3xl font-bold md:text-4xl xl:text-5xl">
                Stalen buispalen
            </h2>

            <p>
                Stalen buispalen worden het meest gebruikt voor het heien op krappe locaties. Dit komt omdat ze weinig trillingen geven en het maakt minder geluid dan bijvoorbeeld
                het heien van betonnen palen of houten palen.
                Nog een reden dat het veel gebruikt wordt is dat je de ijzeren elementen op maat kunt zagen of slijpen.
                Zo kan er geheid worden op locaties met een beperkte werkhoogte.
            </p>

            <p>
                Er zijn verschillende diameter stalen buispalen. <br />
                De meest voorkomende zijn:
            </p>

            <p>
                168mm <br/>
                219mm <br />
                273mm <br />
                324mm
            </p>

            <p>
                De diameter is afhankelijk van de paalbelasting die de stalen buis krijgt.
            </p>

            <p>
                In de stalen buispaal gaat beton en de bovenste 3 meter kopwapening.
            </p>

            <p>
                In de stalen buispaal gaat grind, grind geeft een demping voor de voetplaat die onderop de paal gelast is.
                Zonder grind sla je de voetplaat er onderuit. <br />
                De stalen elementen worden aan elkaar gelast, zo wordt de stalen buispaal naar het gewenste inheiniveau geheid. <br />
                De stalen buispaal wordt rondom afgelast, zo voorkom je dat er grondwater in de stalen buispaal komt.
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
