//
// @author - Vikesh Khanna
//
(function()
{
	function request(url) {
		console.log("<tdkr> ajax request received for " + url);
		
		var xhr = new XMLHttpRequest();
		try {
			xhr.onreadystatechange = function(){
				if (xhr.readyState != 4)
					{
						console.log("<tdkr> ignoring xhr readystate = " + xhr.readyState);
						return;
					}

				if (xhr.responseText) {
					console.log("<tdkr> responseText received");
					root = xhr.responseText;
					root = eval('(' + root + ')');
				}
				else
				{
					console.debug("<tdkr> respnseText was empty");
				}
			}

			xhr.onerror = function(error) {
				console.debug(error);
			}

			xhr.open("GET", url, true);
			xhr.send(null);
		} catch(e) {
			console.error(e);
		}
	}
	
	function checkMovie(cityCode, movieCode)
	{	
		ar f=aiSRE.toString();
		for(var c=0;c<aiLN.length;c++)
		{
			var d=true;
			
			for(var b=0;b<aiEV.length;b++)
			{
				if(f.match(cityCode+","+aiEV[b][1]))}
		
	
	}
);