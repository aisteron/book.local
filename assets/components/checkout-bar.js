var left_header_h3 = 
	{
		step1: "Journey details",
		step2: "Car",
		passenger: "Passenger",
		additional: "Additional",
		confirm: "Confirm"
	}

function checkout_paint()
{
	let steps = document.querySelectorAll('.checkout-bar li');
	
	steps.forEach(function(e, index){
		{
			e.addEventListener('click', function(u){
				u.preventDefault();
				if (u.ctrlKey)
				{
					steps.forEach(function(e, index){
						e.classList.remove('active');
						e.classList.remove('visited');
					});

					e.classList.add('active');

					for (var i = index - 1; i >= 0; i--) 
					{
						steps[i].classList.add('visited');
					}

					/*отображение-скрытие шагов*/
					//e.classList[0] => step1
					let tabs_wrap = document.querySelectorAll('.tabs-wrap');
					
					tabs_wrap.forEach(function(t){

						t.style.display = "none";

						if(t.classList[1] == e.classList[0])
						{
							t.style.display = "block";
						}
					});

					for(var i in left_header_h3)
					{
						if(i == e.classList[0])
						{
							document.querySelector('.area .left h3').innerHTML = left_header_h3[i];
						}
					}





				}
			});
		}	

	});
}

checkout_paint();