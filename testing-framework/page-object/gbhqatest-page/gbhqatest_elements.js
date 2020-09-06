const webdriver = require('selenium-webdriver');
const { elementNames: eNames, attributes: attr } = require('./gbhqatest_constants');
const { tags } = require(`../../components/html.methods`);
const basePage = require('../../components/base-page.methods');
const By = webdriver.By;

class feedback_elements extends basePage {
    get elements() {
        return {
            get firebaseApp() {
                return driver.findElement(By.xpath(`//${tags.firebaseApp}`));
            }, 

            get loggoutOpt() {
                return driver.findElement(By.xpath(attr.xpath.loggoutLnk));
            },
            get addNoteOpt() {
                return driver.findElement(By.css(attr.css.addOpt));
            }
                 
            
        }
    }
}
     
module.exports = new feedback_elements();
   