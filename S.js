class News {
    constructor (title, text) {
        this.title = title;
        this.text = text;
        this.modified = false
    }

    update(text) {
        this.text = text;
        this.update = true;
    }
}

class NewsPrinter {
    constructor (news) {
        this.news = news;
    }

    html () {
        return `
            <div> 
                <h2>${this.title}</h2>
                <p>${this.text}</p>
            </div>
        `;
    }

    json () {
        return JSON.stringify( {
            title: this.news.title, 
            text: this.news.text,
            modified: this.news.modified
        },null,2);
    }
    xml () {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.printer}</text>
            </news>
        `
    }
}

const news = new News ('Solid', 'Single responsibility princep');
console.log(news.toHTML());