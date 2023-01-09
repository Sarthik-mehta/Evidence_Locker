import Principal "mo:base/Principal";

actor class User(name: Text,password: Text) = this{
    let userName = name;
    let userPassword = password;

    public query func getUserName(): async Text{
        return userName;
    };

    public query func getCanisterId() : async Principal {
        return Principal.fromActor(this);
    }
};