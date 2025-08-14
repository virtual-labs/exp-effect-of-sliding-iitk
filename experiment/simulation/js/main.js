const slideshowImage = document.querySelector('.discImage');

const slideshowImagesArray = [
    '../simulation/disc/1-1.png',
    '../simulation/disc/2-1.png',
    '../simulation/disc/3-1.png',
    '../simulation/disc/4-1.png',
    '../simulation/disc/5-1.png',
    '../simulation/disc/6-1.png',
    '../simulation/disc/7-1.png',
    '../simulation/disc/8-1.png',
    '../simulation/disc/9-1.png',
    '../simulation/disc/10-1.png',
    '../simulation/disc/11-1.png',
    '../simulation/disc/12-1.png',
    '../simulation/disc/13-1.png',
    '../simulation/disc/14-1.png',
    '../simulation/disc/15-1.png',
    '../simulation/disc/16-1.png',
    '../simulation/disc/1-1.png',
    '../simulation/disc/2-1.png',
    '../simulation/disc/3-1.png',
    '../simulation/disc/4-1.png',
    '../simulation/disc/5-1.png',
    '../simulation/disc/6-1.png',
    '../simulation/disc/7-1.png',
];
slideshowImage.style.width="150px";
slideshowImage.style.height="130px";
slideshowImage.setAttribute('x', '1610');
slideshowImage.setAttribute('y', '1002');
let slideshowCurrentIndex = 0;
let slideshowIntervalId;

function updateSlideshowImage() {
    slideshowCurrentIndex = (slideshowCurrentIndex + 1) % slideshowImagesArray.length;
    slideshowImage.setAttribute('href', slideshowImagesArray[slideshowCurrentIndex]); // <-- key change
}

function startImageSlideshow() {
    clearInterval(slideshowIntervalId);  // prevent overlapping
    slideshowIntervalId = setInterval(updateSlideshowImage, 0.1);

    setTimeout(() => {
        clearInterval(slideshowIntervalId);
    }, 5000);
}





// const slideshowImage = document.querySelector('.discImage');

// const slideshowImagesArray = [
//     '../simulation/disc/1-1.png',
//     '../simulation/disc/2-1.png',
//     '../simulation/disc/3-1.png',
//     '../simulation/disc/4-1.png',
//     '../simulation/disc/5-1.png',
//     '../simulation/disc/6-1.png',
//     '../simulation/disc/7-1.png',
//     '../simulation/disc/8-1.png',
//     '../simulation/disc/9-1.png',
//     '../simulation/disc/10-1.png',
//     '../simulation/disc/11-1.png',
//     '../simulation/disc/12-1.png',
//     '../simulation/disc/13-1.png',
//     '../simulation/disc/14-1.png',
//     '../simulation/disc/15-1.png',
//     '../simulation/disc/16-1.png',
//     '../simulation/disc/1-1.png',
//     '../simulation/disc/2-1.png',
//     '../simulation/disc/3-1.png',
//     '../simulation/disc/4-1.png',
//     '../simulation/disc/5-1.png',
//     '../simulation/disc/6-1.png',
//     '../simulation/disc/7-1.png',
// ];

// slideshowImage.style.width = "150px";
// slideshowImage.style.height = "130px";
// slideshowImage.setAttribute('x', '1610');
// slideshowImage.setAttribute('y', '1002');

// let slideshowCurrentIndex = 0;
// let slideshowIntervalId;

// function updateSlideshowImage() {
//     slideshowCurrentIndex = (slideshowCurrentIndex + 1) % slideshowImagesArray.length;
//     slideshowImage.setAttribute('href', slideshowImagesArray[slideshowCurrentIndex]);
// }


// function startImageSlideshow() {
//     clearInterval(slideshowIntervalId);
//     slideshowIntervalId = setInterval(updateSlideshowImage, 5); // slower & smoother

//     setTimeout(() => {
//         clearInterval(slideshowIntervalId);
//     }, 5000); // stop after 5 seconds
// }




//Your JavaScript goes in here

