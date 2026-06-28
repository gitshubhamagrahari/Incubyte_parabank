const { Before, After, Status } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

Before(async function () {
    this.browser = await chromium.launch({
        headless: false
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (scenario) {

    // Screenshot only when scenario passes
    if (scenario.result.status === Status.PASSED) {

        await this.page.screenshot({
            path: `screenshots/${scenario.pickle.name}.png`,
            fullPage: true
        });

    }

    await this.browser.close();
});