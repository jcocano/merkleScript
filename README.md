# merkleScript

## Intro

merkleScript es un pequeño script para hacer arboles de Merkle asi como pruebas del arbol normalemtente es usado para hacer listas blancas en los NFT

## Uso
1. Primero hay que clonar el repositorio: <br />
`git clone https://github.com/jcocano/merkleScript.git`
1. Después hay que instalar las dependencias: <br />
`npm install`
1. En el archivo "index.js" hay que poner la dirección principal del árbol en el parentecis justo despues de las " " (normalmente en Solidity es la direccion de quien hace el despliegue): <br />
`    const leaf = keccak256("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4");
`
1. En el archivo tokens.json se ponen las direcciones de ethereum a las que daras lista blanca (Si meteras mas de una, asegura poner las comas correspondientes despues de las llaves): <br />
`        "addess": "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
`
<<<<<<< HEAD
1. Corre el script:
`npm start`
1. Tu salida será similar a esta y puedes usarla en tus proyectos:
=======
1. Corre el script:<br />
`npm index.js`
1. Tu salida será similar a esta y puedes usarla en tus proyectos: <br />
>>>>>>> 6f4d3718ad5969cfa31aacb13448be8e6cd88e0f
`
root : 0x9d997719c0a5b5f6db9b8ac69a988be57cf324cb9fffd51dc2c37544bb520d65 
`
`
proof : 0x999bf57501565dbd2fdcea36efa2b9aef8340a8901e3459f4a4c926275d36cdb
`

> Espero que esto sea de utilidad para la comunidad.

## Intro
merkleScript is a small script for doing Merkle root as well as tree tests. It is normally used to whitelist NFTs.

## Usage
1. First you have to clone the repository: <br />
`git clone https://github.com/jcocano/merkleScript.git`
1. Then you have to install the dependencies: <br />
`npm install`
1. In the file "index.js" you have to put the main address of the tree in the parenthesis just after the " " (normally in Solidity it is the deploying address):<br />
`    const leaf = keccak256("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4");
`
1. In the tokens.json file, put the ethereum addresses to which you will whitelist (If you put more than one, make sure to put the corresponding commas after the braces): <br />
`        "addess": "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"
`
<<<<<<< HEAD
1. Run
`npm start`
1. Your output will be similar to this and you can use it into your projects:
=======
1. Run <br />
`npm index.js`
1. Your output will be similar to this and you can use it into your projects: <br />
>>>>>>> 6f4d3718ad5969cfa31aacb13448be8e6cd88e0f
`
root : 0x9d997719c0a5b5f6db9b8ac69a988be57cf324cb9fffd51dc2c37544bb520d65 
`
`
proof : 0x999bf57501565dbd2fdcea36efa2b9aef8340a8901e3459f4a4c926275d36cdb
`

> I hope this is useful to the community.
