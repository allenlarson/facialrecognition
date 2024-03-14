import { useState } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';

import ParticlesBg from 'particles-bg';
import FacialRecognition from './components/FacialRecognition/FacialRecognition';

function App() {
  const [input, setInput] = useState('');
  const [image, setImage] = useState('');
  const [box, setBox] = useState({});

  const PAT = '0fea6ae36240497297b74b6c9f9b5085';
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = 'clarifai';
  const APP_ID = 'main';
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = 'face-detection';
  const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
  const IMAGE_URL = image;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: input,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Key ' + PAT,
    },
    body: raw,
  };

  const onInputChange = e => {
    setInput(e.target.value);
  };

  async function fetchData() {
    const response = await fetch(
      'https://api.clarifai.com/v2/models/' +
        MODEL_ID +
        '/versions/' +
        MODEL_VERSION_ID +
        '/outputs',
      requestOptions
    );
    const data = await response.json();
    const locations = data.outputs[0].data.regions[0].region_info.bounding_box;
    calculateFaceLocation(locations);
  }
  const calculateFaceLocation = async data => {
    const clarifaiFace = data;
    const image = document.getElementById('inputimage');
    const width = await Number(image.width);
    const height = await Number(image.height);
    console.log(width, height, clarifaiFace);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const onButtonSubmit = () => {
    setImage(input);
    fetchData();
    setBox(box);
  };

  const displayFaceBox = box => {
    setBox(box);
  };

  return (
    <div className="w-full flex flex-col h-screen content-center justify-center">
      <ParticlesBg color="#e4e4e4" type="cobweb" bg={true} />
      <div className="App contain flex justify-between w-full">
        <Logo />
        <Navigation />
      </div>
      <div className="flex flex-col gap-5 items-center h-full content-center justify-center">
        <Rank />
        <ImageLinkForm
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
        />
        <FacialRecognition imageURL={IMAGE_URL} />
      </div>
    </div>
  );
}

export default App;
