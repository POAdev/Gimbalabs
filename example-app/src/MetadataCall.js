
import { useEffect, useState } from 'react';


import Axios from 'axios'; 
function MetadataCall() {
  const [someData, setSomeData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    Axios.get("https://postgrest-api.mainnet.dandelion.link/rpc/get_metadatum")
    .then(function(response){
     // console.log(response.data[0].json)
      setSomeData(response.data);
      setTimeout(()=>{
        setLoading(false)

      }, 500)
      

    });
  });

  
    return (
      <div className="App">
          {someData.map(datum =><h1 style={{color:"red"}}>Key :{datum.metadatum}</h1>)}


          
 
      </div>
    );
  }
  
  export default MetadataCall;
  

  // <h1 style={{color:"red"}}>{loading ? "Loading": someData}</h1> 
  // <h1 style={{color:"red"}}>Key: {someData.metadatum}</h1>