import $ from 'jquery';

class Float {
    constructor() {
        this.scrollHeight = 0;
        this.events();
    }
    events() {

        $('.float').css("top", window.scrollY + window.innerHeight / 2);

        $(window).scrollEnd(function () {
            if (window.innerWidth < 768) {
                this.scrollHeight = window.scrollY + window.innerHeight / 3.5;
                $('.float').css("top", this.scrollHeight);
            } else {
                this.scrollHeight = window.scrollY + window.innerHeight / 2;
                $('.float').css("top", this.scrollHeight);
            }
        }.bind(this), 50)
    }
}
export default Float;