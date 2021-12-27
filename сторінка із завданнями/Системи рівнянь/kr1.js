let button = document.getElementsByClassName('btn-form')[0];
let form = document.getElementsByClassName('forms')[0];
let inp = document.getElementsByClassName('in')[0];
	 //invalue = document.getElementsByTagName('input')[0];
	 let i=0;
	let r1=0;
	
	let div= document.getElementsByClassName('task')[0];
	let arn1 = [1, 2, 3];
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
/*let arn4 = [...arn3.slice(0,ran3), ...arn3.slice(ran3+1)];
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




let ar = [0, n1 , n2, n3];
	
		button.addEventListener('click', function(){
			this.innerHTML = 'Відповісти';
			if(ar[i] === 0){
				i++
			}
		
			

			
			if(ar[i]=== 1){
				const n = 2;
				let a = Math.floor(Math.random()*5+1);
				let c =  Math.floor(Math.random()*5+1);
				let x = Math.floor(Math.random()*5+5);
				let y = Math.floor(Math.random()*4+1);
				let b = n*x+a*y;
				let d = x-c*y;
		
			div.innerHTML = 'Розв`яжіть систему рівнянь <p class = "system">{</p><table class= "system1" border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+n+'x+'+a+'y='+b+'</td></tr><tr><td>x-'+c+'y='+d+'</td></tr></tbody></table> Для одержаного розв`язку (x<sub>0</sub>;y<sub>0</sub>) системи знайдіть суму (x<sub>0</sub>+y<sub>0</sub>)';
		
		
		button.innerHTML = 'Відповісти';
		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		
			

		let input = document.getElementsByClassName('input')[0];
		
		
	
		//console.log(''+(x+y)+'');
				
		button.addEventListener('click', function(){

					//i++
						if(input.value === ''+(x+y)+''){
							//container.innerHTML= 'Красава! Молодець<div><a href = "../../підготовка до вступної контрольної роботи/Task2/help2.html" class = "btn-form1">Рішать далі</a></div>';
						i ++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Системи рівнянь/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			},  {once: true});
			}
			else if(ar[i]=== 2){
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
			
		//inp1.classList.add('in');

		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByTagName('input')[0];
				
	
		
		
				
		button.addEventListener('click', function(){
					//i++
						if(x1*y1>x2*y2){
							if(input.value===''+x2*y2+''){
							i++
							
							
								
									
								
								
							
				}
				else{
								container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Системи рівнянь/Task2/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
					
				}
						}

						else if(x2*y2>x1*y1){
							if(input.value===''+x1*y1+''){
							i++
							
							
								
									
								
								
							
				}
				else{
								container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Системи рівнянь/Task2/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
						}
			},  {once: true});
				
			}
			else if(ar[i] === 3){
				let a = Math.floor(Math.random()*5+1);
				let b = Math.floor(Math.random()*5+1);
				
				let d = Math.floor(Math.random()*5+1);
				let e = Math.floor(Math.random()*5+1);
				let g = Math.floor(Math.random()*5+1);
				


				let x = Math.floor(Math.random()*5+1);


				let ary = [ -5, -4, -2, -1, 1, 2, 4, 5];
				let numy = Math.floor(Math.random()*ary.length);
				let y = ary[numy];

				let arp = [ -5, -4, -2, -1, 1, 2, 4, 5];
				let nump = Math.floor(Math.random()*arp.length);
				let p = arp[nump];

				let f = (p+g)/y;

				let h = (d*x+e)/(f*y-g);

				let c = a*y-b*x;
		 

		//console.log(y);
		div.innerHTML = 'Розв`яжіть систему рівнянь <p class = "system">{</p><table class= "system1" border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'y-'+b+'x='+c+'</td></tr><tr><td class = "tr"><table   border="0", cellpadding="0", cellspacing="0"><tbody ><tr ><td>'+d+'x+'+e+'<hr color ="white"></td></tr><tr><td>'+f+'y-'+g+'</td></tr></tbody></table><span class = "table20">='+h+'</span></td></tr></tbody></table> Запишіть у відповідь добуток x<sub>0</sub>y<sub>0</sub>, якщо пара (x<sub>0</sub>;y<sub>0</sub>) є розв`язком цієї системи рівнянь';
						//inp1.classList.add('in');

		inp.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
					//i++
						if(input.value === ''+x*y+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправильна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Системи рівнянь/Task3/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
				
	
			}
			
			else if(i===4){
				
					div.innerHTML= '<p>Красава!!! Якшо ти читаєш це повідомлення, то ти або зламав сайт або розв`язав всі задачі цієї контрольної"</p>';
					inp.innerHTML = '';
			}


			
			//console.log(ar[i]);
			//console.log(ar[i]);
			console.log(i);
		});
