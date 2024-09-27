/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let excusa = document.getElementById("Excuse");

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

excusa.onclick = function() {
  for (let i = 0; i < 100; i++) {
    setTimeout(function() {
      excusa.innerHTML = generarExcusaAlAzar();
    }, i * i);
  }
};

window.onload = function() {
  excusa.innerHTML = "Haz click para generar una excusa";
};
