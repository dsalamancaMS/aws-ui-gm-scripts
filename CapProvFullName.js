// ==UserScript==
// @name         Capacity Provider Full name
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the limit for the Capacity Provider name
// @author       saladeni@amazon.com
// @match        https://ap-southeast-2.console.aws.amazon.com/ecs/home?region=ap-southeast-2
// @include      https://*.console.aws.amazon.com/ecs/home?region=*
// @grant        none
// @require     https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
 function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

 addGlobalStyle('.capacity-provider-strategy-select { width: auto !important; }');
})();



