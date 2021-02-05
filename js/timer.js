//Таймер обратного отсчета

// Плагин это класс CountdownTimer,
// экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
// // Для подсчета значений используй следующие готовые формулы,
// // где time - разница между targetDate и текущей датой.
// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

// const refs = {
//   days: document.querySelector('span[data-value="days"]'),
//   hours: document.querySelector('span[data-value="hours"]'),
//   mins: document.querySelector('span[data-value="mins"]'),
//   secs: document.querySelector('span[data-value="secs"]'),
//   timer: document.querySelector('#timer-1'),
// }




class CountdownTimer {

  constructor({ selector, targetDate }) {
    this.template = `<div class="field">
            <span class="value" data-value="days">11</span>
            <span class="label">Days</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="hours">11</span>
            <span class="label">Hours</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="mins">11</span>
            <span class="label">Minutes</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="secs">11</span>
            <span class="label">Seconds</span>
        </div>`
    this.selector = selector;
    this.root = document.querySelector(this.selector);
    this.targetDate = targetDate;
    this.root.insertAdjacentHTML('beforeend', this.template);
    

    this. refs = {
     days: this.root.querySelector('span[data-value="days"]'),
     hours:this.root.querySelector('span[data-value="hours"]'),
     mins: this.root.querySelector('span[data-value="mins"]'),
     secs: this.root.querySelector('span[data-value="secs"]'),
     timer: document.querySelector('#timer-1')

      }
  }

    start() {
        const startTime = this.targetDate.getTime()

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;

            this.updateClock(deltaTime);

        }, 1000)
  }
  
    updateClock(time) { 
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        this.refs.days.textContent = `${days}`;
        this.refs.hours.textContent = `${hours}`;
        this.refs.mins.textContent = `${mins}`;
        this.refs.secs.textContent = `${secs}`;

  }
  
    pad(value) {
        return String(value).padStart(2, '0')
    }
}



const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
})                                        

timer.start();