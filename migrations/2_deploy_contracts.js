const zimCoin = artifacts.require('Zim');
const zimCollectables = artifacts.require('ZimCollectables');

module.exports = function(deployer) {
    deployer.deploy(zimCoin);
    deployer.deploy(zimCollectables);
};