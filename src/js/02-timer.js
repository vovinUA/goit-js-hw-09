import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMins = document.querySelector('[data-minutes]');
const dataSecs = document.querySelector('[data-seconds]');
const dataInput = document.querySelector('#datetime-picker');

let timer = null;

startBtn.disabled = true;

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const handleStart = () => {
  startBtn.disabled = true;
  timer = setInterval(() => {
    const selectedDate = new Date(dataInput.value).getTime();
    const currentTime = new Date().getTime();
    const countDown = selectedDate - currentTime;
    const countDownMath = convertMs(countDown);
    dataDays.textContent = addLeadingZero(countDownMath.days);
    dataHours.textContent = addLeadingZero(countDownMath.hours);
    dataMins.textContent = addLeadingZero(countDownMath.minutes);
    dataSecs.textContent = addLeadingZero(countDownMath.seconds);
    if (countDown < 1000) {
      clearInterval(timer);
      startBtn.disabled = false;
    }
  }, 1000);
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = new Date();
    if (selectedDates[0] < currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', handleStart);
    }
  },
};

flatpickr(dataInput, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
