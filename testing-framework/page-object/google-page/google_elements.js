const webdriver = require('selenium-webdriver');
const { elementNames: eNames, attributes: attr } = require('./google_constants');
const basePage = require('../../components/base-page.methods');
const By = webdriver.By;

class feedback_elements extends basePage {
    get elements() {
        return {

            get emailTextBox() {
                return driver.findElement(By.id(attr.id.emailTxt));
            }, 
            get nextButton() {
                return driver.findElement(By.css(attr.css.nextBnt));
            },
            get passwordTextBox() {
                return driver.findElement(By.name(attr.name.passwordTxt));
            }     
            
        }
    }
}
     
module.exports = new feedback_elements();
   