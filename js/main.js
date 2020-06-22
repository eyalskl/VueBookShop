"use strict";

import bookApp from "./cmps/book-app.cmp.js";

new Vue({
  el: "#App",
  template: `
    <div>
        <header class="app-header main-header flex align-center justify-center">
            <h1> <span> <i class="fas fa-book"></i> </span> Miss Books </h1>
        </header>
        <book-app> </book-app>
    </div>
    `,
    components: {
        bookApp
    }
});
