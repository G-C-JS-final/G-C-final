
let toggleList = document.querySelectorAll('.toggle');
let actionsContainer = document.querySelector('.account-actions');
function toggleSection(e){    
    let isSectionVisible = false;
    toggleList.forEach(function(section){
        if(section.classList. contains(e.target.id)){
            if(section.style.display == 'block'){
                section.style.display = 'none'
            }else{
                section.style.display = 'block';
                isSectionVisible = true;
            }
        }else{
            section.style.display = 'none';
        }

        if(isSectionVisible){
            actionsContainer.style.flexBasis = '200px';
        }else{
            actionsContainer.style.flexBasis = '100px';
        }
    })    
}

document.querySelector('#deposit').addEventListener('click', (e) => toggleSection(e));
document.querySelector('#transfer').addEventListener('click', function(e) {
    toggleSection(e)
    if(accountNumber && accountHolder){
    document.querySelector("#source-account option").innerHTML = document.querySelector("#search").value;
    }else{
        document.querySelector("#source-account option").innerHTML =  document.querySelector("#source-account option:first-of-type").value;
    }
});
document.querySelector('#withdraw').addEventListener('click', (e) => toggleSection(e))

let usersList = [
    {
        id: 123,
        firstName: 'Nate',
        lastName: 'Haile',
        email: 'natnael@gmail.com',
        tel: '00447654312566',
        address: {
            line1: '1 Oxford House',
            line2: 'Victoria Street',
            postcode: 'SW1E 5AD',
            city: 'London'
        },
        accounts: new Map([
            [
                'AC12345',
            {
                id: 321,
                type: 'CurrentAccount',
                accountNumber: 'AC12345',
                sortCode: '110022',
                balance: 10547
            }
        ]
        ])
    },
    {
        id: 124,
        firstName: 'Daniel',
        lastName: 'Ghirmay',
        email: 'daniel@gmail.com',
        tel: '00447854712566',
        address: {
            line1: 'Flat 1 George House',
            line2: 'King William Road',
            postcode: 'WC1 2HA',
            city: 'London'
        },
        accounts: new Map([
            [
                'AC12312',
            {
                id: 543,
                type: 'CurrentAccount',
                accountNumber: 'AC12312',
                sortCode: '125322',
                balance: 5000
            }
        ]
        ])
    },
    {
        id: 125,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe23@gmail.com',
        tel: '00317690312526',
        address: {
            line1: 'Harnet Avenue',
            line2: 'Victoria Street',
            postcode: 'KR2-DF',
            city: 'Oslo'
        },
        accounts: new Map([
            [
                'AC262048',
            {
                id: 501,
                type: 'CurrentAccount',
                accountNumber: 'AC262048',
                sortCode: '190429',
                balance: 7312
            }
        ]
        ])
    },
     {
        id: 126,
        firstName: 'Adam',
        lastName: 'Chris',
        email: 'adamch@gmail.com',
        tel: '0029175254705503',
        address: {
            line1: ' Gibabo House',
            line2: 'Semaetat Avenue',
            postcode: 'AS24',
            city: 'Asmara'
        },
        accounts: new Map([
            [
                'AC12301',
            {
                id: 116,
                type: 'CurrentAccount',
                accountNumber: 'AC12301',
                sortCode: '29125321',
                balance: 13917
            }
        ]
        ])
    }
]


let balance = document.querySelector("#balance");
let accountNumber ;
let accountHolder;
let searchBtn = document.querySelector(".btn-find");
searchBtn.addEventListener("click", function () {
    document.querySelector(".account-transactions").style.display="none";
       accountNumber = document.querySelector("#search").value;
       accountHolder = usersList.find(user =>user.accounts.has(accountNumber));
    if(accountHolder && accountNumber != ''){
       populateAcountHolder(accountHolder)
       populateAccountSummary(accountHolder.accounts)
       balance.innerHTML = accountHolder.accounts.get(accountNumber).balance;
    }else{
       
        balance.innerHTML="";
       let card = document.querySelectorAll(".card-body span:nth-of-type(even)");
       card.forEach(x => x.textContent = "");
       document.querySelector("#search").value = "User Not Found";
    }
})
let srcfocus = document.querySelector("#search")

