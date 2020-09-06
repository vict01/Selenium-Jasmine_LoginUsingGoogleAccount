class CommonConstant {
    get commonData() {
        return {
            defaultTimeout: 45000,
            implicitWaitDefaultTimeout: 30000,
        }
    }

    get attributes() {
        return {
            css: {
                sighInWithGoogleLink: 'note-app',
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
      