// import { example } from './data.js';
import champions from './data/lol/lol.js';
import {showFilterRols , showFilterByDifficulty , searchLol , orderByAlphabeticalAZ ,orderByAlphabeticalZA } from  './data.js';

const dataLolArray = Object.values(champions.data);
const menuItems = document.querySelector('.menuItems');
const mainContainer = document.querySelector('#mainContainer');
const mainCardsLol = document.getElementById("mainCardsLol");
// menu Hamburguesa
addEventListener('DOMContentLoaded', () => {
    const buttonMenu = document.querySelector('.buttonMenu')
    if(buttonMenu) {
        buttonMenu.addEventListener('click',() => {
          menuItems.classList.toggle('show');
        })
    }
});

//hide responsive menu
const removeMenuLOl = () => menuItems.classList.remove('show');

//show slider and banner
const mainSliderLol = document.querySelector(".mainSliderLol");
const bannerLol = document.querySelector(".bannerLol");
const orderChampionsLol = document.querySelector("#orderChampionsLol");

function showSliderLol() {
    orderChampionsLol.style.display="none";
    const sliderLolLogo = `
    <article>
        <img src="images/league-of-legends.png"></img>
        <h1 class= "videoText" >DISCOVER YOUR CHAMPION</h1>
    </article>
    <video autoplay muted loop playsinline preload="metadata">
	  <source src="video/lolVideo.webm" type="video/webm">
    </video>
    
    `;
    // <img src="images/fondobaner.jpg"></img>
    const bannerLolText = `<p>There are more than 130 champions, it will not take long <br> to find your favorite. </p>`;
    mainCardsLol.innerHTML = "";
    mainSliderLol.innerHTML = sliderLolLogo;
    bannerLol.innerHTML = bannerLolText;
    //const cardsRoles = createElement('section');
    //cardsRoles.setAttribute('id','mainCardsLol');
    const boxCardsRoles = `
        <section id="cardAssassins" class="boxCardsRoles">
            <img src="images/cards-asesinos.jpg">
            <p class="nameLol"><img src="images/assessin_icon.png">Assassins</p>
        </section>
        <section id="cardFighters" class="boxCardsRoles">
            <img src="images/cards-luchadores.jpg">
            <p class="nameLol"><img src="images/Fighter_icon.png">Fighters</p>
        </section>
        <section id="cardMages" class="boxCardsRoles">
            <img src="images/cards-magos.jpg">
            <p class="nameLol"><img src="images/mage_icon.png">Mages</p>
        </section>
        <section id="cardMarksmen" class="boxCardsRoles">
            <img src="images/cards-tiradores.jpg">
            <p class="nameLol"><img src="images/marksman_icon.png">Marksmen</p>
        </section>
        <section id="cardSupports" class="boxCardsRoles">
        <img src="images/cards-apoyos.jpg">
        <p class="nameLol"><img src="images/support_icon.png">Supports</p>
        </section>
        <section id="cardTanks" class="boxCardsRoles">
        <img src="images/cards-tanques.jpg">
        <p class="nameLol"><img src="images/tank_icon.png">Tanks</p>
        </section>
        `;
    mainCardsLol.innerHTML = boxCardsRoles;

}
showSliderLol();