function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// Button 1 move
const moveButton = document.getElementById('moveButton');
    const objectToMove = document.getElementById('objectToMove');
    const targetObject = document.getElementById('targetObject');

    function moveObject() {
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;

        // Move the object to the target position
        objectToMove.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove.style.transform = `translate(-439px, -272px)`;
    }

    moveButton.addEventListener('click', moveObject);

    // Button 2 move
    // const moveButton2 = document.getElementById('moveButton2');
    // const objectToMove2 = document.getElementById('objectToMove2');
    // const targetObject2 = document.getElementById('targetObject2');

    // function moveObject2() {
    //     // Get the position of the target object
    //     const targetRect = targetObject.getBoundingClientRect();
    //     // const targetX = targetRect.left;
    //     // const targetY = targetRect.top;

    //     // Move the object to the target position
    //     objectToMove2.style.transition = 'transform 2s ease'; // Add a smooth transition effect
    //     objectToMove2.style.transform = `translate(-265px, -340px)`;
    // }

    // moveButton2.addEventListener('click', moveObject2);

    // Button 3 move
    const moveButton3 = document.getElementById('moveButton3');
    const objectToMove3 = document.getElementById('objectToMove3');
    const targetObject3 = document.getElementById('targetObject3');

    function moveObject3() {
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;

        // Move the object to the target position
        objectToMove3.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove3.style.transform = `translate(1605px, 430px)`;
    }

    moveButton3.addEventListener('click', moveObject3);

    // Button 4 ball opicity
const moveButton4 = document.getElementById('moveButton4');
function moveObject4() {
    objectToMove3.style.opacity=0;
}
moveButton4.addEventListener('click', moveObject4);


// Button 5 move
const moveButton5 = document.getElementById('moveButton5');
    const objectToMove5 = document.getElementById('objectToMove5');
    const targetObject5 = document.getElementById('targetObject5');

    function moveObject5() {
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;

        // Move the object to the target position
        objectToMove5.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove5.style.transform = `translate(-405px, -17px)`;
}

    moveButton5.addEventListener('click', moveObject5);

    // Button 6 move
const moveButton6 = document.getElementById('moveButton6');
const objectToMove6 = document.getElementById('objectToMove6');
const targetObject6 = document.getElementById('targetObject6');

function moveObject6() {
    // Get the position of the target object
    const targetRect = targetObject.getBoundingClientRect();
    // const targetX = targetRect.left;
    // const targetY = targetRect.top;

    // Move the object to the target position
    objectToMove6.style.transition = 'transform 2s ease'; // Add a smooth transition effect
    objectToMove6.style.transform = `translate(-90px, -705px)`;
}

moveButton6.addEventListener('click', moveObject6);



// button one by one open

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');

    function revealNextButton(currentButtonIndex) {
        if (currentButtonIndex < buttons.length - 1) {
            // buttons[currentButtonIndex].disabled = true;
            buttons[currentButtonIndex + 1].classList.remove('hidden');
        }
    }

    function hidePreviousButton(currentButtonIndex) {
        if (currentButtonIndex > 0) {
            buttons[currentButtonIndex].classList.add('hidden');
            buttons[currentButtonIndex - 1].disabled = true;
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            revealNextButton(i);
        });
    }

    // Reverse Button Click
    const reverseBtn = document.getElementById('reverseBtn');
    if (reverseBtn) {
        reverseBtn.addEventListener('click', function () {
            // Find the last visible enabled button and reverse it
            for (let i = buttons.length - 1; i > 0; i--) {
                if (!buttons[i].classList.contains('hidden') && !buttons[i].disabled) {
                    hidePreviousButton(i);
                    break;
                }
            }
        });
    }
});


// const pngElement = document.querySelector('.png-element');
// const popup = document.getElementById('popup');
// const popupText = document.getElementById('popup-text');

// pngElement.addEventListener('mouseover', () => {
//     const name = pngElement.getAttribute('alt');
//     popupText.textContent = name;
//     popup.style.display = 'block';
// });

// pngElement.addEventListener('mouseout', () => {
//     // popup.style.display = 'none';
// });


// popup all Element

const svgContainer = document.getElementById("svgContainer");
const elementName = document.getElementById("elementName");

