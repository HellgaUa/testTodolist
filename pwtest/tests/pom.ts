import { Page } from '@playwright/test';

export class Navigation {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async editMenu() {
    await this.page.getByRole('menuitem', { name: 'Edit' }).click();
  }
}
