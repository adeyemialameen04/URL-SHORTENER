const navToggle = document.querySelector('.nav-toggle');
const closeBtn = document.querySelector('.close-btn');
const navBtns = document.querySelector('.nav__btns');
const navLinks = document.querySelector('.nav__links');
const linksContainer = document.querySelector('.links__container');

navBtns.addEventListener('click', () => {
  const linksHeight = navLinks.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;


  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    navToggle.style.display = 'none';
    closeBtn.style.display = 'inline-block';
  } else {
    linksContainer.style.height = 0;
    navToggle.style.display = 'inline-block';
    closeBtn.style.display = 'none';
  }

  console.log(linksHeight);
});

const inputUrl = document.getElementById('shorten');
const shortenBtn = document.getElementById('shorten-btn');
const result = document.getElementById('result');

const shortenUrl = async () => {
  const url = 'https://url-shortener23.p.rapidapi.com/shorten';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'b76d9106d7msh5f92fbf4c5f3d4ap1d3bddjsnf9e362de983c',
      'X-RapidAPI-Host': 'url-shortener23.p.rapidapi.com'
    },
    body: JSON.stringify({
      url: inputUrl.value
    })
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.short_url);
    showResult(result);
  } catch (error) {
    console.log(error);
    showError(error);
  }
};

const showError = (errors) => {
  error.textContent = errors;
};

const showResult = (results) => {
  result.textContent = results.short_url;
  result.style.fontSize = '10';
  result.href = results.short_url;
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(results.short_url);
    // copyBtn.innerText = "Copied";
    copied.style.display = "inline-block";
    setTimeout(() => {
      // copyBtn.innerText = "";
      copied.style.display = 'none';
    }, 2000);
  });
};

const copyBtn = document.getElementById('copy-btn');
const copied = document.querySelector('.copied');
const error = document.querySelector('#error');
const loader = document.querySelector('.loader');











const shortenText = document.querySelector('.shorten-text');



shortenBtn.addEventListener('click', () => {
  shortenUrl();
  loader.style.display = 'block';
  shortenText.innerHTML = '';
  setTimeout(() => {
    loader.style.display = 'none';
    shortenText.innerHTML = "Shorten it";
  }, 3500);
});