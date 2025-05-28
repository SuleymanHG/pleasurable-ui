let navigationMenu = document.querySelector('header');
let hamburgerButton = document.querySelector('#hamburger-button');
let hamburgerNav = document.querySelector('nav') 

hamburgerButton.addEventListener('click', function(){
    navigationMenu.classList.toggle('navigation-menu-open');
    hamburgerNav.classList.toggle('hamburger-open');
});

const checkbox = document.getElementById("checkbox");

  const svg1 = `
    <svg class="area-chart" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title desc">
      <title id="title">Attention Span Over Time</title>
      <desc id="desc">Area and line chart showing attention span growth</desc>
      <polygon fill="#70CFAD" opacity="0.7" points="0,150 100,140 200,120 300,60 400,40 400,80 300,90 200,130 100,150 0,160"/>
      <polyline fill="none" stroke="white" stroke-width="2" points="0,150 100,140 200,120 300,60 400,40"/>
      <circle cx="0" cy="150" r="5" fill="white" />
      <circle cx="100" cy="140" r="5" fill="white" />
      <circle cx="200" cy="120" r="5" fill="white" />
      <circle cx="300" cy="60" r="5" fill="white" />
      <circle cx="400" cy="40" r="5" fill="white" />
      <line x1="0" y1="180" x2="400" y2="180" stroke="#ccc" stroke-width="1" />
      <text x="0" y="195">April 29</text>
      <text x="100" y="195">May 3</text>
      <text x="200" y="195">May 29</text>
      <text x="300" y="195">August 30</text>
      <text x="-10" y="160" text-anchor="end">1 s</text>
      <text x="-10" y="130" text-anchor="end">5 s</text>
      <text x="-10" y="90" text-anchor="end">10 s</text>
    </svg>
  `;

  const svg2 = `
    <svg class="area-chart" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title desc">
      <title id="title">New Data</title>
      <desc id="desc">Area and line chart with different dataset</desc>
      <polygon fill="#70CFAD" opacity="0.7" points="0,160 100,130 200,110 300,80 400,60 400,100 300,110 200,130 100,150 0,170"/>
      <polyline fill="none" stroke="white" stroke-width="2" points="0,160 100,130 200,110 300,80 400,60"/>
      <circle cx="0" cy="160" r="5" fill="white" />
      <circle cx="100" cy="130" r="5" fill="white" />
      <circle cx="200" cy="110" r="5" fill="white" />
      <circle cx="300" cy="80" r="5" fill="white" />
      <circle cx="400" cy="60" r="5" fill="white" />
      <line x1="0" y1="180" x2="400" y2="180" stroke="#ccc" stroke-width="1" />
      <text x="0" y="195">April 29</text>
      <text x="100" y="195">May 3</text>
      <text x="200" y="195">May 29</text>
      <text x="300" y="195">August 30</text>
      <text x="-10" y="160" text-anchor="end">2 s</text>
      <text x="-10" y="130" text-anchor="end">6 s</text>
      <text x="-10" y="90" text-anchor="end">12 s</text>
    </svg>
  `;

  checkbox.addEventListener("change", () => {
    const svg = document.querySelector(".area-chart");
    svg.outerHTML = checkbox.checked ? svg2 : svg1;
  });