// show all champions
function showChampions (dataLolArray)  {
    dataLolArray.forEach((e) => {
       
       const boxCardsLol = document.createElement("section");
       const showCardsLol = document.createElement("section");
       const faceCardsLol = document.createElement("section");
       const backOfCardsLol = document.createElement("section");
       const buttonInformation = document.createElement("button")
       boxCardsLol.setAttribute("class", "boxCardsLol");
       showCardsLol.setAttribute("class","showCardsLol");
       faceCardsLol.setAttribute("class","faceCardsLol");
       backOfCardsLol.setAttribute("class","backOfCardsLol");
       buttonInformation.setAttribute("class","buttonInformation");
       buttonInformation.setAttribute("id", e.id);
       buttonInformation.textContent="More";
       const nameChampion = 
       ` 
       <img src="${e.splash}">
       <p class="nameLol"> ${e.name}</p>
       `; 
       const  infoChampions = `
       <table class= "infoChampions">
           <tr>
               <th colspan="2">INFORMATION </th>
           </tr>
           <tr>
               <th>Attack</th>
               <td>${e.info.attack}</td>
           </tr>
           <tr>
               <th>Defense</th>
               <td>${e.info.defense}</td>
           </tr>
           <tr>
               <th>Magic</th>
               <td>${e.info.magic}</td>
           </tr>
           <tr>
               <th>Difficulty</th>
               <td>${e.info.difficulty}</td>
           </tr>
       </table>
       
       `;
       // const <button class="buttonInformation"> More</button>
       faceCardsLol.innerHTML = nameChampion;
       backOfCardsLol.innerHTML = infoChampions;
       mainCardsLol.appendChild(boxCardsLol);
       boxCardsLol.appendChild(showCardsLol); 
       showCardsLol.appendChild(faceCardsLol);
       showCardsLol.appendChild(backOfCardsLol);
       backOfCardsLol.appendChild(buttonInformation);

   })
   
}
//showChampions(dataLolArray);

//show roles filter - landingpage
const cardAssassinsLol = document.querySelector('#cardAssassins');
const cardFightersLol = document.querySelector('#cardFighters');
const cardMagesLol = document.querySelector('#cardMages');
const cardMarksmenLol = document.querySelector('#cardMarksmen');
const cardSupportsLol = document.querySelector('#cardSupports');
const cardTanksLol = document.querySelector('#cardTanks');

cardAssassinsLol.addEventListener('click', () =>{
    filterbyAssassins();
} )
cardFightersLol.addEventListener('click', () => {
    filterbyFighters();
} )
cardMagesLol.addEventListener('click', () => {
    filterbyMages();
} )
cardMarksmenLol.addEventListener('click', () => {
    filterbyMarksmen();
} )
cardSupportsLol.addEventListener('click', () => {
    filterbySupports();
} )
cardTanksLol.addEventListener('click', () => {
    filterbyTanks();
} )

//reload the page
const reload = document.querySelector('.mainLogo');
reload.addEventListener('click', reloadPage);
function reloadPage(){
    location.reload();
}

//show the champions/ menu-all
const allChampion = document.querySelector('.allChampion');
allChampion.addEventListener('click', (e) => {
    e.preventDefault();
    bannerLol.style.display ="none";
    mainSliderLol.style.display ="none";
    // orderChampionsLol.style.display="block";
    orderChampionsLol.style.display="flex";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    const nameRol =
    ` 
    <img src="./images/assessin_icon.png">
    <img src="./images/Fighter_icon.png">
    <img src="./images/mage_icon.png">
    <img src="./images/marksman_icon.png">
    <img src="./images/support_icon.png">
    <img src="./images/tank_icon.png">
    `; 
    sectionElementRol.innerHTML = nameRol;
    showChampions(dataLolArray);
})

//filterByRole
const assassinRols = document.querySelector('.assassinRols');
const fighterRols = document.querySelector('.fighterRols');
const mageRols = document.querySelector('.mageRols');
const marksmanRols = document.querySelector('.marksmanRols');
const supportRols = document.querySelector('.supportRols');
const tankRols = document.querySelector('.tankRols');
const sectionElementRol = document.querySelector(".sectionElementRol")
const filterbyAssassins = () => {
    const roles = "Assassin";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Assassin") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        // console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        orderChampionsLol.style.display="none";
        const numberOfChampions = filtroRols.length;
        console.log(numberOfChampions);
        const nameRol = 
        `<div>
            <img src="./images/assessin_icon.png">
            <p>ASSESSINS </p>
        </div>
        <div>
            <span> Hay${numberOfChampions} </span>
        </div>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);    
    }
}

const filterbyFighters = () => {
    const roles = "Fighter";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Fighter") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        // console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        orderChampionsLol.style.display="none";
        const nameRol = 
        ` 
        <img src="./images/Fighter_icon.png">
        <p> FIGHTERS</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        console.log(filtroRols.length);
        showChampions(filtroRols);
    }
}

