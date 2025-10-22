import { test, expect } from '@playwright/test';
import { Login } from './steps.ts';

test('Create first task', async ({ page }) => {
  const login = new Login(page);
  await login.LoginPage();
  await page.getByRole('button', { name: 'Add New Task' }).click();
  await page.getByRole('textbox', { name: 'Title' }).click();
  await page.getByRole('textbox', { name: 'Title' }).fill('First CRUD test');
  await page.getByRole('textbox', { name: 'Description (Optional)' }).click();
  await page.getByRole('textbox', { name: 'Description (Optional)' }).fill('Test One');
  await page.getByRole('button', { name: 'Create Task' }).click();
  await page.getByRole('button', { name: 'First CRUD test Priority:' }).click();
  await expect(page.getByText('BacklogFirst CRUD')).toBeVisible();
  await expect(page.locator('body')).toContainText('BacklogFirst CRUD test');
  await expect(page.locator('body')).toContainText('Priority: Medium');
  await expect(page.locator('body')).toContainText('Status: Backlog');
  await page.getByRole('button', { name: 'Logout' }).click();
});
