
Pure Angular Date Range Picker
===================
A pure Angular (moment.js is the only dependency) date range picker, inspired by Dan Grossman's bootstrap-daterangepicker.

----------

Installation
-------------
bower:  
`bower install --save ob-daterangepicker`  
npm:  
`npm install --save ob-daterangepicker`

----------

Usage
-------------

1. Add the directive js & css to your index.html file:  
```
  <link rel="stylesheet" href="bower_components/ob-daterangepicker/dist/styles/ob-daterangepicker.css">
  <script src="bower_components/ob-daterangepicker/dist/scripts/ob-daterangepicker.js"></script>
```

2. Inject `obDateRangePicker` to your main module:  
```
  angular.module('yourModule', ['obDateRangePicker'])
```

3. Add the `ob-daterange-picker` directive to your html:  
```
  <ob-daterangepicker range="vm.range"></ob-daterangepicker>
```
----------

Configurations
-------------
All configurations are set through the `ob-daterange-picker` directive attributes. Here is the list of configurations:  

#### **range:**  
Sets the initial range that would be displayed on the date-range-picker. When, range will be updated this object *will be muted* accordingly.  
**type:**  
`Object`
```
	{
		start: Moment | String,
		end: Moment | String
	}
```  
**default:**  
```
	{
		start: moment(),
		end: moment()
	}
```
**Note:**  
`start` and `end` have to be of same type (`Moment` object or a `String`). If you choose to provide the attributes as strings, then you will have to provide the [format](#format) of the date, for example:  
JS:  
```
 	this.range = {
		start: '27-08-2014',
		end: '30-08-2014'
	};
	this.format = 'DD-MM-YYYY';
``` 
HTML:  
```
	<ob-daterangepicker range="vm.range" format="vm.format"></ob-daterangepicker>
```

#### **format:**
If provided then the range object start and end attributes are of `String` type. You can find the available formats [here](http://momentjs.com/docs/#/parsing/string-format/).  
**type:**  
`String`  
**default:**  
`undefined`

#### **min-day:**    
The earliest selectable date, dates before this date will be disabled.   
**type:**  
`String` or `Moment`   
**Note:**  
If you choose to provide the attribute as `String` you will have to provide the [format](#format) of the day.  
**default:**  
`undefined`

#### **max-day:**  
The latest selectable date, dates after this date will be disabled.   
**type:**    
`String` or `Moment`   
**Note:**  
If you choose to provide the attribute as `String` you will have to provide the [format](#format) of the day.    
**default:**    
`undefined`

#### **linked-calendars:**  
When enabled, the two calendars displayed will always be for two sequential months (i.e. January and February), and both will be advanced when clicking the left or right arrows above the calendars. When disabled, the two calendars can be individually advanced and display any month/year.  
**type:**  
`Boolean`  
**default:**  
`true`

#### **week-start:**  
Specifies the first day of week (i.e. Sunday, Monday). Has to be one of following:  
`'su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'`  
**type:**  
`String`  
**default:**  
`su`  

#### **week-days-name:**  
Specifies the week days names  
**type:**  
`Array<String>`  
**default:**  
`['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']`  

#### **on-apply:**  
Callback function which be invoked when range is applied.  
**type:**  
`Function(start,end)`    
**default:**  
`undefined`   
 **example:**  
```  
js:
	this.onApply(start, end) {
		...
	}
html:
	<ob-daterangepicker on-apply="vm.onApply(start, end)"></ob-daterangepicker>
```  
**Note:**  
You must to provide the `start` and `end` parameters as seen in the above example.
 
#### **auto-apply:**  
Hide the apply and cancel buttons, and automatically apply a new date range as soon as two dates or a predefined range is selected
**type:**  
`Boolean`    
**default:**  
`false`   
**example:**  
```  
js:
this.onApply(start, end) {
  ...
}
html:
<ob-daterangepicker on-apply="vm.onApply(start, end)"></ob-daterangepicker>
```  
**Note:**  
You must to provide the `start` and `end` parameters as seen in the above example.
 
----------

Position - Configurations
-------------
The picker position can be set by **css classes**, here are the available configurations:

#### **drops:**  
Whether the picker appears below or above the `ob-daterangepicker` directive. Has to be one of following `up` or  `down`.    
**type:**    
css class   
**default:**  
`down`   
 **example:**  
```
<ob-daterangepicker range="vm.range" class="up"></ob-daterangepicker>
```  

#### **opens:**  
Whether the picker appears aligned to the left, to the right, or centered relative to the `ob-daterangepicker` directive. Has to be one of following `right`, `left` or `center`.  
**type:**    
css class   
**default:**    
`left`   
 **example:**    
```
<ob-daterangepicker range="vm.range" class="left"></ob-daterangepicker>
``` 

**Note:**  
You can combine the class to achieve combined positioning. For example:  
```
<ob-daterangepicker range="vm.range" class="up center"></ob-daterangepicker>
``` 

----------

Contribution
-------------
 - Fork the project in your account and create a branch with your fix: `some-great-feature` or `some-issue-fix`.
 - Commit your changes in that branch, don't forget to add tests.  
 - Open a pull request, and reference the initial issue in the pull request message (e.g. *fixes #<your-issue-number>*). Write a good description and title, so everybody will know what is fixed/improved.  
 - Finally, your contributions will be merged! Contributions are more than welcome!
