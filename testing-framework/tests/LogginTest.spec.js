const homePageMethod = require('../page-object/home-page/home-page.methods');
const commonMethod = require('../page-object/common-page/common-page.methods');
const googleMethod = require('../page-object/google-page/google_methods');
const gbhMethod = require('../page-object/gbhqatest-page/gbhqatest_methods');
const WaitHelper = require('../components/wait.methods');
const Logger = require('../components/logger.methods');
const suites = require('../components/test-suites');
const { testData: GoogleData } = require('../page-object/google-page/google_constants');

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe(suites.suiteNames.logginTest, () => {
    beforeAll(async () => {
        await commonMethod.goToUrl();
    });

    it('Test to be defined', async () => {
        Logger.testCaseId('001');

        Logger.stepNumber(1);
        Logger.step('Click on "Sign In With Google" option');
        await homePageMethod.clickOnSignInWithGoogle();       
        Logger.verification('Verifying we are being taken to google page');
        await WaitHelper.wait(7000);
        await googleMethod.verifyUrl(GoogleData.googleActUrl);
 
        Logger.stepNumber(2);
        Logger.step('Typing E-mail');
        const email = await googleMethod.typeEmail(GoogleData.dataEmail);
        Logger.verification('The inserted E-mail should be contained in E-mail field');
        await googleMethod.verifyTextInEmailField(email);

        Logger.stepNumber(3);
        Logger.step('Click on "Next" button');
        await googleMethod.clickOnNextButton();

        Logger.stepNumber(4);
        Logger.step('Typing Password');
        const password = await googleMethod.typePassword(GoogleData.dataPassword);
        Logger.verification('The inserted password should be contained in password field');
        await googleMethod.verifyTextInPasswordField(password);

        Logger.stepNumber(5);
        Logger.step('Click on "Next" button');
        await googleMethod.clickOnNextButton();
        Logger.verification('Verifying we are logged in'); 
        await gbhMethod.verifyGbhqatestPageIsPresent();

    });
});
