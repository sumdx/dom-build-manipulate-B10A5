var currentBalance = parseInt(getTextById("current-balance"));
var noakhaliBalance = parseInt(getTextById("noakhali-balance"));
var feniBalance = parseInt(getTextById("feni-balance"));
var injuredBalance = parseInt(getTextById("injured-balance"));


document.getElementById("toggle-donation").addEventListener('click',function toggledonation(){
    showSection("section-donation");
    if(activeDonation===false){
        this.classList.toggle('active');
        activeDonation =true;
        activehHistory =false;
    }
    
   
})
document.getElementById("toggle-history").addEventListener('click',function toggleHistory(){
    showSection("section-history");
    if(activehHistory===false){
        this.classList.toggle('active');
        activeDonation =false;
        activehHistory =true;
    }
    
})

document.getElementById("noakhali-btn").addEventListener('click',function(){
    const noakhaliInput = parseInt(getValueById("noakhali-input"));
    if(noakhaliInput>0){
        if(noakhaliInput > currentBalance){
            alert("Not enough balance");
        }else{
            currentBalance-=noakhaliInput;
            updateBalance(currentBalance);
            updateHistory(noakhaliInput,"famine-2024 at Noakhali, Bangladesh");
            document.getElementById("my_modal_1").showModal();
            document.getElementById("noakhali-input").value ="";
            noakhaliBalance+=noakhaliInput;       
            document.getElementById("noakhali-balance").innerText =noakhaliBalance;
        }
    }else{
        alert("No valid amount. Please enter a valid amount for a successful transaction");
    }
})

document.getElementById("feni-btn").addEventListener('click',function(){
    const feniInput = parseInt(getValueById("feni-input"));
    if(feniInput>0){
        if(feniInput > currentBalance){
            alert("Not enough balance");
        }else{
            currentBalance-=feniInput;
            updateBalance(currentBalance);
            updateHistory(feniInput,"Flood Relief in Feni,Bangladesh");
            document.getElementById("my_modal_1").showModal();
            document.getElementById("feni-input").value ="";
            feniBalance+=feniInput;
            document.getElementById("feni-balance").innerText =feniBalance;
        }
    }else{
        alert("No valid amount. Please enter a valid amount for a successful transaction");
    }
})

document.getElementById("injury-btn").addEventListener('click',function(){
    const injuredInput = parseInt(getValueById("injury-input"));
    if(injuredInput>0){
        if(injuredInput > currentBalance){
            alert("Not enough balance");
        }else{
            currentBalance-=injuredInput;
            updateBalance(currentBalance);
            updateHistory(injuredInput,"Aid for Injured in the Quota Movement");
            document.getElementById("my_modal_1").showModal();
            document.getElementById("injury-input").value ="";

            injuredBalance+=injuredInput;
            
            document.getElementById("injured-balance").innerText =injuredBalance;
        }
    }else{
        alert("No valid amount. Please enter a valid amount for a successful transaction");
    }
})


