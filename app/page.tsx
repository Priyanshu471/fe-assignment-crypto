import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center h-screen">
      <h1>This is the home page for Koinx Assignment</h1>
      <Link href="/bitcoin" className="text-xl underline text-blue-900">
        For Assignment please refer
      </Link>
    </main>
  );
}
