import Return from "~/components/return";
import LibObject from "~/components/libobject";
import CustomFilter from "~/components/custom-filter";

export default function Library() {
  return (
    <main className="flex h-screen w-full justify-center px-10 pb-10 pt-20">
      <Return />
      <section className="grid-rows grid min-h-screen w-full auto-cols-max auto-rows-min gap-y-8 grid-cols-4 overflow-auto rounded-lg bg-black/20 p-8 transition-colors place-items-center">
        <LibObject><CustomFilter /></LibObject>
        <LibObject>Teste</LibObject>
        <LibObject>Teste</LibObject>
        <LibObject>Teste</LibObject>
        <LibObject>Teste</LibObject>
      </section>
    </main>
  );
}
