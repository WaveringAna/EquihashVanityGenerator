var bitcore = require('zcash-bitcore-lib'),
	cluster = require('cluster'),
	numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	// Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
  
} else {
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
			
			process.exit()
		}
		console.log(address.substring(2, arg2).toString());
	}
}
