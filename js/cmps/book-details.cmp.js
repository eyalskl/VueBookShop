"use strict";

import './text-wrapper.cpm.js';

Vue.component("book-details", {
  props: ["book"],
  template: `
    <div class="book-details">
        <div> <h2> {{ book.title }} </h2> 
            <span class="price" :class="priceTag"> {{ formattedPrice }} </span> 
            <img class="sale" :src="onSale" /> 
        </div>
        <div> 
            <span class="category" v-for="category in book.categories"> {{ category }} </span>
        </div>
        <img class="thumbnail" :src="book.thumbnail" />
        <p v-for="author in book.authors"> by {{ author }} </p>
        <p>Published at: {{ book.publishedDate }} {{ publishText }} </p>
        <h5> {{ book.subtitle }} </h5>
        <text-wrapper :desc="book.description" />
        <p> Page Count: {{book.pageCount}} {{ pageCountText }} </p>
        <button class='close' @click="close"> Go back </button>
    </div>
    `,
  methods: {
    close() {
      this.$emit("close", null);
    },
  },
  computed: {
    publishText() {
      if (this.book.publishedDate + 10 < new Date().getFullYear())
        return "(Veteran Book)";
      else if (this.book.publishedDate + 1 >= new Date().getFullYear())
        return "(New Book!)";
      else return "";
    },
    formattedPrice() {
      const currencyCode = this.book.listPrice.currencyCode;
      const price = this.book.listPrice.amount;
      return new Intl.NumberFormat(this.book.language, {
        style: "currency",
        currency: currencyCode,
      }).format(price);
    },
    priceTag() {
      const price = this.book.listPrice.amount;
      if (price > 150) return 'expensive';
      else if (price < 20) return 'cheap';
      else  return '';
    },
    onSale() {
        if (this.book.listPrice.isOnSale) return `../imgs/sale.png`;
        else return '';
    },
    pageCountText() {
        const pages = this.book.pageCount;
        return (pages > 500) ? '(Long Reading)' : (pages > 200) ? '(Decent Reading)' : (pages < 100) ? '(Light Reading)' : '';
    },
  },
});
