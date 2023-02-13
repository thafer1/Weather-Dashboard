var key = '1d2c15f1db3aa7f0b035948b071e20cd';

document.getElementById("city-search").addEventListener("click", function() {
    const city = document.getElementById("city-name").value;
    localStorage.setItem("city", JSON.stringify(city));
});