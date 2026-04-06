let addNewH=document.getElementById("addNewH"); 
let FloatingBtn=document.getElementById("FloatingBtn");
let showResults = document.querySelector(".showResults");
let resultArea  = document.querySelector(".resultArea");
let bigspent=document.getElementById("bigspent");


const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
links.classList.toggle("active");
  });

    let dynamicInput=` <form class="flex flex-col gap-4 inputform">
            <div class="option_div">
              <label class="block label text-sm font-bold mb-1">do you wanna develop this habit or quit</label>
               <select class="w-full label rounded-xl bg-gray-100 px-5 py-2 h-10  outline-none mb-2 focus:ring-1 focus:ring-black-200 habit_select">
                  <option value="" class="text-sm">please choose one option</option>
                  <option value="quiting" class="font-semibold">quiting</option>
                  <option value="developing" class="font-semibold">developing</option>
               </select>
            </div> 

            <div class="habit_div">
              <label class="block  label text-sm font-semibold mb-1 ">Habit Name</label>
              <input
                type="search"
                placeholder="Enter habit name"
                class="w-[clamp(280px,90vw,420px)] rounded-xl bg-gray-100 h-10 py-2 label outline-none focus:ring-1 focus:ring-black-200 nameHapit"
                 />
            </div>

            <!-- Date -->
            <div class="date_div">
              <label class="block label text-sm font-semibold mb-1">Date</label>
              <input
                type="date"
                class="w-[clamp(280px,90vw,420px)] rounded-xl bg-gray-100 h-10 py-2 label outline-none focus:ring-1 focus:ring-black-200 date"
              />
            </div>

            <!-- goal -->
            <div class="goal_div">
              <label class="block label text-sm font-semibold mb-1">Set goal</label>
              <input
                type="text"
                placeholder="Days or hours"
                class="w-[clamp(280px,90vw,420px)] rounded-xl bg-gray-100 h-10 label py-2 outline-none focus:ring-1 focus:ring-black-200 goalSet"
              />
            </div>


          

            <!-- Spent Money -->
            <div class="YN_div">
              <label class="block label text-sm font-semibold mb-2">Did you spend money?</label>
              <div class="flex gap-6">
                <label class="flex items-center gap-2 ">
                  <input type="radio" name="spent" class="accent-blue-500 yesCheck">
                  Yes
                </label>
                <label class="flex items-center gap-2 label hidden NO">
                  <input type="radio" name="spent" class="accent-blue-500 noCheck">
                  No
                </label>
              </div>
            </div>

            <!-- Amount -->
            <div class="AmountSpent hidden">
              <label class="block label text-sm font-semibold mb-1">Amount Spent $</label>
              <input
                type="number"
                placeholder="0.00"
                class="w-[clamp(280px,90vw,420px)] rounded-xl bg-gray-100 h-10 py-2 label outline-none focus:ring-1 focus:ring-black-200 Amount_Input"
              />
            </div>

            <!-- Submit -->
            <button
              type="button"
              itemid=""
              class="w-full bg-blue-500 text-white h-10 text-xl rounded-xl font-semibold hover:bg-blue-600 transition Submit"
            >
              Save Habit
            </button>

            <button class="w-full bg-orange-500 text-white h-10 text-xl rounded-xl font-semibold hover:bg-orange-600 transition hidden showResults">
              Show me the results
            </button>
            <button class="w-full bg-red-500 text-white h-10 text-xl rounded-xl font-semibold hover:bg-orange-600 transition animate-pulse hidden ErrorMessage">
              Error Message
            </button>
            
                </form>`



    let newdiv=`<div class="snap-start">
              <div class="flex flex-col gap-2 ">
              <div class="flex flex-row gap-30 text-xl justify-center  timer-ttle">
                <div>hour/min</div>
                <div>seconds</div>
                <div class="daylabel">days</div>
                </div>
                <div class="flex flex-col text-white text-3xl flex justify-center items-center">
                    <div class="flex flex-row gap-4">
                      <div class="bg-red-400 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-bl-none rounded-br-none"><span class="hours">00</span><span style="font-weight:900;font-size:2rem;">:</span><span class="minutes">00</span></div>
                      <div class="bg-red-400 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-bl-none rounded-br-none seconds">0</div>
                      <div class="bg-red-400 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-bl-none rounded-br-none days">0</div>
                    </div>

                    <div class="flex flex-row gap-4">
                      <div class="bg-green-500 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-tl-none rounded-tr-none"><span class="RMhours">00</span><span style="font-weight:900;font-size:2rem;">:</span><span class="RMminutes">00</span></div>
                      <div class="bg-green-500 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-tl-none rounded-tr-none RMseconds">0</div>
                      <div class="bg-green-500 w-30 h-14 rounded-xl flex justify-center items-center Timer-boxes2 rounded-tl-none rounded-tr-none RMdays">0</div>
                    </div>
                </div>
                <div class="bg-green-200 w-220 h-137  rounded-4xl shadow-3xl border border:blue-200 text-xl flex-col gap-2 font-semibold innerGR2-div ">
                  <div class="flex justify-center">
                  <div  class="font-semibold text-white text-3xl bg-red-400 w-30 h-10 rounded-4xl text-center habitName"></div>
                  </div>
                  <div class="">
                  </div>
                  <div class="flex flex-col gap-4 text-white text-3xl  justify-center items-center Col-Boxes">
                    <div class="flex flex-row gap-70 flex justify-center items-center "> 
                      <div class="text-black flex  items-center  w-50 h-10 text-indic">the date you started</div>
                      <div class="bg-blue-400 w-30 h-25 rounded-xl flex justify-center items-center Col-Box dateDisplay" ></div>
                    </div>
                    <div class="flex flex-row gap-70 flex justify-center items-center ">
                      <div class="text-black flex  items-center   w-50 h-10 text-indic">Quiting or Developing</div>
                      <div class="bg-blue-400 w-30 h-25 rounded-xl flex justify-center items-center Col-Box option_select"></div>
                    </div>
                    <div class="flex flex-row gap-70 flex justify-center items-center ">
                      <div class="text-black flex  items-center   w-50 h-10 text-indic">Your Goal</div>
                      <div class="bg-blue-400 w-30 h-25 rounded-xl flex justify-center items-center Col-Box goalDisplay"></div>
                    </div>
                    <div class="flex flex-row gap-70 flex justify-center items-center SpentOn ">
                      <div class="text-black flex items-center   w-50 h-10 text-indic" id="spentTtl">you've spent</div>
                      <div class="bg-blue-400 w-30 h-25 rounded-xl flex justify-center items-center Col-Box SpentDisplay">$ 0</div>
                    </div>
                    <button class="text-white mb-10 bg-red-500 rounded-2xl w-30 h-10 text-center cursor-pointer remove">remove</button>
                </div>
                </div>
              </div>
             </div>`

             
             

      let form_add = document.querySelector(".form_add");
      form_add.insertAdjacentHTML("beforeend", dynamicInput); 
      addNewH.style.display="none"
   
      let form = form_add.lastElementChild;
      let submit         = form.querySelector(".Submit");
      let inputform=form.querySelector(".inputform");

      let noCheck        = form.querySelector(".noCheck");
      let NO        = form.querySelector(".NO");
      let yesCheck       = form.querySelector(".yesCheck");
      let AmountSpent      = form.querySelector(".AmountSpent");
      

      yesCheck.addEventListener("change",(e)=>{
    if(e.target.checked){
      AmountSpent.style.display="block"
      NO.style.display="block" 
    }
  })

   noCheck.addEventListener("change",(e)=>{
    if(e.target.checked){
      AmountSpent.style.display="none"
      NO.style.display="none"
    }
  })

                
   addNewH.addEventListener("click",(event)=>{
      event.preventDefault();
     
      addNewH.style.display="none"
       form_add.style.display="block"


   })
   


  

 let remove;

 let counter=0
 let resultAreaContent = document.querySelector(".resultAreaContent");

 let emptyMessege=document.getElementById("emptyMessege");
 let Counter=document.getElementById("Counter");

 submit.addEventListener("click",(event)=>{
    event.preventDefault()
  
     let intervalStarted = false;
     const form = event.target.closest("form");

    let hapit=form.querySelector(".nameHapit").value
    let showDate = form.querySelector(".date").value;
    let daysGoal=Number(form.querySelector(".goalSet").value)
    let select=form.querySelector(".habit_select").value
    let spent=form.querySelector(".Amount_Input").value
    let ErrorMessage=form.querySelector(".ErrorMessage");
    let YN_div=form.querySelector(".YN_div");

    bigspent.innerHTML=spent

    if(hapit && showDate && daysGoal && select){
    resultAreaContent.insertAdjacentHTML("beforeend", newdiv);
    const card = resultAreaContent.lastElementChild; 

    let dateDisplay   = card.querySelector(".dateDisplay");

    
    
    let SpentDisplay  = card.querySelector(".SpentDisplay");
    let goalDisplay   = card.querySelector(".goalDisplay");
    let option_select = card.querySelector(".option_select");
    let SpentOn          = card.querySelector(".SpentOn");
    let habitName = card.querySelector(".habitName");
    remove= card.querySelector(".remove");

    let days      = card.querySelector(".days");
    let daylabel  = card.querySelector(".daylabel");


    let RMhours   = card.querySelector(".RMhours");
    let RMminutes = card.querySelector(".RMminutes");
    let RMseconds = card.querySelector(".RMseconds");
    let RMdays    = card.querySelector(".RMdays");

    let hours   = card.querySelector(".hours");
    let minutes = card.querySelector(".minutes");
    let seconds = card.querySelector(".seconds");
    let startingSeconds=1;
      let time=startingSeconds;

    let habit = {
      name: hapit,
      date: showDate,
      goal: daysGoal,
      type: select,
      spent: spent
    };


      let mincounter=0;
      let hourCounter=0;
      let dayCounter=0;

      
      let RMsecoCounter=59;
      let secs=RMsecoCounter
      let RMmincounter=59;
      let mins=RMmincounter
      let RMhourCounter=23;
      let HRS=RMhourCounter

      RMdaycounter=daysGoal


    habitName.innerHTML=hapit
    dateDisplay.innerHTML=showDate

   

     
        if(!spent){
          SpentDisplay.opacity=0
          SpentOn.style.opacity=0
           
          
        }else{SpentDisplay.innerHTML=`$ 0${spent}`
          SpentOn.style.opacity=1
        } 
          
        if(spent<10){
        SpentDisplay.innerHTML=`$0${spent}`
          
        }else{
          SpentDisplay.innerHTML=`$${spent}`
        }

  

     goalDisplay.innerHTML=`${daysGoal} Days`

     option_select.innerHTML=select




     RMminutes.innerHTML = mins;
        RMhours.innerHTML = HRS;
        RMseconds.innerHTML=secs
          if (daysGoal > 9) {
            RMdays.innerHTML = daysGoal;
          } else {
            RMdays.innerHTML = "0" + daysGoal;
          }
    
     if(!intervalStarted) {
        setInterval(function updateSeconds(){
     if (time < 10) {
      seconds.innerHTML = "0" + time;
    } else {
      seconds.innerHTML = time;
    }
    
    
    
    time+=1;
    if (mincounter < 10) {
      minutes.innerHTML = "0" + mincounter;  
    } else {
      minutes.innerHTML = mincounter;
    }
     if (hourCounter < 10) {
      hours.innerHTML = "0" + hourCounter;

    } else {
      hours.innerHTML = hourCounter;
    }

    
    

    if(time==60){
      time=startingSeconds
      mincounter+=1
      if (mincounter < 10) {
      minutes.innerHTML = "0" + mincounter;
    } else {
      minutes.innerHTML = mincounter;
    }

    if (hourCounter < 10) {
      hours.innerHTML = "0" + hourCounter;
    } else {
      hours.innerHTML = hourCounter;
    }

    if(mincounter==59){
      mincounter=0
      hourCounter+=1
    }
    if(hourCounter==23){
      hourCounter=0;
      dayCounter+=1;

    if (dayCounter < 10) {
      days.innerHTML = "0" + dayCounter;
  
    } else {
      days.innerHTML = dayCounter;
     
    }

    if(days==0){
      startingSeconds=0
    }
    
    }
    }

   

  }, 1000);
        setInterval(function remainingCounter(){
    if (RMdaycounter == null) return;
    if (RMsecoCounter > 10) {
      RMseconds.innerHTML = secs;
    } else {
      RMseconds.innerHTML = "0" + secs;
    }

    secs-=1


    if(secs<0){
      secs=RMsecoCounter
      mins-=1

    

    if(mins<0){
      mins=RMmincounter
      HRS-=1
    }

    if(HRS<0){
      HRS=RMhourCounter
      daysGoal--
    }

    if(daysGoal<=0){
      daysGoal=0
      HRS=0
      mins=0
      secs=0
    }





    if (mins > 9) {
      RMminutes.innerHTML = mins;
    } else {
      RMminutes.innerHTML = "0" + mins;
    }

    if (HRS > 9) {
      RMhours.innerHTML = HRS;
    } else {
      RMhours.innerHTML = "0" + HRS;
    }

     if (daysGoal > 9) {
      RMdays.innerHTML = daysGoal;
    } else {
      RMdays.innerHTML = "0" + daysGoal;
    }
    
  

  }
 remove.addEventListener("click", ()=>{
    card.remove(); // remove from DOM

  // update localStorage
  localStorage.setItem("cards", resultAreaContent.innerHTML);
 })
   
  }, 1000)}
     
        intervalStarted = true; 
        NO.style.display="none"
        emptyMessege.style.display="none"
         
         form_add.style.display="none"
           addNewH.style.display="block"
           form.reset()
           AmountSpent.style.display="none"

           counter+=1
           Counter.innerHTML=counter

          
           


    }else if(!hapit || !showDate || !daysGoal || !select){
      ErrorMessage.innerHTML="please fill the remaining form input"
      ErrorMessage.style.display="block"
      
      setTimeout(()=>{
       ErrorMessage.style.display="none"

      },3000)
      
      habitName.innerHTML=""
      dateDisplay.innerHTML=""
      goalDisplay.innerHTML=""
      option_select.innerHTML=""
      SpentDisplay.opacity=0
      SpentOn.style.opacity=0
    }

             
    yesCheck.addEventListener("change",(e)=>{
    if(e.target.checked){
      AmountSpent.style.display="block"
     
    }
  })

   noCheck.addEventListener("change",(e)=>{
    if(e.target.checked){
      AmountSpent.style.display="none"
      
    }
  })

 localStorage.setItem("cards", resultAreaContent.innerHTML)

    })

  window.addEventListener("DOMContentLoaded",()=>{
    
    let saved=localStorage.getItem("cards")
    if(saved){
      resultAreaContent.innerHTML=saved
      emptyMessege.style.display="none"
    }
   })


   

//  localStorage.clear()