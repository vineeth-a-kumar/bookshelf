
'use client';
import { Books } from "@/app/lib/books"
import BookCard from "../components/BookCard";

export default function Shop() {
    let re = new Books
    let cartItems = re.cart
    let books = cartItems.map(book => {
        return (
            <BookCard book={book} />
        )
    })
    return (
        <div className="w-full mt-5 px-10 py-5 flex flex-col items-center justify-center">
            <span className="text-2xl font-black" >All Authors</span>
            <span className="text-3xl font-black" >Here is the full list of authors!!!</span>
            <div className="w-full p-5 flex flex-wrap gap-5 justify-around">
                {books}
            </div>
        </div>
    )
}