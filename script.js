let lastPalga = null; 

window.addEventListener("load" , () => {
    console.log('page has been loaded');
    if(sessionStorage.getItem("page") == null || sessionStorage.getItem("page") === "0"){
        loadPage();
    }
    else{
        sessionStorage.setItem("page" , "1");
        loadTimeline();
    }
});

const loadPage = () => {
    let insideBtn = document.getElementById("inside");
    let outsideBtn = document.getElementById('outside');
    sessionStorage.setItem("page" , "0");

    insideBtn.addEventListener("click" , insideScreen);
    outsideBtn.addEventListener("click" , outsideScreen);
}

const insideScreen = () => {
    sessionStorage.setItem("page" , "1");
    document.location.href = "https://pelebahalag.github.io/insideScreen.html";
}

const outsideScreen = () => {
    sessionStorage.setItem("page" , "2");
    document.location.href = "https://pelebahalag.github.io/outsideScreen.html";
    
}

const loadTimeline = () => { 
    document.getElementById("back").addEventListener("click" , () => {
        sessionStorage.setItem("page" , "0");
        document.location.href = "https://pelebahalag.github.io/index.html";
    });
    if(sessionStorage.getItem("page") === "1"){
        document.getElementById("arrow3").addEventListener("click" , openCard);
        document.getElementById("arrow4").addEventListener("click" , openCard);
        document.getElementById("arrow5").addEventListener("click" , openCard);
    }
    else if(sessionStorage.getItem("page") === "2"){
        document.getElementById("arrow2").addEventListener("click" , openCard);
        document.getElementById("arrow3").addEventListener("click" , openCard);
        document.getElementById("arrow4").addEventListener("click" , openCard);
        document.getElementById("arrow5").addEventListener("click" , openCard);
    }
    document.getElementById("palga1").addEventListener("click" , openCard);
    document.getElementById("palga2").addEventListener("click" , openCard);
    document.getElementById("palga3").addEventListener("click" , openCard);
}

const openCard = (event) => {
    //  don't show card
    if(document.getElementById(`${event.currentTarget.id}card`).style.display == "block"){
        document.getElementById(`${event.currentTarget.id}card`).style.display = "none";
        if(event.currentTarget.id.includes("palga")){
            document.getElementById(`${lastPalga}`).style.width = "6vmax";
        }
    }
    // show card
    else{
        // if it's a plaga
        if(event.currentTarget.id.includes("palga")){
            // If there's already a plaga open
            if(lastPalga !== null){
                document.getElementById(`${lastPalga}card`).style.display = "none";
                document.getElementById(`${lastPalga}`).style.width = "6vmax";
            }
            lastPalga = event.currentTarget.id;
            document.getElementById(`${event.currentTarget.id}`).style.width = "9vmax";
        }
        document.getElementById(`${event.currentTarget.id}card`).style.display = "block";
        
    }
}
