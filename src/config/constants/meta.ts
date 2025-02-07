import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Ridiculous Finance',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Ridiculous Finance')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Ridiculous Finance')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Ridiculous Finance')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Ridiculous Finance')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Ridiculous Finance')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Ridiculous Finance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Ridiculous Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Ridiculous Finance')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Ridiculous Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Ridiculous Finance')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Ridiculous Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Ridiculous Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Ridiculous Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Ridiculous Finance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Ridiculous Finance')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Ridiculous Finance')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Ridiculous Finance')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Ridiculous Finance')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Ridiculous Finance Info & Analytics')}`,
        description: 'View statistics for Ridiculous Finance exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Ridiculous Finance Info & Analytics')}`,
        description: 'View statistics for Ridiculous Finance exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Ridiculous Finance Info & Analytics')}`,
        description: 'View statistics for Ridiculous Finance exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Ridiculous Finance')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Ridiculous Finance')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Ridiculous Finance')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Ridiculous Finance')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Ridiculous Finance')}`,
      }
    default:
      return null
  }
}
