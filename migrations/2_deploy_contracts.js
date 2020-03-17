const SUPRPrintRegistry = artifacts.require("SUPRPrintRegistry");

module.exports = function(deployer) {
 deployer.deploy(SUPRPrintRegistry, "0x41A322b28D0fF354040e2CbC676F0320d8c8850d" , "100000000000000000", "100000000000000000", "100000000000000000", "100000000000000000", "100000000000000000", "100000000000000000", "","","");
};
