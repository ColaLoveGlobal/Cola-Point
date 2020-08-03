const ConvertLib = artifacts.require("ConvertLib");
const JZC_token = artifacts.require("JZC_token");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, JZC_token);
  deployer.deploy(JZC_token);
};
