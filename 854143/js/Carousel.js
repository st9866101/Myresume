import $ from 'jquery';

class Carousel {
    constructor() {
        this.width = window.innerWidth;
        this.bodyPercent = 0.7;
        this.jslider = $('.slider');
        this.stepImg = $('.step-img');
        this.items = $('#items');
        this.slide = $('.slide');
        this.slideSize = this.width * this.bodyPercent;
        this.length = $('#items > *').length;
        this.dot = "<span class='dot'></span>";

        this.slider = document.getElementById('slider');
        this.sliderItems = document.getElementById('items');
        this.prev = document.getElementById('prev');
        this.next = document.getElementById('next');

        this.resizeWidth();
        this.appendDots();
        this.slideFun(this.slider, this.sliderItems, this.prev, this.next, this.slideSize);
        this.events();
    }
    events() {
        $(window).on('resize', function () {
            if (this.width == window.innerWidth) return;
            location.reload();
        }.bind(this));
    }
    resizeWidth() {
        if (this.width >= 768) {
            this.jslider.css("width", this.width * this.bodyPercent);
            this.stepImg.css("width", this.width * this.bodyPercent);
            this.items.css("left", -this.width * this.bodyPercent);
            this.slide.css("width", this.width * this.bodyPercent);
            this.slideSize = this.width * this.bodyPercent;
        } else {
            this.bodyPercent = 0.95;
            this.jslider.css("width", this.width * this.bodyPercent);
            this.stepImg.css("width", this.width * this.bodyPercent);
            this.items.css("left", -this.width * this.bodyPercent);
            this.slide.css("width", this.width * this.bodyPercent);
            this.slideSize = this.width * this.bodyPercent;
        }
    }
    appendDots() {
        $('.nav-group').append(this.dot.repeat(this.length));
        $(".dot:nth-child(1)").addClass('current');
    }


    slideFun(wrapper, items, prev, next, slideSize) {
        var posX1 = 0,
            posX2 = 0,
            posInitial,
            posFinal,
            threshold = 50,
            slides = document.getElementsByClassName('slide'),
            slidesLength = slides.length,
            firstSlide = slides[0],
            lastSlide = slides[slidesLength - 1],
            cloneFirst = firstSlide.cloneNode(true),
            cloneLast = lastSlide.cloneNode(true),
            index = 0,
            allowShift = true,
            autoplaytime = 4000;


        var autoplay = setInterval(function () { //设定自动播放
            shiftSlide(1);
        }, autoplaytime);

        // Clone first and last slide
        items.appendChild(cloneFirst);
        items.insertBefore(cloneLast, firstSlide);
        wrapper.classList.add('loaded');

        // Mouse and Touch events
        items.onmousedown = dragStart;

        // Touch events
        items.addEventListener('touchstart', dragStart);
        items.addEventListener('touchend', dragEnd);
        items.addEventListener('touchmove', dragAction);

        // Click events
        //左右箭头事件
        prev.addEventListener('click', function () {
            shiftSlide(-1);
            clearInterval(autoplay);
            autoplay = setInterval(function () { //点击结束后开始自动播放
                shiftSlide(1);
            }, autoplaytime);
        });
        next.addEventListener('click', function () {
            shiftSlide(1);
            clearInterval(autoplay);
            autoplay = setInterval(function () { //点击结束后开始自动播放
                shiftSlide(1);
            }, autoplaytime);
        });



        // Transition events
        items.addEventListener('transitionend', checkIndex);

        function dragStart(e) {

            e = e || window.event;
            e.preventDefault();
            posInitial = items.offsetLeft;

            if (e.type == 'touchstart') {
                posX1 = e.touches[0].clientX;
            } else {
                posX1 = e.clientX;
                document.onmouseup = dragEnd;
                document.onmousemove = dragAction;
            }
        }

        function dragAction(e) {
            e = e || window.event;
            clearInterval(autoplay); //清除自动播放

            if (e.type == 'touchmove') {
                posX2 = posX1 - e.touches[0].clientX;
                posX1 = e.touches[0].clientX;
            } else {
                posX2 = posX1 - e.clientX;
                posX1 = e.clientX;
            }
            items.style.left = (items.offsetLeft - posX2) + "px";
        }

        function dragEnd(e) {

            posFinal = items.offsetLeft;
            if (posFinal - posInitial < -threshold) {
                shiftSlide(1, 'drag');
            } else if (posFinal - posInitial > threshold) {
                shiftSlide(-1, 'drag');
            } else {
                items.style.left = (posInitial) + "px";
            }

            document.onmouseup = null;
            document.onmousemove = null;
        }

        function shiftSlide(dir, action) {

            items.classList.add('shifting');

            if (allowShift) {

                if (!action) {
                    posInitial = items.offsetLeft;
                }

                if (dir == 1) {

                    posInitial = (index + 1) * -slideSize;
                    items.style.left = (posInitial - slideSize) + "px";
                    index++;
                } else if (dir == -1) {

                    posInitial = (index + 1) * -slideSize;
                    items.style.left = (posInitial + slideSize) + "px";
                    index--;
                }
            };

            allowShift = false;
        }

        function checkIndex() {

            items.classList.remove('shifting');

            if (index == -1) {
                items.style.left = -(slidesLength * slideSize) + "px";
                index = slidesLength - 1;
            }

            if (index == slidesLength) {
                items.style.left = -(1 * slideSize) + "px";
                index = 0;
            }

            allowShift = true;

            //nav-dot
            $('.dot').removeClass('current');
            $(".dot:nth-child(" + (index + 1) + ")").addClass('current');
        }

    }
}
export default Carousel;