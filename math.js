var fibonacci = exports.fibonacci = function (n) {
	if (n === 1) return 1;
	if (n === 2) return 2;
	return fibonacci(n-1) + fibonacci(n-2);
}