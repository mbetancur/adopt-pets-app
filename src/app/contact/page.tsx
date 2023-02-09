import Link from "next/link";
import Header from "@/components/Header";

const getData = async () => {
  const data = await fetch("https://www.reddit.com/.json"); // this will be cached by default
  return data.json();
};

// Example fetch and display of the result
export default async function Contact() {
  const data = await getData();
  const name = data.kind;

  return (
    <>
      <Header />
      {name}
      <div>Contact</div>
      <Link href="/">Go home</Link>
    </>
  );
}
