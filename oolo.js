var Person = {
    innit: function (fname, sleepMode, money, healthRate){
    this.fname = fName,
    this.sleepMode = sleepMode,
    this.money = money,
    this.healthRate = healthRate,
    
    this.sleep = function () {
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
    this.eat = function () {
        if(meals==3)
        {
         return this.healthRate='100';
        }
        if(meals==2)
        {
         return this.healthRate='75';
        }
        if(meals==1)
        {
         return this.healthRate='50';
        }
       }
       
       this.buy = function (item) {
         return this.money=item*-10;
       }
    }
     
}

var person = object.create(Person).innit
