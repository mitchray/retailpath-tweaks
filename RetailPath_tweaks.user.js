// ==UserScript==
// @name         RetailPath tweaks
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Enhance the UX of RetailPath
// @author       fmm
// @match        https://metcash.retailpath.com.au/*
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    var completedAnnotations = document.querySelectorAll('.annotation').forEach(function(annotation) {
        if (annotation.getElementsByClassName("infoChangeLog").length > 0) {
            console.log("found!");
            annotation.classList.add("hidden", "completed");

            annotation.onclick = function() {
                annotation.classList.toggle("hidden");
            }
        }
    });
})();
