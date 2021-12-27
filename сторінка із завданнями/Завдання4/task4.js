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
		
			//console.log(''+a*c*e+''+character1+''+character2+'^2+'+a*d*e+''+character1+'^2'+character2+'-'+b*c*e+''+character2+'^3-'+b*d*e+''+character2+'^2'+character1+'');

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
				console.log(''+(f+a)+''+character1+'^2'+character2+'+'+(d-b)+''+character3+'+'+(c-e)+''+character3+''+character2+'^2');
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
		container.innerHTML= 'Красава! Молодець<div><a href = "../../підготовка до вступної контрольної роботи/Task5/task_5.html" class = "btn-form1">Рішать далі</a></div>';
	}

	console.log(i);
});


	
				