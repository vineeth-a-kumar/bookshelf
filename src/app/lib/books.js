import booksList from "@/static/data.json"


export class Books {
    // cart = []
    constructor() {
        this.books = booksList;
        this.cart = this.books.slice(10, 13);
        this.homePageBooks = this.books.slice(0, 3)
        this.homePageBookImages = this.books.slice(16, 22).map(book => book.imageLink)
    }
    // homePageBooks = function () {
    //     return this.books.slice(0, 3)
    // }
    // homePageBookImages = function () {
    //     return this.books.slice(0, 6).map(book => book.imageLink)
    // }
    filterByLang = function (lang = 'All') {
        return lang == 'All' ? this.books : this.books.filter(book => book.language.includes(lang))
    }
    languageList = function () {
        let list = ['All']
        this.books.forEach(book => {
            let langs = book.language.split(',')
            langs.forEach(item => {
                if (!list.includes(item.trim())) list.push(item.trim())
            })
        })
        return list
    }
    authorsList = function () {
        let list = {}
        this.books.forEach(book => {
            let author = book.author
            if(!Object.keys(list).includes(author)) list[author] = [book]
            else {
                list[author].push(book)
            }
        })
        return list
    }

    addToCart = function (book) {
        alert('book')
        this.cart.push(book)
    }

}