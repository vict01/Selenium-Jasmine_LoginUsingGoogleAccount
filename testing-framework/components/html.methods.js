class HtmlHelper {
    get tags() {
        return {
            a: 'a',
            h1: 'h1',
            firebaseApp: 'firebase-app',
            input: 'input',
            span: 'span',
            div: 'div',
            li: 'li',
            option: 'option',
        }
    }

    get attributes() {
        return {
            href: 'href',
            value: 'value',
        }
    }
}
module.exports = new HtmlHelper();
 