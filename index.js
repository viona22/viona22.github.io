var i = 0;
var myInterval;
    document.addEventListener('DOMContentLoaded', () => {
        
        const button = document.getElementById('randomAgentButton');
    
        button.addEventListener('click', () => {
            clearInterval(myInterval);
            i = 0;
            myInterval = setInterval(getRandomAgent, 170);
         });
   });

function getRandomAgent(){
    const agents = document.querySelectorAll('.agents');
    const randomIndex = Math.floor(Math.random() * agents.length);
    const randomAgent = agents[randomIndex];

    agents.forEach(agent => {
        if (agent === randomAgent) {
            agent.style.opacity = '1'; 
            agent.parentElement.style.boxShadow = '0 0 5px 5px #502956'; 
            }
            else {
                agent.style.opacity = '0.3'; 
                agent.parentElement.style.boxShadow = 'none'; 
            }
        });
    i++;
    if(i > 10)
        clearInterval(myInterval);
}

var i = 0;
var myInterval;

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('randomAgentButton');
    const compButton = document.getElementById('randomCompButton');

    button.addEventListener('click', () => {
        clearInterval(myInterval);
        i = 0;
        myInterval = setInterval(getRandomAgent, 170);
    });

    compButton.addEventListener('click', () => {
        clearInterval(myInterval);
        i = 0;
        myInterval = setInterval(getRandomFiveAgents, 170);
    });
});

function getRandomFiveAgents() {
    const agents = document.querySelectorAll('.agents');
    const randomAgents = [];

    agents.forEach(agent => {
        agent.style.opacity = '0.3';
        agent.parentElement.style.boxShadow = 'none';
    });

    while (randomAgents.length < 5) {
        const randomIndex = Math.floor(Math.random() * agents.length);
        const randomAgent = agents[randomIndex];
        if (!randomAgents.includes(randomAgent)) {
            randomAgents.push(randomAgent);
        }
    }

    randomAgents.forEach(agent => {
        agent.style.opacity = '1';
        agent.parentElement.style.boxShadow = '0 0 6px 6px #502956';
    });

    i++;
    if (i > 10) {
        clearInterval(myInterval);
    }
}

