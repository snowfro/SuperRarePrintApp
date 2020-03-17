const SUPRPrintRegistryMinter = artifacts.require("SUPRPrintRegistryMinter");

module.exports = function(deployer) {
 deployer.deploy(SUPRPrintRegistryMinter, "0x89447f2Ca722481d1399ae08b4d7E9471883F6c8", "0x41A322b28D0fF354040e2CbC676F0320d8c8850d", "0x41A322b28D0fF354040e2CbC676F0320d8c8850d", "0x41A322b28D0fF354040e2CbC676F0320d8c8850d");
};
