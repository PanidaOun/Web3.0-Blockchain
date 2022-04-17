require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/3KrXzGPLFuyxKzt-QJXuRzcVc4WMK27s',
      accounts: ['7f4d460c169c80bd4d700e59faf9bb24272682d8dc15e266c9b03a0877c43023'],
    },
  },
};