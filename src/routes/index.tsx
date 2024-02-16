import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container m-auto px-8 py-12">
        <div class="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2">
            <div class="bg-neutral-500 text-white">uitleg over foto</div>
            <div class="flex justify-center">
                <img src="https://picsum.photos/250" class="w-full h-full object-contain" />
            </div>
        </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home | Kros heiwerk service",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
