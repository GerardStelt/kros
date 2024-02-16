import { component$ } from "@builder.io/qwik";
import { SiHomebridge } from "@qwikest/icons/simpleicons";

export default component$(() => {

    return (
        <footer>
            <div class="container mx-auto p-8 bg-neutral-100 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <section class="flex flex-col gap-4">
                    <div class="flex gap-2 items-center font-semibold uppercase">
                        <SiHomebridge class="text-2xl" />
                        Kros heiwerk service
                    </div>
                    <div>Adres regel 1</div>
                    <div>Adres regel 2</div>
                    <div>Adres regel 3</div>
                </section>

                <section>
                    <h1>Openingstijden</h1>
                </section>

                <section>
                    <h1>Producten</h1>
                </section>

                <section>
                    <h1>Social media</h1>
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
