import Link from "next/link";
import Container from "../componnent/Container";






export default async function Home() {




  return (
    <main className="h-fit pt-28 pb-5">
      <Container>

        <h1 className="text-center h-[250px] pt-20 text-gray-900 text-4xl font-bold">Welcome to the Book showcaseing site.</h1>

        <div className="text-center py-10">
          <Link className="text-center text-xl p-4 rounded-lg text-white cursor-pointer pBg" href={'/books'}>Go to Book Page</Link>
        </div>


      </Container>
    </main>
  );
}
