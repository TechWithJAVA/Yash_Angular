"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(_name, _color, _birthYear) {
        this._name = _name;
        this._color = _color;
        this._birthYear = _birthYear;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (name.length > 12) {
                throw new Error("Name has a max length of 12");
            }
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "birthYear", {
        get: function () {
            return this._birthYear;
        },
        set: function (birthYear) {
            if (birthYear <= 0 && birthYear.toString().length < 4) {
                throw new Error("Birth Year must not be less than equal to zero ,it should 4 digit");
            }
            this._birthYear = birthYear;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
var AdhocEmployee = /** @class */ (function (_super) {
    __extends(AdhocEmployee, _super);
    function AdhocEmployee(_name, _color, _birthYear, _workingHour) {
        var _this = _super.call(this, _name, _color, _birthYear) || this;
        _this._workingHour = _workingHour;
        return _this;
    }
    Object.defineProperty(AdhocEmployee.prototype, "WorkingHour", {
        get: function () {
            return this._workingHour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdhocEmployee.prototype, "Workinghour", {
        set: function (workinghour) {
            this._workingHour = workinghour;
        },
        enumerable: true,
        configurable: true
    });
    return AdhocEmployee;
}(Employee));
var employees = new Employee('saroj', 'fare', 1988);
console.log(employees);
var name = employees.name;
console.log(name);
employees.name = 'yfyugui';
console.log(employees.name + " " + employees.color + " " + employees.birthYear);
var emp = new AdhocEmployee('dsaf', 'black', 2889, 24);
console.log(emp);
console.log('name :' + emp.name + ' color :' + emp.color + ' birth_Year : ' + emp.birthYear + ' working_hour : ' + emp.WorkingHour);
