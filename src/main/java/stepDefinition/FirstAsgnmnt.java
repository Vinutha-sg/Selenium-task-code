package stepDefinition;


import java.util.concurrent.TimeUnit;

//import org.openqa.selenium.Alert;
//import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

//import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class FirstAsgnmnt {
	ChromeDriver driver = null;
	
	@Given ("^navigate to the E-site$")
	public void navigate()
	{
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Library//chromedriver.exe");
		driver=new ChromeDriver();
		driver.navigate().to(" http://automationpractice.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(10,TimeUnit.SECONDS);
	}
	@Then ("^go to women category and apply filters$")
	public void selection()
	{
		driver.findElement(By.xpath("//a[@title='Women']")).click();
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@value='3_1']")).click();
		driver.findElement(By.xpath("//input[@value='5_5']")).click();
		driver.findElement(By.xpath("//input[@value='11_6']")).click();
	}
	@Then ("^add a product to cart$") 
	public void add_cart()
	{
		driver.findElement(By.xpath("(//div[@class='left-block']//div[@class='product-image-container']//a//following-sibling::img[@class='replace-2x img-responsive'])[2]")).click();
		driver.manage().timeouts().pageLoadTimeout(10,TimeUnit.SECONDS);
		WebElement oFrame = driver.findElement(By.xpath("//iframe"));
			driver.switchTo().frame(oFrame);
			WebElement oEle = driver.findElement(By.xpath("//div[contains(@class,'selector')]//select[@id='group_1']"));
			Select oSel = new Select(oEle);
			oSel.selectByIndex(1);
			driver.findElement(By.xpath("//a[@title='White']")).click();
			driver.findElement(By.xpath("//button[@type='submit']//span[text()='Add to cart']")).click();
			
	}
	@Then("^proceed to checkout$")
	public void checkout() throws InterruptedException
	{
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[@class='btn btn-default button button-medium']//span//i[@class='icon-chevron-right right']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//span[text()='Proceed to checkout']")).click();
		
	}
	@Then("^enter \"(.*)\" and \"(.*)\" to login$")
	public void login(String email, String password)throws InterruptedException
	{
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys(email);
		driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys(password);
		driver.findElement(By.xpath("//span//i[@class='icon-lock left']")).click();
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.findElement(By.xpath("//button//span//i[@class='icon-chevron-right right']")).click();
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[@name='cgv']")).click();
		driver.findElement(By.xpath("//button//span//i[@class='icon-chevron-right right']")).click();
		Thread.sleep(1000);
	}
	@Then("^read the message from payment$")
	public void payment() throws InterruptedException
	{
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.findElement(By.xpath("//a[@class='cheque']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//span[text()='I confirm my order']//i[@class='icon-chevron-right right']")).click();
		Thread.sleep(1000);
		String text = driver.findElement(By.xpath("//p[@class='alert alert-success']")).getText();
		Thread.sleep(1000);
		System.out.print(text);
		Thread.sleep(1000);;
	}
	@Then("^quit the Browser$")
	public void quit()
	{
		driver.quit();
	}

}
