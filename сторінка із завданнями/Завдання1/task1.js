let button = document.getElementsByClassName('btn-form')[0];
let form = document.getElementsByClassName('forms')[0];
let inp = document.getElementsByClassName('in')[0];
let div= document.getElementsByClassName('task')[0];
let container = document.getElementsByClassName('container')[0];
inp.innerHTML = '<input type="text" placeholder="Пиши тут (ну пожалуста)" class="input" required>';
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
		div.innerHTML= ' <p>Розкрий дужки. Степінь позначай "^", замість множення не пиши нічого і одиницю перед буквою пиши: ('+a+''+character1+'-'+b+''+character2+')('+c+''+character2+'+'+d+''+character1+')'+e+''+character2+'';
		let input = document.getElementsByClassName('input')[0];
	
	
	
		//console.log(''+a*c*e+''+character1+''+character2+'^2+'+a*d*e+''+character1+'^2'+character2+'-'+b*c*e+''+character2+'^3-'+b*d*e+''+character2+'^2'+character1+'');
		
				
		button.addEventListener('click', function(){
					//i++
						if(input.value.includes (''+a*c*e+''+character1+''+character2+'^2')&&input.value.includes (''+a*d*e+''+character1+'^2'+character2+'')&&input.value.includes('-'+b*c*e+''+character2+'^3')&&input.value.includes('-'+b*d*e+''+character2+'^2'+character1+'')&&input.value.length<=26){
							container.innerHTML= 'Красава! Молодець<div><a href = "../../підготовка до вступної контрольної роботи/Task2/task_2.html" class = "btn-form1">Рішать далі</a></div>';
							

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task1/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			});