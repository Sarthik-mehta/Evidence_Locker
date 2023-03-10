import type { Principal } from '@dfinity/principal';
export interface NFT {
  'getAsset' : () => Promise<Array<number>>,
  'getCanisterId' : () => Promise<Principal>,
  'getCaseName' : () => Promise<string>,
  'getName' : () => Promise<string>,
  'getOwner' : () => Promise<Principal>,
}
export interface _SERVICE extends NFT {}
