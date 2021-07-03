
'use strict';


const { FileSystemWallet, Gateway } = require('fabric-network');
const path = require('path');

const ccpPath = path.resolve(__dirname, '..', '..', 'first-network', 'connection-org1.json');


function prettyJSONString(inputString) {
	return JSON.stringify(JSON.parse(inputString), null, 2);
}


async function enrollInit(){
    enrollAdmin()
    registerUser()
}
async function create100MedicineForSuppltTest(){
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('medicinetransfer');
        
      
        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        for (let i = 0; i < 100; i++) {
            await contract.submitTransaction('createMedicine', 'MEDICINE' + i, 'Deposilin', '20', '80', 'Pharmacy' + i,'02.02.2022','03.03.2021','on supply','Pharmacy' + i,'null');
            //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
            console.log('Transaction create has been submitted: ' + i);
        }
        console.log('Transaction create has been submitted');

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}
async function createSupply() {
	try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('medicinetransfer');
        var preId = Math.floor(Math.random() * 1000000)
        //var preId = countMyself()

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        await contract.submitTransaction('createMedicine', 'MEDICINE' + preId, 'Deposilin', '20', '80', 'Pharmacy3','02.02.2022','03.03.2021','on supply','Pharmacy3','null');
        //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        console.log('Transaction create has been submitted');

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}
async function createPurchase() {
	try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('medicinetransfer');

        var preId = Math.floor(Math.random() * 100)
        console.log('preId;' + preId)
        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        const result = await contract.evaluateTransaction('supplyMedicine', 'MEDICINE1', 'Pharmacy' + preId);
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}
async function queryFabcar(){
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('fabcar');

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        const result = await contract.evaluateTransaction('queryAllCars');
        //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        console.log('--------------SUCCESS-------------------')
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}
async function getAllSupplyAndDemand() {
	try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }
        console.log('gateway');

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        try{
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });
        console.log('connect');

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');
        console.log('network');

        // Get the contract from the network.
        const contract = network.getContract('medicinetransfer');
        console.log('contract');

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        const result = await contract.evaluateTransaction('queryAllMedicines');
        //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        console.log('==================SUCCESS================')
        return prettyJSONString(result.toString());
        }
        catch {
			// Disconnect from the gateway when the application is closing
			// This will close all connections to the network
			console.log('Disconnect from Fabric gateway.');
			gateway.disconnect();
			console.log('Disconnected');

		}
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
	
}
async function getOneSupplyAndDemand() {
	try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }
        console.log('gateway');

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });
        console.log('connect');

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');
        console.log('network');

        // Get the contract from the network.
        const contract = network.getContract('medicinetransfer');
        console.log('contract');

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        const result = await contract.evaluateTransaction('queryMedicines', 'MEDICINE0');
        //console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        console.log('==================SUCCESS================')
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
	
}
async function supply(){
    try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('medicinetransfer');
        
        //var preId = Math.floor(Math.random() * 100)
        //console.log('preId;' + preId)
        
        var preId = countMyself()
        
        // Submit the specified transaction.
        // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
        // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR10', 'Dave')
        await contract.submitTransaction('supplySomeProduct', 'MEDICINE' + preId, 'Pharmacy' +  preId,'1');
        console.log('Transaction has been submitted:' + preId);

        // Disconnect from the gateway.
        gateway.disconnect();

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}
async function getPoductById() {
	try {

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const userExists = await wallet.exists('user1');
        if (!userExists) {
            console.log('An identity for the user "user1" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccpPath, { wallet, identity: 'user1', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('medicinetransfer');

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        const result = await contract.evaluateTransaction('queryAllMedicines');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);

    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}
function countMyself() {
    // Check to see if the counter has been initialized
    if ( typeof countMyself.counter == 'undefined' ) {
        // It has not... perform the initialization
        countMyself.counter = 0;
    }
    // else if(countMyself.counter > 178){// there are 100 medicine that initialized
    //     countMyself.counter = 0;
    // }
    var rt = ++countMyself.counter;
    // Do something stupid to indicate the value
    console.log('static value: ' + rt);
    return rt;
}
module.exports = { getOneSupplyAndDemand, supply, enrollInit, createSupply, getAllSupplyAndDemand, createPurchase, getPoductById, queryFabcar}

