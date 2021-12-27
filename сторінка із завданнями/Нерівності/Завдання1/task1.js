let button = document.getElementsByClassName('btn-form')[0];
let form = document.getElementsByClassName('forms')[0];
let inp = document.getElementsByClassName('in')[0];
let div= document.getElementsByClassName('task')[0];
let container = document.getElementsByClassName('container')[0];
inp.innerHTML = '<input type="text"  class="input" required>';
				let arx1 = [ 1, 2, 4, 5, 6, 7];
				let numx1 = Math.floor(Math.random()*arx1.length);
				let x1 = arx1[numx1];

					let arx2 = [10, 12, 15, 20];
				let numx2 = Math.floor(Math.random()*arx2.length);
				let x2 = arx2[numx2];


				let ard = [ 1, 2, 4, 5, 10, 20];
				let numd = Math.floor(Math.random()*ard.length);
				let d = ard[numd];
				
				let arb = [ 1, 2, 4, 5, 10, 20];
				let numb = Math.floor(Math.random()*arb.length);
				let b = arb[numb];

				let c = (d*x1*x2)/b;

				let a = d*(x1+x2)-c-d*b;

				
				let n = 0;

				for (var k = x1; k <= x2; k++) {
					n+=k
				}

					

					
					
		//console.log(answer);
		div.innerHTML = 'Розв`яжіть нерівність: <table border="0", cellpadding="0", cellspacing="0" class="table1"><tbody><tr><td >'+a+'<hr color ="white"></td></tr><tr><td>x-'+b+'</td></tr></tbody></table><span class="span11">+</span><table class="table2" border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+c+'<hr color ="white"></td></tr><tr><td>x</td></tr></tbody></table><span class="span12">≥</span><span class="span13">'+d+'</span> У відповіді запишіть суму всіх цілих розв`язків';	
			//console.log(''+x1+', '+x2+'');
		let input = document.getElementsByClassName('input')[0];
	
	
	
		//console.log(''+a*c*e+''+character1+''+character2+'^2+'+a*d*e+''+character1+'^2'+character2+'-'+b*c*e+''+character2+'^3-'+b*d*e+''+character2+'^2'+character1+'');
		
			button.innerHTML = 'Відповісти';	
		button.addEventListener('click', function(){
					//i++
						if(input.value === ''+n+''){
							container.innerHTML= 'Красава! Молодець<div><a href = "../../../підготовка до вступної контрольної роботи/Нерівності/Task2/task_2.html" class = "btn-form1">Рішать далі</a></div>';
							

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Нерівності/Task1/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			});