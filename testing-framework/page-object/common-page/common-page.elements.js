const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const {attributes: attr} = require ('./common-page.constants');

class CommonPage{
    get elements() {
        return {
            get indexPage() {
                return driver.findElement(By.className(attr.class.ClassX));
            }         
     
        }
    }
}

module.exports = new CommonPage();
