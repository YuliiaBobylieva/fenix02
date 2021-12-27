let button = document.getElementsByClassName('btn-form')[0];
let form = document.getElementsByClassName('forms')[0];
let inp = document.getElementsByClassName('in')[0];
	 //invalue = document.getElementsByTagName('input')[0];
	 let i=0;
	let r1=0;
	
	let div= document.getElementsByClassName('task')[0];
	let arn1 = [1, 2, 3, 4, 5, 6];
let ran1 = Math.floor(Math.random()*arn1.length);
let n1 =arn1[ran1];
//alert('n1='+n1+'');
let arn2 = [...arn1.slice(0,ran1), ...arn1.slice(ran1+1)];
let ran2 = Math.floor(Math.random()*arn2.length);
let n2 = arn2[ran2];
//alert('n1='+n1+', n2='+n2+'');
let arn3 = [...arn2.slice(0,ran2), ...arn2.slice(ran2+1)];
let ran3 = Math.floor(Math.random()*arn3.length);
let n3 = arn3[ran3];
//alert('n1='+n1+', n2='+n2+', n3='+n3+'');
let arn4 = [...arn3.slice(0,ran3), ...arn3.slice(ran3+1)];
let ran4 = Math.floor(Math.random()*arn4.length);
let n4 = arn4[ran4];

let arn5 = [...arn4.slice(0,ran4), ...arn4.slice(ran4+1)];
let ran5 = Math.floor(Math.random()*arn5.length);
let n5 = arn5[ran5];

let arn6 = [...arn5.slice(0,ran5), ...arn5.slice(ran5+1)];
let ran6 = Math.floor(Math.random()*arn6.length);
let n6 = arn6[ran6];

/*let arn7 = [...arn6.slice(0,ran6), ...arn6.slice(ran6+1)];
let ran7 = Math.floor(Math.random()*arn7.length);
let n7 = arn7[ran7];

let arn8 = [...arn7.slice(0,ran7), ...arn7.slice(ran7+1)];
let ran8 = Math.floor(Math.random()*arn8.length);
let n8 = arn8[ran8];*/




