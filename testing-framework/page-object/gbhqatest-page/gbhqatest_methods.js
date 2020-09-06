const { elements } = require('./gbhqatest_elements');
const BasePage = require('../../components/base-page.methods');
const Logger = require('../../components/logger.methods');
const ExpectationHelper = require('../../components/expectation.methods');
const WaitHelper = require('../../components/wait.methods');

class google_methods extends BasePage {

    async verifyGbhqatestPageIsPresent() {
        Logger.subVerification('We should be looged in Gbhqatest Page');
        await ExpectationHelper.verifyElementPresent(elements.firebaseApp);
        await WaitHelper.waitForPageToLoad();
    }

}

module.exports = new google_methods();
