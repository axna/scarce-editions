// SPDX-License-Identifier: MIT

const ScarceEdition = artifacts.require(`./ScarceEdition.sol`)

module.exports = (deployer) => {
  deployer.deploy(ScarceEdition);
}
