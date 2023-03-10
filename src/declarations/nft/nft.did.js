export const idlFactory = ({ IDL }) => {
  const NFT = IDL.Service({
    'getAsset' : IDL.Func([], [IDL.Vec(IDL.Nat8)], ['query']),
    'getCanisterId' : IDL.Func([], [IDL.Principal], ['query']),
    'getCaseName' : IDL.Func([], [IDL.Text], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getOwner' : IDL.Func([], [IDL.Principal], ['query']),
  });
  return NFT;
};
export const init = ({ IDL }) => {
  return [IDL.Text, IDL.Text, IDL.Principal, IDL.Vec(IDL.Nat8)];
};
