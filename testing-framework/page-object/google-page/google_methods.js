const { elements } = require('./google_elements');
const BasePage = require('../../components/base-page.methods');
const Logger = require('../../components/logger.methods');
const ExpectationHelper = require('../../components/expectation.methods');

class google_methods extends BasePage {

    async typeEmail(varEmail) {
        Logger.subStep(`Insert ${varEmail} in "Email" field`);
        await this.sendText(elements.emailTextBox, varEmail);
        return varEmail;
    }

    async clickOnNextButton() {
        Logger.subStep('Clicking on "Next" button');
        await this.click(elements.nextButton);
    }

    async typePassword(varPassword) {
        Logger.subStep(`Insert ${varPassword} in "Name" field`);
        await this.sendText(elements.passwordTextBox, varPassword);
        return varPassword;
    }

    async verifyTextInEmailField(text) {
        Logger.subVerification(`${text} should be contained in Email field`);
        await ExpectationHelper.verifyElementContainsValue(elements.emailTextBox, text);
    }

    async verifyTextInPasswordField(text) {
        Logger.subVerification(`${text} should be contained in Name field`);
        await ExpectationHelper.verifyElementContainsValue(elements.passwordTextBox, text);
    }

}

module.exports = new google_methods();
