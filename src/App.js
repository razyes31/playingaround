import logo from './logo.svg';
import './App.css';

function App() {
  const Vehicle = {
    Car : 'car',
    Bike : 'bike',
    Truck : 'truck'
};

Object.freeze(Vehicle);

if (Object.values(Vehicle).includes('rajesh')){
  console.log("found");

} else {
  console.log("not found");
}
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className="App-header" >Hello Rajesh</h1>
          <h1>first commit branch 1</h1>
          <h1>Second branch second commit</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
export const temp = @font-face {
  font-family: myFirstFont;
  src: url(sansation_light.woff);
}