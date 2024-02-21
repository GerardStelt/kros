import { component$ } from "@builder.io/qwik";
import { SiHomebridge } from "@qwikest/icons/simpleicons";
import { HiPhoneSolid, HiEnvelopeSolid } from "@qwikest/icons/heroicons";

export default component$(() => {

    return (
        <footer>
            <div class="container mx-auto bg-neutral-100 text-neutral-600 p-8 text-center md:text-left grid gap-12 grid-cols-1 md:grid-cols-2">

                <section class="flex flex-col gap-6">
                    <h6 class="font-semibold uppercase flex gap-3 items-center justify-center md:justify-start">
                        <SiHomebridge class="text-3xl" />
                        Kros heiwerk service
                    </h6>
                    <ul class="flex flex-col gap-4">
                        <li>
                            <a href="#!" class="flex gap-2 items-center hover:underline justify-center md:justify-start">
                                <HiEnvelopeSolid class="text-xl" />
                                krosheiwerkservice@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="#!" class="flex gap-2 items-center hover:underline justify-center md:justify-start">
                                <HiPhoneSolid class="text-xl" />
                                +31 (0)6 2332 1109
                            </a>
                        </li>
                    </ul>
                </section>

                <section class="flex flex-col gap-4">
                    <h6 class="font-semibold uppercase">Diensten</h6>
                    <ul class="flex flex-col gap-4">
                        <li>
                            <a href="#!">
                                Heien op krappe locaties
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Stalen buispalen
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Houten palen
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Stalen boorpalen
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Beton/prefab palen
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            {/* <!--Copyright section--> */}
            <div class="container mx-auto py-2 text-center text-xs">
                <span>© 2024 Copyright: </span>
                <span class="font-semibold text-neutral-600">Kros heiwerk service</span>
            </div>
        </footer>
    );
});
