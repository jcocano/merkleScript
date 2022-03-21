const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const tokens = require("./tokens.json");

async function main(){
    let tab = [];
    tokens.map((token) =>{
        tab.push(token.addess);
    });
    const leaves = tab.map((address) => keccak256(address));
    const tree = new MerkleTree(leaves, keccak256, { sort: true });
    const root = tree.getHexRoot();
    const leaf = keccak256("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4");
    const proof = tree.getHexProof(leaf);
    console.log("root : " + root);
    console.log("proof : " + proof);
}

main()