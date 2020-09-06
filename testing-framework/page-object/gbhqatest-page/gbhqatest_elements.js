const webdriver = require('selenium-webdriver');
const { tags } = require(`../../components/html.methods`);
const basePage = require('../../components/base-page.methods');
const By = webdriver.By;

class feedback_elements extends basePage {
    get elements() {
        return {
            get firebaseApp() {
                return driver.findElement(By.xpath(`//${tags.firebaseApp}`));
            }    
            
        }
    }
}
     
module.exports = new feedback_elements();
   