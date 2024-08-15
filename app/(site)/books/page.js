import BookCard from "@/app/componnent/BookCard";
import Container from "@/app/componnent/Container";



export const revalidate = 10;


const getdata = async () => {


    try {
        const response = await fetch("https://api.itbook.store/1.0/search/mongodb");
        const res = await response.json();
        return res;
    } catch (err) {

        console.log(err);
    }

}



const Books = async () => {

    const BookData = await getdata();

    console.log(BookData.books);


    return (
        <div className="pt-28 h-fit">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        BookData.books.map((singleBook, index) => {
                            return (
                                <BookCard singleBook={singleBook} key={index} />
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default Books;