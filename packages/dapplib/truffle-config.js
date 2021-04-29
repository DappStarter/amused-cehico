require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift random noble artwork gloom kangaroo army gift'; 
let testAccounts = [
"0xb19e1347c264f0b5895003ce1f48ab81090015f40827829db341f99e18b8845f",
"0x1b304e61d1c25e6df59143036be2660e5343e3d0adb400d815403418784122d2",
"0xbcd234a0438dc309f0f9f97d5a5402236243a16b7a1b1ef6acd2297e06d8df4b",
"0x8e50c3bcecbb43f623833c8f89ef50d91c1445e0f99ffb20ae1b835f0529ccec",
"0x5412321179c767f7ec4a07a0c08c6e7050f09a729d74dc79b9a179741d055046",
"0x36055d3eb25cb7d5dd9ecfba48bed081f4b8d3bd4b219b50389a0f58de5e3c73",
"0x96f43e8ca2d120b02774c9a0ed9fb51e3ac9871279a0666b83d5793c1e51e538",
"0x621beb0d40b3746b95c0dab944e42aca00c0f540bedea579148c013a3462ec34",
"0xd0abfb9470bc3d769d7e9efb22286b3524bb5fe2033b245344530565dc4dd867",
"0x451aa70feeaecaa7eaeb263b65abc82600d8e3bcd8346b42d8be5cf913ee73a9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
