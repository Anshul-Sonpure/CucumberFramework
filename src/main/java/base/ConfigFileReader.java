package base;

import java.util.Properties;

public class ConfigFileReader {
	public String getReportConfigPath(){
		Properties prop = new Properties();
	
		String reportConfigPath = prop.getProperty("reportConfigPath");
		if(reportConfigPath!= null) return reportConfigPath;
		else throw new RuntimeException("Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath");		
	}

}
