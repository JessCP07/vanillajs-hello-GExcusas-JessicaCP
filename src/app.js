/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let excusa = document.getElementById("Excuse");
let reset_button = document.getElementById("reset_button");
let generate_button = document.getElementById("generate_button");

function numeroAleatorio(maximo) {
  return Math.floor(Math.random() * maximo);
}

function escogerUnElementoAlAzar(lista) {
  let longitudDeLaLista = lista.length;
  let indiceAleatorio = numeroAleatorio(longitudDeLaLista);
  let elementoAlAzar = lista[indiceAleatorio];
  return elementoAlAzar;
}

function generarExcusaAlAzar() {
  let who = ["The Dog", "my granma", " The Mailman", "My Bird"];
  let action = ["Ate", "Peed", "Crushed", "Broke"];
  let what = ["My Home Work ", "My Phone", "The Car"];

  let when = [
    "Before The Class",
    "When I was Sleeping",
    "While i Was Exercising",
    "During My Lunch",
    "While i was praying"
  ];

  let whoAleatorio = escogerUnElementoAlAzar(who);
  let whenAleatorio = escogerUnElementoAlAzar(when);
  let actionAleatorio = escogerUnElementoAlAzar(action);
  let whatAleatorio = escogerUnElementoAlAzar(what);

  return (
    whoAleatorio +
    " " +
    actionAleatorio +
    " " +
    whatAleatorio +
    " " +
    whenAleatorio
  );
}

function excusaInitial() {
  excusa.innerHTML = "Haz click para generar una excusa";
}

excusa.onclick = function() {
  for (let i = 0; i < 50; i++) {
    setTimeout(function() {
      excusa.innerHTML = generarExcusaAlAzar();
    }, i * i);
  }
};

reset_button.onclick = function() {
  excusaInitial();
};
generate_button.onclick = function() {
  excusa.innerHTML = generarExcusaAlAzar();
};

window.onload = function() {
  excusaInitial();
};
