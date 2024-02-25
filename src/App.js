import './App.css';
import ItemCounter from './ItemCounter';

function App() {
  return (
    <div className="App">
      <ItemCounter itemName="コーヒー" />
      <ItemCounter itemName="カフェラテ" />
      <ItemCounter itemName="アイスティー" />
      <ItemCounter itemName="ココア" />
      <ItemCounter itemName="リンゴジュース" />
      <ItemCounter itemName="オレンジジュース" />
      <ItemCounter itemName="コーラ" />
      <ItemCounter itemName="サイダー" />
    </div>
  );
}

export default App;
