import { test, expect } from '@playwright/test';
import { Login } from './steps';

test('Change status to InProgress', async ({ page }) => {
  const login = new Login(page);
  await login.LoginPage();
  await page.getByRole('button', { name: 'First CRUD test Priority:' }).getByRole('button').click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('combobox', { name: 'Status' }).click();
  await page.getByLabel('In Progress').getByText('In Progress').click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.locator('body')).toContainText('Priority: Medium');
  await expect(page.locator('body')).toContainText('Status: In Progress');
  await page.getByRole('button', { name: 'Logout' }).click();
});
