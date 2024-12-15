import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  // Attributes

  // Log Out
    openDropDown: Locator;
    userSignOut: Locator;

  // Constructor
  constructor(page: Page) {
    
    this.openDropDown = page.getByRole("banner")
      .locator("button")
      .filter({ hasText: "Change" })
    this.userSignOut = page.locator("xpath=(//a[@href='https://magento.softwaretestingboard.com/customer/account/logout/'])[1]");
  }
    //Methods
    async signOut() {
        await this.openDropDown.click();
        await this.userSignOut.click(); 
    }

}
