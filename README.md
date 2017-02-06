# Front End Test
An AngularJS focused take home test for Front-end Developers.

## Solution Preview
![preview](https://dl.dropboxusercontent.com/u/455813290/Blog%20Images/Github/angular-weather-github-preview.png)

## Instructions
+ Clone this repo
+ Complete this exercise and submit either a zip of the solution or a link to a new repo
+ Please incorporate the included `angular.min.js` (Angular 1.5.8) framework into your solution. All other choices of libraries, frameworks, etc. are up to you.

## Requirements
+ Solution should be responsive
  + **_The included solution uses Semantic UI for responsive containers._**
+ Use the the included `weather.json` file as your datasource (sample data from [Yahoo's Weather API](https://developer.yahoo.com/weather/))
  + **_The included solution has a hard coded location but pulls live data from [Open Weather API](https://openweathermap.org/api)._**
+ Show the "current" conditions for New York:
  + Location (ie. New York, NY, USA)
  + Current weather description (ie. sunny)
  + Current temperature
  + Today's high temperature
  + Today's low temperature
+ Allow the user to toggle more data in the current conditions area:
    + Wind Speed
    + Humidity
    + Pressure
    + Sunrise/Sunset Time
  + **_The included solution contains all the requested data points._**
+ Show the 7 Day forecast as a multi-line chart (use any charting library you would like but it should be incorporated as an Angular Directive)
  + **_The included solution uses Chartist.js_**
  + Y axis should show the High and Low temperature as separate lines
  + X axis should show 7 days (starting with the "current" day)
  + The chart should have a tool tip that when activated shows:
    + Day of the week
    + High temperature
    + Low temperature
    + Weather description (ie. Breezy)
+ __Bonus:__ Was this too easy? Want to make it a real app? Use the [Yahoo's Weather API](https://developer.yahoo.com/weather/) or [Open Weather API](https://openweathermap.org/api) with the default location set to New York, NY, and allow the user to change the location by zip code.
