import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/range.css";
import "../css/slider.css";
import "../css/style.css";
import $ from 'jquery';

$.fn.scrollEnd = function (callback, timeout) {
    $(this).scroll(function () {
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback, timeout));
    });
};

import Float from './Float';
import Range from './Range';
import Carousel from './Carousel';

var float = new Float();
var range = new Range();
var carousel = new Carousel();