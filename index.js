var bitcore = require("bitcore-lib-zcash");
var arg1 = process.argv[2].toString();
var arg2= arg1.length + 2;

console.log('Looking for '+ 't1'+ arg1)
console.log(arg1.length)
console.log('')

while (1) {
	var privateKey = new bitcore.PrivateKey();
	var address = privateKey.toAddress().toString();
	console.log(address);
	console.log(privateKey.toWIF());
	
	if (address.substring(2, arg2) == arg1){
		console.log("Address found!");
		console.log(''); console.log(''); console.log('');
		
		console.log(address);
		console.log(privateKey.toWIF());
		break;
	}
	console.log(address.substring(2, arg2).toString());
}

