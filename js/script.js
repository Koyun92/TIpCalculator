const tipCalculator = {
    billValue: document.querySelector('.bill input'),
    tipSelection: document.querySelectorAll('.tipSelect input'),
    customTipValue: document.querySelector('.tipSelect input:nth-child(7)'),
    numberOfPeople: document.querySelector('.peopleNumber input'),
    spanInfo: document.querySelector('.peopleNumber p span'),
    tipAmountResult: document.querySelector('.tipAmount'),
    TotalAmountResult: document.querySelector('.total'),
    tipValue: 0,
    resetButton: document.querySelector('.result button'),

    calculation() {

        this.tipAmountResult.innerHTML = "$" + ((parseInt(this.billValue.value) * (parseInt(this.tipValue)) * 0.01) / parseInt(this.numberOfPeople.value)).toFixed(2);
        this.TotalAmountResult.innerHTML = "$" + ((parseInt(this.billValue.value) + ((parseInt(this.billValue.value) * (parseInt(this.tipValue)) * 0.01))) / parseInt(this.numberOfPeople.value)).toFixed(2);

    },
    classClearing() {
        for (let i = 0; i < tipCalculator.tipSelection.length; i++) {
            tipCalculator.tipSelection[i].classList.remove("focused");
        }
    },
    valueChange() {
        if (tipCalculator.billValue.value != 0 && tipCalculator.tipValue != 0 && tipCalculator.numberOfPeople.value != 0) {

            this.calculation();
        } else {
            this.TotalAmountResult.innerHTML = "$" + 0;
            this.tipAmountResult.innerHTML = "$" + 0;

        }

    },
    fieldsClearing() {
        this.TotalAmountResult.innerHTML = "$" + 0;
        this.tipAmountResult.innerHTML = "$" + 0;
        this.classClearing();
        this.tipValue = 0;
        this.billValue.value = "0";
        this.numberOfPeople.value = "0   ";
        this.customTipValue.value = "";
        this.spanInfo.classList.remove('activeSpan');
        this.numberOfPeople.classList.remove('activeInput')



    }
}

// Choosing tip amount and class toggling events
tipCalculator.tipSelection.forEach(tip => {


    tip.addEventListener('click', (e) => {
        tipCalculator.classClearing();

        console.log(e.target);
        tipCalculator.tipValue = e.target.value;
        e.target.classList.add('focused');
        tipCalculator.valueChange()




    })
})
tipCalculator.customTipValue.addEventListener('input', (e) => {
    tipCalculator.tipValue = e.target.value;
    tipCalculator.valueChange()
})

tipCalculator.billValue.addEventListener('input', (e) => {

    tipCalculator.valueChange()
})
tipCalculator.numberOfPeople.addEventListener('input', (e) => {

    tipCalculator.valueChange()
    if (tipCalculator.numberOfPeople.value == 0) {
        tipCalculator.spanInfo.classList.add('activeSpan');
        tipCalculator.numberOfPeople.classList.add('activeInput')
    } else {
        tipCalculator.spanInfo.classList.remove('activeSpan');
        tipCalculator.numberOfPeople.classList.remove('activeInput')
    }
})


