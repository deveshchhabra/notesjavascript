let promise = new Promise(function (resolve, reject) {
	const x = "harshad and somya";

	if (x === "harshad and somya") {
		resolve();
	} else {
		reject();
	}
});

promise.
	then(function () {
		console.log('Success, You are a GEEK');
	}).
	catch(function () {
		console.log('Some error has occurred');
	});
