import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <h1>Life Tracker</h1>
      <div>
        <Link href="/home">Get Started!</Link>
      </div>
    </div>
  );
}
