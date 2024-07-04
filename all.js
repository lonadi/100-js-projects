const head = document.getElementsByTagName('head')[0];

document.title = document.title + ' | Leo100js'

var link, link2, script, script3, script4, script5;
link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '../all.css';

link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css';

var link3 = document.createElement('link');
link3.rel = 'shortcut icon';
link3.href = "../img/favicon/leocs-website-favicon-color.png";
link3.type = 'image/x-icon';

script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js';

script2 = document.createElement('script');
script2.src = 'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js'

script3 = document.createElement('script');
script3.src = 'https://kit.fontawesome.com/ad98cec03b.js';
script3.crossOrigin = 'anonymous';

script4 = document.createElement('script');
script4.src = 'https://www.googletagmanager.com/gtag/js?id=G-52QKVCYRKC';
script4.async;
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-52QKVCYRKC');

script5 = document.createElement('script');
script5.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5017336691227548'
script5.async;
script5.crossOrigin = 'anonymous';


head.appendChild(link);
head.appendChild(link2); 
head.appendChild(link3);
head.appendChild(script);
head.appendChild(script2);
head.appendChild(script3);
head.appendChild(script4);
head.appendChild(script5);

function getRandomEmoji() {
    const emojis = ['😭', '😡'];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

const emoji = getRandomEmoji();

const footer = `
    <footer id="creds">
        <span id="first-line">Made with ${emoji} by Leo. </span>
        <span id="second-line">
            <a href="https://wa.me/+2348137364059?text=Hey,%20I%20would%20love%20to%20connect%20with%20you." style="color: unset;">
                <i class="fa fa-whatsapp" style="font-size: 30px; cursor: pointer;" aria-hidden="true"></i>
            </a>
        </span>
    </footer>
`;

let support = `
    <a class="github-corner" href="https://github.com/liltrapo/100-js-projects" title="Fork me on GitHub" target="_blank">
    <svg width="80" height="80" viewBox="0 0 250 250">
        <title>Fork me on GitHub</title>
        <path d="M0 0h250v250"></path>
        <path class="octo-arm" d="M127.4 110c-14.6-9.2-9.4-19.5-9.4-19.5 3-7 1.5-11 1.5-11-1-6.2 3-2 3-2 4 4.7 2 11 2 11-2.2 10.4 5 14.8 9 16.2" fill="currentColor" style="transform-origin:130px 110px;"></path>
        <path class="octo-body" d="M113.2 114.3s3.6 1.6 4.7.6l15-13.7c3-2.4 6-3 8.2-2.7-8-11.2-14-25 3-41 4.7-4.4 10.6-6.4 16.2-6.4.6-1.6 3.6-7.3 11.8-10.7 0 0 4.5 2.7 6.8 16.5 4.3 2.7 8.3 6 12 9.8 3.3 3.5 6.7 8 8.6 12.3 14 3 16.8 8 16.8 8-3.4 8-9.4 11-11.4 11 0 5.8-2.3 11-7.5 15.5-16.4 16-30 9-40 .2 0 3-1 7-5.2 11l-13.3 11c-1 1 .5 5.3.8 5z" fill="currentColor"></path>
    </svg>
    </a>
`;

let projectsLink = `
    <div class="all-projects-cont">
    <i class="fa-solid fa-link"></i>
    <a href="../projects.html" class="all-projects-link">All Projects</a>
    </div>
`;





// margin-right: 10px; on github icon
// document.getElementsByClassName('container')[0].insertAdjacentHTML("afterend", footer);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('container')[0].insertAdjacentHTML("afterend", footer);
    document.getElementsByClassName('container')[0].insertAdjacentHTML("afterend", support);
    document.getElementsByClassName('container')[0].insertAdjacentHTML("beforebegin", projectsLink);
});



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCNO65YmB7Dov8706SUAZmzojVx0q5Ueaw",
//   authDomain: "leo-projects-a5e78.firebaseapp.com",
//   projectId: "leo-projects-a5e78",
//   storageBucket: "leo-projects-a5e78.appspot.com",
//   messagingSenderId: "983824998900",
//   appId: "1:983824998900:web:e25c41975aa8794f8b19a1",
//   measurementId: "G-35SKDZ42B7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { app, analytics };

// to use
// import { app, analytics } from "./firebase";



// <footer>
//         <p style="text-align: center; color: #00e200;">Made with <i class="fa fa-heart" style="color: #e93434;" aria-hidden="true"></i> by Leo.</p>
//         <p style="text-align: center;"><a href="https://github.com/liltrapo" style="color: unset;"><i class="fa fa-github" style="font-size: 30px; cursor: pointer;" aria-hidden="true"></i></a></p>
//         <p style="text-align: center;">Checkout my blog, <a href="http://footykicks.netlify.app" style="color: rgb(51, 51, 255);" target="_blank" rel="noopener noreferrer">footykicks.netlify.app</a></p>
//     </footer>
