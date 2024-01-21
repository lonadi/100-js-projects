var btn, container, disclaimerMsg;

btn = document.querySelector("button");

container = document.querySelector('.container');

disclaimerMsg = `<div id='disclaimer'><p class='alert alert-success'><i class='fa fa-circle-info'></i>Your location is safe and secure.</p></div>`;
document.body.insertAdjacentHTML('afterbegin', disclaimerMsg);

btn.addEventListener("click", ()=>{
    if(navigator.geolocation){
        btn.innerText = "Allow to detect location";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        btn.innerText = "Your browser does not support";
    }
});

function onSuccess(position){
    btn.innerText = "Getting Location...";
    let {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=83b614ac21da4e22ae521c8a1f7729b5`)
    .then(response => response.json()).then(response =>{
        let allDetails = response.results[0].components;
        console.table(allDetails);
        let {county, postcode, country} = allDetails;
        btn.innerText = `${county} ${postcode}, ${country}`;
    }).catch(()=>{
        btn.innerText = "Something went wrong";
    });
}

function onError(error){
    if(error.code == 1){
        btn.innerText = "You denied the request";
    }else if(error.code == 2){
        btn.innerText = "Location is unavailable";
    }else{
        btn.innerText = "Something went wrong";
    }
    btn.setAttribute("disabled", "true");
}