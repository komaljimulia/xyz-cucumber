package com.bank.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import com.bank.utility.Utility;

public class CustomerLoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    @FindBy(xpath = "//button[contains(text(),'Customer Login')]")
    WebElement _customerLoginBtn;

    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement _yourNameDropDown;

    @FindBy(xpath = "//button[contains(text(),'Login')]")
    WebElement _loginBtn;

    // This method clicks on Customer Login button
    public void clickOnCustomerLoginBtn() {
        log.info("Click on Customer Login Button " + _customerLoginBtn.toString());
        clickOnElement(_customerLoginBtn);
    }

    // This method selects name from DropDown
    public void selectYourNameDropDown() {
        selectByIndexFromDropDown(_yourNameDropDown, 0);
    }

    // This method clicks on Login Button
    public void clickOnLoginBtn() throws InterruptedException {
        Thread.sleep(1000);
        clickOnElement(_loginBtn);
    }
}