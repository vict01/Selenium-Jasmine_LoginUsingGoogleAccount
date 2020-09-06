const homePageMethod = require('../page-object/home-page/home-page.methods');
const commonMethod = require('../page-object/common-page/common-page.methods');
const googleMethod = require('../page-object/google-page/google_methods');
const Logger = require('../components/logger.methods');
const suites = require('../components/test-suites');
const { testData: data } = require('../page-object/google-page/google_constants');
const { elements } = require('../page-object/google-page/google_elements');
const PageHelper = require('../components/page.methods');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 80000;
                                          
xdescribe(suites.suiteNames.negativeTestCase, () => {
    beforeAll (async () => {
        await commonMethod.goToUrl();
    });

    afterAll (async () => {
        await PageHelper.closeBrowser();
    });

    it('Send message without indicating any message', async () => {
        Logger.testCaseId('002');

        Logger.stepNumber(1);
        Logger.step('Click on google Link');
        await homePageMethod.clickOnSignInWithGoogle();

        Logger.stepNumber(2);
        Logger.step('Typing name');
        const name = await googleMethod.typePassword(data.nameData);
        Logger.verification('The inserted name should be contained in name field');
        await googleMethod.verifyTextInNameField(name);

        Logger.stepNumber(3);
        Logger.step('Typing E-mail');
        const email = await googleMethod.typeEmail(data.emailData);
        Logger.verification('The inserted E-mail should be contained in E-mail field');
        await googleMethod.verifyTextInEmailField(email);

        Logger.stepNumber(4);
        Logger.step('Typing Subject');
        const subject = await googleMethod.typeSubject(data.subjectData);
        Logger.verification('The inserted subject should be contained in Subject field');
        await googleMethod.verifyTextInSubjectField(subject);

        Logger.stepNumber(5);
        Logger.step('Click on Send Message Button');
        await googleMethod.clickOnSendMessage();

        Logger.stepNumber(6);
        Logger.step('Last step: Veifying if the message field was left empty');
        await googleMethod.verifyIfAnyFieldIsEmpty(elements.msgTextArea);

    });
});
