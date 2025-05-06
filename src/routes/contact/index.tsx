import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="container m-auto px-8 py-12">
            <div class="bg-neutral-700 p-8">
                {/* <form class="grid md:grid-cols-2 gap-8" action="https://formsubmit.co/ec6577089bb1349d5f8f05e9ea71147b" method="post"> */}
                <form class="grid md:grid-cols-2 gap-8" action="https://formsubmit.co/marco-kros@hotmail.com" method="POST" >
                    <input type="text" name="naam" id="name" placeholder="Naam" required class="p-2" />
                    <input type="text" name="bedrijfsnaam" id="company" placeholder="Bedrijfsnaam (indien van toepassing)" class="p-2" />
                    <input type="text" name="telefoonnummer" id="phone" placeholder="Telefoonnummer" required class="p-2" />
                    <input type="email" name="email" id="email" placeholder="E-mailadres" class="p-2" />
                    <input type="text" name="plaatsnaam" id="city" placeholder="Plaatsnaam" class="p-2 md:col-span-2" />
                    <textarea class="p-2 md:col-span-2" placeholder="Vragen of opmerkingen?" rows={10} id="comment" name="opmerking" />

                    <input type="hidden" name="_next" value="https://krosheiwerkservice.nl"></input>
                    {/* <input type="hidden" name="_captcha" value="false"></input> */}

                    <button type="submit" class="bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase md:col-span-2">
                        Versturen
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