srcfocus.addEventListener("focus",function(){
    this.value = "";
    balance.innerHTML = "";
    document.querySelector(".account-transactions").style.display = "none";
    let card = document.querySelectorAll(".card-body span:nth-of-type(even)");
    card.forEach(x => x.textContent = "");
    document.querySelector("#source-account option").innerHTML = document.querySelector("#source-account option:first-of-type").value;
})

function populateAccountSummary(summary){
    document.querySelector("#account-type").innerHTML = summary.get(accountNumber).type;
    document.querySelector("#sort-code").innerHTML = summary.get(accountNumber).sortCode;
    document.querySelector("#account-number").innerHTML = summary.get(accountNumber).accountNumber;
    document.querySelector("#balance").innerHTML = summary.get(accountNumber).balance;
}

function populateAcountHolder(holder){
    document.querySelector("#fullname").innerHTML = `${holder.firstName} ${holder.lastName} `;
    document.querySelector("#email").innerHTML = `${holder.email} `;
    document.querySelector("#tel").innerHTML = `${holder.tel} `;
    document.querySelector("#address").innerHTML = `${holder.address.line1}; ${holder.address.line2}; ${holder.address.postcode} `;
    
 }
let balanceValue = balance.innerHTML;
let date = new Date().toLocaleDateString("en-GB");
let depositBtn = document.querySelector("#depositBtn");
let table = document.querySelector("table");
depositBtn.addEventListener("click", function (y) {
    document.querySelector(".account-transactions").style.display="block";
    let tr = table.insertRow();
    let ammount = document.querySelector("#depositAmount").value;
    let newBalance = Number(ammount) + Number(balance.innerHTML);
    document.querySelector("#balance").innerHTML = newBalance;
    tr.innerHTML = `
    <td>${date}</td>
    <td>${y.target.innerHTML}</td>
    <td>${ammount}</td>
    <td>${"Cash"}</td>
    <td>${accountNumber}</td>
    <td>${newBalance}</td>
    `;
})

let transferBtn = document.querySelector("#transeferBtn");
transferBtn.addEventListener("click", function (t) {
    document.querySelector(".account-transactions").style.display="block";
    let targetinput = document.querySelector("#destination-account").value;
    //let targetaccount = usersList.find(user =>user.accounts.get(targetinput).accountNumber);
    let amountTransfered = Number(document.querySelector("#amount").value);
    let balanceValue = Number(balance.innerHTML);
    if (accountHolder && accountNumber != "" && targetinput != "" && amountTransfered <= balanceValue && accountNumber != targetinput && amountTransfered != "") {
        alert(`Are You Sure you want to transfer?`);
        let newBalance = Number(balanceValue) - Number(amountTransfered);
        document.querySelector("#balance").innerHTML = newBalance;
         let tr = table.insertRow();
         tr.innerHTML = `
    <td>${date}</td>
    <td>${t.target.innerHTML}</td>
    <td>${amountTransfered}</td>
    <td>${accountNumber}</td>
    <td>${targetinput}</td>
    <td>${newBalance}</td>
    `;
    
        document.querySelector("#alert").innerHTML = "Succesfully Transfered !";   //i added span with id=alert  in the html and css
         document.querySelector("#alert").style.display = "block"; 
        document.querySelector("#source-account option").innerHTML = "From";
        //i tried the commentted code below  to change it's innerHTML to default or to "To" but it's not working.
        //document.querySelector("#destination-account option").innerHTML = "To";
        document.querySelector("#amount").value = "";
    
}else{
    alert("Incorrect Input")
}

})
let withdrawBtn = document.querySelector("#withdrawBtn");
withdrawBtn.addEventListener("click", function (w) {
    document.querySelector(".account-transactions").style.display = "block";
    let tr = table.insertRow();
    let wammount = document.querySelector("#withdrawAmount").value;
    let wbalance = Number(balance.innerHTML) - Number(wammount);
    balance.innerHTML = wbalance;
    tr.innerHTML = `
    <td>${date}</td>
    <td>${w.target.innerHTML}</td>
    <td>${wammount}</td>
    <td>${accountNumber}</td>
    <td>${"--"}</td>
     <td>${wbalance}</td>
    `
});