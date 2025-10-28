// ==================== 1. የሙቀት መጠን መቀየሪያ ====================
function convertTemp() {
    const type = document.getElementById('tempConversionType').value;
    const input = parseFloat(document.getElementById('tempInputValue').value);
    const resultElement = document.getElementById('tempResult');
    
    if (isNaN(input)) {
        resultElement.textContent = "Enter number!";
        resultElement.style.color = 'red';
        return;
    }
    
    resultElement.style.color = '#dc3545';
    let converted;

    if (type === 'CtoF') {
        // C ወደ F: (C * 9/5) + 32
        converted = (input * 9/5) + 32;
        resultElement.textContent = converted.toFixed(2) + " °F";
    } else if (type === 'FtoC') {
        // F ወደ C: (F - 32) * 5/9
        converted = (input - 32) * 5/9;
        resultElement.textContent = converted.toFixed(2) + " °C";
    }
}

// ==================== 2. Weight converter====================
function convertWeight() {
    const type = document.getElementById('weightConversionType').value;
    const input = parseFloat(document.getElementById('weightInputValue').value);
    const resultElement = document.getElementById('weightResult');

    if (isNaN(input)) {
        resultElement.textContent = "Enter number!";
        resultElement.style.color = 'red';
        return;
    }

    resultElement.style.color = '#dc3545';
    let converted;
    
    // 1 ኪሎግራም = 2.20462 ፓውንድ
    const kgToLbsFactor = 2.20462;

    if (type === 'kgToLbs') {
        converted = input * kgToLbsFactor;
        resultElement.textContent = converted.toFixed(2) + " Lbs";
    } else if (type === 'lbsToKg') {
        converted = input / kgToLbsFactor;
        resultElement.textContent = converted.toFixed(2) + " Kg";
    }
}

// ==================== 3. Distance Converter====================
function convertDistance() {
    const type = document.getElementById('distanceConversionType').value;
    const input = parseFloat(document.getElementById('distanceInputValue').value);
    const resultElement = document.getElementById('distanceResult');

    if (isNaN(input)) {
        resultElement.textContent = "Enter number!";
        resultElement.style.color = 'red';
        return;
    }

    resultElement.style.color = '#dc3545';
    let converted;

    // 1 ኪሎሜትር = 0.621371 ማይል
    const kmToMilesFactor = 0.621371;

    if (type === 'kmToMiles') {
        converted = input * kmToMilesFactor;
        resultElement.textContent = converted.toFixed(2) + " Miles";
    } else if (type === 'milesToKm') {
        converted = input / kmToMilesFactor;
        resultElement.textContent = converted.toFixed(2) + " Km";
    }
}

// ገጹ ሲጫን መጀመሪያ ላይ እንዲሰሩ እና ውጤት እንዲያሳዩ
document.addEventListener('DOMContentLoaded', () => {
    convertTemp();
    convertWeight();
    convertDistance();
});
