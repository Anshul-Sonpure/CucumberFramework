package base;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseUtils {
	
static {   
		
		String key = "webdriver.chrome.driver";
		String value = ".//driver//chromedriver.exe";
		
	System.setProperty(key, value);
	
	}
	
	protected WebDriver driver = new ChromeDriver();
	
	public static String capturescreen(WebDriver driver, String name)
	{
		TakesScreenshot tks = (TakesScreenshot) driver;
		File src = tks.getScreenshotAs(OutputType.FILE);
		String dest = System.getProperty("user.dir") + "\\cucumber-reports\\" + name +".png";
        File destination = new File(dest);
        try {
			FileUtils.copyFile(src, destination);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}        
                     
        return dest;
	
	}
	
		
	
	
	
	

}
