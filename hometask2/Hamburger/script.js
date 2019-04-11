class Hamburger {
    constructor (size, stuffing) { 
        this.size = size;
        this.stuffing = stuffing;
        this.topping = {
            spice: 0,
            mayo: 0
        };
        this.cost = 0;
        this.calories = 0;
    }
    addTopping(topping) { // Добавить добавку 
        if (confirm("Хотите добавить приправу или майонез?")) {
            let choise = Number(prompt ("Выберите добавку: 1) приправа, 2) майонез или 3) приправа и майонез."));
            switch (choise){
                case 1: this.topping.spice = 1;  
                    break;
                case 2: this.topping.mayo = 1;
                    break;
                case 3: 
                this.topping.spice = 1;
                this.topping.mayo = 1;    
            };
        }
    }
    removeTopping(topping) { // Убрать добавку 
        if (this.topping.spice==1){
            if (confirm("Хотите убрать приправу?")) {
                this.topping.spice = 0; 
            }
        }
        if (this.topping.mayo==1){
            if (confirm("Хотите убрать майонез?")) {
                this.topping.mayo = 0; 
            }
        }
    }
    getToppings(topping) { // Получить список добавок 
       switch (this.topping.spice + this.topping.mayo) {
        case 2: alert ("Вы выбрали приправу и майонез.");  
            break;
        case 1: 
            if (this.topping.spice == 1) {
                alert ("Вы выбрали приправу.");
            } else {
                alert ("Вы выбрали майонез.");
            }
            break;
        case 0: alert ("Добавки отсутствуют.");
        };
    }
    getSize() { // Узнать размер гамбургера 
        this.size = Number ( prompt ("Выберите размер гамбургера: 1) маленький или 2) большой."));
   }
    getStuffing() { // Узнать начинку гамбургера 
        this.stuffing = Number ( prompt ("Выберите начинку: 1) сыр, 2) салат или 3) картофель."));
    }
    calculatePrice() { // Узнать цену 
        if (this.size==1) {
            this.cost = 50;
        } else {
            this.cost = 100;
        }
        switch (this.stuffing) {
            case 1: this.cost += 10;  
            break;
            case 2: this.cost += 20;  
            break;
            case 3: this.cost += 15;
        }
        if (this.topping.spice == 1) {
            this.cost += 15;
        }
        if (this.topping.mayo == 1) {
            this.cost += 20;
        }
        alert (`Стоимость гамбургера = ${this.cost}.`);
    }
    calculateCalories() { // Узнать калорийность 
        if (this.size==1) {
            this.calories = 20;
        } else {
            this.calories = 40;
        }
        switch (this.stuffing) {
            case 1: this.calories += 20;  
            break;
            case 2: this.calories += 5;  
            break;
            case 3: this.calories += 10;
        }
        if (this.topping.spice == 1) {
            this.calories += 0;
        }
        if (this.topping.mayo == 1) {
            this.calories += 5;
        }
        alert (`Калорийность гамбургера = ${this.calories}.`);
    }
    collectHamburger () {
        this.getSize();
        this.getStuffing();
        this.addTopping();
        this.getToppings();
        this.removeTopping();
        this.calculatePrice();
        this.calculateCalories();
    }
    }     

let hamburger = new Hamburger();
hamburger.collectHamburger();
    