import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import NFTActorClass "../NFT/nft";
import UserActorClass "../User/user";
import Cycles "mo:base/ExperimentalCycles";
import HashMap "mo:base/HashMap";
// import NFTActorClass "../nft/nft";
import List "mo:base/List";
import User "../User/user";
import Text "mo:base/Text";

actor OpenD {

    var currentUser: Principal = Principal.fromText("2vxsx-fae");

    public query func getCurrentUser(): async Principal{
        return currentUser;
    };

    public shared func setCurrentUser(value: Principal){
        currentUser := value;
    };

    private type Userdata = {
        userPrincipal: Principal;
        userPassword: Text;
    };

    var mapOfUsers = HashMap.HashMap<Text,Userdata>(1,Text.equal,Text.hash);
    
    public shared func createUser(userName: Text,password: Text): async Principal{
        let newUser = await UserActorClass.User(userName,password);
        let receivedUserName = await newUser.getUserName();
        let receivedPrincipal = await newUser.getCanisterId();

        
        // To check if the username already exists and if not add it
        var check: Text = switch(mapOfUsers.get(userName)){
            case null "Success";
            case(?result) "Fail";
        };

        if(check=="Success"){
                var newUserData: Userdata = {
                userPrincipal = receivedPrincipal;
                userPassword = password; 
            };
            mapOfUsers.put(userName,newUserData);
            Debug.print(debug_show("User Registered Successfully:",receivedUserName));
            return receivedPrincipal;
        }else{
            Debug.print(debug_show("User Already Exists."));
            return currentUser;
        }
 
    };

     public shared func loginUser(userName: Text,password: Text): async Principal{
        // To check if the username exists
        var check: Text = switch(mapOfUsers.get(userName)){
            case null "failed";
            case(?result) "success";
        };

        switch(mapOfUsers.get(userName)){
            case null return currentUser;
            case(?result)
            {
                if(result.userPassword==password)
                {
                    Debug.print(debug_show("Successful Login"));
                    result.userPrincipal;
                }else{
                    currentUser;
                }

            };
            
        };

     };
    var mapOfNFTs = HashMap.HashMap<Principal,NFTActorClass.NFT>(1,Principal.equal,Principal.hash);
    var mapOfOwners = HashMap.HashMap<Principal, List.List<Principal>>(1,Principal.equal,Principal.hash);

    public shared(msg) func mint(imgData: [Nat8],name:Text,cName:Text) : async Principal{
        // let owner: Principal = msg.caller;
        let owner: Principal = currentUser;
         Debug.print(debug_show(owner));
        Debug.print(debug_show("Evidence Storage In Progress..."));
        Debug.print(debug_show("Cycle Balance Before Transaction: ",Cycles.balance()));
        Debug.print(debug_show("Transaction Processing..."));
        Cycles.add(100_500_000_000);
        let newNFT = await NFTActorClass.NFT(name,cName,owner,imgData);
        Debug.print(debug_show("Transaction Completed."));
        Debug.print(debug_show("Cycle Balance After Transaction: ", Cycles.balance()));
        Debug.print(debug_show("Evidence Storage Completed."));
        
        let newNFTPrincipal = await newNFT.getCanisterId();

        mapOfNFTs.put(newNFTPrincipal,newNFT);
        addToOwnershipMap(owner,newNFTPrincipal);
        return newNFTPrincipal;
    };

    private func addToOwnershipMap(owner: Principal,nftId: Principal){
        var ownedNFTs : List.List<Principal> = switch(mapOfOwners.get(owner)){
            case null List.nil<Principal>();
            case (?result) result;
        };

        ownedNFTs := List.push(nftId,ownedNFTs);
        mapOfOwners.put(owner,ownedNFTs);
    };

    public query func getOwnedNFTs(user:Principal): async [Principal]{
         var ownedNFTs : List.List<Principal> = switch(mapOfOwners.get(user)){
            case null List.nil<Principal>();
            case (?result) result;
        };

        return List.toArray(ownedNFTs);
    };

};
