MUMBAI_TOKENLIST=`cat dist/mumbai.tokenlist.json`
# MAINNET_TOKENLIST=`cat dist/mainnet.tokenlist.json`
# GOERLI_TOKENLIST=`cat dist/goerli.tokenlist.json`

echo "
/** 
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 *
 * This is the index.ts file that will be compiled to JS and set as the 'main'
 * property in package.json. This makes it possible to use lkl-tokenlist as a
 * normal package, ie: import { mainnetTokenList } from 'lkl-tokenlist'
 *
 * See scripts/build-index.sh for details.
 *
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 * 🚨🚨🚨 THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. 🚨🚨🚨
 */
import { TokenList } from '@uniswap/token-lists/src';
export * from './tags';
export * from './types';
export const mumbaiTokenList: TokenList = $MUMBAI_TOKENLIST;
" > src/index.ts

tsc --project tsconfig.json