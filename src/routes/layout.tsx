import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";

export const onGet: RequestHandler = async ({ cacheControl }) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.builder.io/docs/caching/
    cacheControl({
        // Always serve a cached response by default, up to a week stale
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
        maxAge: 5,
    });
};

export default component$(() => {
    return (
        <>
            {/* <a href="/contact" class="fixed top-0 inset-x-0 max-w-max mx-auto bg-orange-500 px-4 p-2 rounded-b-xl text-white leading-none font-semibold">offerte</a> */}
            <a href="/contact" class="fixed left-full -translate-x-[67px] inset-y-0 max-h-max my-auto bg-orange-500 px-4 p-2 rounded-b-xl text-white leading-none font-semibold rotate-90 uppercase">offerte</a>
            <Header />
            <main>
                <Slot />
            </main>
            <Footer />
        </>
    );
});
