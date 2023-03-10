import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor class NFT(name: Text,cName:Text, owner: Principal, content: [Nat8]) = this {
    let itemName = name;
    let caseName = cName;
    let nftOwner = owner;
    let imageBytes = content;

    public query func getName(): async Text{
        return itemName;
    };

    public query func getCaseName(): async Text{
        return caseName;
    };

    public query func getOwner(): async Principal{
        return nftOwner;
    };

    public query func getAsset(): async [Nat8]{
        return imageBytes;
    };

    public query func getCanisterId() : async Principal {
        return Principal.fromActor(this);
    }
};
