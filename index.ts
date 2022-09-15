
// type Carro = {
//     id: number;
//     modelo: string;
//     ano: number;
//     fabricante: string;
// }

// let numero: number = 1;

// const carro: Carro = {
//     id: 1,
//     modelo: "Tiburion V6",
//     ano: 2011,
//     fabricante: "hyundai"
// }
// enum Qualquer {
//     idade1 = 20,
//     idade2 = 2
// }
// function somaIdade(n1: number, n2: number){
//     console.log(n1 + n2);
// }
// somaIdade(20, 21);
// console.log('oi');
// [1,2,3,4].map((numero) =>{
//     // return numero * 2;
//     console.log(numero);
// })
// const meuArray = [1, 2, 3];
// const meuNovoArray = [...meuArray, 4];
// console.log(meuNovoArray);

// [1,2,3,4,5,6,7,8].filter((numero)=>{
//      return numero % 2 === 0? true : false;     
// })

// [1,2,3,4,5,6].reduce((acumulador, atual) =>{
//     return acumulador + atual;
// })
const produtos  = [
  {
    id: 1,
    modelo: "blusa do naruto",
    marca: "lacosta",
    categoria: "blusa",
  },
  {
    id: 2,
    modelo: "bermuda do naruto",
    marca: "lacosta",
    categoria: "bermuda",
  },
  {
    id: 3,
    modelo: "bandana do naruto",
    marca: "lacosta",
    categoria: "acessorios",
  },
];

// Exercício 1:
console.log(produtos);
function filtro_umArray(categoria: string){
    return produtos.filter((produto) => {
       return produto.categoria === categoria;
    });
    
}
console.log(filtro_umArray("acessorios"));

// Exercício 2:

function awewa(w: number, quant: number){
  let arrayMat = []; 
  let cont = 0;
  let matriz = [];
  for(let i=0;i<w;i++){
    for(let j=0;j<quant;j++){
      arrayMat = [i, j];
    }
  }
  // matriz = i * j;
}


(awewa(3, 27));

// // const blusas = [
//     { id: 1, marca: 'lacosta', modelo: 'blusa do naruto', preco: 3.50 },
//     { id: 2, marca: 'lacosta', modelo: 'blusa do naruto', preco: 7.00 },
//     { id: 3, marca: 'lacosta', modelo: 'blusa do naruto', preco: 12.50 },
//     { id: 4, marca: 'lacosta', modelo: 'blusa do naruto', preco: 1.99 },
// ]
// blusas.reduce((acc, blusa)=>{
//     if (blusa.id > 1) {
//         acc[0].quantidade += 1;
//     }
//     return acc
//     }
//     , [{ id:1, marca: 'lacosta', modelo: 'blusa do naruto', preco: 12.50, quantidade: 1 }]);