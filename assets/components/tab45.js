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

					if(document.querySelector('.checkout-bar .payment'))
					{
						document.querySelector('.checkout-bar .passenger').insertAdjacentHTML('afterend', '<li class="flight width14"><a href="#">Flight</a></li>');

						document.querySelectorAll('.checkout-bar li').forEach(function(item){ item.classList.remove('width16'); });
						document.querySelectorAll('.checkout-bar li').forEach(function(item){ item.classList.add('width14'); });
						
						checkout_paint(document.querySelectorAll('.checkout-bar li'));
					} else 
					{
						document.querySelector('.checkout-bar .passenger').insertAdjacentHTML('afterend', '<li class="flight width16"><a href="#">Flight</a></li>');
						steps.forEach(function(item){ item.classList.add('width16'); });
						checkout_paint(document.querySelectorAll('.checkout-bar li'));
					}


				} // если нет шага .flight


			} else 
			{
				if(document.querySelector('.checkout-bar .flight'))
				{
					document.querySelector('.checkout-bar .flight').parentNode.removeChild(document.querySelector('.checkout-bar .flight'));

					document.querySelectorAll('.checkout-bar li').forEach(function(item){


						item.classList.remove('width16');
						item.classList.remove('width14');

						if(document.querySelector('.checkout-bar li.payment'))
						{
							item.classList.add('width16');
						}
						
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


/**
*
**
*			ARRIVAL DEPARTURE RADIOBUTTONS
*
**
*/

function tab4_radio()
{
	let label = document.querySelectorAll("#tab4-panel .input_line")[1].querySelector('label');
	let airport = document.querySelectorAll("#tab4-panel .input_line")[2].querySelector('label');


	document.querySelectorAll("#tab4-panel .radio_area input").forEach(function(e){
		e.addEventListener("click", function(){

			//console.log(this.getAttribute('id'));
			if(this.getAttribute('id') == 'arrival_radio')
			{
				label.textContent = 'Destination Address';
				label.nextElementSibling.setAttribute('placeholder', 'Enter Destination address');
				airport.textContent = 'Pickup Airport';
				//console.log(label);
			} else if(this.getAttribute('id') == 'departure_radio')
			{
				label.textContent = 'Pickup Address';
				label.nextElementSibling.setAttribute('placeholder', 'Enter pickup address');
				airport.textContent = 'Departure Airport';
			}

		});

	});

}

tab4_radio();

tab5_radio();

function tab5_radio()
{
	document.querySelectorAll("#tab5-panel .radio_area input").forEach(function(e){

		e.addEventListener("click", function(){
			if(this.getAttribute('id') == 'outward_arrival_radio')
			{
				/*radio*/

				document.querySelector('#return_arrival_radio').removeAttribute('checked');
				document.querySelector('#return_departure_radio').setAttribute('checked', 'checked');

				/*outward*/

				document.querySelector('.input_line.dest label').textContent = 'Destination Address';
				document.querySelector('.input_line.dest input').setAttribute('placeholder', 'Enter destination address');

				document.querySelector('.input_line.pickup_airport label').textContent = 'Pickup airport';

				/*return*/

				document.querySelector('.input_line.pickup_address label').textContent = 'Pickup address';
				document.querySelector('.input_line.pickup_address input').setAttribute('placeholder', 'Enter pickup address');

				document.querySelector('.input_line.departure_airport label').textContent = 'Departure airport';


				
			} else if (this.getAttribute('id') == 'outward_departure_radio') //departure radio
			{
				/*radio*/

				document.querySelector('#return_departure_radio').removeAttribute('checked');
				document.querySelector('#return_arrival_radio').setAttribute('checked', 'checked');

				/*outward*/

				document.querySelector('.input_line.dest label').textContent = 'Pickup Address';
				document.querySelector('.input_line.dest input').setAttribute('placeholder', 'Enter pickup address');

				document.querySelector('.input_line.pickup_airport label').textContent = 'Departure airport';

				/*return*/

				document.querySelector('.input_line.pickup_address label').textContent = 'Destination address';
				document.querySelector('.input_line.pickup_address input').setAttribute('placeholder', 'Enter destination address');

				document.querySelector('.input_line.departure_airport label').textContent = 'Pickup airport';


				
			}
		});

	});
}