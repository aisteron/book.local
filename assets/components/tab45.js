/*
* Airport transfer
* Return airport transfer
*
* Функционал 4й табы 1-го шага:
*	- добавлять / удалять шаг Flight в checkout bar
*	- радиокнопки Arrival Departure
*
*/
function add_flight_step()
{
	/*let tab4 = document.querySelector("#tab4-label");
	let tab5 = document.querySelector("#tab5-label");
	tab4.addEventListener("click", addf5);
	tab5.addEventListener("click", addf5);*/

	let tabs = document.querySelectorAll('.labels-wrap label');
	let steps = document.querySelectorAll('.checkout-bar li');
	//let flight = document.querySelector('.checkout-bar .flight');

	tabs.forEach(function(item, index){
		//item.addEventListener("click", addf5;
		item.addEventListener('click', function(){

			//console.log(item, index);
			
			if(index === 3 || index === 4)
			{
				if (!document.querySelector('.checkout-bar .flight')) {

				document.querySelector('.checkout-bar .passenger').insertAdjacentHTML('afterend', 
				'<li class="flight width16"><a href="#">Flight</a></li>');
				
				steps.forEach(function(item){
					item.classList.add('width16');
				});

					/*повторный вызов для возможности манипулирования вновь созданным шагом */
					checkout_paint(document.querySelectorAll('.checkout-bar li'));

				}


			} else 
			{
				if(document.querySelector('.checkout-bar .flight'))
				{
					document.querySelector('.checkout-bar .flight').parentNode.removeChild(document.querySelector('.checkout-bar .flight'));

					steps.forEach(function(item){
						item.classList.remove('width16');
						//item.classList.remove('width14');
					});
				}
				
			}
			if(index === 4) // return airport transfer
			{
				document.querySelector('.tabs-wrap.flight .return').style.display="block";
			} else 
			{
				document.querySelector('.tabs-wrap.flight .return').style.display="none";
			}

		});
	});


}

add_flight_step();