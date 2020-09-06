const {elements} = require ('./home-page.elements');
const WaitHelper = require('../../components/wait.methods');
const BasePage = require('../../components/base-page.methods');
const Logger = require('../../components/logger.methods');

class homePageHelper extends BasePage {
    async clickOnSignInWithGoogle() {
        Logger.subStep('Click on Sign In With Google link');
        await WaitHelper.waitElementDisplayed(elements.signInWithGoogle);
        await this.click(elements.signInWithGoogle);
    }

}

module.exports = new homePageHelper();
       