'use strict';
/**
 * date-addons
 * ====
 * javascript date format function and utilities.
 *
 * Language Support
 * ----
 *
 * This library support english and korean.
 *
 * ```js
 *  //use english
 *  dateAddons.convert(new Date(), 'yyyy-MM-dd', 'en');
 *
 *  //use korean
 *  dateAddons.convert(new Date(), 'yyyy-MM-dd', 'kr');
 * ```
 *
 * Setup
 * ----
 * source code download, import html this source code
 * ```html
 * <script src="path/to/date-addons.js"></script>
 * <script>
 *  dateAddons.convert(new Date(), 'yyyy-MM-dd');
 * </script>
 * ```
 *
 * If you install npm, use in javascript file.
 * ```js
 *  var dateAddons = require('date-addons');
 *  dateAddons.convert(new Date(), 'yyyy-MM-dd');
 * ```
 *
 * Usage
 * ----
 * If you want use date-addons for Date default function, use this
 *
 * ```js
 *  var dateAddons = require('date-addons');
 *  //Use dateAddons setup function, You use default date function.
 *  dateAddons.setup(true);
 *  new Date().format('yyyy-MM-dd', 'en');
 * ```
 * If you don't want use setup function, You can use convert function. convert function needs date, string, language params
 *
 * ```js
 *  var dateAddons = require('date-addons');
 *  dateAddons.convert(new Date(), 'yyyy-MM-dd', 'en');
 * ```
 * @name date-addons
 * @version 0.0.1
 */

(function () {
  //String and Number util prototype settings
  String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
  String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
  Number.prototype.zf = function(len){return this.toString().zf(len);};

  /**
   * date addons setup
   * @name setup
   * @param  {Boolean} isSetup setup boolean
   * @example
   *  var dateAddons = require('date-addons');
   *
   *  dateAddons.setup(true);
   *
   *  console.log(new Date().format('YYYY-MM-dd HH:mm:ss')); //'2017-04-20 11:11:11'
   */
  function setup (isSetup) {
    //if isSetup, date addons default setup
    if (isSetup) {
      _setupDate();
    } else {
      if (Date.prototype.format) {
        Date.prototype.format = null;
      }
    }
  }

  /**
   * convert date to string
   * @param  {Object} date date Object
   * @param  {String} format   date convert format string
   * @return {Function} format.replace replace format function
   * @example
   *
   *  var dateAddons = require('date-addons'),
   *      date = new Date();
   *
   *  console.log(dateAddons.convert(date, 'yyyy-MM-dd HH:mm:ss', 'kr')); //2017-04-27 12:11:05
   *  console.log(dateAddons.convert(date, 'yy'));  //17
   *  console.log(dateAddons.convert(date, 'MM'));  //04
   *  console.log(dateAddons.convert(date, 'E', 'en'));  //Tuesday
   *  console.log(dateAddons.convert(date, 'a/p', 'en')); //PM
   *  console.log(dateAddons.convert(date, 'yyyy-MM-dd HH:mm:ss, date is E, time is a/p')); //2017-04-27 12:11:05, date is Thursday, time is PM
   */
  function convert(date, format, language) {
    if (!date.valueOf()) return " ";

    var d = date, //date
        h,        //hour
        weekNameEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        weekNameKr = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        timeNameEn = ["AM", "PM"],
        timeNameKr = ["오전", "오후"],
        timeName,
        weekName;

    //weekname language setting(default : korean)
    weekName = language == 'en'? weekNameEn : weekNameKr;
    timeName = language == 'en'? timeNameEn : timeNameKr;

    return format.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
      //replace string switch
      switch($1) {
        case "yyyy":
            return d.getFullYear();
        case "yy":
            return (d.getFullYear() % 1000).zf(2);
        case "MM":
            return (d.getMonth() + 1).zf(2);
        case "dd":
            return d.getDate().zf(2);
        case "E":
            return weekName[d.getDay()];
        case "HH":
            return d.getHours().zf(2);
        case "hh":
            return ((h = d.getHours() % 12) ? h : 12).zf(2);
        case "mm":
            return d.getMinutes().zf(2);
        case "ss":
            return d.getSeconds().zf(2);
        case "a/p":
            return d.getHours() < 12 ? timeName[0] : timeName[1];
        default:
            return $1;
      }
    });
  }

  /**
   * setup date format
   * @name setupDate
   */
  function _setupDate () {
    Date.prototype.format = function(f, language) {
        if (!this.valueOf()) return " ";

        var weekNameEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekNameKr = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            timeNameEn = ["AM", "PM"],
            timeNameKr = ["오전", "오후"],
            timeName,
            weekName;

        //weekname language setting(default : korean)
        weekName = language == 'en'? weekNameEn : weekNameKr;
        timeName = language == 'en'? timeNameEn : timeNameKr;
        var d = this;
        var h;

        return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
            switch ($1) {
                case "yyyy":
                    return d.getFullYear();
                case "yy":
                    return (d.getFullYear() % 1000).zf(2);
                case "MM":
                    return (d.getMonth() + 1).zf(2);
                case "dd":
                    return d.getDate().zf(2);
                case "E":
                    return weekName[d.getDay()];
                case "HH":
                    return d.getHours().zf(2);
                case "hh":
                    return ((h = d.getHours() % 12) ? h : 12).zf(2);
                case "mm":
                    return d.getMinutes().zf(2);
                case "ss":
                    return d.getSeconds().zf(2);
                case "a/p":
                    return d.getHours() < 12 ? timeName[0] : timeName[1];
                default:
                    return $1;
            }
        });
    };
  }

  var addons = {
    setup : setup,
    convert : convert
  };

  if (typeof exports !== 'undefined') {
    module.exports = addons;
  } else {
    window.dateAddons = addons;
  }
})();
