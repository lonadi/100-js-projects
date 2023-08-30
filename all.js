const head = document.getElementsByTagName('head')[0];


var link, link2, script;
link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '../all.css';

link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css';

script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js';

script2 = document.createElement('script');
script2.src = 'https://code.jquery.com/jquery-3.7.1.min.js'
script2.integrity = 'sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo='
script2.crossorigin = 'anonymous';



head.appendChild(link);
head.appendChild(link2);
head.appendChild(script);