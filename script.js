let interviewList = [];
let rejectedList = [];

// 1.Button Toggling
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

// 2. For CalculateCount
const total = document.getElementById('total');
const interviewCount = document.getElementById('interview'); 
const rejectedCount = document.getElementById('rejected'); 
const allCardSection = document.getElementById('all-cards');

// 3. For showing No jobs
const filterSection = document.getElementById('filterSection');

// 4. 
const mainContainer = document.querySelector('main');

// console.log(mainContainer);



// Button Toggling
function toggleStyle(id){
    allFilterBtn.classList.remove('btn-primary');
    interviewFilterBtn.classList.remove('btn-primary');
    rejectedFilterBtn.classList.remove('btn-primary');

    const selected = document.getElementById(id);
    selected.classList.add('btn-primary');

    // For showing No jobs Available
    if(id == 'all-filter-btn'){
        filterSection.classList.add('hidden');
        allCardSection.classList.remove('hidden');
    }
    else if(id == 'interview-filter-btn'){
        filterSection.classList.remove('hidden');
        allCardSection.classList.add('hidden');
    }
    else if(id == 'rejected-filter-btn'){
        filterSection.classList.remove('hidden');
        allCardSection.classList.add('hidden');
    }
}

// calculate the count of Jobs
function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

//4. Button clickable
mainContainer.addEventListener('click',
    function(event){

        const parentNode = event.target.parentNode.parentNode;
        console.log(parentNode);
        const companyName = document.querySelector('.titleName').innerText;
        const regignation = document.querySelector('.regignation').innerText;
        const description = document.querySelector('.description').innerText;
        const statuss = document.querySelector('.statuss').innerText;
        const summary = document.querySelector('.summary').innerText;
        

        if(event.target.classList.contains('interview-btn')){
            parentNode.querySelector('.statuss').innerText = 'Interview';

            
        }
        else if(event.target.classList.contains('rejected-btn')){

        }
        else if(event.target.classList.contains('delete-btn')){

        }
    }
)

