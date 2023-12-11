const img = document.getElementById('bitmap');
let imgBitmap = null;

// Ensure the image is loaded and ready for use
createImageBitmap(img).then((x) => {
  imgBitmap = x;
  initialize();
});

let clock = new THREE.Clock();
let camera, scene, renderer, xrRefSpace, gl;
let gestureRecognizer;
let runningMode = 'IMAGE';
let enableWebcamButton;
let webcamRunning = false;
const videoWidth = window.screen.width;
const videoHeight = window.screen.height;

async function createGestureRecognizer() {
  const vision = await FilesetResolver.forVisionTasks(
    'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm'
  );
  gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        'https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task',
      delegate: 'GPU',
    },
    runningMode: runningMode,
  });
}

createGestureRecognizer();

const video = document.getElementById('webcam');
const canvasElement = document.getElementById('output_canvas');
const gestureOutput = document.getElementById('gesture_output');
const xOutput = document.getElementById('x_output');
const yOutput = document.getElementById('y_output');
let lastVideoTime = -1;
let results = undefined;
let model;
let isShot = false;

enableWebcamButton = document.getElementById('webcamButton');

enableWebcamButton.addEventListener('click', () => {
  enableCam();
  activateXR();
});

function enableCam(event) {
  if (!gestureRecognizer) {
    alert('Please wait for gestureRecognizer to load');
    return;
  }
  if (webcamRunning === true) {
    webcamRunning = false;
    return;
  }
  webcamRunning = true;

  const constraints = {
    video: {
      facingMode: 'user',
    },
  };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      video.srcObject = stream;
      video.addEventListener('loadeddata', predictWebcam);
    })
    .catch(function (err) {
      console.log('An error occurred: ' + err);
      alert('An error occurred: ' + err);
    });
}

async function predictWebcam() {
  const webcamElement = document.getElementById('webcam');
  if (runningMode === 'IMAGE') {
    runningMode = 'VIDEO';
    await gestureRecognizer.setOptions({ runningMode: 'VIDEO' });
  }

  let nowInMs = Date.now();

  if (video.currentTime !== lastVideoTime) {
    lastVideoTime = video.currentTime;
    results = gestureRecognizer.recognizeForVideo(video, nowInMs);
  }

  if (results.gestures.length > 0) {
    gestureOutput.style.display = 'block';
    gestureOutput.style.width = videoWidth;
    gestureOutput.innerText = results.gestures[0][0].categoryName;

    parseFloat((xOutput.innerText = results.landmarks[0][0].x.toFixed(2)));
    parseFloat((yOutput.innerText = results.landmarks[0][0].y.toFixed(2)));
    console.log(gestureOutput.innerText);
  } else {
    gestureOutput.style.display = 'none';
  }

  if (webcamRunning === true) {
    window.requestAnimationFrame(predictWebcam);
  }
}

async function activateXR() {
  // ... (the rest of your AR code)
}

// The remaining AR-related code remains unchanged.

function initialize() {
  window.addEventListener('resize', onWindowResize, false);
  // Rest of your initialization code
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
  renderer.render(scene, camera);
}

var button = document.createElement('button');
button.id = 'ArButton';
button.textContent = 'ENTER AR';
button.style.cssText += `position: absolute;top:80%;left:40%;width:20%;height:2rem;`;

document.body.appendChild(button);

document.getElementById('ArButton').addEventListener('click', (x) => AR());

// Rest of your event listeners and functions
