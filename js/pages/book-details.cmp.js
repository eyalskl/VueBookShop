"use strict";
import { utilsService } from '../services/utils.service.js';
import { bookService } from '../services/book.service.js';
import textWrapper from '../cmps/text-wrapper.cpm.js';
import reviewAdd from '../cmps/review-add.cmp.js';

export default {
  template: `
    <div class="book-details" v-if="book">
        <div> <h2> {{ book.title }} </h2> 
            <span class="price" :class="priceTag"> {{ formattedPrice }} </span> 
            <img class="sale" v-if="this.book.listPrice.isOnSale" :src="onSaleImgUrl" /> 
        </div>
        <div> 
            <span class="category" v-for="category in book.categories"> {{ category }} </span>
        </div>
        <img class="thumbnail" :src="book.thumbnail" />
        <p v-for="author in book.authors"> by {{ author }} </p>
        <p> Published at: {{ book.publishedDate }} {{ publishText }} </p>
        <h5> {{ book.subtitle }} </h5>
        <text-wrapper :desc="book.description" />
        <p> Page Count: {{book.pageCount}} {{ pageCountText }} </p>
        <review-add> </review-add>
        <button class='close' @click="close"> Go back </button>
    </div>
    `,
  data() {
    return {
      book: null
    }
  },
  components: {
    textWrapper,
    reviewAdd
  },
  methods: {
    close() {
      this.$router.push('/book')
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
      return utilsService.formatCurrency(this.book.language, currencyCode, price);
    },
    priceTag() {
      const price = this.book.listPrice.amount;
      if (price > 150) return "expensive";
      else if (price < 20) return "cheap";
      else return "";
    },
    onSaleImgUrl() {
      if (this.book.listPrice.isOnSale) return `imgs/sale.png`;
      else return "";
    },
    pageCountText() {
      const pages = this.book.pageCount;
      return pages > 500
        ? "(Long Reading)"
        : pages > 200
        ? "(Decent Reading)"
        : pages < 100
        ? "(Light Reading)"
        : "";
    },
  },
  created() {
    const {bookId} = this.$route.params;
    bookService.getById(bookId)
        .then(book => {
            this.book = book;
        })
  }
};
