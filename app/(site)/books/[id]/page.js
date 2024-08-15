

import Container from "@/app/componnent/Container";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";



async function SingleBook({ params }) {


    const getSingledata = async () => {


        try {
            const response = await fetch(`https://api.itbook.store/1.0/books/${params.id}`);
            const res = await response.json();
            return res;
        } catch (err) {

            console.log(err);
        }

    }



    const BookSingleData = await getSingledata();



    return (
        <div className="pt-24 pb-14">

            <Container>
                <Link className="bg-gray-100 hover:bg-gray-200 rounded-md p-3 my-5 flex gap-2 items-center w-fit" href={"/books"}>
                    <IoMdArrowRoundBack className="text-gray-900 text-xl" />
                    <span className="text-gray-700 font-semibold">Back</span>
                </Link>
                <div>
                    <div className="flex flex-col md:flex-row gap-10">

                        <div className="w-full md:w-[500px] border">
                            <Image height={1000} width={1000} src={BookSingleData.image} alt="Book_Image_Cover" />
                        </div>
                        <div className="w-full">

                            <div className="flex gap-2 items-center">
                                <h1 className="text-2xl font-bold text-gray-800 ">Title:</h1>
                                <h1 className="text-gray-600 text-xl font-semibold">{BookSingleData.title}</h1>
                            </div>

                            <h2 className="text-lg">{BookSingleData.subtitle}</h2>


                            <div className="flex gap-2 items-center">
                                <h1 className="text-2xl font-bold text-gray-800 ">authors:</h1>
                                <h1 className="text-gray-600 text-xl font-semibold">{BookSingleData.authors}</h1>
                            </div>

                            <div className="flex gap-2 items-center">
                                <h1 className="text-2xl font-bold text-gray-800 ">publisher:</h1>
                                <h1 className="text-gray-600 text-xl font-semibold">{BookSingleData.publisher}</h1>
                            </div>

                            <div className="flex gap-2 items-center">
                                <h1 className="text-2xl font-bold text-gray-800 ">language:</h1>
                                <h1 className="text-gray-600 text-xl font-semibold">{BookSingleData.language}</h1>
                            </div>

                            <div className="flex gap-2 items-center">
                                <h1 className="text-2xl font-bold text-gray-800 ">pages:</h1>
                                <h1 className="text-gray-600 text-xl font-semibold">{BookSingleData.pages}</h1>
                            </div>

                            <div className="flex gap-2 items-center">
                                <h1 className="text-2xl font-bold text-gray-800 ">year:</h1>
                                <h1 className="text-gray-600 text-xl font-semibold">{BookSingleData.year}</h1>
                            </div>

                            <div className="flex gap-2 items-center">
                                <h1 className="text-2xl font-bold text-gray-800 ">rating:</h1>
                                <h1 className="text-gray-600 text-xl font-semibold">{BookSingleData.rating}</h1>
                            </div>


                            <div className="flex gap-2 items-center">
                                <h1 className="text-2xl font-bold text-gray-800 ">price:</h1>
                                <h1 className="text-gray-600 text-xl font-semibold">{BookSingleData.price}</h1>
                            </div>

                            <div className="flex gap-2 items-center">
                                <h1 className="text-2xl font-bold text-gray-800 ">View Orinal Book:</h1>
                                <Link href={BookSingleData.url}>View Orinal Book</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <b className="text-gray-700 font-semibold text-xl ">Discriptions:</b>
                        <p className="pt-5">{BookSingleData.desc}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingleBook;