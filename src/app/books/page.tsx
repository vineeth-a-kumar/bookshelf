
'use client';
import { Books } from "@/app/lib/books"
import BookCard from "@components/BookCard";
import { useState } from "react";

export default function Shop() {
    let re = new Books
    let languageList = re.languageList()
    const [filter, setFilter] = useState('All')
    const listItems = re.filterByLang(filter).map(book => {
        return (
            <BookCard book={book} />
        )
    })

    const allFilters = languageList.map(lang => {
        return (
            <button className="p-2 primary rounded-lg bg-[rgb(var(--primary))] text-xs" onClick={() => setFilter(lang)}>
                {lang}
            </button>
        )
    })
    return (
        <div className="w-full mt-5 px-10 py-5 flex flex-col items-center justify-center">
            <span className="text-2xl font-black" >All Books</span>
            <span className="text-3xl font-black" >Here is the full list of books!!!</span>
            <div className="flex flex-wrap gap-2 mt-2">{allFilters}</div>
            <div className="w-full p-5 flex flex-wrap gap-5 justify-around">
                {listItems}
            </div>
        </div>
    )
}