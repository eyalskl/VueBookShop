"use strict";

import "./cmps/book-app.cmp.js";

new Vue({
  el: "#App",
  template: `
    <div>
        <header class="app-header main-header flex align-center justify-center">
            <h1> Miss Books </h1>
        </header>
        <book-app> </book-app>
    </div>
    `,
});
