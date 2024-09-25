function getTextById(id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
}
function getValueById(id){
    const value = document.getElementById(id).value;
    return value;
}


function updateBalance(currentBalance){
    document.getElementById("current-balance").innerText = currentBalance;
}

function updateHistory(amount,name){
    const transactionList = document.createElement('li');
    transactionList.className ="border rounded-lg p-7 flex flex-col gap-2";
    transactionList.innerHTML =
    `
        <h1 class="font-bold">${amount} Taka is Donated for ${name}</h1>
        <p class="text-gray-400 ">Date : ${new Date().toString()}</p>
    `
    document.getElementById("history-list").appendChild(transactionList);
}

function showSection(id){
    addClass("section-donation","hidden");
    addClass("section-history","hidden");
    removeClass(id,"hidden");
}

function addClass(id,className){
    document.getElementById(id).classList.add(className);
}
function removeClass(id,className){
    document.getElementById(id).classList.remove(className);
}