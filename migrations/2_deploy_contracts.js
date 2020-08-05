const ConvertLib = artifacts.require("ConvertLib");
const JZC_Token = artifacts.require("JZC_Token");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, JZC_Token);
  deployer.deploy(JZC_Token);
};
