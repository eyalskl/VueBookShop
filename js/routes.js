import bookApp from "./pages/book-app.cmp.js";
import bookDetails from "./pages/book-details.cmp.js";
import addBook from "./pages/add-book.cmp.js";
import homePage from "./pages/home-page.cmp.js";
import aboutUs from "./pages/about-us.cmp.js";
import aboutTeam from "./cmps/about-team.cmp.js";
import aboutServices from "./cmps/about-services.cmp.js";


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/add-book',
        component: addBook
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/about',
        component: aboutUs,
        children: [
            {
                path: '/team',
                component: aboutTeam
            },
            {
                path: '/service',
                component: aboutServices
            },
        ]
    },
];


export const myRouter = new VueRouter({ routes: myRoutes })