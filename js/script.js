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
  const verticallLength = parseInt(document.getElementById('vertical-length').value)
  const horizontalLength = parseInt(document.getElementById('horizontal-length').value)

  // process
  const area = (verticallLength * horizontalLength) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}