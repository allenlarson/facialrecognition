import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="App contain flex justify-between w-full">
        <Logo />
        <Navigation />
      </div>
      <div className="items-center">
        <ImageLinkForm />
        {/* {  <FaceRecognition />} */}
      </div>
    </div>
  );
}

export default App;
