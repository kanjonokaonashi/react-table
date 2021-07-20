import React from "react";
import './App.css';
import SongsTable from "./Pages/Songs";
import {useSelector} from "react-redux";

const App = () => {

    const data = useSelector(state => state.data);

    return (
        <div className="App">  {/*router here*/}
            <SongsTable data={data}/>
        </div>
    );
}

export default App;
