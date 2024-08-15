import Container from "../../componnent/Container";






export default async function AddBook() {




    return (
        <main className="h-fit pt-28 pb-5">
            <Container>

                <h1 className="text-center h-fit pt-8 text-gray-900 text-4xl font-bold">Add Book</h1>


                <div className="border mt-10 p-8">
                    <input type="text" className="w-full border my-3 p-2 rounded-md" placeholder="Book Title" />
                    <input type="text" className="w-full border my-3 p-2 rounded-md" placeholder="Book Authors" />
                    <input type="text" className="w-full border my-3 p-2 rounded-md" placeholder="Book Publishar" />
                    <input type="text" className="w-full border my-3 p-2 rounded-md" placeholder="Book Langueage" />
                    <input type="text" className="w-full border my-3 p-2 rounded-md" placeholder="Book Prize" />
                    <input type="text" className="w-full border my-3 p-2 rounded-md" placeholder="Book Raking" />
                    <button className="pBg text-white w-full text-center p-2 text-xl font-bold mt-6 rounded-md">Add Book</button>
                </div>




            </Container>
        </main>
    );
}
