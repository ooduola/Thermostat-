'use strict';

describe('Thermostat', function() {

  var thermostat; 

  beforeEach(function() {
  thermostat = new Thermostat();
  });

  it('starts with a temperature of 20',function() { 
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('increases temperature by value of argument', function() {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('decreases temperature by value of argument', function() {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i=0; i < 11; i++) {
      thermostat.down()
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  it('starts power saving mode on',function() { 
    expect(thermostat.currentPowerMode()).toEqual(true);
  });

  it('it sets maximum temperature to 25 degrees when power saving mode is true',function() { 
    expect(thermostat.getMaxTemp()).toEqual(25);
    
  });

  it('switch power saving mode on to false' ,function() { 
    thermostat.switchPowerMode();
    expect(thermostat.currentPowerMode()).toEqual(false);
  });

  it('it sets maximum temperature to 32 degrees when is power saving mode is false' ,function() { 
    thermostat.switchPowerMode();
    expect(thermostat.getMaxTemp()).toEqual(32);
  });
});