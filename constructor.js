
class Person {
    constructor(fname, sleepMode, money, healthRate){
    this.fname = fName
    this.sleepMode = sleepMode
    this.money = money
    this.healthRate = healthRate
    
    Person.prototype.sleep= function(hours){
         
        if (hours > 7){
            this.sleepMode = 'lazy';
        }
        else if (hours < 7){
            this.sleepMode = 'tired';
        }
        else if(hours == 7){
            this.sleepMode = 'happy';
        }
        else{
            return 'invalid value';
        }
        return this.sleep
    }
    Person.prototype.eat= function(meals){
         
        if (meals >= 3){
            this.healthRate = '100';
        }
        else if (meals == 2 ){
            this.healthRate = '75';
        }
        else if(meals == 1){
            this.healthRate = '50';
        }
        else{
            return 'invalid value';
        }
        return this.healthRate
    }
    this.buy = function (item) {
        return this.money=item*-10;
      };

    }

    }

const person = new Person ('Zeyad', '50', 'tired', 'rate')
console.log(person);

