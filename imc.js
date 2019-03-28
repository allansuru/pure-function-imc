(() => {

	const form = document.querySelector('form[name=bmi]');
  
  const getHealthMessage = unit => {
    let healthMessage;
  	if (unit < 18.5) {
      healthMessage = 'considerado abaixo do peso';
    } else if (unit > 18.5 && unit < 25) {
      healthMessage = 'saudável';
    } else if (unit > 25) {
      healthMessage = 'considerado acima do peso';
    }
    return healthMessage;
  };
  
  const getBMI = (weight, height) => {
  	let newWeight = parseInt(weight, 10);
  	let newHeight = parseInt(height, 10);
    return (newWeight / (newHeight /100 * newHeight / 100)).toFixed(1);
  };
  
  const onSubmit = event => {
  	
    event.preventDefault();
    
    const result = form.querySelector('.result');
    const health = form.querySelector('.health');
    
    const weight = form.querySelector('input[name=weight]').value;
    const height = form.querySelector('input[name=height]').value;
    
    const bmi = getBMI(weight, height);
    
    result.innerHTML = bmi;
    health.innerHTML = getHealthMessage(bmi);
    
  };
  
  form.addEventListener('submit', onSubmit, false);
	
})();