// Reset tipCalculator
tipCalculator.resetButton.addEventListener('click', () => {
    tipCalculator.fieldsClearing();
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGlwQ2FsY3VsYXRvciA9IHtcclxuICAgIGJpbGxWYWx1ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJpbGwgaW5wdXQnKSxcclxuICAgIHRpcFNlbGVjdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpcFNlbGVjdCBpbnB1dCcpLFxyXG4gICAgY3VzdG9tVGlwVmFsdWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXBTZWxlY3QgaW5wdXQ6bnRoLWNoaWxkKDcpJyksXHJcbiAgICBudW1iZXJPZlBlb3BsZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlb3BsZU51bWJlciBpbnB1dCcpLFxyXG4gICAgc3BhbkluZm86IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW9wbGVOdW1iZXIgcCBzcGFuJyksXHJcbiAgICB0aXBBbW91bnRSZXN1bHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXBBbW91bnQnKSxcclxuICAgIFRvdGFsQW1vdW50UmVzdWx0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwnKSxcclxuICAgIHRpcFZhbHVlOiAwLFxyXG4gICAgcmVzZXRCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQgYnV0dG9uJyksXHJcblxyXG4gICAgY2FsY3VsYXRpb24oKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGlwQW1vdW50UmVzdWx0LmlubmVySFRNTCA9IFwiJFwiICsgKChwYXJzZUludCh0aGlzLmJpbGxWYWx1ZS52YWx1ZSkgKiAocGFyc2VJbnQodGhpcy50aXBWYWx1ZSkpICogMC4wMSkgLyBwYXJzZUludCh0aGlzLm51bWJlck9mUGVvcGxlLnZhbHVlKSkudG9GaXhlZCgyKTtcclxuICAgICAgICB0aGlzLlRvdGFsQW1vdW50UmVzdWx0LmlubmVySFRNTCA9IFwiJFwiICsgKChwYXJzZUludCh0aGlzLmJpbGxWYWx1ZS52YWx1ZSkgKyAoKHBhcnNlSW50KHRoaXMuYmlsbFZhbHVlLnZhbHVlKSAqIChwYXJzZUludCh0aGlzLnRpcFZhbHVlKSkgKiAwLjAxKSkpIC8gcGFyc2VJbnQodGhpcy5udW1iZXJPZlBlb3BsZS52YWx1ZSkpLnRvRml4ZWQoMik7XHJcblxyXG4gICAgfSxcclxuICAgIGNsYXNzQ2xlYXJpbmcoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aXBDYWxjdWxhdG9yLnRpcFNlbGVjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aXBDYWxjdWxhdG9yLnRpcFNlbGVjdGlvbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmFsdWVDaGFuZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRpcENhbGN1bGF0b3IuYmlsbFZhbHVlLnZhbHVlICE9IDAgJiYgdGlwQ2FsY3VsYXRvci50aXBWYWx1ZSAhPSAwICYmIHRpcENhbGN1bGF0b3IubnVtYmVyT2ZQZW9wbGUudmFsdWUgIT0gMCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuVG90YWxBbW91bnRSZXN1bHQuaW5uZXJIVE1MID0gXCIkXCIgKyAwO1xyXG4gICAgICAgICAgICB0aGlzLnRpcEFtb3VudFJlc3VsdC5pbm5lckhUTUwgPSBcIiRcIiArIDA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgZmllbGRzQ2xlYXJpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5Ub3RhbEFtb3VudFJlc3VsdC5pbm5lckhUTUwgPSBcIiRcIiArIDA7XHJcbiAgICAgICAgdGhpcy50aXBBbW91bnRSZXN1bHQuaW5uZXJIVE1MID0gXCIkXCIgKyAwO1xyXG4gICAgICAgIHRoaXMuY2xhc3NDbGVhcmluZygpO1xyXG4gICAgICAgIHRoaXMudGlwVmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMuYmlsbFZhbHVlLnZhbHVlID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlBlb3BsZS52YWx1ZSA9IFwiMCAgIFwiO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tVGlwVmFsdWUudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3BhbkluZm8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlU3BhbicpO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZQZW9wbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSW5wdXQnKVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBDaG9vc2luZyB0aXAgYW1vdW50IGFuZCBjbGFzcyB0b2dnbGluZyBldmVudHNcclxudGlwQ2FsY3VsYXRvci50aXBTZWxlY3Rpb24uZm9yRWFjaCh0aXAgPT4ge1xyXG5cclxuXHJcbiAgICB0aXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIHRpcENhbGN1bGF0b3IuY2xhc3NDbGVhcmluZygpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgICAgICAgdGlwQ2FsY3VsYXRvci50aXBWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcclxuICAgICAgICB0aXBDYWxjdWxhdG9yLnZhbHVlQ2hhbmdlKClcclxuXHJcblxyXG5cclxuXHJcbiAgICB9KVxyXG59KVxyXG50aXBDYWxjdWxhdG9yLmN1c3RvbVRpcFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgIHRpcENhbGN1bGF0b3IudGlwVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRpcENhbGN1bGF0b3IudmFsdWVDaGFuZ2UoKVxyXG59KVxyXG5cclxudGlwQ2FsY3VsYXRvci5iaWxsVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG5cclxuICAgIHRpcENhbGN1bGF0b3IudmFsdWVDaGFuZ2UoKVxyXG59KVxyXG50aXBDYWxjdWxhdG9yLm51bWJlck9mUGVvcGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuXHJcbiAgICB0aXBDYWxjdWxhdG9yLnZhbHVlQ2hhbmdlKClcclxuICAgIGlmICh0aXBDYWxjdWxhdG9yLm51bWJlck9mUGVvcGxlLnZhbHVlID09IDApIHtcclxuICAgICAgICB0aXBDYWxjdWxhdG9yLnNwYW5JbmZvLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZVNwYW4nKTtcclxuICAgICAgICB0aXBDYWxjdWxhdG9yLm51bWJlck9mUGVvcGxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUlucHV0JylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGlwQ2FsY3VsYXRvci5zcGFuSW5mby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVTcGFuJyk7XHJcbiAgICAgICAgdGlwQ2FsY3VsYXRvci5udW1iZXJPZlBlb3BsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVJbnB1dCcpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gUmVzZXQgdGlwQ2FsY3VsYXRvclxyXG50aXBDYWxjdWxhdG9yLnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdGlwQ2FsY3VsYXRvci5maWVsZHNDbGVhcmluZygpO1xyXG59KSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
