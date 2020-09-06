const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const {attributes: attr} = require ('./home-page.constants');

class CommonPage{
    get elements() {
        return {
            get signInWithGoogle() {
                return driver.findElement(By.css(attr.css.sighInWithGoogleLink));
            }         
     
        }
    }
}

module.exports = new CommonPage();
     