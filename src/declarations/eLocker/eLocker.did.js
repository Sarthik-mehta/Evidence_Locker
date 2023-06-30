export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createUser' : IDL.Func([IDL.Text, IDL.Text], [IDL.Principal], []),
    'getCurrentUser' : IDL.Func([], [IDL.Principal], ['query']),
    'getOwnedNFTs' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(IDL.Principal)],
        ['query'],
      ),
    'getSharedNFTs' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(IDL.Principal)],
        ['query'],
      ),
    'getUsers' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'loginUser' : IDL.Func([IDL.Text, IDL.Text], [IDL.Principal], []),
    'mint' : IDL.Func(
        [IDL.Vec(IDL.Nat8), IDL.Text, IDL.Text, IDL.Text, IDL.Vec(IDL.Text)],
        [IDL.Principal],
        [],
      ),
    'setCurrentUser' : IDL.Func([IDL.Principal], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
