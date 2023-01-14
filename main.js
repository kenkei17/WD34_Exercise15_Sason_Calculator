
  let convert = document.getElementById('convert');

convert.addEventListener('click', function(e){
    e.preventDefault()
    let meterInput = document.getElementById("meterInput").value;
    let result = Number(meterInput) * 0.000621371;
    document.querySelector('#milesOutput').innerHTML = result;
    let kmResult = Number(meterInput) * 0.001;
    document.querySelector('#kmOutput').innerHTML = kmResult;
    let feetResult = Number(meterInput) * 3280.84
    document.querySelector('#feetOutput').innerHTML = feetResult;
});