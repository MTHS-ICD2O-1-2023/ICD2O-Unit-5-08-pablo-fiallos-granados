// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function enterClicked() {

  // input

  let a = parseInt(document.getElementById('A').value)
  let b = parseInt(document.getElementById('B').value)
  let remainder = a
  let quotient = 0

  // process

  while (true) {
    if (remainder < b) {
      break
    } else {
      quotient += 1
      remainder -= b
    }
  }

  // output

  document.getElementById("user-info").innerHTML = quotient + " remainder " + remainder
}
