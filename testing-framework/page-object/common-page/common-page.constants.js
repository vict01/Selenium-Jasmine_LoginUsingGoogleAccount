class CommonConstant {
    get commonData() {
        return {
            url: 'https://gbhqatest.firebaseapp.com/',         
            defaultTimeout: 45000,
            implicitWaitDefaultTimeout: 30000            
        }
    }

    get attributes() {
        return {
            class: {
                ClassX: '',
            }
        }
    }

    get timeouts() {
        return {
            xs: 5000,
            s: 10000,
        }
    }
}

module.exports = new CommonConstant();
   