import React, {useState, useEffect} from 'react';

export default function GetRaces2(props) {

    const [races, setRaces] = useState([])
    const [headers, setHeaders] = useState([])

    const fetchRacesData = () => {
        fetch('http://localhost:3001/api/users/getRaces')
          .then(response => {
            return response.json()
          })
          .then(data => {
            setRaces(data["races"])
            setHeaders(data["cols"])
          })
      }


    useEffect(() => {
        fetchRacesData()
    }, [])


    function RaceHeader(props) {
      return (
        <thead>
        <tr>
        {props.headers?.map(header => (
            <th key={header}>{header}</th>
            ))}
        </tr>
        </thead>
      )
    };


    function RaceRow(props) {      

      var obj = {};
      const tmp = props.races?.map(function(race){
        obj[race["id"]] = []
        Object.keys(race).map(function(name){
          var raceDeets = []
          if (props.race_cols.includes(name)) {obj[race["id"]].push(race[name])}
        })
        return obj
        })


      function formatValue(val) {
        try {
          const outval = val.includes('.000Z') ? val.substring(0,10) : val 
          return outval
        } catch (error) {
          console.error("Something bad happened format value");
          console.error(typeof val)
          console.error(error);
          return val
        }        
      }

      var ctr = 0
      try {
        var tableData = Object.keys(tmp[0])?.map(function(raceID) {
              ctr = ctr + 1
              if (ctr <= props.maxRows) {
              return <tr key={raceID}>
              {tmp[0][raceID]?.map((r,idx) => (
                    <td key={r}>{typeof r == "string" ? formatValue(r) : r}</td>
                  ))}
              </tr>}
              })
      } catch (error) {
        // console.error("Something bad happened");
        // console.error(error);
        // return (
        //   <tr />
        // )
      }           

      // var blah = {"id": 12345, "record": ["the best race", "2023-06-01"]}
      var additionalRow = props.newRow ? (
          <tr key={props.newRow["id"]}>
          {props.newRow["record"].map((v,idx) => (
            <td key={v}>{v}</td>
            ))}
          </tr>
        ) : null;

      return (
        <tbody>
          {tableData}{additionalRow}
        </tbody>
      )  
    };

    // const myheaders = ["id","race", "race_date", "notes"];
    // const myheaders = headers.map(h => h.name);  
    const myheaders = headers;  
    const filteredheaders = myheaders.filter(h => props.race_cols.includes(h))

    return (
      <div className="content">
        <h2 className="content-head">Upcoming Races</h2>
        <table className="pure-race-table pure-race-table-horizontal">
          <RaceHeader headers={filteredheaders} />             
          <RaceRow races={races} race_cols={filteredheaders} newRow={props.newRow} maxRows={props.maxRows}/>
        </table>
      </div>
      );
}