let jeopardyTable = document.querySelector('#jeopardyTable');
let categoryData = document.querySelector('#categoryData');
let questionData = document.querySelector('#questionData');
let answerLabel = document.querySelector('#answerLabel');
let userInput = document.querySelector('#userInput');
let answerResponse = document.querySelector('#answerResponse');
let submit = document.querySelector('#submit');
let scoreMuted = document.querySelector('#scoreMuted')
let score = 0;
let arr = [];
let random200 = {};
let random300 = {};
let random400 = {};
let random500 = {};
let random900 = {};


let readJeopardyData = async () => {
    let rawJeopardyData = await fetch('jeopardy.json');
    let data = await rawJeopardyData.json()
    let groupedData = _.groupBy(data,'value');
    console.log(groupedData);

/*        2 0 0        */
for(let i=0;i<btn200.length;i++){
    btn200[i].addEventListener('click', function(event){
        event.preventDefault();
        let invisible = event.target;
        invisible.style.opacity = '0';
        //if statement to prevent more questions on clicking black box?
        random200 = groupedData.$200[Math.round(Math.random() * groupedData.$200.length)];
        questionData.innerHTML = `${random200.question}`
        categoryData.innerHTML = `${random200.category}`
        console.log('answer: ' + random200.answer)
    
        })
        
    }
    submit.addEventListener('click',(event)=>{
        event.preventDefault();
        console.log('event test')
        
    if(userInput.value.toLowerCase() === random200.answer.toLowerCase()){
        score += parseInt(random200.value.substr(1));
        console.log(random200.value);
        answerResponse.innerText = 'That is the correct answer!'
        scoreMuted.innerText = `$${score}`;
        userInput.value = '';
    }else{
        answerResponse.innerText= `Incorrect. The answer is ${random200.answer}`
    }       
    })

    /*        3 0 0        */
for(let i=0;i<btn300.length;i++){
    btn300[i].addEventListener('click', function(event){
        let invisible = event.target;
        invisible.style.opacity = '0';
        random300 = groupedData.$300[Math.round(Math.random() * groupedData.$300.length)];
        questionData.innerHTML = `${random300.question}`
        categoryData.innerHTML = `${random300.category}`
        console.log('answer: ' + random300.answer)

        })
    }

    submit.addEventListener('click',(event)=>{
        event.preventDefault();
        console.log('event test')
        
    if(userInput.value.toLowerCase() === random300.answer.toLowerCase()){
        score += parseInt(random300.value.substr(1));
        console.log(random300.value);
        answerResponse.innerText = 'That is the correct answer!'
        scoreMuted.innerText = `$${score}`;
        userInput.value = '';
    }else{
        answerResponse.innerText= `Incorrect. The answer is ${random300.answer}`
    }       
    })

    /*        4 0 0        */
for(let i=0;i<btn400.length;i++){
    btn400[i].addEventListener('click', function(event){
        let invisible = event.target;
        invisible.style.opacity = '0';
        random400 = groupedData.$400[Math.round(Math.random() * groupedData.$400.length)];
        questionData.innerHTML = `${random400.question}`
        categoryData.innerHTML = `${random400.category}`
        console.log('answer: ' + random400.answer)
        })
    }
    submit.addEventListener('click',(event)=>{
        event.preventDefault();
        console.log('event test')
        
    if(userInput.value.toLowerCase() === random400.answer.toLowerCase()){
        score += parseInt(random400.value.substr(1));
        answerResponse.innerText = 'That is the correct answer!'
        scoreMuted.innerText = `$${score}`;
        userInput.value = '';
    }else{
        answerResponse.innerText= `Incorrect. The answer is ${random400.answer}`
    }       
    })

    /*        5 0 0        */
for(let i=0;i<btn500.length;i++){
    btn500[i].addEventListener('click', function(event){
        let invisible = event.target;
        invisible.style.opacity = '0';
        random500 = groupedData.$500[Math.round(Math.random() * groupedData.$500.length)];
        questionData.innerHTML = `${random500.question}`
        categoryData.innerHTML = `${random500.category}`
        console.log('answer: ' + random500.answer)
        })
    }
    
    submit.addEventListener('click',(event)=>{
        event.preventDefault();
        console.log('event test')
        
    if(userInput.value.toLowerCase() === random500.answer.toLowerCase()){
        score += parseInt(random500.value.substr(1));
        answerResponse.innerText = 'That is the correct answer!'
        scoreMuted.innerText = `$${score}`;
        userInput.value = '';
    }else{
        answerResponse.innerText= `Incorrect. The answer is ${random500.answer}`
    }       
    })

    /*        9 0 0       */
for(let i=0;i<btn900.length;i++){
    btn900[i].addEventListener('click', function(event){
        let invisible = event.target;
        invisible.style.opacity = '0';
        random900 = groupedData.$900[Math.round(Math.random() * groupedData.$900.length)];
        questionData.innerHTML = `${random900.question}`
        categoryData.innerHTML = `${random900.category}`
        console.log('answer: ' + random900.answer)
        })
    }
    submit.addEventListener('click',(event)=>{
        event.preventDefault();
        console.log('event test')
        
    if(userInput.value.toLowerCase() === random900.answer.toLowerCase()){
        score += parseInt(random900.value.substr(1));
        answerResponse.innerText = 'That is the correct answer!'
        scoreMuted.innerText = `$${score}`;
        userInput.value = '';
    }else{
        answerResponse.innerText= `Incorrect. The answer is ${random900.answer}`
    }       
    })
}

