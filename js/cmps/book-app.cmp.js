"use strict";

import bookList from "./book-list.cmp.js";
import bookFilter from "./book-filter.cmp.js";
import bookDetails from "./book-details.cmp.js";

import { BookService } from "../services/book.service.js";

export default {
  template: `
    <main class="app-main book-app">
        <book-filter v-show="!selectedBook" @filtered="setFilter" /> 
        <book-details @close="selectBook" v-if="selectedBook" :book="selectedBook" />
        <book-list :books="booksToShow" v-else @bookSelected="selectBook" />
    </main>
    `,
  data() {
    return {
      books: [],
      filterBy: null,
      selectedBook: null,
    };
  },
  components: {
    bookFilter,
    bookDetails,
    bookList
  },
  computed: {
    booksToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) return this.books;
      var filteredBooks = this.books.filter(book => {
        return book.title.toLowerCase().includes(filterBy.byName.toLowerCase());
      });
      filteredBooks = filteredBooks.filter(book => {
        return (book.listPrice.amount >= filterBy.fromPrice && book.listPrice.amount <= filterBy.toPrice);
      });
      return filteredBooks;
    },
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    selectBook(book) {
        this.selectedBook = book;
    }
  },
  created() {
    this.books = BookService.getBooks();
  },
};
