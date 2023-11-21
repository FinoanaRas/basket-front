import Header from './pages/Header';
import statsData from './data/statistiques.json';
import './css/page.css';
import StatPage from './pages/Stat.js';
import { useState } from 'react';

function App() {

  const[stat,setStat] = useState(statsData);
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <table cellSpacing={0} cellPadding={10}>
          <tr>
              <th>Joueur</th>
              <th>Equipe</th>
              <th>Match</th>
              <th>Mj</th>
              <th>ppm</th>
              <th>rpm</th>
              <th>pdpm</th>
              <th>mpm</th>
              <th>tir</th>
              <th>3pts</th>
              <th>Lf</th>
          </tr>
        {stat.map((stat) => {
          return(
            <StatPage stat={stat} />
          );
        })}
        </table>
      </div>
    </div>
  );
}

export default App;
