import {  chromium, firefox, test} from "@playwright/test";

test(`To LAunch Browsers`, async () => {
    
const browserInstance1=await firefox.launch();
const browserContext1=await browserInstance1.newContext();
const page1=await browserContext1.newPage();
await page1.goto("https://www.redbus.in/");
const urlName1=  page1.url();
console.log(urlName1);
const title1=await page1.title();
console.log(title1);


const browserInstance2=await chromium.launch();
const browserContext2=await browserInstance2.newContext();
const page2=await browserContext2.newPage();
await page2.goto("https://www.flipkart.com/");
const urlName2=  page2.url();
console.log(urlName2);
const title2=await page2.title();
console.log(title2);

})