import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/pro-regular-svg-icons";

export default function Return() {
  return (
    <header className="absolute top-4 flex h-14 w-full items-center text-white">
      <Link
        href="/"
        className="ml-5 flex items-center gap-2 rounded-xl bg-zinc-500 p-2 transition-all hover:scale-105 hover:bg-purple-500"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Return</p>
      </Link>
    </header>
  );
}
