package test_Scripts;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import base.BaseUtils;
import cucumber.api.java.en.*;

public class GoogleSearchStepDefinition extends BaseUtils{
	

	
	@Given("^User navigates to Google Home page \"([^\"]*)\"$")
	public void user_navigates_to_Google_Home_page(String arg1) throws Throwable {
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.get("https://www.google.com ");
	}
	
	@When("^User search for \"([^\"]*)\"$")
	public void user_search_for(String arg1) throws Throwable {
		driver.switchTo().activeElement().sendKeys("JP Morgan");
		driver.switchTo().activeElement().sendKeys(Keys.ENTER);
	}
	
	@Then("^User clicks on JP Moran website link$")
	public void user_clicks_on_JP_Moran_website_link() throws Throwable {
		driver.findElement(By.xpath("//span[contains(text(),'J.P. Morgan | Official Website')] ")).click();
	}

	@And("^JP Morgan website is opened$")
	public void jp_Morgan_website_is_opened() throws Throwable {
	    Thread.sleep(2000);
	}
	
	@Then("^Background Image is displayed to User$")
	public void background_Image_is_displayed_to_User() throws Throwable {
		 WebElement img = driver.findElement(By.xpath("//d[@class= 'banner-image width-wide ']"));
	      boolean val = img.isDisplayed();
	      if(val == true)
	      {
	    	  System.out.println("Image is Displayed");
	      }
	      else {
	    	  System.out.println("Image is Not Displayed");
	      }
	      
	}
	
}