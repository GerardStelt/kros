import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { SiHomebridge } from "@qwikest/icons/simpleicons";
// import Logo from '~/media/thunder.png';


export default component$(() => {
    return (
        <header>
            <div class="container mx-auto flex justify-between items-center px-8 py-12">
                <a href="/" title="home" class="flex gap-2 items-center font-semibold uppercase">
                    <SiHomebridge class="text-6xl" />
                    <span class="hidden md:block">Kros heiwerk service</span>
                    {/* <img src={Logo} width={50} height={50} /> */}
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
