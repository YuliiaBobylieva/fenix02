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
				let x1 = Math.floor(Math.random()*5+1);
				let x2 = Math.floor(Math.random()*5+1);

					

					let b = -(x1+x2);
					let c = x1*x2;
		//console.log(answer);
		div.innerHTML= 'Обчисліть добуток коренів рівняння: x<sup>2</sup>'+b+'x+'+c+'=0';
		
		//inp1.classList.add('in');
		button.innerHTML = 'Відповісти';
		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		
			

		let input = document.getElementsByClassName('input')[0];
		
		
	
		
				
		button.addEventListener('click', function(){

					//i++
						if(input.value === ''+c+''){
							//container.innerHTML= 'Красава! Молодець<div><a href = "../../підготовка до вступної контрольної роботи/Task2/help2.html" class = "btn-form1">Рішать далі</a></div>';
						i ++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			},  {once: true});
			}
			else if(ar[i]=== 2){
				let x1 = Math.floor(Math.random()*9+1);
				let x2 = Math.floor(Math.random()*5+1);
				
					let b = -(x1+x2);
					let c = x1*x2;
		//console.log(answer);
		div.innerHTML= 'Розв`яжіть рівняння: x<sup>2</sup>'+b+'x+'+c+'=0';
		//inp1.classList.add('in');

		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required><input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input1 = document.getElementsByTagName('input')[0];
				let input2 = document.getElementsByTagName('input')[1];
		
	
		
		
				
		button.addEventListener('click', function(){
					//i++
						if(input1.value===''+x1+''&& input2.value===''+x2+''||input1.value===''+x2+''&& input2.value===''+x1+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task2/help2.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
				
			}
			else if(ar[i] === 3){
				let b =Math.floor(Math.random()*5+1);
				let d =Math.floor(Math.random()*5+1);
				let e =Math.floor(Math.random()*5+1);

						
				let ary = [1, 2, 4, 5, 10];
				let numy = Math.floor(Math.random()*ary.length);
				let y = ary[numy];

				

				

				let a = y/4;

				let c = Math.pow(b, 2)/y;
		 

		//console.log(y);
		div.innerHTML = 'При якому значенні а, рівняння матиме лише один корінь:<table border="0", cellpadding="0", cellspacing="0" class = "table11"><tbody><tr><td>'+a+'x<sup>2</sup>-'+b+'x+a<hr color ="black"></td></tr><tr><td>'+d+'x+'+e+'</td></tr></tbody></table><span class="span11">=0</span>';
	
		//inp1.classList.add('in');

		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
					//i++
						if(input.value===''+c+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task3/help3.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
				
	
			}
			else if(ar[i] === 4){
				let x1 = Math.floor(Math.random()*9+1);
				let x2 = Math.floor(Math.random()*5+1);
				
					let b = -(x1+x2);
					let c = x1*x2;
		 

		
		
		
		div.innerHTML = 'Обчисліть суму коренів рівняння: x<sup>2</sup>'+b+'x+'+c+'=0';

		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){

			if(input.value===''+(x1+x2)+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task4/help4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
			}
			else if(ar[i] === 5){
				let ara = [1, 2, 4, 5, 10, 20];
				let numa = Math.floor(Math.random()*ara.length);
				let a = ara[numa];

				let b =Math.floor(Math.random()*58+1);
				let c =Math.floor(Math.random()*125+1);
				div.innerHTML = 'бчисліть добуток коренів рівняння '+a+'x<sup>2</sup>+'+b+'x+'+c+'=0';
		

		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
			
			if(input.value===''+c/a+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task5/help5.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
				
			}
			else if(ar[i]=== 6){

		let ara = [ -5, -2, -1, 1, 2, 5];
				let numa = Math.floor(Math.random()*ara.length);
				let a = 1//ara[numa];
				let x1 = Math.floor(Math.random()*5+1);	
				let t1 = Math.pow(x1, 2);
				let x2 = -x1;
				let x3 = Math.floor(Math.random()*5+1);
				let t2 = Math.pow(x3, 2);
				let x4 = -x3;
				let b = -(t1+t2)*a;
				let c = t1*t2*a;
		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
			let input = document.getElementsByClassName('input')[0];
			
	div.innerHTML = 'Розв`яжіть рівняння x<sup>4</sup>+'+b+'x<sup>2</sup>+'+c+'=0. У відповіді запишіть добуток усіх його дійсних коренів. Якщо розв`язків немає, у відповіді пишіть "0"';		
	//console.log(x1);
	//console.log(x2);
		button.addEventListener('click', function(){
			
			if(input.value===''+x1*x2*x3*x4+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task6/help6.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
				
				
			}
			else if(i===7){
				
					div.innerHTML= '<p>Красава!!! Якшо ти читаєш це повідомлення, то ти або зламав сайт або розв`язав всі задачі цієї контрольної"</p>';
					inp.innerHTML = '';
			}


			
			//console.log(ar[i]);
			//console.log(ar[i]);
			console.log(i);
		});
