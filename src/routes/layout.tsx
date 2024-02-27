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
            <a href="/contact" class="fixed top-0 left-1/2 bg-orange-500 px-4 p-2 rounded-b-xl text-white leading-none font-semibold">offerte</a>
            <Header />
            <main>
                <Slot />
            </main>
            <Footer />
        </>
    );
});
