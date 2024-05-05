
'use client';
import { Books } from "@/app/lib/books"
import BookCard from "../components/BookCard";

export default function Shop() {
    let re = new Books
    let authorsList = re.authorsList()
    let books = (author) => {
        return (
            authorsList[author].map(book => {
                return (
                    <BookCard book={book} />
                )
            })
        )
    }
    const listItems = Object.keys(authorsList).sort().map(name => {
        return (
            <div className="w-full mb-3">
                <div className="w-full border boder-solid p-2 mb-3">{name} </div>
                <div className="flex flex-wrap justify-between">{books(name)}</div>
            </div>
        )
    })
    return (
        <div className="w-full mt-5 px-10 py-5 flex flex-col items-center justify-center">
            <span className="text-2xl font-black" >All Authors</span>
            <span className="text-3xl font-black" >Here is the full list of authors!!!</span>
            <div className="w-full p-5 flex flex-wrap gap-5 justify-around">
                {listItems}
            </div>
        </div>
    )
}