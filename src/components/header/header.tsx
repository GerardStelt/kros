import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { SiHomebridge } from "@qwikest/icons/simpleicons";


export default component$(() => {
    return (
        <header>
            <div class="container mx-auto flex justify-between items-center px-8 py-4">
                <a href="/" title="home" class="flex flex-col font-black uppercase leading-3">
                    <span class="text-4xl md:text-8xl">KHS</span>
                    <span class="hidden md:block tracking-tight ml-1">Kros heiwerk service</span>
                </a>
                <nav class="flex gap-8 whitespace-nowrap">
                    <Link prefetch href="/">Home</Link>
                    <Link prefetch href="/prijzen">Prijzen</Link>
                    <Link prefetch href="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
});
