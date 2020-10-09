class feedback_constants {

    get attributes() {
        return {
            id: {
                emailTxt: 'identifierId',
                nextBntPassword: 'passwordNext'
            },
            name: {
                passwordTxt: 'password'
            },
            css: {
                nextBntEmail: '.VfPpkd-LgbsSe-OWXEXe-k8QpJ > .VfPpkd-RLmnJb'
            }
        }
    }

    get testData() {
        return {
            dataEmail: 'testuserjust4test@gmail.com',
            dataPassword: '',
            googleActUrl: 'https://accounts.google.com/'
        }
    }

}

module.exports = new feedback_constants();
