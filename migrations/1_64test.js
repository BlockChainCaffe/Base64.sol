var Contract64 = artifacts.require("base64");   // use the name declared in the contract object

module.exports = function(deployer) {
  deployer.deploy(Contract64);
};