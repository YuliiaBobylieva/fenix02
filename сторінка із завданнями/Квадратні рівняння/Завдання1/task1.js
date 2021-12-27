let button = document.getElementsByClassName('btn-form')[0];
let form = document.getElementsByClassName('forms')[0];
let inp = document.getElementsByClassName('in')[0];
let div= document.getElementsByClassName('task')[0];
let container = document.getElementsByClassName('container')[0];
inp.innerHTML = '<input type="text"  class="input" required>';
				let x1 = Math.floor(Math.random()*5+1);
				let x2 = Math.floor(Math.random()*5+1);

					

					let b = -(x1+x2);
					let c = x1*x2;
		//console.log(answer);
		div.innerHTML= 'Обчисліть добуток коренів рівняння: x<sup>2</sup>'+b+'x+'+c+'=0';
		let input = document.getElementsByClassName('input')[0];
	
	
	
		//console.log(''+a*c*e+''+character1+''+character2+'^2+'+a*d*e+''+character1+'^2'+character2+'-'+b*c*e+''+character2+'^3-'+b*d*e+''+character2+'^2'+character1+'');
		
			button.innerHTML = 'Відповісти';	
		button.addEventListener('click', function(){
					//i++
						if(input.value === ''+c+''){
							container.innerHTML= 'Красава! Молодець<div><a href = "../../../підготовка до вступної контрольної роботи/Квадратні рівняння/Task2/task_2.html" class = "btn-form1">Рішать далі</a></div>';
							

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Квадратні рівняння/Task1/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			});