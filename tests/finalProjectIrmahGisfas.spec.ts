import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";

test.describe("Create Account & Login Test Case", () => {
  let firstName = faker.person.firstName();
  let lastName = faker.person.lastName();

  let email = faker.internet.email({
    firstName: firstName,
    lastName: lastName,
  });
  let password = faker.internet.password();

  // test("User is able to create an account", async ({ page }) => {
  //   console.log("Email:", email);
  //   console.log("Password:", password);

  //   await page.goto("https://magento.softwaretestingboard.com/");
  //   await page.getByRole("link", { name: "Create an Account" }).click();
  //   await page.getByLabel("First Name").fill(firstName);
  //   await page.getByLabel("Last Name").fill(lastName);
  //   await page.getByLabel("Email", { exact: true }).fill(email);
  //   await page
  //     .getByRole("textbox", { name: "Password*", exact: true })
  //     .fill(password);
  //   await page.getByLabel("Confirm Password").fill(password);
  //   await page.getByRole("button", { name: "Create an Account" }).click();
  //   await expect(
  //     page.getByRole("heading", { name: "My Account" }).locator("span")
  //   ).toBeVisible();
  //   await expect(page.locator("#maincontent")).toMatchAriaSnapshot(`
  //     - strong: Contact Information
  //     - paragraph: ${firstName} ${lastName} ${email}
  //     - link "Edit"
  //     - link "Change Password"
  //     `);
  // });

  test("User is able to create an account (with pom)", async ({ page }) => {
    console.log("Email:", email);
    console.log("Password:", password);

    const loginPage = new LoginPage(page);

    await page.goto("https://magento.softwaretestingboard.com/");
    await loginPage.createAccount(firstName, lastName, email, password);
    await loginPage.verifyAccountCreation(firstName, lastName, email);
  });

  test("Ensure logged in user can log out (with pom)", async ({ page }) => {
    console.log("Email:", email);
    console.log("Password:", password);

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    //signin
    await page.goto("https://magento.softwaretestingboard.com/");
    await loginPage.signIn(email, password);
    await loginPage.verifySignIn(firstName, lastName);

    //logout
    
    await homePage.signOut();
  });

    // test("Log out", async ({ page }) => {
    //   await page.goto("https://magento.softwaretestingboard.com/");
    //   const homePage = new HomePage(page);
    //   await homePage.signOut();
    // })
});
