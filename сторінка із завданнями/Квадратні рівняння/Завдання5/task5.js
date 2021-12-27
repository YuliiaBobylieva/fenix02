let button = document.getElementsByClassName('btn-form')[0];
let form = document.getElementsByClassName('forms')[0];
let inp = document.getElementById('in');
let div= document.getElementsByClassName('task')[0];
let container = document.getElementsByClassName('container')[0];
let i =0;
let inp1 = document.getElementById('in');

//inp.innerHTML = '<input type="text" placeholder="Пиши тут (ну пожалуста)" class="input" required>';
button.addEventListener('click', function(){
	if(i===0){
		i++
	}
	
	if(i === 1){
		button.innerHTML = 'Відповісти';
		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
	let x1 = Math.floor(Math.random()*5+1);
				let x2 = Math.floor(Math.random()*5+1);

					

					let b = -(x1+x2);
					let c = x1*x2;
		//console.log(answer);
			
		
		div.innerHTML= 'Обчисліть добуток коренів рівняння: x<sup>2</sup>'+b+'x+'+c+'=0';
		
			//console.log(''+a*c*e+''+character1+''+character2+'^2+'+a*d*e+''+character1+'^2'+character2+'-'+b*c*e+''+character2+'^3-'+b*d*e+''+character2+'^2'+character1+'');

		let input = document.getElementsByClassName('input')[0];
		
		
	
		
				
		button.addEventListener('click', function(){

					//i++
						if(input.value === ''+c+''){
							//container.innerHTML= 'Красава! Молодець<div><a href = "../../підготовка до вступної контрольної роботи/Task2/help2.html" class = "btn-form1">Рішать далі</a></div>';
						i ++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Квадратні рівняння/Task1/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			},  {once: true});
}

if(i===2){
			inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required><input type="text" placeholder="Відповідь пиши тута" class="input" required>';

		let x1 = Math.floor(Math.random()*9+1);
				let x2 = Math.floor(Math.random()*5+1);
				
					let b = -(x1+x2);
					let c = x1*x2;
		//console.log(answer);
		div.innerHTML= 'Розв`яжіть рівняння: x<sup>2</sup>'+b+'x+'+c+'=0';
		
		let input1 = document.getElementsByTagName('input')[0];
				let input2 = document.getElementsByTagName('input')[1];
				
		console.log(x1, x2);
	
		//console.log(''+(f+a)+''+character1+'^2'+character2+'+'+(d-b)+''+character3+'+'+(c-e)+''+character3+''+character2+'^2');
	
		
				
		button.addEventListener('click', function(){
					//i++
						if(input1.value===''+x1+''&& input2.value===''+x2+''||input1.value===''+x2+''&& input2.value===''+x1+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Квадратні рівняння/Task2/task_2.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
}
	if(i===3){
		
				let b =Math.floor(Math.random()*5+1);
				let d =Math.floor(Math.random()*5+1);
				let e =Math.floor(Math.random()*5+1);

						
				let ary = [1, 2, 4, 5, 10];
				let numy = Math.floor(Math.random()*ary.length);
				let y = ary[numy];

				

				

				let a = y/4;

				let c = Math.pow(b, 2)/y;
		 
				//console.log(Math.pow(b, 2));
		//console.log(y);
		div.innerHTML = 'При якому значенні а, рівняння матиме лише один корінь:<table border="0", cellpadding="0", cellspacing="0" class = "table11"><tbody><tr><td>'+a+'x<sup>2</sup>-'+b+'x+a<hr color ="black"></td></tr><tr><td>'+d+'x+'+e+'</td></tr></tbody></table><span class="span11">=0</span>';
	
		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
					//i++
						if(input.value===''+c+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Квадрвтні рівняння/Task3/task_3.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
	}
	if(i===4){

		let x1 = Math.floor(Math.random()*9+1);
				let x2 = Math.floor(Math.random()*5+1);
				
					let b = -(x1+x2);
					let c = x1*x2;
		 

		
		
		
		div.innerHTML = 'Обчисліть суму коренів рівняння: x<sup>2</sup>'+b+'x+'+c+'=0';

		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){

			if(input.value===''+(x1+x2)+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Квадратні рівняння/Task4/task_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});

	}
	if(i===5){

				let ara = [1, 2, 4, 5, 10, 20];
				let numa = Math.floor(Math.random()*ara.length);
				let a = ara[numa];

				let b =Math.floor(Math.random()*58+1);
				let c =Math.floor(Math.random()*125+1);
		//console.log(S);
				div.innerHTML = 'бчисліть добуток коренів рівняння '+a+'x<sup>2</sup>+'+b+'x+'+c+'=0';
		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
			
			if(input.value===''+c/a+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Квадратні рівняння/Task5/task_5.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
				

	}
	if(i===6){
		container.innerHTML= 'Красава! Молодець<div><a href = "../../../підготовка до вступної контрольної роботи/Квадратні рівняння/Task6/task_6.html" class = "btn-form1">Рішать далі</a></div>';
	}

	console.log(i);
});


	
				