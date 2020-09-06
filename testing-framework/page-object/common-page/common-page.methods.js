const commonElement = require ('./common-page.elements');
const WaitHelper = require('../../components/wait.methods');
const BasePage = require('../../components/base-page.methods');
const Logger = require('../../components/logger.methods');

class CommonPageHelper extends BasePage {
    async clickOnIndexPage() {
        Logger.subStep('Click on Index Page');
        await WaitHelper.waitElementDisplayed(commonElement.elements.indexPage);
        await this.click(commonElement.elements.indexPage);
    }

}

module.exports = new CommonPageHelper();
