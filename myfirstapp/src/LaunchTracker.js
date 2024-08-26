import { useState,useEffect } from "react";


const SPACEX_API_URL = "https://api.spacexdata.com/v3/launches"

function LaunchTracker() {
    const [launches,setLaunches] = useState([]);

    const [loading,setLoading] = useState(true);

    const [ error,setError] = useState(null);



    useEffect(()=>{
        fetch(SPACEX_API_URL)
        .then((response)=>{
            if(!response.ok){
                throw new Error("Failed to fetch data.")
            }
            return response.json()
        })
        .then((data)=>{
            setLaunches(data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error.message);
            setLoading(false);
        },[]);
    });

    return (
        <div>
            <h1>
                SpaceX Launch Tracker
            </h1>
            {loading && <p>Loading ....</p>}
            {error && <p>Error: {error}</p>}

            <ul>
                {launches.map((launch)=>(
                    <li key={launch.id}>
                        <h2>{launch.mission_name}</h2>
                        <p>Launch Date: {launch.launch_date_utc}</p>
                        <p>Launch Site: {launch.launch_site.site_name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}




export default LaunchTracker;