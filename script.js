function triangle() {
    let AreaOfTriangle = 0.5 * baseOfTriangle.value * heightOfTriangle.value;
    AnswerForTriangle.value = AreaOfTriangle 
}

function square() {
    let AreaOfSquare = lengthOfSquare.value ** 2;
    AnswerForSquare.value = AreaOfSquare
}

function circle() {
    const pi = 22/7
    let AreaOfCircle =pi * (radiusOfCircle.value ** 2);
    AnswerForCircle.value = AreaOfCircle
}

function rectangle() {
    let AreaOfRectangle = lengthOfRectangle.value * breadthOfRectangle.value ;
    AnswerForRectangle.value = AreaOfRectangle
}
function rhombus() {
    let AreaOfRhombus = baseOfRhombus.value *  heightOfRhombus.value ;
    AnswerForRhombus.value = AreaOfRhombus
}
function parallelogram() {
    let AreaOfParallelogram = baseofParallelogram.value * heightOfParallelogram.value ;
    AnswerForParallelogram.value = AreaOfParallelogram
}
function BMI() {
    let AreaOfBMI = weightInKilogram.value / (heightInMeter **2) ;
    AnswerForBMI.value = AreaOfBMI
}

function trapezium() {
    let AreaOfTrapezium = lengthOfTrapezium.value * breadthOfTrapezium ;
    AnswerForTrapezium.value = AreaOfTrapezium
}

