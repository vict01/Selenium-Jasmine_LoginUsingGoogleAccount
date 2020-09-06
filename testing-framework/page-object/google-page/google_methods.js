const { elements } = require('./google_elements');
const BasePage = require('../../components/base-page.methods');
const Logger = require('../../components/logger.methods');
const Waits = require('../../components/wait.methods');
const ExpectationHelper = require('../../components/expectation.methods');

class google_methods extends BasePage {

    async typeEmail(varEmail) {
        Logger.subStep(`Insert ${varEmail} in "Email" field`);
        await this.sendText(elements.emailTextBox, varEmail);
        return varEmail;
    }

    async verifyTextInEmailField(text) {
        Logger.subVerification(`${text} should be contained in Email field`);
        await ExpectationHelper.verifyElementContainsValue(elements.emailTextBox, text);
    }

    async clickOnNextButtonEmail() {
        Logger.subStep('Clicking on "Next" button');
        await Waits.waitElementDisplayed(elements.nextButtonEmail);
        await this.click(elements.nextButtonEmail);
    }

    async verifyPasswordFieldIsDisplayed() {
        Logger.subVerification('Password field should be displayed');
        await Waits.waitElementDisplayed(elements.passwordTextBox);
        await ExpectationHelper.verifyElementDisplayed(elements.passwordTextBox);
    }

    async typePassword(varPassword) {
        Logger.subStep(`Insert ${varPassword} in "Name" field`);
        await this.sendText(elements.passwordTextBox, varPassword);
        return varPassword;
    }

    async verifyTextInPasswordField(text) {
        await Waits.waitElementDisplayed(elements.passwordTextBox);
        Logger.subVerification(`${text} should be contained in Name field`);
        const passwordElement = await this.getElementValue(elements.passwordTextBox);
        await ExpectationHelper.verifyStringAreEquals(text, passwordElement);
    }

    async clickOnNextButtonPassword() {
        Logger.subStep('Clicking on "Next" button');
        await Waits.waitElementDisplayed(elements.nextButtonPassword);
        await this.click(elements.nextButtonPassword);
    }

}

module.exports = new google_methods();