const filterbyMages = () => {
    const roles = "Mage";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Mage") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        // console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        orderChampionsLol.style.display="none";
        const nameRol = 
        ` 
        <img src="./images/mage_icon.png">
        <p> MAGES</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
}

const filterbyMarksmen = () => {
    const roles = "Marksman";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Marksman") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        // console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        orderChampionsLol.style.display="none";
        const nameRol = 
        ` 
        <img src="./images/marksman_icon.png">
        <p>MARKSMEN</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
}

const filterbySupports = () => {
    const roles = "Support";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Support") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        // console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        orderChampionsLol.style.display="none";
        const nameRol = 
        ` 
        <img src="./images/support_icon.png">
        <p>SUPPORTS</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
}

const filterbyTanks = () => {
    const roles = "Tank";
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    if (roles === "Tank") {
        let filtroRols = showFilterRols(dataLolArray,roles);
        // console.log(filtroRols);
        bannerLol.style.display ="none";
        mainSliderLol.style.display ="none";
        orderChampionsLol.style.display="none";
        const nameRol = 
        ` 
        <img src="./images/tank_icon.png">
        <p>TANKS</p>
        `; 
        sectionElementRol.innerHTML = nameRol;
        showChampions(filtroRols);
    }
}

assassinRols.addEventListener('click', (e) => {
    e.preventDefault();
    filterbyAssassins();
});
fighterRols.addEventListener('click', (e) => {
    e.preventDefault();
    filterbyFighters();
});
mageRols.addEventListener('click', (e) => {
    e.preventDefault();
    filterbyMages();
});
marksmanRols.addEventListener('click', (e) => {
    e.preventDefault();
    filterbyMarksmen();
});
supportRols.addEventListener('click', (e) => {
    e.preventDefault();
    filterbySupports();
});
tankRols.addEventListener('click', (e) => {
    e.preventDefault();
    filterbyTanks();
});

//filterByDifficulty
const lowDifficulty = document.querySelector(".lowDifficulty");
const moderateDifficulty = document.querySelector(".moderateDifficulty");
const highDifficulty = document.querySelector(".highDifficulty");

lowDifficulty.addEventListener("click",(e)=>{
    e.preventDefault();
    const rangeDifficulty = 3;
    mainCardsLol.innerHTML ="";
    const getLowDifficulty =  dataLolArray.filter((e)=>( e.info.difficulty <= rangeDifficulty));
    bannerLol.style.display ="none";
    mainSliderLol.style.display ="none";
    orderChampionsLol.style.display="none";
    sectionElementRol.innerHTML="";
    
    const showLowDifficulty = showFilterByDifficulty(getLowDifficulty);
    showChampions(showLowDifficulty);
    

});
moderateDifficulty.addEventListener("click",(e)=>{
    e.preventDefault();
    const rangeDifficulty = 3;
    const rangeDifficulty2 = 6;
    mainCardsLol.innerHTML ="";
    const getLowDifficulty =  dataLolArray.filter((e)=>( (e.info.difficulty > rangeDifficulty) && (e.info.difficulty <= rangeDifficulty2)));
    bannerLol.style.display ="none";
    mainSliderLol.style.display ="none";
    sectionElementRol.style.display ="none";
    orderChampionsLol.style.display="none";
    const showLowDifficulty = showFilterByDifficulty(getLowDifficulty);
    showChampions(showLowDifficulty);
    
});
highDifficulty.addEventListener("click",()=>{
    const rangeDifficulty = 6;
    mainCardsLol.innerHTML ="";
    const getLowDifficulty =  dataLolArray.filter((e)=>( (e.info.difficulty > rangeDifficulty)));
    bannerLol.style.display ="none";
    mainSliderLol.style.display ="none";
    sectionElementRol.style.display ="none";
    orderChampionsLol.style.display="none";
    const showLowDifficulty = showFilterByDifficulty(getLowDifficulty);
    showChampions(showLowDifficulty);
    
});

// order AZ ZA
const alphabeticalOrder = document.querySelector('#alphabeticalOrder');
// console.log(alphabeticalOrder);
alphabeticalOrder.addEventListener('change', (e)=>{
    e.preventDefault();
    const optionSelect = e.target.value;

    console.log(optionSelect);
    if(optionSelect == 'ZA' ){
        mainCardsLol.innerHTML="";
        const getOrderAlphabeticalZA  = orderByAlphabeticalZA(dataLolArray);
        showChampions(getOrderAlphabeticalZA);
    }
    if(optionSelect == 'AZ'){
        mainCardsLol.innerHTML = "";
        const getOrderAlphabeticalAZ = orderByAlphabeticalAZ(dataLolArray);
        showChampions(getOrderAlphabeticalAZ);
    }
    
});
// search champions

const searchChampions = document.querySelector("#searchChampions");

searchChampions.addEventListener("keyup", (e)=>{
    e.preventDefault();
    mainCardsLol.innerHTML="";
    removeMenuLOl();
    bannerLol.style.display ="none";
    mainSliderLol.style.display ="none";
    const searchString = e.target.value;
    // console.log(searchString);
    const searchChampionsLol = searchLol(dataLolArray,searchString);
    // console.log(filterLol);
    showChampions(searchChampionsLol);
});

//show all information about the champions
document.body.addEventListener('click', (e) =>{
    e.preventDefault();

    if(e.target.classList == 'buttonInformation'){
        const idLol= e.target.id;
        
        const findChampion = dataLolArray.find((champion)=>champion.id === idLol);
       // console.log(findChampion);
        const divMyChampionModal = document.createElement('div');
        const divModalChampionContent = document.createElement('div');
        const divHeaderModal = document.createElement('div');
        const spanCloseModal = document.createElement('span');
        const divBodyModal = document.createElement('div');
        divMyChampionModal.setAttribute("id","myChampionModal");
        divMyChampionModal.setAttribute("class","modalChampion");
        divModalChampionContent.setAttribute("class","modalChampionContent");
        divHeaderModal.setAttribute("class","headerModal");
        divBodyModal.setAttribute("class","bodyModal");
        spanCloseModal.setAttribute("class","closeModal");
        spanCloseModal.textContent= "x";
        divHeaderModal.textContent= "Champions";
        const moreInformationChampion = `
                    <div class="boxChampion">
                        <img src="${findChampion.splash}">
                    </div>

                    <div class="blurbInformation">
                        <div class ="titleChampion">
                            <p>${findChampion.title}</p>
                            <h1>${findChampion.name}</h1>
                        </div>
                        <div class ="informationChampion">
                            <p>${findChampion.blurb}</p>
                            <p>ROLE<br>${findChampion.tags}</p>
                        </div>
                    </div>
           `;
        divBodyModal.innerHTML=moreInformationChampion;
        mainContainer.appendChild(divMyChampionModal);
        divMyChampionModal.appendChild(divModalChampionContent);
        divModalChampionContent.appendChild(divHeaderModal);
        divModalChampionContent.appendChild(divBodyModal);
        divHeaderModal.appendChild(spanCloseModal);
        divModalChampionContent.appendChild(divBodyModal);
        const closeModal = document.querySelector(".closeModal");

        closeModal.addEventListener('click',function closeModal(){
            divMyChampionModal.remove('myChampionModal');
        });
    }
})

//stats data





