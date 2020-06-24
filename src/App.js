import React from "react";
import image from "../preview.jpg";
import "./App.scss";
import { UnitsConverter } from "./UnitConverter/UnitConverter";
import { ConvertedResults } from "./Components/ConvertedResults";
import { FormDiv } from "./Components/FormDiv";

const App = () => (
  <div>
    <UnitsConverter>
      <FormDiv />
      <ConvertedResults />
    </UnitsConverter>
    <h1>Instrukce</h1>
    <p>
      Prostudujte si zdrojový kód UnitConverter. Jedná se o React Context, který
      vám pomůže vytvořit malý jednoduchý převodník jednotek.
      <br />
      Převodník podporuje 4 typy veličin pro převod: délku, plochu, objem a
      teplotu.
      <br />
      Připravte malý formulář, kde prvním selectem vyberete typ veličiny. Pod
      ním do inputu zadáte číselnou hodnotu a v druhém selectu vyberete jednotku
      vstupu.
      <br />
      Pod formulářem pak zobrazte všechny ostatní jednotky vybraného typu s
      převedenou hodnotou z inputu zaokrouhlenou na 2 desetinná místa.
      <br />
      Grafickou úpravu nechám na vás. Výsledek by mohl vypadat třeba nějak
      takto:
      <br />
      <img src={image} alt="preview" />
    </p>
    <h3>Rozšířující úkol - nepovinná část</h3>
    <p>
      Zkuste přidat 5. typ veličin - čas. Přidejte jednotky sekunda, minuta,
      hodina a den pro převod.
    </p>
  </div>
);

export default App;
