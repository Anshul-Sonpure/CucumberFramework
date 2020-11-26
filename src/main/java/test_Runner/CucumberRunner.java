package test_Runner;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.*;

import com.cucumber.listener.Reporter;
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions
(
		features = "Features",
		glue = {"test_Scripts"},
		plugin = {"pretty","html:test-output", "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
		monochrome = true,
		dryRun = false
		
)
public class CucumberRunner {
	
	   
		 public static WebDriver driver;
		 public ExtentTest test;
		 public ExtentReports extent;

		 @AfterClass
		    public static void writeExtentReport() {
		        Reporter.loadXMLConfig("src/extent-config.xml");
		        Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
	        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
	       
		    }
		 @AfterClass
			public static void close() {
				driver.quit();
			}
}

