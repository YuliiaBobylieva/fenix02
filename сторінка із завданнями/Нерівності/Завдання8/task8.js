let button = document.getElementsByClassName('btn-form')[0];
let form = document.getElementsByClassName('forms')[0];
let inp = document.getElementById('in');
let div= document.getElementsByClassName('task')[0];
let container = document.getElementsByClassName('container')[0];
let i = 9;
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
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Task1/index_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
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
					div.innerHTML = 'Розв`яжіть нерівність: <table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'<hr color ="white"></td></tr><tr><td>'+b+'x-'+c+'</td></tr></tbody></table><span class="span14">>0</span>У відповідь запиши найменше значення, до якого наближається "x"';

				}
				else if(a<0){
					div.innerHTML = 'Розв`яжіть нерівність: <table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'<hr color ="white"></td></tr><tr><td>'+b+'x-'+c+'</td></tr></tbody></table><span class="span14"><0</span>У відповідь запиши найбільше значення, до якого наближається "x"';

				}
		
		let input = document.getElementsByTagName('input')[0];
				
				
		
	
		//console.log(''+(f+a)+''+character1+'^2'+character2+'+'+(d-b)+''+character3+'+'+(c-e)+''+character3+''+character2+'^2');
	
		
				
		button.addEventListener('click', function(){
					//i++
						if(input.value===''+x+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Task2/task_2.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
}
	if(i===3){
		
				let e = Math.floor(Math.random()*5+1);


				let a = Math.floor(Math.random()*5+1);

				let ard = [1, 2, 4, 5];
				let numd = Math.floor(Math.random()*ard.length);
				let d = ard[numd];

				let x1 = Math.floor(Math.random()*9-11);
				let x2 = Math.floor(Math.random()*5+1);
	
					let c = -x1*x2*a*e/d;
		
				let f = Math.floor(Math.random()*5+1);

				let b= ((x1+x2)*a*e+a*f)/d;
		div.innerHTML = 'Розв`яжіть нерівність: <table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a+'x<hr color ="white"></td></tr><tr><td>'+b+'x+'+c+'</td></tr></tbody></table><span class="span15"><</span><table class="table3" border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+d+'<hr color ="white"></td></tr><tr><td>'+e+'x+'+f+'</td></tr></tbody></table>';

		inp1.classList.add('in');

		inp1.innerHTML = '(<input type="text" name="" class="input">;<input type="text" name="" class="input">)';
		let input1 = document.getElementsByClassName('input')[0];
		let input2 = document.getElementsByClassName('input')[1];
		button.addEventListener('click', function(){
					//i++
						if(input1.value===''+x1+''&&input2.value===''+x2+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Квадрвтні рівняння/Task3/task_3.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			},  {once: true});
	}
	if(i===4){

		const n = 2;
				let a = Math.floor(Math.random()*5+1);
				let b =  Math.floor(Math.random()*5+1);
				let x = Math.floor(Math.random()*5+5);
				
				let c = a-b*x;
		 

		
		
		
		div.innerHTML = 'Розв`яжіть нерівність: '+a+'-'+b+'x≥'+c+' У відповідь запиши найбільше значення "х"';
		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){

			if(input.value===''+x+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../підготовка до вступної контрольної роботи/Task4/task_4.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});

	}
	if(i===5){

				let arc = [1, 2, 4, 5];
				let numc = Math.floor(Math.random()*arc.length);
				let c = arc[numc];


				let a = Math.floor(Math.random()*10+11);
				let b = Math.floor(Math.random()*5+5);
				let d = Math.floor(Math.random()*10+11);
			
				let x1 = -(d-b)/c;
				let x2 = -(a-b)/c;
		//console.log(x1, x2);
				div.innerHTML = 'Знайдіть усі значення "х", при яких значення виразу "'+b+'-'+c+'x" належить проміжку ['+a+';'+d+']';

		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" name="" class="input">≤x≤<input type="text" name="" class="input">';
		let input1 = document.getElementsByClassName('input')[0];
		let input2 = document.getElementsByClassName('input')[1];
		button.addEventListener('click', function(){
			
			if(input1.value===''+x1+''&& input2.value===''+x2+''){
							
						i++	

				}
				else{
					container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Нерівності/Task5/task_5.html" class = "btn-form1">Подивиться як рішать</a></div>';
					
				}
			

		},  {once: true});
				

	}

	if(i===6){
		let x = Math.floor(Math.random()*30+1);
				let b = Math.floor(Math.random()*30+1);
				

				let a=b*x;

		//console.log(S);
				div.innerHTML = 'Розв`яжіть нерівність '+a+'x≥'+b+'x<sup>2</sup> У відповідь запиши найбільше значення'
		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
			
		
						if(input.value===''+x+''){
							i++
							
				}


				else{
								container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Квадратні рівняння/Task5/task_5.html" class = "btn-form1">Подивиться як рішать</a></div>';
						
					
				}

				

		},  {once: true});
	}
	if(i===7){
		let ara1 = [ 1, 2, 4, 5];
				let numa1 = Math.floor(Math.random()*ara1.length);
				let a1 = ara1[numa1];


					let ara2 = [ 1, 2, 4, 5];
				let numa2 = Math.floor(Math.random()*ara2.length);
				let a2 = ara2[numa2];



				let x1 = Math.floor(Math.random()*5+1);
				
				let x2 = Math.floor(Math.random()*5+6);
				let x3 = Math.floor(Math.random()*5-8);
				let x4 = Math.floor(Math.random()*5+1);
				


				let b1 = -(x1+x2)*a1;

				let c1 = x1*x2*a1;
				

				let b2 = -(x3+x4)*a2;

				let c2 = x3*x4*a2;

				

				let ar1 = [];
					for (let i = x1; i <= x2; i++) {
    					ar1.push(i);
					}

				let ar2 = [];
					for (let i = -10; i <= x1; i++) {
    					ar2.push(i);
					}	

				let ar3 = [];
					for (let i = x2; i <= 20; i++) {
    					ar3.push(i);
					}		


				let ar4 = [...ar2, ...ar3];
				
				let ar11 = [];
					for (let i = x3; i <= x4; i++) {
    					ar11.push(i);
					}

				let ar21 = [];
					for (let i = -10; i <= x3; i++) {
    					ar21.push(i);
					}

				let ar31 = [];
					for (let i = x4; i <= 20; i++) {
    					ar31.push(i);
					}

				let ar41 = [...ar21, ...ar31];

				

				let ar5 = ar41.filter(x=> ar1.includes(x));

				let ar6 = ar4.filter(x=> ar11.includes(x));

				let ar7 = [...ar5,...ar6];

				Math.min(...ar7);
				//console.log(Math.min(...ar7));

		//console.log(S);
				div.innerHTML = 'Розв`яжіть нерівність <table border="0", cellpadding="0", cellspacing="0"><tbody><tr><td >'+a1+'x<sup>2</sup>+'+b1+'x+'+c1+'<hr color ="white"></td></tr><tr><td>'+a2+'x<sup>2</sup>+'+b2+'x+'+c2+'</td></tr></tbody></table><span class="span14">≤0</span> У відповідь запишіть найбільше ціле число, що задовольняє цю нерівність';
				
				
		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
			
		
						if(input.value===''+Math.max(...ar7)+''){
							i++
							
				}


				else{
								container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Квадратні рівняння/Task5/task_5.html" class = "btn-form1">Подивиться як рішать</a></div>';
						
					
				}

				

		},  {once: true});
	}

	if(i===8){
		
		let ara = [ 1, 2, 4, 5];
			let numa = Math.floor(Math.random()*ara.length);
			let a = ara[numa];

			let b = Math.floor(Math.random()*5+1);

			let c = Math.floor(Math.random()*5+6);
			
		
			let x1= (c-b)/a;

			let x2 = (-c-b)/a;

		div.innerHTML = 'Розв`яжи нерівність: ('+a+'x+'+b+')<sup>2</sup>≤'+Math.pow(c, 2)+' У відповідь запиши найменший розв`язок';

		inp1.classList.add('in');

		inp1.innerHTML = '<input type="text" placeholder="Відповідь пиши тута" class="input" required>';
		let input = document.getElementsByClassName('input')[0];
		button.addEventListener('click', function(){
			
		
						if(input.value===''+x2+''){
							i++
							
				}


				else{
								container.innerHTML= '<div>Відповідь неправельна!</div><a href="#" class = "btn-form1" onclick="location.reload(); return false;">Попитаться ще раз</a><div><a href = "../../../підготовка до вступної контрольної роботи/Квадратні рівняння/Task5/task_5.html" class = "btn-form1">Подивиться як рішать</a></div>';
						
					
				}

				

		},  {once: true});

	}

	if(i===9){
		container.innerHTML= '<div>Молодець!</div><a href="../kr1.html" class = "btn-form1" return false;">Розв`язати контрольну</a><div><a href = "../../../index.html" class = "btn-form1">Повернутися на головну сторінку</a></div>';
	}

	console.log(i);
});


	
				