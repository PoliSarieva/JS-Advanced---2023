function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let section = {
        days:1,
        hours:24,
        minutes:1440,
        seconds:86400,
    }

    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);

    
    function convert (value, unit) {
        let parts = value/section[unit];

        return {
            days:parts,
            hours:parts*section.hours,
            minutes:parts*section.minutes,
            seconds:parts*section.seconds
        };
    }

    
    function onConvert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');

        let time = convert(Number(input.value), input.id);

        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;


    }
}