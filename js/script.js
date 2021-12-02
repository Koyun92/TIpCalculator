

const tipCalculator= {
    billValue: document.querySelector('.bill input'),
    tipSelection: document.querySelectorAll('.tipSelect input'),
    customTipValue: document.querySelector('.tipSelect input:nth-child(7)'),
    numberOfPeople: document.querySelector('.peopleNumber input'),
    spanInfo: document.querySelector('.peopleNumber p span'),
    tipAmountResult:  document.querySelector('.tipAmount'),
    TotalAmountResult:  document.querySelector('.total'),
    tipValue: 0,
    resetButton: document.querySelector('.result button'),
    
    calculation(){
     
      this.tipAmountResult.innerHTML = "$" + ((parseInt(this.billValue.value) * (parseInt(this.tipValue))*0.01)/parseInt(this.numberOfPeople.value)).toFixed(2) ;
      this.TotalAmountResult.innerHTML = "$" + ((parseInt(this.billValue.value) + ((parseInt(this.billValue.value) * (parseInt(this.tipValue))*0.01)))/parseInt(this.numberOfPeople.value)).toFixed(2);
      
    },
    classClearing(){
        for(let i=0;  i < tipCalculator.tipSelection.length; i++){
            tipCalculator.tipSelection[i].classList.remove("focused");
        }
    },
    valueChange(){
        if(tipCalculator.billValue.value != 0 && tipCalculator.tipValue != 0 && tipCalculator.numberOfPeople.value != 0){
           
            this.calculation();
        }else{
            this.TotalAmountResult.innerHTML = "$" +0;
            this.tipAmountResult.innerHTML = "$" + 0;
           
        }
        //ostylować inouty wg designu ogarnąć paragraphy- komunikaty, że nie może być zero 
    },
    fieldsClearing(){
        this.TotalAmountResult.innerHTML = "$" +0;
        this.tipAmountResult.innerHTML = "$" + 0;
        this.classClearing();
        this.tipValue = 0;
        this.billValue.value = "0";
        this.numberOfPeople.value= "0   ";
        this.customTipValue.value= "";
        this.spanInfo.classList.remove('activeSpan');
        this.numberOfPeople.classList.remove('activeInput')

        

    }
}

// Choosing tip amount and class toggling events
tipCalculator.tipSelection.forEach(tip=>{


    tip.addEventListener('click',(e)=>{
        tipCalculator.classClearing();
        
      console.log(e.target);
      tipCalculator.tipValue = e.target.value;
      e.target.classList.add('focused');
      tipCalculator.valueChange()
   
 
        

    })
})
tipCalculator.customTipValue.addEventListener('input',(e)=>{
    tipCalculator.tipValue = e.target.value;
    tipCalculator.valueChange() 
})

tipCalculator.billValue.addEventListener('input',(e)=>{
    
    tipCalculator.valueChange() 
})
tipCalculator.numberOfPeople.addEventListener('input',(e)=>{
    
    tipCalculator.valueChange()
    if(tipCalculator.numberOfPeople.value == 0){
        tipCalculator.spanInfo.classList.add('activeSpan');
        tipCalculator.numberOfPeople.classList.add('activeInput')
    }else{
        tipCalculator.spanInfo.classList.remove('activeSpan');
        tipCalculator.numberOfPeople.classList.remove('activeInput')
    } 
})


