let booking_radio = document.querySelector('#booking_radio');
let quotation = document.querySelector('#quotation_radio');
let select = document.querySelector('.step2 select');

booking_radio.addEventListener('change', function(){ select.disabled = false; })

quotation.addEventListener('change', function(){ 
	select.disabled = true;
	remove_payment_step();
	select.selectedIndex = 0;
	})

select.addEventListener('change', function(){
	
	let label = this.options[this.selectedIndex].label;
	
	if(label == 'Debit Card' || label == 'Credit Card')
	{
		//console.log('hi');
		if(!document.querySelector('.checkout-bar .payment'))
		{
			if(document.querySelector('.width16'))
			{
				document.querySelectorAll('.checkout-bar li').forEach(function(item){ item.classList.remove('width16'); });
				document.querySelector('.checkout-bar .additional').insertAdjacentHTML('afterend', '<li class="payment width14"><a href="#">Payment</a></li>');
				document.querySelectorAll('.checkout-bar li').forEach(function(item){ item.classList.add('width14'); });
				/*повторный вызов для возможности манипулирования вновь созданным шагом */
				checkout_paint(document.querySelectorAll('.checkout-bar li'));
			} else 
			{

				document.querySelector('.checkout-bar .additional').insertAdjacentHTML('afterend', '<li class="payment width16"><a href="#">Payment</a></li>');
				document.querySelectorAll('.checkout-bar li').forEach(function(item){ item.classList.add('width16'); });
				/*повторный вызов для возможности манипулирования вновь созданным шагом */
				checkout_paint(document.querySelectorAll('.checkout-bar li'));
			}
			
		}

	} else
	{
		remove_payment_step();
	}
});

function remove_payment_step()
{
	document.querySelector('.checkout-bar .payment').parentNode.removeChild(document.querySelector('.checkout-bar .payment'));
	document.querySelectorAll('.checkout-bar li').forEach(function(item){ item.classList.remove('width16'); });
	document.querySelectorAll('.checkout-bar li').forEach(function(item){ item.classList.remove('width14'); });

	if( document.querySelector('.checkout-bar .flight') )
	{
		document.querySelectorAll('.checkout-bar li').forEach(function(item){ item.classList.add('width16'); });
	}
}