import { test, expect, Page } from '@playwright/test';

export class Login {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async LoginPage() {
    await this.page.goto('https://todotest.site/');
    await this.page.getByRole('button', { name: 'Login' }).click();
    await this.page.getByRole('textbox', { name: 'Email' }).click();
    await this.page.getByRole('textbox', { name: 'Email' }).fill('uclanster@gmail.com');
    await this.page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await this.page.getByRole('textbox', { name: 'Password' }).fill('99Fuside');
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
