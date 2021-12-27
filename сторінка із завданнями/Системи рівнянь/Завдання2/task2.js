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
		button.innerHTML = 'Відповісти';
		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		const n = 2;
				let a = Math.floor(Math.random()*5+1);
				let c =  Math.floor(Math.random()*5+1);
				let x = Math.floor(Math.random()*5+5);
				let y = Math.floor(Math.random()*4+1);
				let b = n*x+a*y;
				let d = x-c*y;
		//console.log(answer);
			
		
		div.innerHTML = 'Розв`яжіть систему рівнянь <p class = "system">{</p><table class= "system1" border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+n+'x+'+a+'y='+b+'</td></tr><tr><td>x-'+c+'y='+d+'</td></tr></tbody></table> Для одержаного розв`язку (x<sub>0</sub>;y<sub>0</sub>) системи знайдіть суму (x<sub>0</sub>+y<sub>0</sub>)';
		
		
			//console.log(''+(x+y)+'');

		let input = document.getElementsByClassName('input')[0];
		
		
	
		
				
		button.addEventListener('click', function(){

					//i++
						if(input.value === ''+(x+y)+''){
							//container.innerHTML= 'Красава! Молодець<div><a href = "../../підготовка до вступної контрольної роботи/Task2/help2.html" class = "btn-form1">Рішать далі</a></div>';
						i ++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Task1/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			},  {once: true});
}

if(i===2){
			inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';

			let c = Math.floor(Math.random()*5+1);
				let d = Math.floor(Math.random()*5+1);
				

				let ara = [ -5, -4, -2, -1, 1, 2, 4, 5];
				let numa = Math.floor(Math.random()*ara.length);
				let a = ara[numa];

				let arb = [-20, -10, -5, -4, -2, -1, 1, 2, 4, 5, 10, 20];
				let numb = Math.floor(Math.random()*arb.length);
				let b = arb[numb];



				let x1 = Math.floor(Math.random()*5);
				let x2 = Math.floor(Math.random()*-5);

				let y1 = (c-b*x1)/a;
				let y2 = (c-b*x2)/a;

				let f = -(x1+x2)*a*d/b;

				let e =(x1*x2*a*d+f*c)/a;
		//console.log(answer);
		div.innerHTML = 'Розв`яжіть систему <p class = "system">{</p><table class= "system1" border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'y+'+b+'x='+c+'</td></tr><tr><td>'+d+'x<sup>2</sup>+'+e+'='+f+'y</td></tr></tbody></table> Якщо пара (x<sub>0</sub>;y<sub>0</sub>) є єдиним розв`язком цієї системи рівнянь, то запишіть у відповідь добуток x<sub>0</sub> та y<sub>0</sub>. Якщо пари (x<sub>1</sub>;y<sub>1</sub>) та (x<sub>2</sub>;y<sub>2</sub>) є розв`язками цієї системи, то запишіть у відповідь найменший із добудків(x<sub>0</sub>+y<sub>0</sub>)'
				 
		
		let input = document.getElementsByTagName('input')[0];
			
				
		//console.log(x1, x2);

		//console.log(x1*y1, x2*y2);
	
		//console.log(''+(f+a)+''+character1+'^2'+character2+'+'+(d-b)+''+character3+'+'+(c-e)+''+character3+''+character2+'^2');
	
		
				
		button.addEventListener('click', function(){
					//i++
						if(x1*y1>x2*y2){
							if(input.value===''+x2*y2+''){
							i++
							
							
								
									
								
								
							
				}
				else{
								container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Системи рівнянь/Task2/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
					
				}
						}

						else if(x2*y2>x1*y1){
							if(input.value===''+x1*y1+''){
							i++
							
							
								
									
								
								
							
				}
				else{
								container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Системи рівнянь/Task2/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
						}
			},  {once: true});
}
	if(i===3){
		container.innerHTML= 'Красава! Молодець<div><a href = "../../../підготовка до вступної контрольної роботи/Системи рівнянь/Task3/task_3.html" class = "btn-form1">Рішать далі</a></div>';
	}

	console.log(i);
});


	
				