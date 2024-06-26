import { onLCP } from 'https://unpkg.com/web-vitals@3.5.1/dist/web-vitals.attribution.js';

onLCP(({ value, navigationType, attribution }) => {
    const lcpTime = document.getElementById('lcp-time');

    if (lcpTime) {
        lcpTime.innerText = Math.round(value, 0) + ' ms';

        if (value < 100) {
            lcpTime.innerText = lcpTime.innerText + '!!!! 🎉';
        }
        if (value <= 2500) {
            lcpTime.style = 'color: green';
        }
        if (value > 4000) {
            lcpTime.style = 'color: red';
        }
        if (value > 2500 && value <= 4000) {
            lcpTime.style = 'color: orange';
        }
    }
}, { reportAllChanges: true });