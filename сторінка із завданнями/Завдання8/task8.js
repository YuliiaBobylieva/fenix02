let button = document.getElementsByClassName('btn-form')[0];
let form = document.getElementsByClassName('forms')[0];
let inp = document.getElementById('in');
let div= document.getElementsByClassName('task')[0];
let container = document.getElementsByClassName('container')[0];
let i = 0;
let inp1 = document.getElementById('in');

//inp.innerHTML = '<input type="text" placeholder="Пиши тут (ну пожалуста)" class="input" required>';
button.addEventListener('click', function(){
	if(i===0){
		i++
	}
	
	if(i === 1){
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
				
		inp1.classList.add('in');
		button.innerHTML = 'Відповісти';
		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		
			console.log(''+a*c*e+''+character1+''+character2+'^2+'+a*d*e+''+character1+'^2'+character2+'-'+b*c*e+''+character2+'^3-'+b*d*e+''+character2+'^2'+character1+'');

		let input = document.getElementsByClassName('input')[0];
		
		
	
		
				
		button.addEventListener('click', function(){

					//i++
						if(input.value.includes (''+a*c*e+''+character1+''+character2+'^2')&&input.value.includes (''+a*d*e+''+character1+'^2'+character2+'')&&input.value.includes('-'+b*c*e+''+character2+'^3')&&input.value.includes('-'+b*d*e+''+character2+'^2'+character1+'')&&input.value.length<=26){
							//container.innerHTML= 'Красава! Молодець<div><a href = "../../підготовка до вступної контрольної роботи/Task2/help2.html" class = "btn-form1">Рішать далі</a></div>';
						i ++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task1/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			},  {once: true});
}

if(i===2){

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
		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		
	
		let ans = Math.round((a)*10)/10;
	
		
				
		button.addEventListener('click', function(){
					//i++
						if(input.value===''+(f+a)+''+character1+'^2'+character2+'+'+(d-b)+''+character3+'+'+(c-e)+''+character3+''+character2+'^2'){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task2/task_2.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
}
	if(i===3){
		//let div= document.getElementsByClassName('task')[0];
		let character1Arr = ['x', 'z', 'h', 'i', 'u', 'l'];
		let character1Num = Math.floor(Math.random()*character1Arr.length);
		let character1 = character1Arr[character1Num];

		let a = Math.floor(Math.random()*4+1);
		let b = Math.floor(Math.random()*4+1); 
		 

		//console.log(y);
		div.innerHTML = 'Виконай перетворення за допомогою формул скороченого множення(степінь позначай "^", замість множення не пиши нічого і одиницю перед буквою пиши):('+a+''+character1+'-'+b+')<sup>2</sup>'
	
		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
					//i++
						if(input.value===''+Math.pow(a, 2)+''+character1+'^2-'+2 *a*b+''+character1+'+'+Math.pow(b, 2)+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task3/task_3.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
	}

	if(i===4){

		let character1Arr = ['x', 'z', 'h', 'i', 'u', 'l'];
		let character1Num = Math.floor(Math.random()*character1Arr.length);
		let character1 = character1Arr[character1Num];

		let a = Math.floor(Math.random()*3+1);
		let b = Math.floor(Math.random()*3+1); 
		 

		
		
		
		div.innerHTML = 'Виконай перетворення за допомогою формул скороченого множення (степінь позначай "^", замість множення не пиши нічого і одиницю перед буквою пиши):('+a+''+character1+'-'+b+')<sup>3</sup>'
	
		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){

			if(input.value===''+Math.pow(a, 3)+''+character1+'^3-'+3 *Math.pow(a, 2)*b+''+character1+'^2+'+3 * a*Math.pow(b, 2)+''+character1+'-'+Math.pow(b, 3)+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task4/task_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});

	}
	if(i===5){

		let character1Arr = ['x', 'z', 'h', 'i', 'u', 'l'];
		let character1Num = Math.floor(Math.random()*character1Arr.length);
		let character1 = character1Arr[character1Num];

		let a = Math.floor(Math.random()*5+1);
		let b = Math.floor(Math.random()*5+1);
		//console.log(S);
				div.innerHTML = 'Виконай перетворення за допомогою формул скороченого множення (степінь позначай "^", замість множення не пиши нічого і одиницю перед буквою пиши):'+Math.pow(a, 2)+''+character1+'<sup>2</sup>-'+Math.pow(b, 2)+''
	
		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
			
			if(input.value==='('+a+'+'+b+')('+a+'-'+b+')'||'('+a+'-'+b+')('+a+'+'+b+')'){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task5/task_5.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
				

	}

	if(i===6){
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
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task6/task_6.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});

	}


	if(i===7){

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
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task7/task_7.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});

	}

	if(i===8){

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
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task8/task_8.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});

	}

	if(i===9){
		container.innerHTML= 'Поздоровляю це кінець підготовки<div><a href = "../../Index_2.html" class = "btn-form1">Перейти на головну сторінку</a><a href = "../../сторінка із завданнями/kr1.html" class = "btn-form1">Пройти контрольну з данної теми</a></div>';
	}

	console.log(i);
});


	
				