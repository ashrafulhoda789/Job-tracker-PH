let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';

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

// 5.
const availableCount = document.getElementById('available-count');



// Button Toggling
function toggleStyle(id){
    allFilterBtn.classList.remove('btn-primary');
    interviewFilterBtn.classList.remove('btn-primary');
    rejectedFilterBtn.classList.remove('btn-primary');

    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.add('btn-primary');

    // For showing No jobs Available
    if(id == 'all-filter-btn'){
        filterSection.classList.add('hidden');
        allCardSection.classList.remove('hidden');
        availableCnt();
    }
    else if(id == 'interview-filter-btn'){
        filterSection.classList.remove('hidden');
        allCardSection.classList.add('hidden');
        renderInterview();
    }
    else if(id == 'rejected-filter-btn'){
        filterSection.classList.remove('hidden');
        allCardSection.classList.add('hidden');
        renderRejected();
    }

    availableCnt();
}

// calculate the count of Jobs
function calculateCount(){
    availableCount.innerText = allCardSection.children.length + " Jobs";

    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function availableCnt(){
    const totalValue = allCardSection.children.length;
    if(currentStatus == 'all-filter-btn'){
        availableCount.innerText = totalValue + " Jobs";
    }
    else if(currentStatus == 'interview-filter-btn'){
        availableCount.innerText = interviewList.length + " of " + totalValue + " Jobs";
    }
    else if(currentStatus == 'rejected-filter-btn'){
        availableCount.innerText = rejectedList.length + " of " + totalValue + " Jobs";
    }
}

//4. Button clickable
mainContainer.addEventListener('click',
    function(event){
        
        if(event.target.closest('.interview-btn')){
            const parentNode = event.target.closest('.job-card');
            const companyName = parentNode.querySelector('.titleName').innerText;
            const regignation = parentNode.querySelector('.regignation').innerText;
            const workPlace = parentNode.querySelector('.workPlace').innerText;
            const workShift = parentNode.querySelector('.work-shift').innerText;
            const salary = parentNode.querySelector('.salary').innerText;
            const statuss = parentNode.querySelector('.statuss').innerText;
            const summary = parentNode.querySelector('.summary').innerText;

            parentNode.querySelector('.statuss').innerText = 'Interview';
            parentNode.querySelector('.statuss').style.color = 'green';

            const cardInfo = {
                companyName,
                regignation,
                workPlace,
                workShift,
                salary,
                statuss : 'Interview',
                summary
            }

            const jobExist = interviewList.find(job => job.companyName == cardInfo.companyName);

            if(!jobExist){
                interviewList.push(cardInfo);
            }

            rejectedList = rejectedList.filter(job => job.companyName != cardInfo.companyName);

            if(currentStatus == 'rejected-filter-btn'){
                renderRejected();
            }

            calculateCount();
            availableCnt();

        }
        else if(event.target.closest('.rejected-btn')){
            const parentNode = event.target.closest('.job-card');
            const companyName = parentNode.querySelector('.titleName').innerText;
            const regignation = parentNode.querySelector('.regignation').innerText;
            const workPlace = parentNode.querySelector('.workPlace').innerText;
            const workShift = parentNode.querySelector('.work-shift').innerText;
            const salary = parentNode.querySelector('.salary').innerText;
            const statuss = parentNode.querySelector('.statuss').innerText;
            const summary = parentNode.querySelector('.summary').innerText;

            parentNode.querySelector('.statuss').innerText = 'Rejected';
            parentNode.querySelector('.statuss').style.color = 'red';

            const cardInfo = {
                companyName,
                regignation,
                workPlace,
                workShift,
                salary,
                statuss : 'Rejected',
                summary
            }

            const jobExist = rejectedList.find(job => job.companyName == cardInfo.companyName);

            if(!jobExist){
                rejectedList.push(cardInfo);
            }

            interviewList = interviewList.filter(job => job.companyName != cardInfo.companyName);

            if(currentStatus == 'interview-filter-btn'){
                renderInterview();
            }

            calculateCount();
            availableCnt();
        }

        else if(event.target.closest('.btn-delete')){
            
            const card = event.target.closest('.job-card');
            const companyName = card.querySelector('.titleName').innerText;

            card.remove();

            interviewList = interviewList.filter(job => job.companyName != companyName);
            rejectedList = rejectedList.filter(job => job.companyName != companyName);

            calculateCount();
            availableCnt();

            if(currentStatus == 'interview-filter-btn'){
                renderInterview();
            }
            else if(currentStatus == 'rejected-filter-btn'){
                renderRejected();
            }
            
        }
        
    }
)

function renderInterview(){
    filterSection.innerHTML = '';

    if(interviewList.length === 0){
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'text-center rounded-2xl shadow p-5 shadow-gray-300 mt-10 space-y-5';
        emptyMessage.innerHTML = `
            <div>
                <i class="fa-solid fa-file"></i>
            </div>
            <div>
                <h1 class="font-bold text-2xl text-color">No Jobs Available</h1>
                <p class="font-medium text-neutral-500">Check back soon for new job opportunities</p>
            </div>
        `;

        filterSection.appendChild(emptyMessage);
        return;

    }

    for(let interview of interviewList){
        let div = document.createElement('div');
        div.className = 'job-card rounded-2xl shadow p-5 shadow-gray-300 flex flex-col md:flex-row gap-2.5 justify-between';
        div.innerHTML = `
            <div class="space-y-5">
                <div class="space-y-2">
                    <h1 class="titleName text-2xl text-color font-bold"> ${interview.companyName}</h1>
                    <h3 class="regignation text-[20px] text-neutral-500">${interview.regignation}</h3>
                </div>

                <div class=" flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-10 list-disc text-neutral-500">
                    <p class="workPlace">${interview.workPlace}</p>
                    <li class="work-shift">${interview.workShift}</li>
                    <li class="salary">${interview.salary}</li>
                    
                </div>

                <div class="space-y-3">
                    <p class="statuss text-green-700 font-medium shadow w-[150px] text-center p-2 bg-[#EEF4FF] rounded-lg">${interview.statuss}</p>
                    <p class="summary">${interview.summary}</p>
                </div>

                <div>
                    <button class="btn btn-accent btn-outline interview-btn text-[16px] text-bold">Interview</button>
                    <button class="btn btn-secondary btn-outline rejected-btn text-[16px] text-bold">Rejected</button>
                </div>
            </div>

            <div>
                <button class="btn w-[50px] h-[50px] rounded-full btn-delete"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

        filterSection.appendChild(div);
    }
}


function renderRejected(){
    filterSection.innerHTML = '';

    if(rejectedList.length === 0){
        const emptyMessage = document.createElement('div');
        emptyMessage.className = 'text-center rounded-2xl shadow p-5 shadow-gray-300 mt-10 space-y-5';
        emptyMessage.innerHTML = `
            <div>
                <i class="fa-solid fa-file"></i>
            </div>
            <div>
                <h1 class="font-bold text-2xl text-color">No Jobs Available</h1>
                <p class="font-medium text-neutral-500">Check back soon for new job opportunities</p>
            </div>
        `;

        filterSection.appendChild(emptyMessage);
        return;

    }

    for(let rejected of rejectedList){
        let div = document.createElement('div');
        div.className = 'job-card rounded-2xl shadow p-5 shadow-gray-300 flex flex-col md:flex-row gap-2.5 justify-between ';
        div.innerHTML = `
            <div class="space-y-5">
                <div class="space-y-2">
                    <h1 class="titleName text-2xl text-color font-bold"> ${rejected.companyName}</h1>
                    <h3 class="regignation text-[20px] text-neutral-500">${rejected.regignation}</h3>
                </div>

                <div class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-10 list-disc text-neutral-500">
                    <p class="workPlace">${rejected.workPlace}</p>
                    <li class="work-shift">${rejected.workShift}</li>
                    <li class="salary">${rejected.salary}</li>
                    
                </div>

                <div class="space-y-3">
                    <p class="statuss text-red-500 font-medium shadow w-[150px] text-center p-2 bg-[#EEF4FF] rounded-lg">${rejected.statuss}</p>
                    <p class="summary">${rejected.summary}</p>
                </div>

                <div>
                    <button class="btn btn-accent btn-outline interview-btn text-[16px] text-bold">Interview</button>
                    <button class="btn btn-secondary btn-outline rejected-btn text-[16px] text-bold">Rejected</button>
                </div>
            </div>

            <div>
                <button class="btn w-[50px] h-[50px] rounded-full btn-delete"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

        filterSection.appendChild(div);
    }
}
