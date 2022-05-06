//https://eth-ropsten.alchemyapi.io/v2/ygjQN416slHizps3wox7H8sxAED2Slrm

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/ygjQN416slHizps3wox7H8sxAED2Slrm',
      accounts:['53f3a7cea02527ad8aee43284b05d46f586bad06deaa320804d40c0571bf0c54']
    }
  }

}