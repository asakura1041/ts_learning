import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data.json';
import Test from './Test'

type USERS = typeof Data;

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

//Union Types
let value: boolean | number;
value = true;
value = 1;

let arrayUni: (number | string)[];
arrayUni = [1, 3, "hello"];

//typeof
let msg1: string = "hello";
let msg2: typeof msg1;
msg2 = "hello";

let animal = {
  cat: "small cat"
}

let newAnimal: typeof animal = {
  cat: "big cat"
}

//keyof
type KEYS = {
  primary: string;
  secondary: string
}

let key: keyof KEYS;
key = "primary";

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball"
}

// enum
enum OS {
  Windows,
  Mac,
  Linux
}

interface PC {
  id: number;
  OSTYPE: OS;
}

const PC1: PC = {
  id: 1,
  OSTYPE: OS.Windows
}

// 型の互換性
const com1 = "test";
let com2: string = com1;

let com3: string = "test";

// let func1 = (x: number) => {};
let func2 = (x: string) => {};

//Generics
interface GEN<T>{
  item: T;
}
const gen0: GEN<string> = { item: "hello" }
// const gen1: GEN<> = { item: "hello" }
// const gen2: GEN<string> = { item: 1 }

interface GEN2<T extends string | number > {
  item: T
}

const gen4: GEN2<number> = { item: 1 };
// const gen5: GEN2<boolean> = { item: true };

let keySports: keyof typeof SPORTS;
keySports = "soccer"

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Test text="asakura" />
      </header>
    </div>
  );
}

export default App;
