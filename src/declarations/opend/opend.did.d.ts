import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'createUser' : (arg_0: string, arg_1: string) => Promise<Principal>,
  'getCurrentUser' : () => Promise<Principal>,
  'getOwnedNFTs' : (arg_0: Principal) => Promise<Array<Principal>>,
  'getSharedNFTs' : (arg_0: Principal) => Promise<Array<Principal>>,
  'getUsers' : () => Promise<Array<string>>,
  'loginUser' : (arg_0: string, arg_1: string) => Promise<Principal>,
  'mint' : (
      arg_0: Array<number>,
      arg_1: string,
      arg_2: string,
      arg_3: string,
      arg_4: Array<string>,
    ) => Promise<Principal>,
  'setCurrentUser' : (arg_0: Principal) => Promise<undefined>,
}
