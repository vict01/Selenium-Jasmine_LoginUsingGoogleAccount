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

    async clickOnAddNote() {
        Logger.subStep('Clicking on Add Note Button');
        await WaitHelper.waitElementDisplayed(elements.addNoteOpt);
        await this.click(elements.addNoteOpt);
    }

    async clickOnLoggOut() {
        Logger.subStep('Clicking on logg out Button');
        await WaitHelper.waitElementDisplayed(elements.loggoutOpt);
        await this.click(elements.loggoutOpt);
    }

}

module.exports = new google_methods();
