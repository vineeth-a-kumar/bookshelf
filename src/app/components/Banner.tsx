

import Image from "next/image";
import { Books } from "@/app/lib/books"
export default function Banner() {
    let re = new Books
    const images = re.homePageBookImages.map((imageLink, index) => {
        return (
            <Image
                className="bg-white"
                src={"/" + imageLink}
                alt="Next.js Logo"
                width={200}
                height={50}
                key={index}
                priority
            />
        )
    })
    return (
        <div className="w-full h-[300px] px-10  mt-5">
            <div className="w-full h-full px-10 bg-white rounded-[30px] flex flex-col items-start justify-center overflow-hidden relative">
                <h1 className="font-black text-black text-xl">Welcome to Bookshelf</h1>
                <span className="text-7xl font-black text-black">Buy Books Online</span>
                <div className="absolute top-0 left-[50%] w-full h-full flex">
                    {images}
                </div>
            </div>
        </div>
    )
}