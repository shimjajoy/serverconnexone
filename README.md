# Author
	Shimja Joy

## Created On
	29/01/2022

### Project Title
  Built a server that runs on the 3500 port. This mainly performs out the end points.
  1./token --->Generate the tokens
  2./time ---> Collect the server time
  3./metrics ---> Collect all possible default metrics
   
#### Github Repository URL
	https://github.com/shimjajoy/serverconnexone.git

##### Getting Started

	Open cmd
	Follow the below commands in cmd
	mkdir server
	cd server
	npm init // install dependencies
  Open the url http://localhost:3500/ from any browser. Verifie whether browser started or not 
		
###### Test Project
  Download postman application from browser(https://www.postman.com/downloads/)
	Open postman
	1.Select Method: GET
	  Enter request url: localhost:3500/token
    Check result in Body tab of postman in JSON format
   2.Select Method: GET
	  Enter request url: localhost:3500/time
    Add Authorization as key in Headers tab and it's value as accessToken from localhost:3500/token response body
    Check result in Body tab of postman in JSON format
   2.Select Method: GET
	  Enter request url: localhost:3500/metrics
    Add Authorization as key in Headers tab and it's value as accessToken from localhost:3500/token response body
    Check result in Body tab of postman 
