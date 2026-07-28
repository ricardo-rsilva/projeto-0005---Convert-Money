const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertCurrency() {
  const inputValue = document.querySelector(".input-values").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert",
  );
  
  const currencyValueConverted = document.querySelector(".currency-value");

  console.log(currencySelect.value);

  const dolarToday = 5.13;
  const euroToday = 5.83;
  const libraToday = 6.82;
  const bitcoinToday = 325576.89;
  const yuanToday = 1.32;
  const realToday = 0.9;


  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / libraToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue / bitcoinToday);
  }

   if (currencySelect.value == "yuan") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
    }).format(inputValue / yuanToday);
  }

    if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputValue / realToday);
  }



  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-image");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./Assets/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./Assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImage.src = "./Assets/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./Assets/bitcoin.png";
  }

    if (currencySelect.value == "yaun") {
    currencyName.innerHTML = "Yuan";
    currencyImage.src = "./Assets/yuan.png";
  }

    if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./Assets/real.png";
  }

    convertCurrency();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);
