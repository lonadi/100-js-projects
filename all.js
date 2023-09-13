const head = document.getElementsByTagName('head')[0];

document.title = document.title + ' | Leo100js'

var link, link2, script, script3;
link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '../all.css';

link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css';

script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js';

script2 = document.createElement('script');
script2.src = 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js'

script3 = document.createElement('script');
script3.src = 'https://kit.fontawesome.com/ad98cec03b.js';
script3.crossOrigin = 'anonymous';



head.appendChild(link);
head.appendChild(link2);
head.appendChild(script);
head.appendChild(script2);
head.appendChild(script3);

let footer = `
    <footer>
        <span id="first-line">Made with 😭 by Leo. </span>
        <span id="second-line"> <a href="https://github.com/liltrapo" style="color: unset; margin-right: 10px;"><i class="fa fa-github" style="font-size: 30px; cursor: pointer;" aria-hidden="true"></i></a>
        <a href="https://twitter.com/teezleo" style="color: unset"><i class="fa-brands fa-x-twitter" style="font-size: 30px; cursor: pointer;" aria-hidden="true"></i></a>
        </span>
    </footer>
`;

// document.getElementsByClassName('container')[0].insertAdjacentHTML("afterend", footer);


// <footer>
//         <p style="text-align: center; color: #00e200;">Made with <i class="fa fa-heart" style="color: #e93434;" aria-hidden="true"></i> by Leo.</p>
//         <p style="text-align: center;"><a href="https://github.com/liltrapo" style="color: unset;"><i class="fa fa-github" style="font-size: 30px; cursor: pointer;" aria-hidden="true"></i></a></p>
//         <p style="text-align: center;">Checkout my blog, <a href="http://footykicks.netlify.app" style="color: rgb(51, 51, 255);" target="_blank" rel="noopener noreferrer">footykicks.netlify.app</a></p>
//     </footer>
