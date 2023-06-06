import React, {useState, useEffect} from 'react';


export default function GetRaces(props) {
    const [races, setRaces] = useState([])

    console.log('getting races')
    const fetchRacesData = () => {
        fetch('http://localhost:3001')
          .then(response => {
            return response.json()
          })
          .then(data => {
            setRaces(data)
          })
      }

    useEffect(() => {
        fetchRacesData()
    }, [])


    function RaceHeader(props) {
        if (props.notes_flag) {
            return (
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Race</th>
                    <th>Notes</th>
                </tr>
                </thead>
                )
        }
        else {
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Race</th>
                </tr>
                </thead>
        }
    }

    function RaceRow({notes_flag, id, race_date, name, notes}) {
        if (notes_flag) {
            return (
                <tr key={id}>
                    <td>{race_date.substring(0,10)}</td>
                    <td>{name}</td>
                    <td>{notes}</td>
                </tr>
                )
        }
        else {
            return (
                <tr key={id}>
                    <td>{race_date.substring(0,10)}</td>
                    <td>{name}</td>
                </tr>
                )
            }
    }

    return (
        <div className="content">
        <h2 className="content-head">Upcoming Races</h2>
        <table className="pure-race-table pure-race-table-horizontal">
            <RaceHeader notes_flag={props.notes_flag} />
            <tbody>
                {races.rows?.map(race => (
                        <RaceRow notes_flag={props.notes_flag} 
                                 id={race.id}
                                 race_date = {race.race_date}
                                 name = {race.name}
                                 notes = {race.notes}
                        />
                        ))}
            </tbody>
        </table>
        </div>
      );
}