readJeopardyData();

let btn1 = document.createElement('btn1');
    btn1.id = 'btn1';
    btn1.className = 'btn200'
    btn1.innerHTML = '$200';
    btn1.style.background = 'blue';
    jeopardyTable.append(btn1)
    

    let btn2 = document.createElement('btn2');
    btn2.id = 'btn2';
    btn2.className = 'btn200'
    btn2.innerHTML = '$200';
    btn2.style.background = 'blue';
    jeopardyTable.append(btn2)

    let btn3 = document.createElement('btn3');
    btn3.id = 'btn3';
    btn3.className = 'btn200'
    btn3.innerHTML = '$200';
    btn3.style.background = 'blue';
    jeopardyTable.append(btn3)

    let btn4 = document.createElement('btn4');
    btn4.id = 'btn4';
    btn4.className = 'btn200'
    btn4.innerHTML = '$200';
    btn4.style.background = 'blue';
    jeopardyTable.append(btn4)

    let btn5 = document.createElement('btn5');
    btn5.id = 'btn5';
    btn5.className = 'btn200'
    btn5.innerHTML = '$200';
    btn5.style.background = 'blue';
    jeopardyTable.append(btn5)

    let btn6 = document.createElement('btn6');
    btn6.id = 'btn6';
    btn6.className = 'btn300'
    btn6.innerHTML = '$300';
    btn6.style.background = 'blue';
    jeopardyTable.append(btn6)

    let btn7 = document.createElement('btn7');
    btn7.id = 'btn7';
    btn7.className = 'btn300'
    btn7.innerHTML = '$300';
    btn7.style.background = 'blue';
    jeopardyTable.append(btn7)

    let btn8 = document.createElement('btn8');
    btn8.id = 'btn8';
    btn8.className = 'btn300'
    btn8.innerHTML = '$300';
    btn8.style.background = 'blue';
    jeopardyTable.append(btn8)

    let btn9 = document.createElement('btn1');
    btn9.id = 'btn9';
    btn9.className = 'btn300'
    btn9.innerHTML = '$300';
    btn9.style.background = 'blue';
    jeopardyTable.append(btn9)

    let btn10 = document.createElement('btn10');
    btn10.id = 'btn10'
    btn10.className = 'btn300';
    btn10.innerHTML = '$300';
    btn10.style.background = 'blue';
    jeopardyTable.append(btn10)

    let btn11 = document.createElement('btn11');
    btn11.id = 'btn11'
    btn11.className = 'btn400';
    btn11.innerHTML = '$400';
    btn11.style.background = 'blue';
    jeopardyTable.append(btn11)

    let btn12 = document.createElement('btn12');
    btn12.id = 'btn12';
    btn12.className = 'btn400';
    btn12.innerHTML = '$400';
    btn12.style.background = 'blue';
    jeopardyTable.append(btn12)

    let btn13 = document.createElement('btn13');
    btn13.id = 'btn13';
    btn13.className = 'btn400';
    btn13.innerHTML = '$400';
    btn13.style.background = 'blue';
    jeopardyTable.append(btn13)

    let btn14 = document.createElement('btn14');
    btn14.id = 'btn14';
    btn14.className = 'btn400';
    btn14.innerHTML = '$400';
    btn14.style.background = 'blue';
    jeopardyTable.append(btn14)

    let btn15 = document.createElement('btn15');
    btn15.id = 'btn15';
    btn15.className = 'btn400';
    btn15.innerHTML = '$400';
    btn15.style.background = 'blue';
    jeopardyTable.append(btn15)

    let btn16 = document.createElement('btn16');
    btn16.id = 'btn16';
    btn16.className = 'btn500';
    btn16.innerHTML = '$500';
    btn16.style.background = 'blue';
    jeopardyTable.append(btn16)

    let btn17 = document.createElement('btn17');
    btn17.id = 'btn17';
    btn17.className = 'btn500';
    btn17.innerHTML = '$500';
    btn17.style.background = 'blue';
    jeopardyTable.append(btn17)

    let btn18 = document.createElement('btn18');
    btn18.id = 'btn18';
    btn18.className = 'btn500';
    btn18.innerHTML = '$500';
    btn18.style.background = 'blue';
    jeopardyTable.append(btn18)

    let btn19 = document.createElement('btn19');
    btn19.id = 'btn19';
    btn19.className = 'btn500';
    btn19.innerHTML = '$500';
    btn19.style.background = 'blue';
    jeopardyTable.append(btn19)

    let btn20 = document.createElement('btn20');
    btn20.id = 'btn20';
    btn20.className = 'btn500';
    btn20.innerHTML = '$500';
    btn20.style.background = 'blue';
    jeopardyTable.append(btn20)

    let btn21 = document.createElement('btn21');
    btn21.id = 'btn21';
    btn21.className = 'btn900';
    btn21.innerHTML = '$900';
    btn21.style.background = 'blue';
    jeopardyTable.append(btn21)

    let btn22 = document.createElement('btn22');
    btn22.id = 'btn22';
    btn22.className = 'btn900';
    btn22.innerHTML = '$900';
    btn22.style.background = 'blue';
    jeopardyTable.append(btn22)

    let btn23 = document.createElement('btn23');
    btn23.id = 'btn23';
    btn23.className = 'btn900';
    btn23.innerHTML = '$900';
    btn23.style.background = 'blue';
    jeopardyTable.append(btn23)

    let btn24 = document.createElement('btn24');
    btn24.id = 'btn24';
    btn24.className = 'btn900';
    btn24.innerHTML = '$900';
    btn24.style.background = 'blue';
    jeopardyTable.append(btn24)

    let btn25 = document.createElement('btn25');
    btn25.id = 'btn25';
    btn25.className = 'btn900';
    btn25.innerHTML = '$900';
    btn25.style.background = 'blue';
    jeopardyTable.append(btn25)


let btn200 = document.querySelectorAll('#jeopardyTable .btn200');
let btn300 = document.querySelectorAll('#jeopardyTable .btn300 ');
let btn400 = document.querySelectorAll('#jeopardyTable .btn400 ');
let btn500 = document.querySelectorAll('#jeopardyTable .btn500');
let btn900 = document.querySelectorAll('#jeopardyTable .btn900');

