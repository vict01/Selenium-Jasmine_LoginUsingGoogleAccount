class feedback_constants {

    get attributes() {
        return {
            id: {
                loggoutLnk: 'ink', 
                addOpt: 'icon'
            },
            css: {
                addOpt: 'note-app' //All elements say note-app
            },
            name: {
                passwordTxt: ''
            },
            xpath: {
                loggoutLnk: '//*[@id="ink"]'
            }
        }
    }

    get testData() {
        return {
            dataEmail: ''
        }

    }
}

module.exports = new feedback_constants();
