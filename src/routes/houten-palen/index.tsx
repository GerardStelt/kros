import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="container m-auto p-8 flex flex-col gap-8 leading-normal">

            <h2 class="text-3xl font-bold md:text-4xl xl:text-5xl">
                Houten heipalen
            </h2>

            <p>
                Houten palen worden gebruikt kleine objecten, niet meer onder huizen of andere grote gebouwen. <br />
                Houten palen heien is de goedkoopste manier van heien, echter veroorzaakt het wel wat meer trillingen. <br />
                Tevens mogen houten palen niet erg zwaar belast worden. <br />
                Op de houten paal gaat een betonnen oplanger, dit zorgt er voor dat de houten paal goed in het grondwater staat en zo niet gaat rotten.
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
