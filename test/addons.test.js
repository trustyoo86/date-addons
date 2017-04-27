'use strict';

var should = require('should');

var dateAddons = require('../src/date-addons.js');

function createFixedDate() {
  return new Date(2017, 3, 27, 11, 11, 5);
}

describe('date addons test', function () {
  var date = createFixedDate();

  it('when date addons setup is true, date format function is setting default.', function () {
    dateAddons.setup(true);

    var stringDate = date.format('yyyy-MM-dd HH:mm:ss');

    should(stringDate).not.be.empty();
  });

  it('when date addons setup is true, date format yyyy-MM-dd HH:mm:ss is 2017-04-27 11:11:05.', function () {
    dateAddons.setup(true);

    var stringDate = date.format('yyyy-MM-dd HH:mm:ss');

    should(stringDate).be.equal('2017-04-27 11:11:05');
  });

  it('when date addons not setup, convert function is date format', function () {
    dateAddons.setup(false);

    should(dateAddons.convert(date, 'yyyy-MM-dd HH:mm:ss')).not.be.empty();
  });

  it('when date addons not setup, convert function yyyy-MM-dd HH:mm:ss is 2017-04-27 11:11:05', function () {
    dateAddons.setup(false);

    should(dateAddons.convert(date, 'yyyy-MM-dd HH:mm:ss')).be.equal('2017-04-27 11:11:05');
  });

  it('when date addons not setup, convert time string PM', function () {
    dateAddons.setup(false);

    should(dateAddons.convert(date, 'a/p', 'en')).be.equal('AM');
  });

  it('when date addons not setup, convert week name', function () {
    dateAddons.setup(false);

    console.log(dateAddons.convert(date, 'E', 'en'));

    should(dateAddons.convert(date, 'E', 'en')).not.be.empty();
  });
});
