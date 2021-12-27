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

		//console.log(n);
			
		
		div.innerHTML = 'Розв`яжіть нерівність: <table border="0", cellpadding="0", cellspacing="0" class="table1"><tbody><tr><td >'+a+'<hr color ="white"></td></tr><tr><td>x-'+b+'</td></tr></tbody></table><span class="span11">+</span><table class="table2" border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+c+'<hr color ="white"></td></tr><tr><td>x</td></tr></tbody></table><span class="span12">≥</span><span class="span13">'+d+'</span> У відповіді запишіть суму всіх цілих розв`язків';	
			//console.log(''+x1+', '+x2+'');
		
			//console.log(''+a*c*e+''+character1+''+character2+'^2+'+a*d*e+''+character1+'^2'+character2+'-'+b*c*e+''+character2+'^3-'+b*d*e+''+character2+'^2'+character1+'');

		let input = document.getElementsByClassName('input')[0];
		
		
	
		
				
		button.addEventListener('click', function(){

					//i++
						if(input.value === ''+n+''){
							//container.innerHTML= 'Красава! Молодець<div><a href = "../../підготовка до вступної контрольної роботи/Task2/help2.html" class = "btn-form1">Рішать далі</a></div>';
						i ++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Нерівності/Task1/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}

			},  {once: true});
}

if(i===2){
			inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';

		let x = Math.floor(Math.random()*9+1);
				
				let ara = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
				let numa = Math.floor(Math.random()*ara.length);
				let a = ara[numa];
				
					let arb = [ 1, 2, 4, 5, 10, 20];
				let numb = Math.floor(Math.random()*arb.length);
				let b = arb[numb];

					let c = b*x;
		//console.log(answer);
		if(a>0){
					div.innerHTML = 'Розв`яжіть нерівність: <table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'<hr color ="white"></td></tr><tr><td>'+b+'x-'+c+'</td></tr></tbody></table><span class="span14">>0</span>У відповідь запиши найбільше значення, до якого наближається "x"';

				}
				else if(a<0){
					div.innerHTML = 'Розв`яжіть нерівність: <table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'<hr color ="white"></td></tr><tr><td>'+b+'x-'+c+'</td></tr></tbody></table><span class="span14"><0</span>У відповідь запиши найменше значення, до якого наближається "x"';

				}
		
		let input = document.getElementsByTagName('input')[0];
				
				
		
	
		//console.log(''+(f+a)+''+character1+'^2'+character2+'+'+(d-b)+''+character3+'+'+(c-e)+''+character3+''+character2+'^2');
	
		
				
		button.addEventListener('click', function(){
					//i++
						if(input.value===''+x+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Нерівності/Task2/task_2.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
}
	if(i===3){
		container.innerHTML= 'Красава! Молодець<div><a href = "../../../підготовка до вступної контрольної роботи/Нерівності/Task3/task_3.html" class = "btn-form1">Рішать далі</a></div>';
	}

	console.log(i);
});


	
				