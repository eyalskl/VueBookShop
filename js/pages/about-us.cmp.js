
export default {
    template: `
        <section class="about-us">
            <nav>
                <router-link to="team">Our Team</router-link>
                <router-link to="service">Our Services</router-link> 
            </nav>
            <router-view />
            <transition name="bounce">
                <h2 v-if="show">About Us!</h2>
            </transition>
            <transition name="fade">
                <pre v-if="show"><i class="fas fa-map-marker-alt"></i> Address: The Book Street 5th Avenue Appartment 7D

<i class="fas fa-phone-volume"></i> Telephone: +972 50-123-1234

<i class="far fa-envelope"></i> Contact Us: <a href="#">MissBooks@gmail.com</a></pre>           
            </transition>
            <img src="imgs/miss.png">
        </section>
    `,
    data() {
        return {
            aboutInetvalId: 0,
            show: false
        }
    },
    created() {
        this.aboutInetvalId = setInterval(() => {
            console.log('ABOUT PAGE SAYING HEY!');
        }, 2500);
        setTimeout(() => {
            this.show = !this.show
        }, 500)
    },
    destroyed() {
        clearInterval(this.aboutInetvalId);
    }
}