let ar = [0, n1 , n2, n3, n4, n5, n6];
	
		button.addEventListener('click', function(){
			this.innerHTML = 'Відповісти';
			if(ar[i] === 0){
				i++
			}
		
			

			
			if(ar[i]=== 1){
				let arx1 = [ 1, 2, 4, 5, 6, 7];
				let numx1 = Math.floor(Math.random()*arx1.length);
				let x1 = arx1[numx1];

					let arx2 = [10, 12, 15, 20];
				let numx2 = Math.floor(Math.random()*arx2.length);
				let x2 = arx2[numx2];


				let ard = [ 1, 2, 4, 5, 10, 20];
				let numd = Math.floor(Math.random()*ard.length);
				let d = ard[numd];
				
				let arb = [ 1, 2, 4, 5, 10, 20];
				let numb = Math.floor(Math.random()*arb.length);
				let b = arb[numb];

				let c = (d*x1*x2)/b;

				let a = d*(x1+x2)-c-d*b;

				
				let n = 0;

				for (var k = x1; k <= x2; k++) {
					n+=k
				}

		//console.log(answer);
		div.innerHTML = 'Розв`яжіть нерівність: <table border="0", cellpadding="0", cellspacing="0" class="table1"><tbody><tr><td >'+a+'<hr color ="white"></td></tr><tr><td>x-'+b+'</td></tr></tbody></table><span class="span11">+</span><table class="table2" border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+c+'<hr color ="white"></td></tr><tr><td>x</td></tr></tbody></table><span class="span12">≥</span><span class="span13">'+d+'</span> У відповіді запишіть суму всіх цілих розв`язків';	
			//console.log(''+x1+', '+x2+'');
		
		//inp1.classList.add('in');
		button.innerHTML = 'Відповісти';
		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		
			

		let input = document.getElementsByClassName('input')[0];
		
		
	
		
				
		button.addEventListener('click', function(){

					//i++
						if(input.value === ''+n+''){
							//container.innerHTML= 'Красава! Молодець<div><a href = "../../підготовка до вступної контрольної роботи/Task2/help2.html" class = "btn-form1">Рішать далі</a></div>';
						i ++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Нерівності/Task1/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			},  {once: true});
			}
			else if(ar[i]=== 2){
				let x = Math.floor(Math.random()*9+1);
				
				let ara = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
				let numa = Math.floor(Math.random()*ara.length);
				let a = ara[numa];
				
					let arb = [ 1, 2, 4, 5, 10, 20];
				let numb = Math.floor(Math.random()*arb.length);
				let b = arb[numb];

					let c = b*x;
		//console.log(answer);
		if(a>0){
					div.innerHTML = 'Розв`яжіть нерівність: <table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'<hr color ="white"></td></tr><tr><td>'+b+'x-'+c+'</td></tr></tbody></table><span class="span14">>0</span>У відповідь запиши найменше значення, до якого наближається "x"';

				}
				else if(a<0){
					div.innerHTML = 'Розв`яжіть нерівність: <table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'<hr color ="white"></td></tr><tr><td>'+b+'x-'+c+'</td></tr></tbody></table><span class="span14"><0</span>У відповідь запиши найбільше значення, до якого наближається "x"';

				}
		//inp1.classList.add('in');

		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByTagName('input')[0];
				
	
		
		
				
		button.addEventListener('click', function(){
					//i++
						if(input.value===''+x+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Нерівності/Task2/task_2.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
				
			}
			else if(ar[i] === 3){
				let e = Math.floor(Math.random()*5+1);


				let a = Math.floor(Math.random()*5+1);

				let ard = [1, 2, 4, 5];
				let numd = Math.floor(Math.random()*ard.length);
				let d = ard[numd];

				let x1 = Math.floor(Math.random()*9-11);
				let x2 = Math.floor(Math.random()*5+1);
	
					let c = -x1*x2*a*e/d;
		
				let f = Math.floor(Math.random()*5+1);

				let b= ((x1+x2)*a*e+a*f)/d;
		 

		//console.log(y);
		div.innerHTML = 'Розв`яжіть нерівність: <table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'x<hr color ="white"></td></tr><tr><td>'+b+'x+'+c+'</td></tr></tbody></table><span class="span15"><</span><table class="table3" border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+d+'<hr color ="white"></td></tr><tr><td>'+e+'x+'+f+'</td></tr></tbody></table>';

		//inp1.classList.add('in');

		inp.innerHTML = '(<input type="text" placeholder="Відповідь пиши тута" class="input" required>;<input type="text" placeholder="Відповідь пиши тута" class="input" required>)';
		let input1 = document.getElementsByClassName('input')[0];
		let input2 = document.getElementsByClassName('input')[1];
		button.addEventListener('click', function(){
					//i++
						if(input1.value===''+x1+''&&input2.value===''+x2+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Нерівності/Task3/task_3.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
				
	
			}
			else if(ar[i] === 4){
				const n = 2;
				let a = Math.floor(Math.random()*5+1);
				let b =  Math.floor(Math.random()*5+1);
				let x = Math.floor(Math.random()*5+5);
				
				let c = a-b*x;
		 

		
		
		
		div.innerHTML = 'Розв`яжіть нерівність: '+a+'-'+b+'x≥'+c+' У відповідь запиши найбільше значення "х"';

		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){

			if(input.value===''+x+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Нерівності/Task4task_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
			}
			else if(ar[i] === 5){
				let arc = [1, 2, 4, 5];
				let numc = Math.floor(Math.random()*arc.length);
				let c = arc[numc];


				let a = Math.floor(Math.random()*10+11);
				let b = Math.floor(Math.random()*5+5);
				let d = Math.floor(Math.random()*10+11);
			
				let x1 = -(d-b)/c;
				let x2 = -(a-b)/c;
				div.innerHTML = 'Знайдіть усі значення "х", при яких значення виразу "'+b+'-'+c+'x" належить проміжку ['+a+';'+d+']';
		

		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>≤x≤<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input1 = document.getElementsByClassName('input')[0];
		let input2 = document.getElementsByClassName('input')[1];
		button.addEventListener('click', function(){
			
			if(input1.value===''+x1+''&& input2.value===''+x2+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Нерівності/Task5/task_5.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
				
			}
			else if(ar[i]=== 6){

		let x = Math.floor(Math.random()*30+1);
				let b = Math.floor(Math.random()*30+1);
				

				let a=b*x;
		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
			let input = document.getElementsByClassName('input')[0];
			
	div.innerHTML = 'Розв`яжіть нерівність '+a+'x≥'+b+'x<sup>2</sup> У відповідь запиши найбільше значення';	
	//console.log(x1);
	//console.log(x2);
		button.addEventListener('click', function(){
			
			if(input.value===''+x+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Нерівності/Task6/task_6.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
				
				
			}

			else if(i===7){
				
					let ara1 = [ 1, 2, 4, 5];
				let numa1 = Math.floor(Math.random()*ara1.length);
				let a1 = ara1[numa1];


					let ara2 = [ 1, 2, 4, 5];
				let numa2 = Math.floor(Math.random()*ara2.length);
				let a2 = ara2[numa2];



				let x1 = Math.floor(Math.random()*5+1);
				
				let x2 = Math.floor(Math.random()*5+6);
				let x3 = Math.floor(Math.random()*5-8);
				let x4 = Math.floor(Math.random()*5+1);
				


				let b1 = -(x1+x2)*a1;

				let c1 = x1*x2*a1;
				

				let b2 = -(x3+x4)*a2;

				let c2 = x3*x4*a2;

				

				let ar1 = [];
					for (let i = x1; i <= x2; i++) {
    					ar1.push(i);
					}

				let ar2 = [];
					for (let i = -10; i <= x1; i++) {
    					ar2.push(i);
					}	

				let ar3 = [];
					for (let i = x2; i <= 20; i++) {
    					ar3.push(i);
					}		


				let ar4 = [...ar2, ...ar3];
				
				let ar11 = [];
					for (let i = x3; i <= x4; i++) {
    					ar11.push(i);
					}

				let ar21 = [];
					for (let i = -10; i <= x3; i++) {
    					ar21.push(i);
					}

				let ar31 = [];
					for (let i = x4; i <= 20; i++) {
    					ar31.push(i);
					}

				let ar41 = [...ar21, ...ar31];

				

				let ar5 = ar41.filter(x=> ar1.includes(x));

				let ar6 = ar4.filter(x=> ar11.includes(x));

				let ar7 = [...ar5,...ar6];

				Math.min(...ar7);

				inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';

				button.addEventListener('click', function(){
			
			if(input.value===''+Math.max(...ar7)+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Нерівності/Task7/task_7.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});

			}


else if(i===8){
				
				let ara = [ 1, 2, 4, 5];
			let numa = Math.floor(Math.random()*ara.length);
			let a = ara[numa];

			let b = Math.floor(Math.random()*5+1);

			let c = Math.floor(Math.random()*5+6);
			
		
			let x1= (c-b)/a;

			let x2 = (-c-b)/a;



			div.innerHTML = 'Розв`яжи нерівність: ('+a+'x+'+b+')<sup>2</sup>≤'+Math.pow(c, 2)+' У відповідь запиши найменший розв`язок';

			inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';

				button.addEventListener('click', function(){
			
			if(input.value===''+x2+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Нерівності/Task7/task_7.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
			}


			else if(i===9){
				
					div.innerHTML= '<p>Красава!!! Якшо ти читаєш це повідомлення, то ти або зламав сайт або розв`язав всі задачі цієї контрольної"</p>';
					inp.innerHTML = '';
			}


			
			//console.log(ar[i]);
			//console.log(ar[i]);
			console.log(i);
		});
