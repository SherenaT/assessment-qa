import { Builder, Capabilities, By } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await (await driver).get("http://localhost:4000");
});

afterAll(async () => {
  await (await driver).quit();
});

test("I can start a game", async () => {
  let button = await (await driver).findElement(By.id("start-game"));
  await button.click();
});
describe("Testing out clicks", () => {
  test("I can click on the top left corner", async () => {
    expect(await (await driver).findElement(By.id("cell-0")).click()).toEqual(
      "X"
    );
    await (await driver).sleep(3000);
  });

  test("Clicking over an 'O'", async () => {
    expect(await (await driver).findElement(By.id("cell-1")).click()).toEqual(
      "X"
    );

    await (await driver).sleep(3000);
  });

  test("I can click on the middle", async () => {
    expect(await (await driver).findElement(By.id("cell-4")).click()).toEqual(
      "X"
    );
    await (await driver).sleep(3000);
  });

  test("I can click on the bottom right corner", async () => {
    expect(await (await driver).findElement(By.id("cell-8")).click()).toEqual(
      "X"
    );
    await (await driver).sleep(3000);
  });
});

// describe("Testing to see if I click over an 'O'", () => {
// test("Click on the boxes near 'X'", async () => {
//   await (await driver).findElement(By.id("cell-1")).click();
//   await (await driver).sleep(5000);
// });
//   test("Click on the boxes near 'X'", async () => {
//     await (await driver).findElement(By.id("cell-3")).click();
//     await (await driver).sleep(5000);
//   });
// });
