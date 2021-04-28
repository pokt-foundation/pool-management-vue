import merge from 'lodash/merge';
import registry from '@balancer-labs/assets/generated/pm/registry.homestead.json';
import homestead from '@/config/homestead.json';
import kovan from '@/config/kovan.json';
import rinkeby from '@/config/rinkeby.json';
// import registryKovan from '@balancer-labs/assets/generated/pm/registry.kovan.json';

const registryRinkeby = {
  tokens: {
    '0xc778417E063141139Fce010982780140Aa0cD5Ab': {
      address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      id: 'weth',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      precision: 4,
      color: '#828384',
      hasIcon: false,
      logoUrl:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  untrusted: []
};

const registryKovan = {
  tokens: {
    '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1': {
      address: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
      id: 'weth',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      precision: 3,
      color: '#828384',
      hasIcon: false,
      logoUrl: ''
    },
    '0x07de306ff27a2b630b1141956844eb1552b956b5': {
      address: '0x07de306ff27a2b630b1141956844eb1552b956b5',
      id: 'usdt',
      name: 'USDT',
      symbol: 'USDT',
      decimals: 18,
      precision: 3,
      color: '#2875ca',
      hasIcon: false,
      logoUrl: ''
    },
    '0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7': {
      address: '0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7',
      id: 'balancer',
      name: 'BAL',
      symbol: 'BAL',
      decimals: 18,
      precision: 3,
      color: '#fab323',
      hasIcon: false,
      logoUrl: ''
    },
    '0xb7a4f3e9097c08da09517b5ab877f7a917224ede': {
      address: '0xb7a4f3e9097c08da09517b5ab877f7a917224ede',
      id: 'usd-coin',
      name: 'USDC',
      symbol: 'USDC',
      decimals: 6,
      precision: 3,
      color: '#5eb8aa',
      hasIcon: false,
      logoUrl: ''
    },
    '0xAf9ac3235be96eD496db7969f60D354fe5e426B0': {
      address: '0xAf9ac3235be96eD496db7969f60D354fe5e426B0',
      id: 'maker',
      name: 'MKR',
      symbol: 'MKR',
      decimals: 18,
      precision: 3,
      color: '#2875ca',
      hasIcon: false,
      logoUrl: ''
    },
    '0x04DF6e4121c27713ED22341E7c7Df330F56f289B': {
      address: '0x04DF6e4121c27713ED22341E7c7Df330F56f289B',
      id: 'dai',
      name: 'DAI',
      symbol: 'DAI',
      decimals: 18,
      precision: 3,
      color: '#422940',
      hasIcon: false,
      logoUrl: ''
    },
    '0x8F4beBF498cc624a0797Fe64114A6Ff169EEe078': {
      address: '0x8F4beBF498cc624a0797Fe64114A6Ff169EEe078',
      id: 'perpetual-protocol',
      name: 'PERP',
      symbol: 'PERP',
      decimals: 18,
      precision: 3,
      color: '#779bc0',
      hasIcon: false,
      logoUrl: ''
    },
    '0x1C8E3Bcb3378a443CC591f154c5CE0EBb4dA9648': {
      address: '0x1C8E3Bcb3378a443CC591f154c5CE0EBb4dA9648',
      id: 'wrapped-bitcoin',
      name: 'WBTC',
      symbol: 'WBTC',
      decimals: 8,
      precision: 3,
      color: '#ff5700',
      hasIcon: false,
      logoUrl: ''
    }
  },
  untrusted: [
    '0xbef02f140BFb37a75Ed6510e8D85C9E9e7e0ff1e',
    '0xe7d8E7742ca6906a14F7e46770Fdfe6B7014e62D',
    '0xEC4b4fFfb58B6c85D41025b07d93167B8192062E'
  ]
};

const configs = { homestead, kovan, rinkeby };
configs.homestead = merge(registry, configs.homestead);
configs.kovan = merge(registryKovan, configs.kovan);
configs.rinkeby = merge(registryRinkeby, configs.rinkeby);
const network = process.env.VUE_APP_NETWORK || 'homestead';
const config = configs[network];
config.env = process.env.VUE_APP_ENV || 'staging';

export default config;
