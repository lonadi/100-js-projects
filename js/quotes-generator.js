const head = document.getElementsByTagName('head')[0];

document.title = document.title + ' | Leo100js'

var link2, script, script3, script4, script5;

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
script5.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5017336691227548';
script5.crossorigin = 'anonymous';
script5.async;

head.appendChild(link2); 
head.appendChild(link3);
head.appendChild(script);
head.appendChild(script2);
head.appendChild(script3);
head.appendChild(script4);
head.appendChild(script5);

let footer = `
    <footer id="creds">
        <span id="first-line">Made with 😭 by Leo. </span>
        <span id="second-line"> <a href="https://wa.me/+2348137364059?text=Hey%27,%20I%20would%20love%20to%20connect%20with%20you" style="color: unset;"><i class="fa fa-whatsapp" style="font-size: 30px; cursor: pointer;" aria-hidden="true"></i></a>
       <!-- <a href="https://twitter.com/teezleo" style="color: unset"><i class="fa-brands fa-x-twitter" style="font-size: 30px; cursor: pointer;" aria-hidden="true"></i></a> -->
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
`

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('container-main')[0].insertAdjacentHTML("afterend", footer);
    document.getElementsByClassName('container-main')[0].insertAdjacentHTML("afterend", support);
});







var data; 
let front = true; 
  
const authors = document.querySelectorAll(".author"); 
  
const texts = document.querySelectorAll(".text"); 
  
const body = document.getElementById("body"); 
  
const button = document.querySelectorAll(".new-quote"); 
  
const blockFront = document.querySelector(".block__front"); 
const blockBack = document.querySelector(".block__back"); 
  
const authorFront = authors[0]; 
const authorBack = authors[1]; 
  
const textFront = texts[0]; 
const textBack = texts[1]; 

const buttonFront = button[0]; 
const buttonBack = button[1]; 
  
  
const displayQuote = () =>{  
    let index = Math.floor(Math.random()*data.length); 
    let quote = data[index].text; 
    let author = '-' + data[index].author.slice(0, -10);; 

    if(!author){ 
        author = "Anonymous"
    } 
  
    if(front){ 
        textFront.innerHTML = quote; 
        authorFront.innerHTML = author; 
    }else{ 
        textBack.innerHTML = quote; 
        authorBack.innerHTML = author; 
    } 
      
    front = !front; 
  
} 
  
fetch("https://type.fit/api/quotes") 
    .then(function(response) { 
        return response.json();  
    })  
    .then(function(data) { 
        this.data = data;  
  
        displayQuote()  
}); 
  
  
function newQuote(){ 
    blockBack.classList.toggle('rotateB'); 
    blockFront.classList.toggle('rotateF'); 
  
    displayQuote(); 
}