import { test } from "@playwright/test";
import { DashBoardPage } from "../PageObjects/DashBoardPage.js";

test('dashboard',async ({page})=>{

    const dashboard=new DashBoardPage(page);

    await dashboard.dashBoardActions();

})