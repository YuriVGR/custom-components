import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/pro-solid-svg-icons";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-gradient-to-b text-white">
      <div className="container flex flex-col items-center gap-8">
        <h1 className="text-5xl font-semibold sm:text-7xl select-none">
          ur/<span className="font-black bg-gradient-to-b from-purple-600 to-purple-900 bg-clip-text text-transparent">UI</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-8">
          <Link
            href="/library"
            className="flex max-w-xs flex-col gap-2 rounded-lg bg-zinc-500/40 p-4 transition-all hover:scale-105 hover:bg-purple-500/40"
          >
            <h3 className="text-2xl font-semibold">Library</h3>
            <div className="text-lg">
              Access to my library - Everything Component on this pack, either
              install or copy/paste
            </div>
          </Link>
          <Link
            href="/docs"
            className="flex max-w-xs flex-col gap-2 rounded-lg bg-zinc-500/40 p-4 transition-all hover:scale-105 hover:bg-purple-500/40"
          >
            <h3 className="text-2xl font-semibold">Docs</h3>
            <div className="text-lg">
              Documentation - Everything you need to know to set up your
              project and components.
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
