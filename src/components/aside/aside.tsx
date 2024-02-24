import { component$, useSignal } from "@builder.io/qwik";


export default component$(() => {

    const open = useSignal(false);

    return (
        <aside class={{ "w-screen h-screen fixed flex flex-col -translate-y-full top-[33px] transition-transform duration-500": true, "!top-0 !translate-y-0": open.value }}>
            <div class="grow flex justify-center items-center bg-white">Offerte formulier</div>
            <div class="text-center">
                <button
                    onClick$={() => open.value = !open.value}
                    type="button"
                    class="rounded-b-2xl bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-tight text-white">
                    Offerte
                </button>
            </div>
        </aside>
    );
});
