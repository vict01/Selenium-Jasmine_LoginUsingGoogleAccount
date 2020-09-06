const webdriver = require('selenium-webdriver');
const { elementNames: eNames, attributes: attr } = require('./gbhqatest_constants');
const basePage = require('../../components/base-page.methods');
const By = webdriver.By;

class feedback_elements extends basePage {
    get elements() {
        return {
          
            get loggoutOpt() {
                return driver.findElement(By.id(attr.id.loggoutLnk));
            }      
            
        }
    }
}
     
module.exports = new feedback_elements();
   