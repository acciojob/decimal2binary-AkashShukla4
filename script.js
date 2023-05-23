function threeSum(arr, target) {

	let a = new Array(32);

	let i =0;
	while (target > 0) {

		a[i] = target % 2;

		target = Math.floor(target / 2);
		i++;
			}
   for (let j = i - 1; j >= 0; j--)
        document.write(a[j]);
}
}

module.exports = threeSum;