svgContainer.addEventListener("mouseover", (e) => {
    if (e.target.dataset.name) {
        elementName.innerText = e.target.dataset.name;
        elementName.style.left = e.clientX + "-5px";
        elementName.style.top = e.clientY + "-4px";
        elementName.style.display = "block";
    }
});

svgContainer.addEventListener("mouseout", () => {
    elementName.style.display = "none";
});

// rotation base

// 25 RPM

var flag_material1=false;
var flag_material2=false;


 // JavaScript code for the rotation animation
 const svgImages = document.querySelectorAll('.svg-image');
 const moveButton7 = document.getElementById('moveButton7');
 let currentIndex = 0;
 let intervalId;


  // Function to display the next SVG image
  function showNextImage() {
    svgImages[currentIndex].style.display = 'none'; // Hide the current image
    currentIndex = (currentIndex + 1) % svgImages.length; // Move to the next image
    svgImages[currentIndex].style.display = 'block'; // Display the next image
}

// Function to start the animation
function startAnimation() {
    intervalId = setInterval(showNextImage, 0.1); // Change the interval as needed (in milliseconds)
}

// Function to stop the animation after 5 seconds
function stopAnimation() {
    clearInterval(intervalId);
}

// Add a click event listener to start the animation
moveButton7.addEventListener('click', () => {
    flag_material1=true
    startAnimation();
    setTimeout(stopAnimation, 5000); // Stop after 5 seconds (5000 milliseconds)
});
moveButton7.addEventListener('click', startImageSlideshow);


// moveButton7.addEventListener('click', () => {
//     startAnimation();
//     setTimeout(stopAnimation, 5000); // Stop after 5 seconds (5000 milliseconds)
// });

// 50 RPM

// JavaScript code for the rotation animation
// const svgImages = document.querySelectorAll('.svg-image');
const moveButton9 = document.getElementById('moveButton9');
// let currentIndex = 0;
// let intervalId;


 // Function to display the next SVG image
 function showNextImage() {
   svgImages[currentIndex].style.display = 'none'; // Hide the current image
   currentIndex = (currentIndex + 1) % svgImages.length; // Move to the next image
   svgImages[currentIndex].style.display = 'block'; // Display the next image
}

// Function to start the animation
function startAnimation() {
   intervalId = setInterval(showNextImage, 0.001); // Change the interval as needed (in milliseconds)
}

// Function to stop the animation after 5 seconds
function stopAnimation() {
   clearInterval(intervalId);
}

// Add a click event listener to start the animation
moveButton9.addEventListener('click', () => {
    flag_material2=true;
   startAnimation();
   setTimeout(stopAnimation, 5000); // Stop after 5 seconds (5000 milliseconds)
});
moveButton9.addEventListener('click', startImageSlideshow);



// JavaScript logic
// const material1Button = document.getElementById('moveButton7');
// const material2Button = document.getElementById('moveButton9');
const moveButton8 = document.getElementById('moveButton8');

const resultContainer = document.getElementById('resultContainer');
const material1Photo = document.getElementById('material1Photo');
const material2Photo = document.getElementById('material2Photo');

// Function to show the result photo based on the choice of material
function showResult() {
    if (flag_material1) {

        resultContainer.style.display = 'block';
        material1Photo.style.display = 'block';
        material2Photo.style.display = 'none';
    }
    if (flag_material2) {
            resultContainer.style.display = 'block';
            material1Photo.style.display = 'none';
            material2Photo.style.display = 'block';
    }
    // if(!flag_material1 && !flag_material2){
    //     alert('Please select a material first.');

    // }
}
console.log(moveButton8.addEventListener('click', showResult)
)
// Add click event listener to the Show Result button
moveButton8.addEventListener('click', showResult);



// material button disable

moveButton7.addEventListener('click', () => {
    moveButton9.disabled = true;
    moveButton7.disabled = false;
});

moveButton9.addEventListener('click', () => {
    moveButton7.disabled = true;
    moveButton9.disabled = false;
});




// Help! video

// document.getElementById("playButton").addEventListener("click", function () {
//     var videoPlayer = document.querySelector(".video-player");
//     videoPlayer.style.display = "block";
// });

