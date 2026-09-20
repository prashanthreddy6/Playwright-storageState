export class DashBoardPage {

    constructor(page) {
        this.page = page;

        // 1. getByRole
        this.addButton = page.getByRole('button', { name: 'Add' });

        // 2. getByText
        this.pim = page.getByText('PIM', { exact: true });

        // 3. getByLabel
        this.employeeId = page.getByLabel('Employee Id');

        // 4. getByPlaceholder
        this.employeeName = page.getByPlaceholder('Type for hints...').first();

        // 5. getByTestId
        this.employeeSearch = page.getByTestId('employee-search');

        // 6. CSS
        this.firstName = page.locator('input[name="firstName"]');

        // 7. XPath
        this.searchButton = page.locator('//button[text()="Search"]');

        // 8. nth()
        this.input = page.locator('.oxd-input').nth(1);

        // 9. first()
        this.firstButton = page.locator('.oxd-button').first();

        // 10. last()
        this.lastButton = page.locator('.oxd-button').last();

        // Other OrangeHRM locators
        this.lastName = page.getByPlaceholder('Last Name');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.employeeList = page.getByText('Employee List', { exact: true });
    }

    async dashBoardActions() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

        // Click PIM
        await this.pim.click();

        // Click Add
        await this.addButton.click();

        // Enter employee details
        await this.firstName.fill('John');
        await this.lastName.fill('Smith');

        // Save
        await this.saveButton.click();

        // Employee List
        await this.employeeList.click();

        // Search employee
        await this.employeeName.fill('John');

        // Search
        // await this.searchButton.click();
    }
}