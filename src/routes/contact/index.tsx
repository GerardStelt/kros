import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="container m-auto px-8 py-12">
            <div class="bg-neutral-700 p-8">
                <form class="grid md:grid-cols-2 gap-8">
                    <input type="text" name="name" id="name" placeholder="Naam" required class="p-2" />
                    <input type="text" name="name" id="name" placeholder="Bedrijfsnaam (indien van toepassing)" class="p-2" />
                    <input type="text" name="name" id="name" placeholder="Telefoonnummer" required class="p-2" />
                    <input type="email" name="name" id="name" placeholder="E-mailadres" class="p-2" />
                    <input type="text" name="name" id="name" placeholder="Plaatsnaam" class="p-2 md:col-span-2" />
                    <textarea class="p-2 md:col-span-2" placeholder="Vragen of opmerkingen?" rows={10} id="question" name="questions" />

                    <button class="bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase md:col-span-2">
                        Verstuur
                    </button>
                </form>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: "Contact | Kros heiwerk service",
    meta: [
        {
            name: "contact",
            content: "Contact formulier",
        },
    ],
};
