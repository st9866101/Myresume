import $ from 'jquery';

class Range {
    constructor() {
        this.events();
    }
    events() {
        $('.range').on('input', function () {
            switch ($('.range').val()) {
                case '1':
                    this.changeFirst('0', '50', '固定工资,不计算流水多寡');
                    break;
                case '2':
                    this.changeNumber('3,000', '0.15%', '范例：当日交易流水50,000元，则工资为50,000x0.15%=75元。');
                    break;
                case '3':
                    this.changeNumber('10,000', '0.20%', '范例：当日交易流水50,000元，则工资为50,000x0.20%=100元。');
                    break;
                case '4':
                    this.changeNumber('20,000', '0.25%', '范例：当日交易流水50,000元，则工资为50,000x0.25%=125元。');
                    break;
                case '5':
                    this.changeNumber('30,000', '0.30%', '范例：当日交易流水50,000元，则工资为50,000x0.30%=150元。');
                    break;
            }
        }.bind(this));

        $('.range2').on('input', function () {
            switch ($('.range2').val()) {
                case '1':
                    this.changeFirst2('0', '50', '固定工资,不计算流水多寡');
                    break;
                case '2':
                    this.changeNumber2('3,000', '0.60%', '范例：当日交易流水50,000元，则工资为50,000x0.60%=300元。');
                    break;
                case '3':
                    this.changeNumber2('10,000', '0.70%', '范例：当日交易流水50,000元，则工资为50,000x0.70%=350元。');
                    break;
                case '4':
                    this.changeNumber2('20,000', '0.80%', '范例：当日交易流水50,000元，则工资为50,000x0.80%=400元。');
                    break;
                case '5':
                    this.changeNumber2('30,000', '0.90%', '范例：当日交易流水50,000元，则工资为50,000x0.90%=450元。');
                    break;
            }
        }.bind(this));
    }
    changeNumber(newNum1, newNum2, text3) {
        $('.range-number').text(newNum1);
        $('.cash-title').text('抽成回馈');

        $('.cash-number').text(newNum2);
        $('.cash-desc').text(text3);
    }
    changeFirst(newNum1, newNum2, text3) {
        $('.range-number').text(newNum1);
        $('.cash-title').text('每日工资');

        $('.cash-number').text(newNum2);
        $('.cash-desc').text(text3);
    }


    changeNumber2(newNum1, newNum2, text3) {
        $('.range-number2').text(newNum1);
        $('.cash-title2').text('抽成回馈');

        $('.cash-number2').text(newNum2);
        $('.cash-desc2').text(text3);
    }
    changeFirst2(newNum1, newNum2, text3) {
        $('.range-number2').text(newNum1);
        $('.cash-title2').text('每日工资');

        $('.cash-number2').text(newNum2);
        $('.cash-desc2').text(text3);
    }
}
export default Range;