'use strict';

import appHeader from './cmps/app-header.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';

import {eventBus} from './services/event-bus.service.js' 

eventBus.$on('user-msg', (ev)=>{
    console.log('user-msg', ev);
})

import { myRouter } from "./routes.js";

new Vue({
  el: "#app",
  router: myRouter,
  template: `
    <div>
        <user-msg :msgData="userMsgData" />

        <app-header> </app-header>
        
        <main class="app-main">
            <router-view />
        </main>

        <footer class="main-footer">
            <span> 
                <i class="far fa-copyright"></i> 
            </span> 
            <p> Coffeerights 2020, Created By /Eyal Barkai/ </p>
        </footer>
    </div>
    `,
    data: {
        userMsgData: {
            isVisible: false,
            txt: '',   
            type:'' 
        }
    },
    created() {
        eventBus.$on('show-msg', (data) => {
            console.log('data:', data)
            this.userMsgData = data;
        });
    },
    components: {
        appHeader,
        userMsg
    }
});
