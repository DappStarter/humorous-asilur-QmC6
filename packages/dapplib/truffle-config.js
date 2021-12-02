require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain common harvest glove frame gauge'; 
let testAccounts = [
"0xf9ec603136ea42744d2390052b96142a63c41df5d40389d1f9544ad2e4a2e447",
"0xb4669414dcfd1002670e6bbffa9c2b5919fced37221ff6983f194bd1814b80ad",
"0xb1d07e6cf8a88051190c3a0816bde41cc20bdceb6124203a48916eabeb89f2b4",
"0xa3de09e803fbeb4910087196491ff13be56c6f5e499f7efbcc1b6ab888c67ab2",
"0x9d4ae8f4acea0518bc678afbc2d920e91b7027d2ee43e36a51ba78655994740b",
"0x419dd457ad69e7592580e329a18c5dfdb12672de964f564d9d43eb99be485a10",
"0xa3689835f994f2492fbb56ca52a7fae3898ecfb430335718ae1840d821de44a1",
"0x20ad8e2b631cecb5bf56d34e2c8f861b4a2d59b05b7340360cfb0fb38d714b39",
"0x6803d2ae69125869f63191156624ee05dab2ed2582795bb4815b9348a6a74550",
"0xfc69b2b96e4ce22a5aa4ce67daa393642e3ec84eef7f5bdb70af0862aaa85c05"
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
            version: '^0.8.0'
        }
    }
};

