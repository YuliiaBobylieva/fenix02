let button = document.getElementsByClassName('btn-form')[0];
let form = document.getElementsByClassName('forms')[0];
let inp = document.getElementsByClassName('in')[0];
	 //invalue = document.getElementsByTagName('input')[0];
	 let i=0;
	let r1=0;
	
	let div= document.getElementsByClassName('task')[0];
	let arn1 = [1, 2, 3, 4, 5, 6, 7, 8];
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

let arn7 = [...arn6.slice(0,ran6), ...arn6.slice(ran6+1)];
let ran7 = Math.floor(Math.random()*arn7.length);
let n7 = arn7[ran7];

let arn8 = [...arn7.slice(0,ran7), ...arn7.slice(ran7+1)];
let ran8 = Math.floor(Math.random()*arn8.length);
let n8 = arn8[ran8];




let ar = [0, n1 , n2, n3, n4, n5, n6, n7, n8];
	
		button.addEventListener('click', function(){
			this.innerHTML = 'Відповісти';
			if(ar[i] === 0){
				i++
			}
		
			

			
			if(ar[i]=== 1){
				let a = Math.floor(Math.random()*5+1);

					let character1Arr = ['x', 'z', 'h', 'i', 'u', 'l'];
					let character1Num = Math.floor(Math.random()*character1Arr.length);
					let character1 = character1Arr[character1Num];

					let b = Math.floor(Math.random()*5+1);


					let character2Arr = ['a', 'b', 'c', 'd', 'e', 'f'];
					let character2Num = Math.floor(Math.random()*character2Arr.length);
					let character2 = character2Arr[character2Num];

					let c = Math.floor(Math.random()*5+1);
					let d = Math.floor(Math.random()*5+1);
					let e = Math.floor(Math.random()*5+1);
					let f = Math.floor(Math.random()*5+1);
		//console.log(answer);
		div.innerHTML = 'Розкрий дужки. Степінь позначай "^", замість множення не пиши нічого і одиницю перед буквою пиши(От токо нить не нада ок? Просто роби як на відео):('+a+''+character1+'-'+b+''+character2+')('+c+''+character2+'+'+d+''+character1+')'+e+''+character2+'';
				
		
		button.innerHTML = 'Відповісти';
		inp.innerHTML = '<input type="text"  class="input" required>';
		
			console.log(''+a*c*e+''+character1+''+character2+'^2+'+a*d*e+''+character1+'^2'+character2+'-'+b*c*e+''+character2+'^3-'+b*d*e+''+character2+'^2'+character1+'');

		let input = document.getElementsByClassName('input')[0];
		
		
	
		
				
		button.addEventListener('click', function(){

					//i++
						if(input.value.includes (''+a*c*e+''+character1+''+character2+'^2')&&input.value.includes (''+a*d*e+''+character1+'^2'+character2+'')&&input.value.includes('-'+b*c*e+''+character2+'^3')&&input.value.includes('-'+b*d*e+''+character2+'^2'+character1+'')&&input.value.length<=26){
							//container.innerHTML= 'Красава! Молодець<div><a href = "../../підготовка до вступної контрольної роботи/Task2/help2.html" class = "btn-form1">Рішать далі</a></div>';
						i ++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			},  {once: true});
			}
			else if(ar[i]=== 2){
				let n1arr = [1, 2];
	let n1n = Math.floor(Math.random()*n1arr.length);
	let n1 = n1arr[n1n];


		let a = Math.floor(Math.random()*4+1);
		let b = Math.floor(Math.random()*4+1); 
		let c = Math.floor(Math.random()*4+5);
		let d = Math.floor(Math.random()*4+5);
		let e = Math.floor(Math.random()*4+1); 
		let f = Math.floor(Math.random()*4+1); 

		let character1Arr = ['x', 'z', 'h', 'i', 'u', 'l'];
		let character1Num = Math.floor(Math.random()*character1Arr.length);
		let character1 = character1Arr[character1Num];

		let character2Arr = ['a', 'b', 'c', 'd', 'e', 'f'];
		let character2Num = Math.floor(Math.random()*character2Arr.length);
		let character2 = character2Arr[character2Num];

		let character3Arr = ['t', 'y', 'p', 'm', 'n', 'r'];
		let character3Num = Math.floor(Math.random()*character3Arr.length);
		let character3 = character3Arr[character3Num];
		//console.log(answer);
		div.innerHTML = 'Зведи подібні доданки. Степінь позначай "^", замість множення не пиши нічого і одиницю перед буквою пиши (Якшо не знаєш шо це, подивись відос):'+a+''+character1+'<sup>2</sup>'+character2+'-'+b+''+character3+'+'+c+''+character3+''+character2+'<sup>2</sup>+'+d+''+character3+'-'+e+''+character2+'<sup>2</sup>'+character3+'+'+f+''+character2+''+character1+'<sup>2</sup>'
				//console.log(''+(f+a)+''+character1+'^2'+character2+'+'+(d-b)+''+character3+'+'+(c-e)+''+character3+''+character2+'^2');
		
		inp.innerHTML = '<input type="text"  class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		
	
		let ans = Math.round((a)*10)/10;
	
		
				
		button.addEventListener('click', function(){
					//i++
						if(input.value===''+(f+a)+''+character1+'^2'+character2+'+'+(d-b)+''+character3+'+'+(c-e)+''+character3+''+character2+'^2'){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task2/help2.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
				
			}
			else if(ar[i] === 3){
				let character1Arr = ['x', 'z', 'h', 'i', 'u', 'l'];
		let character1Num = Math.floor(Math.random()*character1Arr.length);
		let character1 = character1Arr[character1Num];

		let a = Math.floor(Math.random()*4+1);
		let b = Math.floor(Math.random()*4+1); 
		 

		//console.log(y);
		div.innerHTML = 'Виконай перетворення за допомогою формул скороченого множення(степінь позначай "^", замість множення не пиши нічого і одиницю перед буквою пиши):('+a+''+character1+'-'+b+')<sup>2</sup>'
	

		inp.innerHTML = '<input type="text"  class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
					//i++
						if(input.value===''+Math.pow(a, 2)+''+character1+'^2-'+2 *a*b+''+character1+'+'+Math.pow(b, 2)+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task3/help3.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
				
	
			}
			else if(ar[i] === 4){
				let character1Arr = ['x', 'z', 'h', 'i', 'u', 'l'];
		let character1Num = Math.floor(Math.random()*character1Arr.length);
		let character1 = character1Arr[character1Num];

		let a = Math.floor(Math.random()*3+1);
		let b = Math.floor(Math.random()*3+1); 
		 

		
		
		
		div.innerHTML = 'Виконай перетворення за допомогою формул скороченого множення (степінь позначай "^", замість множення не пиши нічого і одиницю перед буквою пиши):('+a+''+character1+'-'+b+')<sup>3</sup>'
	
		

		inp.innerHTML = '<input type="text"  class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){

			if(input.value===''+Math.pow(a, 3)+''+character1+'^3-'+3 *Math.pow(a, 2)*b+''+character1+'^2+'+3 * a*Math.pow(b, 2)+''+character1+'-'+Math.pow(b, 3)+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task4/help4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
			}
			else if(ar[i] === 5){
				let character1Arr = ['x', 'z', 'h', 'i', 'u', 'l'];
		let character1Num = Math.floor(Math.random()*character1Arr.length);
		let character1 = character1Arr[character1Num];

		let a = Math.floor(Math.random()*5+1);
		let b = Math.floor(Math.random()*5+1);
		//console.log(S);
				div.innerHTML = 'Виконай перетворення за допомогою формул скороченого множення (степінь позначай "^", замість множення не пиши нічого і одиницю перед буквою пиши):'+Math.pow(a, 2)+''+character1+'<sup>2</sup>-'+Math.pow(b, 2)+''
	
		

		inp.innerHTML = '<input type="text"  class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
			
			if(input.value==='('+a+'+'+b+')('+a+'-'+b+')'||'('+a+'-'+b+')('+a+'+'+b+')'){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task5/help5.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
				
			}
			else if(ar[i]=== 6){

					inp.innerHTML = '<table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td ><input type="text" placeholder="чисельник писати сюди " class="input" required><hr color ="white"></td></tr><tr><td><input type="text" placeholder="знаменник писати сюди" class="input" required></td></tr></tbody></table>';
		//inp.innerHTML = '<input type="text" placeholder="x>" class="input" required><input type="text" placeholder="x<" class="input" required>';
		let character1Arr = ['q', 'w', 'e', 'r', 't', 'y'];
				let character1Num = Math.floor(Math.random()*character1Arr.length);
				let a = character1Arr[character1Num];

				let character2Arr = ['u', 'i', 'o', 'p', 'a', 's'];
				let character2Num = Math.floor(Math.random()*character2Arr.length);
				let b = character2Arr[character2Num];

				let character3Arr = ['d', 'f', 'g', 'h', 'j', 'k'];
				let character3Num = Math.floor(Math.random()*character3Arr.length);
				let d = character3Arr[character3Num];

				let character4Arr = ['l', 'z', 'x', 'c', 'v', 'b'];
				let character4Num = Math.floor(Math.random()*character4Arr.length);
				let e = character4Arr[character4Num];

				let character5Arr = ['n', 'm'];
				let character5Num = Math.floor(Math.random()*character5Arr.length);
				let f = character5Arr[character5Num];

				let c = Math.floor(Math.random()*5+1);

				let g = Math.floor(Math.random()*5+1);
			let input1 = document.getElementsByClassName('input')[0];
			let input2 = document.getElementsByClassName('input')[1];
	div.innerHTML = 'Перетвори вираз, відповідно до правил віднімання (додавання) дробів, при цьому розкривши дужки (степінь позначай "^", замість множення не пиши нічого і одиницю перед буквою пиши): <table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'+'+b+'<hr color ="white"></td></tr><tr><td>'+c+'</td></tr></tbody></table><span id="sp">-</span><table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+d+'-'+e+'<hr color ="white"></td></tr><tr><td>'+f+'-'+g+'</td></tr></tbody></table>'
				
	//console.log(x1);
	//console.log(x2);
		button.addEventListener('click', function(){
			
			if(input2.value===''+c+''+f+'-'+c*g+''&& input1.value===''+a+''+f+'-'+g+''+a+'+'+b+''+f+'-'+g+''+b+'-'+c+''+d+'+'+c+''+e+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task6/help6.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
				
				
			}
			else if(ar[i]===7){
				inp.innerHTML = '<table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td ><input type="text" placeholder="чисельник писати сюди " class="input" required><hr color ="white"></td></tr><tr><td><input type="text" placeholder="знаменник писати сюди" class="input" required></td></tr></tbody></table>';
		//inp.innerHTML = '<input type="text" placeholder="x>" class="input" required><input type="text" placeholder="x<" class="input" required>';
		let character1Arr = ['q', 'w', 'e', 'r', 't', 'y'];
				let character1Num = Math.floor(Math.random()*character1Arr.length);
				let a = character1Arr[character1Num];

				let character2Arr = ['u', 'i', 'o', 'p', 'a', 's'];
				let character2Num = Math.floor(Math.random()*character2Arr.length);
				let b = character2Arr[character2Num];

				let character3Arr = ['d', 'f', 'g', 'h', 'j', 'k'];
				let character3Num = Math.floor(Math.random()*character3Arr.length);
				let d = character3Arr[character3Num];

				let character4Arr = ['l', 'z', 'x', 'c', 'v', 'b'];
				let character4Num = Math.floor(Math.random()*character4Arr.length);
				let e = character4Arr[character4Num];

				let character5Arr = ['n', 'm'];
				let character5Num = Math.floor(Math.random()*character5Arr.length);
				let f = character5Arr[character5Num];

				let c = Math.floor(Math.random()*5+1);

				let g = Math.floor(Math.random()*5+1);
			let input1 = document.getElementsByClassName('input')[0];
			let input2 = document.getElementsByClassName('input')[1];
	div.innerHTML = 'Перетвори вираз, відповідно до правил ділення (множення) дробів, при цьому розкривши дужки (степінь позначай "^", замість множення не пиши нічого і одиницю перед буквою пиши): <table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'+'+b+'<hr color ="white"></td></tr><tr><td>'+c+'</td></tr></tbody></table><span id="sp">:</span><table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+d+'-'+e+'<hr color ="white"></td></tr><tr><td>'+f+'-'+g+'</td></tr></tbody></table>'
						
	//console.log(x1);
	//console.log(x2);
		button.addEventListener('click', function(){
			
			if(input1.value===''+a+''+f+'-'+g+''+a+'+'+b+''+f+'-'+g+''+b+''&& input2.value===''+c+''+d+'-'+c+''+e+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task6/help6.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
			}


			else if(ar[i]===8){
				inp.innerHTML = '<input type="text"  class="input" required>';
		//inp.innerHTML = '<input type="text" placeholder="x>" class="input" required><input type="text" placeholder="x<" class="input" required>';
		let c = Math.floor(Math.random()*5+1);
		let e = Math.floor(Math.random()*5+1);
		let b = Math.floor(Math.random()*5+1);
		let d = Math.floor(Math.random()*5+1);
		
			let botar = [1, 2, 4, 5, 10, 20];
			let botnum = Math.floor(Math.random()*botar.length);
		let bot = botar[botnum]; 
		 	let a = bot + e*c;

		 	let  x = (e*d+b)/(a-e*c);
			let input = document.getElementsByClassName('input')[0];
			
	div.innerHTML = 'Розв`яжи рівняння:<table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'x-'+b+'<hr color ="white"></td></tr><tr><td>'+c+'x+'+d+'</td></tr></tbody></table>= '+e+'';
					
	//console.log(x1);
	//console.log(x2);
		button.addEventListener('click', function(){
			
			if(input.value===''+x+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task6/help6.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});

			}




			else if(i=== 9){
				let a= Math.floor(Math.random()*6+4);
		let arb = [1, 2, 4];
		let ranb = Math.floor(Math.random()*arb.length);
		let b = arb[ranb];
		let c = Math.floor(Math.random()*2+6);
		let S = (c+b)*(a*c/b+a)/2;
		//console.log(S);
				div.innerHTML= '<p>Красава!!! Якшо ти читаєш це повідомлення, то ти або зламав сайт або розв`язав всі задачі цієї контрольної"</p>';
				let input = document.getElementsByClassName('input')[0];
				form.innerHTML = '';
				
				
				
			}
			//console.log(ar[i]);
			//console.log(ar[i]);
			console.log(i);
		});
