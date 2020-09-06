class TestSuites {
    get suiteNames() {
        return {
            logginTest: 'Loggin Test',
            negativeTestCase: 'Negative Test Case',
        }
    }
}

module.exports = new TestSuites();
   