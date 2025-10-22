import { test, expect } from '@playwright/test';
import { Login } from './steps.ts';

test('Changing Priority and Delete', async ({ page, context }) => {
  const login = new Login(page);
  await login.LoginPage();
  await page.getByRole('button', { name: 'First CRUD test Priority:' }).getByRole('button').click();
  await page.getByRole('menuitem', { name: 'Edit' }).click();
  await page.getByRole('combobox', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'High' }).click();
  await page.getByRole('combobox', { name: 'Status' }).click();
  await page.getByLabel('Done').getByText('Done').click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.locator('body')).toContainText('Priority: High | Status: Done');
  await page.getByRole('button', { name: 'First CRUD test Priority:' }).getByRole('button').click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await expect(
    page.getByRole('listitem').filter({ hasText: 'Task deleted successfully!' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Logout' }).click();
});
