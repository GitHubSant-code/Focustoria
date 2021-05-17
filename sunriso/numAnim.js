const counters = document.querySelectorAll('.counter');
const speed = 00; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;


		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 2);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
