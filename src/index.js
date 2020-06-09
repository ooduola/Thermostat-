
class Thermostat {
    constructor() {
        this.temperature = 20;
        this.MINIMUM_TEMPERATURE = 10;
        this.powerSavingMode = true;
    }
    currentTemperature() {
        return this.temperature;
    }
    up() {
        this.temperature += 1
    }
    down() {
        if (this.isMinimumTemperature()) {
            return;
        }
        this.temperature -= 1
    }  
    isMinimumTemperature() {
        return this.temperature === this.MINIMUM_TEMPERATURE;
    }
    currentPowerMode() {
        return this.powerSavingMode;
    }
    getMaxTemp() {
        if (this.powerSavingMode === true) {
            return 25;

        } else {
            return 32;
        }
    }
    switchPowerMode() {
        this.powerSavingMode = false;
    }
}


