// Copyright (c) 2022 Emmanuel-Fofeyin All rights reserved
//
// Created by: Emmanuel.Fofeyin
// Created on: march 28 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of triangle.
 */
function calculate () {
  // input
  const p = parseInt(document.getElementById('p-of-rhombus').value)
  const q = parseInt(document.getElementById('q-of-rhombus').value)

  // process
  const area = (p * q) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}