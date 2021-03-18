import React from "react";
import Header from './Header';
import {Link} from 'react-router-dom';

const Impressum = () => {
  return (
    <div className="container">
      <div className="imprint-container">
        <h1>Impressum</h1>
        <Link to="/"><p style={{fontWeight: 400, textAlign: 'right',}}>ZURÜCK ZUR HOMEPAGE</p></Link>
        <hr></hr>
        <br />
        <p>
          BIRDDOGS GBR <br />
          GORMANNSTR. 14 <br />
          10119 BERLIN
        </p>
        <p>
          <a href="mailto:mail@stagebulli.de">mail@stagebulli.de</a>
          <br />
          <a href="https://www.stagebulli.de">www.stagebulli.de</a>
        </p>
        <p>
          Für diese Internetpräsenz verantwortlich: <br />
          Felix Franke, Berlin
          <br />
          Peter Hemsing, Berlin
        </p>
        <h5>HAFTUNGSHINWEIS:</h5>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich. Für Schäden, die
          sich aus der Nutzung oder Nichtnutzung dieser Website ergeben, wird in
          keinem Fall eine Haftung übernommen. Urheberrechtshinweis: Alle
          Inhalte und Strukturen dieser Website sind urheber- und
          leistungsschutzrechtlich geschützt. Die Veröffentlichung im
          WorldWideWeb oder in sonstigen Diensten des Internet bedeutet noch
          keine Einverständniserklärung für eine anderweitige Nutzung durch
          Dritte. Wir erlauben und begrüßen ausdrücklich das Zitieren unserer
          Dokumente sowie das Setzen von Links auf unsere Website, solange
          kenntlich gemacht wird, dass es sich um Inhalte der Website von
          unserer Website handelt und diese Inhalte nicht in Verbindung mit
          Inhalten Dritter gebracht werden, die unseren Interessen
          widersprechen.
        </p>
      </div>
    </div>
  );
};

export default Impressum;
