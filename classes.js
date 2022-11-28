
class Person {
    constructor(fname, sleepMode, money, healthRate){
    this.fname = fName
    this.sleepMode = sleepMode
    this.money = money
    this.healthRate = healthRate

    function sleep (hours) {
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
    function eat (meals) {
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
       
       function buy (item) {
         return this.money=item*-10;
       }

}

}

console.log(person.sleep(6))
console.log(person.buy(2))
console.log(person.eat(2))


