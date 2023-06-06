import { useState, useEffect } from "react";

import GetRaces2 from 'content/UpcomingRaces2'
import Login from 'pages/Login'

export default function AddARace() {

    const [name, setName] = useState("");
    const [raceDate, setRaceDate] = useState("");
    const [notes, setNotes] = useState("");
    const [message, setMessage] = useState("");
    const [raceTable, setRaceTable] = useState(<GetRaces2 race_cols={["id", "name", "race_date", "notes"]} maxRows={20} />);

    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("http://localhost:3001/races", {
          method: "POST",
           headers: {
                'Content-Type': 'application/json',
              },
          body: JSON.stringify({
            name: name,
            race_date: raceDate,
            notes: notes,
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setRaceTable(<GetRaces2 race_cols={["id", "name", "race_date", "notes"]}
            newRow={{"id": 9999, "record": [9999,name,raceDate,notes]}}
            maxRows={20}
            />);
          setName("");
          setRaceDate("");
          setNotes("");
          setMessage("Race Uploaded");                    
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
        setMessage(err);
      }     
    };    

    return (
            <form className="pure-form pure-form-stacked" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add a Race to HFC Database</legend>
                    <label htmlFor="stacked-race">Race Name</label>
                    <input type="text" 
                           value={name}
                           id="stacked-race" 
                           onChange={(e) => setName(e.target.value)}
                           placeholder="Race Name" />
                    <span className="pure-form-message">Enter Race Name.</span>
                    
                    <label htmlFor="stacked-date">Race Date</label>
                    <input type="date" 
                           id="stacked-date" 
                           value={raceDate}
                           onChange={(e) => setRaceDate(e.target.value)}
                           placeholder="Race Date" />

                    <label htmlFor="race-notes-date">Race Notes</label>
                    <textarea id="race-notes" 
                              placeholder="Race Notes"
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)} 
                              className="pure-form-textarea" />

                    <button type="submit" className="pure-button pure-button-primary">Submit</button>                
                </fieldset>
                <div className="message">{message ? <p>{message}</p> : null}</div>
                {raceTable}
            </form>
            )
};