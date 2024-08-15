import Image from "next/image";
import Link from "next/link";



function BookCard({ singleBook }) {



    return (
        <Link href={`/books/${singleBook.isbn13}`} className="border">
            <div>
                <Image src={singleBook.image} height={1000} width={1000} alt="Book_Cover_image" />
            </div>
            <div>
                <h1>{singleBook.title}</h1>
                <h3>{singleBook.price}</h3>
                <p>
                    {singleBook.subtitle}
                </p>
            </div>
        </Link>
    )
}

export default BookCard;