var a=prompt("Enter UserName");
var b=prompt("Enter password");
  	if((a== "Giang" || a=="Nguyễn Trà Giang" || a=="Trà Giang" || a=="giang" || a=="tra giang" || a=="Tra Giang" || a=="giangdepzai")
	   && (b=="24/09/2005" ||b=="24-09-2005" ||b=="24092005" ||b=="2492005"))
  	{
  	    window.location.href="start.html";
  	}
  	else
  	{
  		alert("invalid details");
  		window.location.href="index.html";
  	}
  	