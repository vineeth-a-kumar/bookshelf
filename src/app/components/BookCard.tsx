
'use client';
import Image from "next/image";
import { Books } from "../lib/books";

function ShowCart(show) {
    return (
        <div></div>
        // if(show) {
        //     <span className="absolute top-5 right-5 text-xs underline" onClick={() => addCart(book)}>Add to Cart</span>
        // }
    )
}
export default function BookCard({book, showCart = false}) {
    let re = new Books
    function addCart(book) {
        let items = JSON.parse(localStorage.getItem('items'), undefined) 
        if(!items && !items.length) {
            localStorage.setItem('items', JSON.stringify([book]));
        }
    }
    return (
        <div className="card px-5 py-3 bg-white rounded-lg text-black flex flex-row items-center gap-5 w-[30%] relative">
            <Image
                className="bg-white"
                src={"/" + book.imageLink}
                alt="Next.js Logo"
                width={150}
                height={50}
                priority
            />
            <div className="content flex flex-col w-[50%]">
                if(showCart) {
                    <span className="absolute top-5 right-5 text-xs underline" onClick={() => addCart(book)}>Add to Cart</span>
                }
                <ShowCart show={showCart}/>
                <span className="font-bold">{book.title}</span>
                <span className="">Year:{book.year}</span>
                <span className="">Author:{book.author}</span>
                <span className="">Language:{book.language}</span>
                <span className="">Country:{book.country}</span>
                <a href={book.link} target="_blank" className="absolute bottom-5 right-5 underline text-xs">Wikipedia</a>
            </div>
        </div>
    )
}