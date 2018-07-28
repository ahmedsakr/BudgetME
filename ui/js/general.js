function updateSpendValue(){
    var slider = document.getElementById("spend-slider");
    var slider_val = document.getElementById("spend-value");
    if (document.getElementsByName("interval")[0].checked) {
        slider_val.innerHTML = '$' + slider.value + "/week";
    } else {
        slider_val.innerHTML = '$' + slider.value + "/month";
    }
}
