class feedback_constants {

    get attributes() {
        return {
            id: {
                emailTxt: 'identifierId'

            },
            css: {
                nextBnt: '.VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-RLmnJb'
            },
            name: {
                passwordTxt: 'password'
            }
        }
    }

    get testData() {
        return {
            dataEmail: 'testuserjust4test@gmail.com',
            dataPassword: 'Abcd1234*',
            googleActUrl: 'https://accounts.google.com/'
        }
    }

}

module.exports = new feedback_constants();
