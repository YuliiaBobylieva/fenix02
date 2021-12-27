let button = document.getElementsByClassName('btn-form')[0];
let form = document.getElementsByClassName('forms')[0];
let inp = document.getElementsByClassName('in')[0];
let div= document.getElementsByClassName('task')[0];
let container = document.getElementsByClassName('container')[0];
inp.innerHTML = '<input type="text"  class="input" required>';
				const n = 2;
				let a = Math.floor(Math.random()*5+1);
				let c =  Math.floor(Math.random()*5+1);
				let x = Math.floor(Math.random()*5+5);
				let y = Math.floor(Math.random()*4+1);
				let b = n*x+a*y;
				let d = x-c*y;
		//console.log(answer);
		div.innerHTML = 'Розв`яжіть систему рівнянь <p class = "system">{</p><table class= "system1" border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+n+'x+'+a+'y='+b+'</td></tr><tr><td>x-'+c+'y='+d+'</td></tr></tbody></table> Для одержаного розв`язку (x<sub>0</sub>;y<sub>0</sub>) системи знайдіть суму (x<sub>0</sub>+y<sub>0</sub>)';
				
		let input = document.getElementsByClassName('input')[0];
	
	
	
		//console.log(''+a*c*e+''+character1+''+character2+'^2+'+a*d*e+''+character1+'^2'+character2+'-'+b*c*e+''+character2+'^3-'+b*d*e+''+character2+'^2'+character1+'');
		
			button.innerHTML = 'Відповісти';	
		button.addEventListener('click', function(){
					//i++
						if(input.value === ''+(x+y)+''){
							container.innerHTML= 'Красава! Молодець<div><a href = "../../../підготовка до вступної контрольної роботи/Системи рівнянь/Task2/task_2.html" class = "btn-form1">Рішать далі</a></div>';
							

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Системи рівнянь/Task1/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			});