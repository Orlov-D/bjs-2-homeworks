function parseCount(count) {
    if (isNaN(Number.parseInt(count))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(count);
}

function validateCount(newCount) {
    try {
        return parseCount(newCount);
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor(first, second, third) {
        if ((first + second) < third || (first + third) < second || (third + second) < first) { 
            //Надо ли тут в скобки каждое условие через или брать? ((first + second) < third)
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.first = first;
        this.second = second;
        this.third = third;
    }
    getPerimeter() {
        return this.first + this.second + this.third;
    }
    getArea() {
        let p = (this.first + this.second + this.third) / 2;
        return +(Math.sqrt(p * (p - this.first) * (p - this.second) * (p - this.third))).toFixed(3);
    }
}

function getTriangle(first, second, third) {
    try {
        return new Triangle(first, second, third);
    } catch (e) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}