 date-addons
 ====
 javascript convert date to string utilities.

 History
 ----
 2017.04.27 1) first library development
 2017.04.28 version up (0.0.1 -> 0.1.0)

 Version
 ----
 0.1.0

 Language Support
 ----

 This library support english and korean.

 ```js
  //use english
  dateAddons.convert(new Date(), 'yyyy-MM-dd', 'en');

  //use korean
  dateAddons.convert(new Date(), 'yyyy-MM-dd', 'kr');
 ```

 Setup
 ----
 source code download, import html this source code
 ```html
 <script src="path/to/date-addons.js"></script>
 <script>
  dateAddons.convert(new Date(), 'yyyy-MM-dd');
 </script>
 ```

 If you install npm, use in javascript file.
 ```js
  var dateAddons = require('date-addons');
  dateAddons.convert(new Date(), 'yyyy-MM-dd');
 ```

 Usage
 ----
 If you want use date-addons for Date default function, use this

 ```js
  var dateAddons = require('date-addons');
  //Use dateAddons setup function, You use default date function.
  dateAddons.setup(true);
  new Date().format('yyyy-MM-dd', 'en');
 ```
 If you don't want use setup function, You can use convert function. convert function needs date, string, language params

 ```js
  var dateAddons = require('date-addons');
  dateAddons.convert(new Date(), 'yyyy-MM-dd', 'en');
  console.log(dateAddons.convert(date, 'yyyy-MM-dd HH:mm:ss', 'kr')); //2017-04-27 12:11:05
  console.log(dateAddons.convert(date, 'yy'));  //17
  console.log(dateAddons.convert(date, 'MM'));  //04
  console.log(dateAddons.convert(date, 'E', 'en'));  //Tuesday
  console.log(dateAddons.convert(date, 'a/p', 'en')); //PM
  console.log(dateAddons.convert(date, 'yyyy-MM-dd HH:mm:ss, date is E, time is a/p')); //2017-04-27 12:11:05, date is Thursday, time is PM
