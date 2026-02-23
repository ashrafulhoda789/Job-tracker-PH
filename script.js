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
        renderInterview();
    }
    else if(id == 'rejected-filter-btn'){
        filterSection.classList.remove('hidden');
        allCardSection.classList.add('hidden');
        renderRejected();
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
        
        if(event.target.classList.contains('interview-btn')){
            console.log("object");
            const parentNode = event.target.parentNode.parentNode;
            const companyName = parentNode.querySelector('.titleName').innerText;
            const regignation = parentNode.querySelector('.regignation').innerText;
            const workStyle = parentNode.querySelector('.work-style').innerText;
            const workShift = parentNode.querySelector('.work-shift').innerText;
            const salary = parentNode.querySelector('.salary').innerText;
            const statuss = parentNode.querySelector('.statuss').innerText;
            const summary = parentNode.querySelector('.summary').innerText;

            parentNode.querySelector('.statuss').innerText = 'Interview';

            const cardInfo = {
                companyName,
                regignation,
                workStyle,
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

        }
        else if(event.target.classList.contains('rejected-btn')){
            const parentNode = event.target.parentNode.parentNode;
            const companyName = parentNode.querySelector('.titleName').innerText;
            const regignation = parentNode.querySelector('.regignation').innerText;
            const workStyle = parentNode.querySelector('.work-style').innerText;
            const workShift = parentNode.querySelector('.work-shift').innerText;
            const salary = parentNode.querySelector('.salary').innerText;
            const statuss = parentNode.querySelector('.statuss').innerText;
            const summary = parentNode.querySelector('.summary').innerText;

            parentNode.querySelector('.statuss').innerText = 'Rejected';

            const cardInfo = {
                companyName,
                regignation,
                workStyle,
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
        }
        else if(event.target.classList.contains('delete-btn')){

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
        div.className = 'job-card rounded-2xl shadow p-5 shadow-gray-300 flex flex-col md:flex-row justify-between';
        div.innerHTML = `
            <div class="space-y-5">
                <div class="space-y-2">
                    <h1 class="titleName text-2xl text-color font-bold"> ${interview.companyName}</h1>
                    <h3 class="regignation text-[20px] text-neutral-500">${interview.regignation}</h3>
                </div>

                <ul class="description flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-10 list-disc text-neutral-500">
                    <p>${interview.workStyle}</p>
                    <li>${interview.workShift}</li>
                    <li>${interview.salary}</li>
                    
                </ul>

                <div>
                    <p class="statuss">${interview.statuss}</p>
                    <p class="summary">${interview.summary}</p>
                </div>

                <div>
                    <button class="btn btn-accent btn-outline interview-btn text-[16px] text-bold">Interview</button>
                    <button class="btn btn-secondary btn-outline rejected-btn text-[16px] text-bold">Rejected</button>
                </div>
            </div>

            <div>
                <button class="btn w-[50px] h-[50px] rounded-full delete-btn"><i class="fa-solid fa-trash"></i></button>
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
        div.className = 'job-card rounded-2xl shadow p-5 shadow-gray-300 flex flex-col md:flex-row justify-between';
        div.innerHTML = `
            <div class="space-y-5">
                <div class="space-y-2">
                    <h1 class="titleName text-2xl text-color font-bold"> ${rejected.companyName}</h1>
                    <h3 class="regignation text-[20px] text-neutral-500">React Native Developer</h3>
                </div>

                <ul class="description flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-10 list-disc text-neutral-500">
                    <p>${rejected.workStyle}</p>
                    <li>${rejected.workShift}</li>
                    <li>${rejected.salary}</li>
                    
                </ul>

                <div>
                    <p class="statuss">${rejected.statuss}</p>
                    <p class="summary">${rejected.summary}</p>
                </div>

                <div>
                    <button class="btn btn-accent btn-outline interview-btn text-[16px] text-bold">Interview</button>
                    <button class="btn btn-secondary btn-outline rejected-btn text-[16px] text-bold">Rejected</button>
                </div>
            </div>

            <div>
                <button class="btn w-[50px] h-[50px] rounded-full delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

        filterSection.appendChild(div);
    }
}
