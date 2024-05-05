
import { Books } from "@/app/lib/books"
import BookCard from "./BookCard";

export default function ProductBlock() {
    let re = new Books
    const listItems = re.homePageBooks.map(book => {
        return (
            <BookCard book={book}/>
        )
    })
    return (
        <div className="w-full mt-5 px-10 py-5 flex flex-col items-center justify-center">
            <span className="text-2xl font-black" >Trending</span>
            <span className="text-3xl font-black" >Top 3 on our list</span>
            <div className="w-full p-5 flex gap-3 justify-around">
                {listItems}
            </div>
        </div>
    )
}