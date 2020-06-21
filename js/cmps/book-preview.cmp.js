Vue.component("book-preview", {
  props: ["book"],
  template: `
    <li class="book-preview flex column">
        <h4> {{ book.title }} - {{ formattedPrice }} </h4>
        <p v-for="author in book.authors">by {{author}} </p>
        <img :src="book.thumbnail" />
    </li>
    `,
  computed: {
    formattedPrice() {
      const currencyCode = this.book.listPrice.currencyCode;
      const price = this.book.listPrice.amount;
      return new Intl.NumberFormat(this.book.language, {
        style: 'currency', currency: currencyCode
      }).format(price)
    },
  },
});
