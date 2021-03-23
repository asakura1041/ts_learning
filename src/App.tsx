import React from 'react';
import logo from './logo.svg';
import './App.css';

const userName = "asakura";
let userAge: number = 21;
let bool: boolean = true;
let ary = [true, "asakura", 40];

interface NAME {
  first: string;
  last: string | null;
}

let name : NAME = { first: "asakura", last: null }

const func1 = (x: number, y:number) => {
  return x + y;
};

//Intersection types
type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 21,
  city: "Chiba",
  username: "asakura",
  password: "asakura1041"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

//Union Types
let value: boolean | number;
value = true;
value = 1;

let arrayUni: (number | string)[];
arrayUni = [1, 3, "hello"];

export default App;
