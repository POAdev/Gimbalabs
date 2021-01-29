import { useEffect, useState } from 'react';
import ideas from './data/ideas.json';
import Axios from 'axios'; 

function App() {

  const [someData, setSomeData] = useState("");
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    Axios.get("https://postgrest-api.mainnet.dandelion.link/tx_metadata?id=eq.2806")
    .then(function(response){
      console.log(response.data[0].json)
      setSomeData(response.data[0].json);
      setTimeout(()=>{
        setLoading(false)

      }, 3000)
      

    });
  });
  return (
    <div className="App">
      <header className="App-header">
        
      
        <h2>{ideas.title}</h2>
        <h3>{ideas.homeTown}</h3>
        <p>I have some ideas</p>
        <h4>{ideas.idea[0].id} : {ideas.idea[0].text}</h4>
        <ol>
          {ideas.idea.map(i =>
          
          <li key = {i.id}>{i.text}</li>
          
          )}
          
        </ol>
        <h1>{loading ? "Loading": someData}</h1>
       
      </header>
    </div>
  );
}

export default App;
