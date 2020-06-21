'use strict';

Vue.component('text-wrapper', {
    props: ['desc'],
    template: `
    <div class="book-desc"> 
        <div v-if="!showAll" class="short-text"> 
            <p> {{ shortText }}  <button v-show="isLongText" @click="toggleShowAll"> Read More... </button> </p>
        </div>
        <div v-else class="long-text"> 
            <p> {{ desc }}  <button @click="toggleShowAll"> Read Less... </button> </p>
        </div>
    </div>
    `,
    data() {
        return {
            showAll: false
        }
    },
    methods: {
        toggleShowAll() {
            this.showAll = !this.showAll;
        }
    },
    computed: {
        shortText() {
            return this.desc.slice(0,100);
        },
        isLongText() {
            return (this.desc.length > 100)
        }
    }
})