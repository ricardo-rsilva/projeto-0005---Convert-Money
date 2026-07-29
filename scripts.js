const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectToConvert = document.querySelector(".currency-select-to-convert");


function convertCurrency() {
  const inputValue = document.querySelector(".input-values").value;
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");

  let valueInReal;

  const dolarToday = 5.13;
  const euroToday = 5.83;
  const libraToday = 6.82;
  const bitcoinToday = 325576.89;
  const yuanToday = 1.32;
  const realToday = 1;


  if (currencySelectToConvert.value == "real") {
    valueInReal = inputValue
  }
  if (currencySelectToConvert.value == "dolar") {
    valueInReal = inputValue * dolarToday
  }
  if (currencySelectToConvert.value == "euro") {
    valueInReal = inputValue * euroToday
  }
  if (currencySelectToConvert.value == "libra") {
    valueInReal = inputValue * libraToday
  }
  if (currencySelectToConvert.value == "bitcoin") {
    valueInReal = inputValue * bitcoinToday
  }
  if (currencySelectToConvert.value == "yuan") {
    valueInReal = inputValue * yuanToday
  }

    console.log(valueInReal);

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valueInReal / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valueInReal / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(valueInReal / libraToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
    }).format(valueInReal / bitcoinToday);
  }

  if (currencySelect.value == "yuan") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
    }).format(valueInReal / yuanToday);
  }

  if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valueInReal);
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

  if (currencySelect.value == "yuan") {
    currencyName.innerHTML = "Yuan";
    currencyImage.src = "./Assets/yuan.png";
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./Assets/real.png";
  }

  convertCurrency();
}

function changeCurrencyToConvert() {
  const currencyNameToConvert = document.querySelector(".currency-name-to-convert");
  const currencyImageToConvert = document.querySelector(".currency-image-to-convert");

   if (currencySelectToConvert.value == "real") {
    currencyNameToConvert.innerHTML = "Real";
    currencyImageToConvert.src = "./Assets/real.png";
    }

    if (currencySelectToConvert.value == "dolar") {
    currencyNameToConvert.innerHTML = "Dólar Americano";
    currencyImageToConvert.src = "./Assets/dolar.png";
    }

    if (currencySelectToConvert.value == "euro") {
    currencyNameToConvert.innerHTML = "Euro";
    currencyImageToConvert.src = "./Assets/euro.png";
    }
    
    if (currencySelectToConvert.value == "libra") {
    currencyNameToConvert.innerHTML = "Libra Esterlina";
    currencyImageToConvert.src = "./Assets/libra.png";
    }
    
    if (currencySelectToConvert.value == "bitcoin") {
    currencyNameToConvert.innerHTML = "Bitcoin";
    currencyImageToConvert.src = "./Assets/bitcoin.png";
    }
    
    if (currencySelectToConvert.value == "yuan") {
    currencyNameToConvert.innerHTML = "Yuan";
    currencyImageToConvert.src = "./Assets/yuan.png";
    }

  }




currencySelectToConvert.addEventListener("change", changeCurrencyToConvert);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);
