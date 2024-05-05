import Image from "next/image";
import Link from "next/link";
const classes = 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'

export default function Header() {
    return (
        <>
            <section className="flex w-full justify-between align-center px-10 py-5">
                <Image
                    className="relative bg-white"
                    src="/BookShelf.png"
                    alt="Next.js Logo"
                    width={150}
                    height={50}
                    priority
                />
                <div className="w-[50%] flex justify-center align-center">
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:flex md:w-auto justify-between items-center" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link href="/" className={classes} aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/authors" className={classes}>Authors</Link>
                            </li>
                            <li>
                                <Link href="/books" className={classes}>Books</Link>
                            </li>
                            {/* <li>
                                <Link href="/pricing" className={classes}>Pricing</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="hidden w-full md:flex md:w-auto justify-between items-center" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link href="/cart" className={classes} aria-current="page">Cart</Link>
                        </li>
                    </ul>
                </div>

            </section>
        </>
    );
}