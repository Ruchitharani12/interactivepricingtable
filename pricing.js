const plans = document.querySelectorAll('.plan');

plans.forEach(plan => {
  plan.addEventListener('click', () => {
    plans.forEach(p => p.classList.remove('selected'));
    plan.classList.add('selected');
  });
});
