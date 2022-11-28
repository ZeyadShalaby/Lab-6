var Person = function (hours, meals, items){
    return{
    hours: hours,
    meals: meals,
    item: item,

    sleep : function () {
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
    },

    eat : function () {
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
       },
        
      buy : function (item) {
        return this.money=item*-10;
      }
}
}

var person = Person ('6', '2', '1');