if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/fasting-timer/sw.js', { scope: '/fasting-timer/' })})}