// Reset tipCalculator
tipCalculator.resetButton.addEventListener('click', () =>{
    tipCalculator.fieldsClearing();
})

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB0aXBDYWxjdWxhdG9yPSB7XHJcbiAgICBiaWxsVmFsdWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iaWxsIGlucHV0JyksXHJcbiAgICB0aXBTZWxlY3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXBTZWxlY3QgaW5wdXQnKSxcclxuICAgIGN1c3RvbVRpcFZhbHVlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGlwU2VsZWN0IGlucHV0Om50aC1jaGlsZCg3KScpLFxyXG4gICAgbnVtYmVyT2ZQZW9wbGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW9wbGVOdW1iZXIgaW5wdXQnKSxcclxuICAgIHNwYW5JbmZvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVvcGxlTnVtYmVyIHAgc3BhbicpLFxyXG4gICAgdGlwQW1vdW50UmVzdWx0OiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpcEFtb3VudCcpLFxyXG4gICAgVG90YWxBbW91bnRSZXN1bHQ6ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwnKSxcclxuICAgIHRpcFZhbHVlOiAwLFxyXG4gICAgcmVzZXRCdXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHQgYnV0dG9uJyksXHJcbiAgICBcclxuICAgIGNhbGN1bGF0aW9uKCl7XHJcbiAgICAgXHJcbiAgICAgIHRoaXMudGlwQW1vdW50UmVzdWx0LmlubmVySFRNTCA9IFwiJFwiICsgKChwYXJzZUludCh0aGlzLmJpbGxWYWx1ZS52YWx1ZSkgKiAocGFyc2VJbnQodGhpcy50aXBWYWx1ZSkpKjAuMDEpL3BhcnNlSW50KHRoaXMubnVtYmVyT2ZQZW9wbGUudmFsdWUpKS50b0ZpeGVkKDIpIDtcclxuICAgICAgdGhpcy5Ub3RhbEFtb3VudFJlc3VsdC5pbm5lckhUTUwgPSBcIiRcIiArICgocGFyc2VJbnQodGhpcy5iaWxsVmFsdWUudmFsdWUpICsgKChwYXJzZUludCh0aGlzLmJpbGxWYWx1ZS52YWx1ZSkgKiAocGFyc2VJbnQodGhpcy50aXBWYWx1ZSkpKjAuMDEpKSkvcGFyc2VJbnQodGhpcy5udW1iZXJPZlBlb3BsZS52YWx1ZSkpLnRvRml4ZWQoMik7XHJcbiAgICAgIFxyXG4gICAgfSxcclxuICAgIGNsYXNzQ2xlYXJpbmcoKXtcclxuICAgICAgICBmb3IobGV0IGk9MDsgIGkgPCB0aXBDYWxjdWxhdG9yLnRpcFNlbGVjdGlvbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRpcENhbGN1bGF0b3IudGlwU2VsZWN0aW9uW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2N1c2VkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB2YWx1ZUNoYW5nZSgpe1xyXG4gICAgICAgIGlmKHRpcENhbGN1bGF0b3IuYmlsbFZhbHVlLnZhbHVlICE9IDAgJiYgdGlwQ2FsY3VsYXRvci50aXBWYWx1ZSAhPSAwICYmIHRpcENhbGN1bGF0b3IubnVtYmVyT2ZQZW9wbGUudmFsdWUgIT0gMCl7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRpb24oKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5Ub3RhbEFtb3VudFJlc3VsdC5pbm5lckhUTUwgPSBcIiRcIiArMDtcclxuICAgICAgICAgICAgdGhpcy50aXBBbW91bnRSZXN1bHQuaW5uZXJIVE1MID0gXCIkXCIgKyAwO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvL29zdHlsb3dhxIcgaW5vdXR5IHdnIGRlc2lnbnUgb2dhcm7EhcSHIHBhcmFncmFwaHktIGtvbXVuaWthdHksIMW8ZSBuaWUgbW/FvGUgYnnEhyB6ZXJvIFxyXG4gICAgfSxcclxuICAgIGZpZWxkc0NsZWFyaW5nKCl7XHJcbiAgICAgICAgdGhpcy5Ub3RhbEFtb3VudFJlc3VsdC5pbm5lckhUTUwgPSBcIiRcIiArMDtcclxuICAgICAgICB0aGlzLnRpcEFtb3VudFJlc3VsdC5pbm5lckhUTUwgPSBcIiRcIiArIDA7XHJcbiAgICAgICAgdGhpcy5jbGFzc0NsZWFyaW5nKCk7XHJcbiAgICAgICAgdGhpcy50aXBWYWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5iaWxsVmFsdWUudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLm51bWJlck9mUGVvcGxlLnZhbHVlPSBcIjAgICBcIjtcclxuICAgICAgICB0aGlzLmN1c3RvbVRpcFZhbHVlLnZhbHVlPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3BhbkluZm8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlU3BhbicpO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZQZW9wbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlSW5wdXQnKVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIENob29zaW5nIHRpcCBhbW91bnQgYW5kIGNsYXNzIHRvZ2dsaW5nIGV2ZW50c1xyXG50aXBDYWxjdWxhdG9yLnRpcFNlbGVjdGlvbi5mb3JFYWNoKHRpcD0+e1xyXG5cclxuXHJcbiAgICB0aXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG4gICAgICAgIHRpcENhbGN1bGF0b3IuY2xhc3NDbGVhcmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgICAgIHRpcENhbGN1bGF0b3IudGlwVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xyXG4gICAgICB0aXBDYWxjdWxhdG9yLnZhbHVlQ2hhbmdlKClcclxuICAgXHJcbiBcclxuICAgICAgICBcclxuXHJcbiAgICB9KVxyXG59KVxyXG50aXBDYWxjdWxhdG9yLmN1c3RvbVRpcFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZSk9PntcclxuICAgIHRpcENhbGN1bGF0b3IudGlwVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRpcENhbGN1bGF0b3IudmFsdWVDaGFuZ2UoKSBcclxufSlcclxuXHJcbnRpcENhbGN1bGF0b3IuYmlsbFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZSk9PntcclxuICAgIFxyXG4gICAgdGlwQ2FsY3VsYXRvci52YWx1ZUNoYW5nZSgpIFxyXG59KVxyXG50aXBDYWxjdWxhdG9yLm51bWJlck9mUGVvcGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywoZSk9PntcclxuICAgIFxyXG4gICAgdGlwQ2FsY3VsYXRvci52YWx1ZUNoYW5nZSgpXHJcbiAgICBpZih0aXBDYWxjdWxhdG9yLm51bWJlck9mUGVvcGxlLnZhbHVlID09IDApe1xyXG4gICAgICAgIHRpcENhbGN1bGF0b3Iuc3BhbkluZm8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlU3BhbicpO1xyXG4gICAgICAgIHRpcENhbGN1bGF0b3IubnVtYmVyT2ZQZW9wbGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlSW5wdXQnKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgdGlwQ2FsY3VsYXRvci5zcGFuSW5mby5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVTcGFuJyk7XHJcbiAgICAgICAgdGlwQ2FsY3VsYXRvci5udW1iZXJPZlBlb3BsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVJbnB1dCcpXHJcbiAgICB9IFxyXG59KVxyXG5cclxuXHJcbi8vIFJlc2V0IHRpcENhbGN1bGF0b3JcclxudGlwQ2FsY3VsYXRvci5yZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgdGlwQ2FsY3VsYXRvci5maWVsZHNDbGVhcmluZygpO1xyXG59KVxyXG4iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
