
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
document.querySelector('#transfer').addEventListener('click', (e) => toggleSection(e))
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


