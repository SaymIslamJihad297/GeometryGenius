/**
 * obejctive: get base, height of a triangle. Calculate the area using the provided formula. and then display the area.
 * step-1: get base value
 * step-2: added an id in the base input
 * step-3: use getElementById to access to the input file
 * step-4: get value from the input field (value is string now)
 * step-5: convert the value to a number. use parseFloat()
 * 
 *  */


function calculateTriangleArea(){
    const base = getInputValue('triangle-base');

    // get triangle height

    const height = getInputValue('triangle-height');

    const area = 0.5 * (base * height)
    setInnerText('area-dis', area);
}


function calculateRectangleArea(){
    const rectangleWidthInput = getInputValue('rectangle-width')
    // console.log(typeof(rectangleWidthInput))

    const rectangleLengthInput = getInputValue('rectangle-length');
    // console.log(typeof(rectangleLengthInput))

    const area = rectangleWidthInput * rectangleLengthInput;
    setInnerText('area-dis-rect', area);
}

function calculateParallelogram(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height')

    const area = base * height;
    setInnerText('area-dis-par',area);
}
function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-d1');

    // get triangle height

    const d2 = getInputValue('rhombus-d2');

    const area = 0.5 * (d1 * d2)
    setInnerText('area-dis-rhom', area);
}
function calculatePentagonArea(){
    const d1 = getInputValue('pentagon-p');

    // get triangle height

    const d2 = getInputValue('pentagon-b');

    const area = 0.5 * (d1 * d2)
    setInnerText('area-dis-pen', area);
}


function getInputValue(inputFieldId){
    const inputValue = parseFloat(document.getElementById(inputFieldId).value);
    return inputValue;
}
function setInnerText(elementID, area){
    const element = document.getElementById(elementID);
    element.innerText = area;
}