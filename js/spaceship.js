/**
 * Created with JetBrains PhpStorm.
 * User: Egor
 * Date: 11.08.13
 * Time: 10:22
 * To change this template use File | Settings | File Templates.
 */
/**
 * Создает экземпляр космического корабля.
 * @name Vessel
 * @param {String} name Название корабля.
 * @param {Number}[] position Местоположение корабля.
 * @param {Number} capacity Грузоподъемность корабля.
 */

function Vessel(name, position, capacity) {
    this.name = name;
    this.position = position;
    this.capacity = capacity;
    this.currentCargo=0;
}

/**
 * Выводит текущее состояние корабля: имя, местоположение, доступную грузоподъемность.
 * @example
 * vessel.report(); // Грузовой корабль. Местоположение: Земля. Товаров нет.
 * @example
 * vesserl.report(); // Грузовой корабль. Местоположение: 50,20. Груз: 200т.
 * @name Vessel.report
 */
Vessel.prototype.report = function () {
    var report = this.name;
    report+=". Местоположение: "+ this.position+". ";
    report+= (this.currentCargo==0) ? "Товаров нет" : "Груз "+this.currentCargo;
    report+=".";
    console.log(report);
}

/**
 * Выводит количество свободного места на корабле.
 * @name Vessel.getFreeSpace
 */
Vessel.prototype.getFreeSpace = function () {
    return this.capacity-this.currentCargo;
}

/**
 * Выводит количество занятого места на корабле.
 * @name Vessel.getOccupiedSpace
 */
Vessel.prototype.getOccupiedSpace = function () {
    return this.currentCargo;
}

/**
 * Переносит корабль в указанную точку.
 * @param {Number}[]|Planet newPosition Новое местоположение корабля.
 * @example
 * vessel.flyTo([1,1]);
 * @example
 * var earth = new Planet('Земля', [1,1]);
 * vessel.flyTo(earth);
 * @name Vessel.report
 */
Vessel.prototype.flyTo = function (newPosition) {
 /*   console.log(newPosition.position);*/
    this.position =( newPosition.position === undefined ) ? newPosition : newPosition.position;
}

/**
 * Создает экземпляр планеты.
 * @name Planet
 * @param {String} name Название Планеты.
 * @param {Number}[] position Местоположение планеты.
 * @param {Number} availableAmountOfCargo Доступное количество груза.
 */
function Planet(name, position, availableAmountOfCargo) {
this.name = name;
this.position = position;
this.availableAmountOfCargo = availableAmountOfCargo;
}
/**
 * Выводит текущее состояние планеты: имя, местоположение, количество доступного груза.
 * @name Planet.report
 */
Planet.prototype.report = function () {
    report = "Планета "+ this.name
            +". Координаты: "+ this.position
            +". Доступный груз: "+this.availableAmountOfCargo;
    console.log(report);
}

/**
 * Возвращает доступное количество груза планеты.
 * @name Vessel.getAvailableAmountOfCargo
 */
Planet.prototype.getAvailableAmountOfCargo = function () {
return this.availableAmountOfCargo;
}

/**
 * Загружает на корабль заданное количество груза.
 *
 * Перед загрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Загружаемый корабль.
 * @param {Number} cargoWeight Вес загружаемого груза.
 * @name Vessel.loadCargoTo
 */
Planet.prototype.loadCargoTo = function (vessel, cargoWeight) {
    if (vessel.position==this.position && vessel.getFreeSpace()>=cargoWeight){
     vessel.capacity-=cargoWeight;
     vessel.currentCargo+=cargoWeight;
     this.availableAmountOfCargo -=cargoWeight;
     /*console.log("vessel is near the planet");*/
 }
    else{console.log("Корабль не может загрузить груз");}
}
/**
 * Выгружает с корабля заданное количество груза.
 *
 * Перед выгрузкой корабль должен приземлиться на планету.
 * @param {Vessel} vessel Разгружаемый корабль.
 * @param {Number} cargoWeight Вес выгружаемого груза.
 * @name Vessel.unloadCargoFrom
 */
Planet.prototype.unloadCargoFrom = function (vessel, cargoWeight) {
    if (vessel.position==this.position && vessel.getOccupiedSpace()>=0){
        this.capacity+=cargoWeight;
        vessel.currentCargo-=cargoWeight;
        this.availableAmountOfCargo +=cargoWeight;
    }
    else{
        console.log("нечего сгружать");
    }
}



/*
*                                               _       _            _
*  ___   _ __     __ _    ___    ___     ___  | |__   (_)  _ __    / |
* / __| | '_ \   / _` |  / __|  / _ \   / __| | '_ \  | | | '_ \   | |
* \__ \ | |_) | | (_| | | (__  |  __/   \__ \ | | | | | | | |_) |  | |
* |___/ | .__/   \__,_|  \___|  \___|   |___/ |_| |_| |_| | .__/   |_|
*       |_|                                             |_|
*
* */