// document.getElementById("closeButton").addEventListener("click", function () {
//     var videoPlayer = document.querySelector(".video-player");
//     videoPlayer.style.display = "none";
    
//     // Pause the video when closing
//     var video = document.getElementById("video");
//     video.pause();
// });


// button open in 5 sec

document.getElementById("moveButton7").addEventListener("click", function() {
    // Hide the initial button
    // this.style.display = "none";
    
    // Use setTimeout to show the hidden button after 5 seconds
    setTimeout(function() {
      document.getElementById("moveButton8").style.display = "block";
      document.getElementById("out").style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
  });

  document.getElementById("moveButton9").addEventListener("click", function() {
    // Hide the initial button
    // this.style.display = "none";
    
    // Use setTimeout to show the hidden button after 5 seconds
    setTimeout(function() {
      document.getElementById("moveButton8").style.display = "block";
      document.getElementById("out").style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
  });

// button open in 1 sec

  document.getElementById("moveButton3").addEventListener("click", function() {
    // Hide the initial button
    // this.style.display = "none";
    
    // Use setTimeout to show the hidden button after 5 seconds
    setTimeout(function() {
      document.getElementById("moveButton4").style.display = "block";
    }, 1000); // 5000 milliseconds = 5 seconds
  });


  // button one click two button open

const buttonContainer = document.getElementById('buttonContainer');

moveButton6.addEventListener('click', function () {
    buttonContainer.classList.remove('hidden');
});








// document.getElementById("moveButton8").addEventListener("click", function () {
//   document.getElementById("resultBox").classList.remove("hidden");
// });


// document.getElementById("moveButton8").addEventListener("click", function () {
//   document.getElementById("resultBox").classList.remove("hidden");
// });














let selectedRPM = null;
  let xImage = null;
  let yImage = null;
  let originalImage = null;

  function selectRPM(rpm) {
    selectedRPM = rpm;
    document.getElementById("moveButton8").classList.remove("hidden");
  }

  function showResult() {
    if (!selectedRPM) return;

    document.querySelectorAll('.materialPhoto').forEach(img => img.style.display = "none");

    // Select images based on RPM
    if (selectedRPM === "25") {
      originalImage = document.querySelector('img[src="out1.png"]');
      xImage = document.querySelector('img[src="out11.png"]');
      yImage = document.querySelector('img[src="out12.png"]');
    } else if (selectedRPM === "50") {
      originalImage = document.querySelector('img[src="out2.png"]');
      xImage = document.querySelector('img[src="out21.png"]');
      yImage = document.querySelector('img[src="out22.png"]');
    }

    // Show original image by default
    showImage(originalImage);
    toggleButtons(true, true, false);
    document.getElementById("resultContainer").style.display = "block";
  }

  function showImage(img) {
    document.querySelectorAll('.materialPhoto').forEach(i => i.style.display = "none");
    if (img) {
      img.style.display = "block";
      document.getElementById("imageLabel").innerHTML = `<b>${img.dataset.label}</b>`;
      document.getElementById("imageDescription").innerText = img.dataset.desc;
    }
  }

  function toggleButtons(xEnabled, yEnabled, origEnabled) {
    document.getElementById("nextBtn").disabled = !xEnabled;
    document.getElementById("prevBtn").disabled = !yEnabled;
    document.getElementById("origBtn").disabled = !origEnabled;
  }

  // Y-Profile Button
  document.getElementById("prevBtn").addEventListener("click", () => {
    showImage(yImage);
    toggleButtons(true, false, true);
  });

  // X-Profile Button
  document.getElementById("nextBtn").addEventListener("click", () => {
    showImage(xImage);
    toggleButtons(false, true, true);
  });

  // Original Image Button
  document.getElementById("origBtn").addEventListener("click", () => {
    showImage(originalImage);
    toggleButtons(true, true, false);
  });


















function showCalculation() {
  const container = document.getElementById("calculationContainer");
  container.style.display = "block";




  if (selectedRPM === "25") {
    // Test 2 Data from table
    container.innerHTML = generateTable({
      testNumber: "2",
      sample: "316 L stainless steel<br>(Ra = 28 nm)",
      load: "10 N",
      speed: "25 RPM",
      time: "30 min",
      Wv: "0.562",
      Δm: "0.001",
      cof: "0.41±0.06",
      dmax: "23 µm",
      SpWr1: "1.3×10⁻³",
      Wr1: "1.6×10⁻²",
      Wr2: "1.3×10⁻²"
    });
  } else if (selectedRPM === "50") {
    // Test 1 Data from table
    container.innerHTML = generateTable({
      testNumber: "1",
      sample: "316 L stainless steel (Ra = 16 nm)",
      load: "10 N",
      speed: "50 RPM",
      time: "30 min",
      Wv: "0.285",
      Δm: "0.009",
      cof: "0.45±0.07",
      dmax: "33 µm",
      SpWr1: "1.2×10⁻³",
      Wr1: "4.4×10⁻²",
      Wr2: "1.1×10⁻²"
    });
  } else {
    container.innerHTML = "<p style='color:red;'>Please select an RPM first.</p>";
  }
}

function generateTable(data) {
  return `
    <table style="width:100%; border-collapse:collapse; margin-top:10px;" border="1">
      <tr style="background:#eee;">
        <th>Parameter</th>
        <th>Value</th>
      </tr>
      <tr><td>Sample<br>(Ra = Sample roughness)<br> Obtained from Tribometer</td><td>${data.sample}</td></tr>
      <tr><td>Load</td><td>${data.load}</td></tr>
      
      <tr>
  <td>Mass Loss<br>Δm = m₁ − m₂</td>
  <td>${data.Δm} g</td>
</tr>
      <tr><td>Coefficient of Friction (cof)<br>Obtained from Tribometer</td><td>${data.cof}</td></tr>
      <tr><td>Max Penetration depth (dmax)</td><td>${data.dmax}</td></tr>
      <tr><td>Specific Wear Rate (Sp. Wr)</td><td>${data.SpWr1} mm³/N·m</td></tr>
      <tr><td>Wear Rate (Wr)</td><td>${data.Wr1}</td></tr>
    </table>
    <p style="margin-top:10px; font-style:italic; font-size:14px;">
      
    </p>
  `;
}



function showCalculationButtonsAfterDelay() {
  setTimeout(() => {
    document.getElementById("calculationBtn").classList.remove("hidden");
    document.getElementById("cleanSampleBtn").classList.remove("hidden");
    document.getElementById("measureWeightBtn").classList.remove("hidden");
    
  }, 5000); // 5 seconds
}


function selectRPM(rpm) {
  selectedRPM = rpm;
  document.getElementById("moveButton8").classList.remove("hidden");  // Show Result button
  document.getElementById("calculationBtn").classList.remove("hidden");
   // Show Calculation button
  const calcBtn = document.getElementById('calculationBtn');
  const cleanBtn = document.getElementById("cleanSampleBtn");
  const weightBtn = document.getElementById("measureWeightBtn");
 
  calcBtn.style.display = 'none';
  cleanBtn.style.display = 'none';
  weightBtn.style.display = 'none';
  


  // Show it again after 5 seconds
  setTimeout(() => {
    calcBtn.style.display = 'inline-block';
    cleanBtn.classList.remove('hidden');
    cleanBtn.style.display = 'inline-block';
    weightBtn.classList.remove('hidden');
    weightBtn.style.display = 'inline-block';
  }, 5000);
  
}



function showinitialMessage() {
  document.getElementById("initialMessage").style.display = "block";
}

function showCleanMessage() {
  document.getElementById("cleanMessage").style.display = "block";
}

function showWeightMessage() {
  document.getElementById("weightMessage").style.display = "block";
}

function showcMessage() {
  document.getElementById("cMessage").style.display = "block";
}




function openFormulaModal() {
  document.getElementById("formulaModal").style.display = "block";

  // 🔁 Ask MathJax to re-typeset formulas inside modal
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

function closeFormulaModal() {
  document.getElementById("formulaModal").style.display = "none";
}















function markClicked(button) {
    // Remove tick from all buttons (if you want only one active at a time)
    // document.querySelectorAll('.button').forEach(btn => btn.classList.remove('clicked'));

    // Add tick to the clicked one
    button.classList.add('clicked');
  }