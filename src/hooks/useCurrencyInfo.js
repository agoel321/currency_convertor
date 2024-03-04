import { useEffect, useState } from "react";


function useCurrencyInfo(currencies){
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://openexchangerates.org/api/${currencies}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currencies]))
    }, [currencies])

    console.log(data);
    return data
    
}


export default useCurrencyInfo;