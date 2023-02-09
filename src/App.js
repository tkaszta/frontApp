import React from 'react';
import './App.css';
// import logo from './logo.svg';

const App = () => {

  const [groups, setGroups] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);

    fetch('/viragok', {
      baseURL: 'https://backapp.azurewebsites.net'
    })
      .then(response => response.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
      })
      .catch((error) => {
        console.info(`err: ${error}`);
      })
      .finally(() => {
        console.log('Experiment completed');
      })
  }, []);

  if (loading) {
    return <p>Loading slow...</p>;
  }

//   let groups = [
//     {
//         "id": 1,
//         "name": "cinia"
//     },
//     {
//         "id": 2,
//         "name": "kankalin"
//     },
//     {
//         "id": 3,
//         "name": "rozsa"
//     },
//     {
//         "id": 4,
//         "name": "muskatli"
//     },
//     {
//         "id": 5,
//         "name": "kankalin"
//     }
// ]

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="App-intro">
          <h2>Virag Lista</h2>
          {
            groups.map(group =>
            <div key={group.id}>
              {group.name}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
