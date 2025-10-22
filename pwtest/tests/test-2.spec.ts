import { test, expect } from '@playwright/test';
import { Login } from './steps';
import { Navigation } from './pom';

test('Change status to ToDo', async ({ page }) => {
  const login = new Login(page);
  await login.LoginPage();
  await page.getByRole('button', { name: 'First CRUD test Priority:' }).getByRole('button').click();
  const editPage = new Navigation(page);
  await editPage.editMenu();
  await page.getByRole('combobox', { name: 'Status' }).click();
  await page.getByLabel('Todo').getByText('Todo').click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.locator('body')).toContainText('Priority: Medium');
  await expect(page.locator('body')).toContainText('Status: Todo');
  await page.getByRole('button', { name: 'Logout' }).click();
});

//У цьому тесті не відпрацьовує метод dragTo(), тому він закоментований нижче
//test('Change status to ToDo', async ({ page }) => {
// const login = new Login(page);
// await login.LoginPage();
// const columnA = page.getByRole('heading', { name: 'Backlog' });
// const columnB = page.getByRole('heading', { name: 'Todo' });
// const task = columnA.getByText('First CRUD test', { exact: false });
// await task.dragTo(columnB);
// await expect(page.locator('body')).toContainText(
//  'TodoFirst CRUD testPriority: Medium | Status: Todo',
//  );
//  await page.getByRole('button', { name: 'Logout' }).click();
//});
