const disp = document.querySelector('#weight-calc-display'); // Input area selector
const getWeightBtn = document.querySelector('button'); // Weight button selector
const weightdisp = document.getElementById('weight-display'); // Weight displaying area selector

// Getting weights on different planets functionality
getWeightBtn.addEventListener('click', () => {

    weightdisp.innerHTML = ``;

    // Calculating weight on all the planets with the help of given input
    const moon = Math.round(((eval(disp.value * 1.62 / 9.8)) * 10)) / 10;
    const mercury = Math.round(((eval(disp.value * 3.7 / 9.8)) * 10)) / 10;
    const venus = Math.round(((eval(disp.value * 8.87 / 9.8)) * 10)) / 10;
    const mars = Math.round(((eval(disp.value * 3.71 / 9.8)) * 10)) / 10;
    const jupiter = Math.round(((eval(disp.value * 24.79 / 9.8)) * 10)) / 10;
    const saturn = Math.round(((eval(disp.value * 10.44 / 9.8)) * 10)) / 10;
    const neptune = Math.round(((eval(disp.value * 11.15 / 9.8)) * 10)) / 10;
    const uranus = Math.round(((eval(disp.value * 8.69 / 9.8)) * 10)) / 10;
    const pluto = Math.round(((eval(disp.value * 0.58 / 9.8)) * 10)) / 10;

    // Displaying the weights on all the planets calculated 
    const planetWeightdisp = document.createElement('div');
    planetWeightdisp.classList.add('planet-weight-display');

    planetWeightdisp.innerHTML = `
    <div id="moon" class="planet">
              <span id="moon-head" class="planet-head">Moon</span>
              <span class="planet-colon">:</span>
              <span id="moon-weight" class="planet-weight">${moon} Kg</span>
            </div>
            <div id="mercury" class="planet">
              <span id="mercury-head" class="planet-head">Mercury</span>
              <span class="planet-colon">:</span>
              <span id="mercury-weight" class="planet-weight">${mercury} Kg</span>
            </div>
            <div id="venus" class="planet">
              <span id="venus-head" class="planet-head">Venus</span>
              <span class="planet-colon">:</span>
              <span id="venus-weight" class="planet-weight">${venus} Kg</span>
            </div>
            <div id="mars" class="planet">
              <span id="mars-head" class="planet-head">Mars</span>
              <span class="planet-colon">:</span>
              <span id="mars-weight" class="planet-weight">${mars} Kg</span>
            </div>
            <div id="jupiter" class="planet">
              <span id="jupiter-head" class="planet-head">Jupiter</span>
              <span class="planet-colon">:</span>
              <span id="jupiter-weight" class="planet-weight">${jupiter} Kg</span>
            </div>
            <div id="saturn" class="planet">
              <span id="saturn-head" class="planet-head">Saturn</span>
              <span class="planet-colon">:</span>
              <span id="saturn-weight" class="planet-weight">${saturn} Kg</span>
            </div>
            <div id="neptune" class="planet">
              <span id="neptune-head" class="planet-head">Neptune</span>
              <span class="planet-colon">:</span>
              <span id="neptune-weight" class="planet-weight">${neptune} Kg</span>
            </div>
            <div id="uranus" class="planet">
              <span id="uranus-head" class="planet-head">Uranus</span>
              <span class="planet-colon">:</span>
              <span id="uranus-weight" class="planet-weight">${uranus} Kg</span>
            </div>
            <div id="pluto" class="planet">
              <span id="pluto-head" class="planet-head">Pluto</span>
              <span class="planet-colon">:</span>
              <span id="pluto-weight" class="planet-weight">${pluto} Kg</span>
            </div>
    `

    weightdisp.appendChild(planetWeightdisp);
});