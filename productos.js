/* ══ productos.js · AQUÍ SE EDITA EL CATÁLOGO ══
   PARA AÑADIR UN PERFUME:
   1) Sube la foto al repositorio con nombre corto (ej.: rayhaan.png)
   2) En GitHub abre este archivo (lápiz ✏️), copia una línea {…},
      pégala antes del ]; y cambia marca, nombre, precio, img, etc.
   3) Commit. Aparecerá automáticamente en Colecciones y Catálogo.
   · col:true  → aparece en la página Colecciones
   · col:false → solo en el Catálogo completo
   · img:"foto.png" para fotos propias, o B+"…" para las antiguas   */
const B = "https://image.qwenlm.ai/public_source/9ea4a34a-b84f-4d89-89a6-b1b1ad65ca67/";
const PERFUMES = [
 {cat:"mujer",col:true, marca:"Lattafa",nombre:"Yara Rosa",familia:"Floral gourmand",notas:["Orquídea","Vainilla","Sándalo"],precio:34.90,ml:100,badge:"Top ventas",img:B+"183f90a40-5423-4410-a9bf-c53046f71e48.png"},
 {cat:"mujer",col:true, marca:"Maison Asrar",nombre:"Asrar Cashmere",familia:"Ambarada suave",notas:["Leche","Ciruela","Caramelo"],precio:39.90,ml:100,badge:"",img:B+"1d690d383-07b8-4b48-b58b-5b8f23ed023a.png"},
 {cat:"mujer",col:true, marca:"Rasasi",nombre:"Hawas Reina",familia:"Frutal floral",notas:["Pera","Jazmín","Coco"],precio:44.90,ml:100,badge:"Nuevo",img:B+"1e88ecbef-e0c3-4a31-af6c-df0971a41ed3.png"},
 {cat:"mujer",col:true, marca:"Oasis Edition",nombre:"Jannat Fresca",familia:"Verde almizclada",notas:["Té verde","Almizcle blanco","Bambú"],precio:29.90,ml:100,badge:"",img:B+"14ba7c633-4705-4298-abd3-602b2f117669.png"},
 {cat:"hombre",col:true, marca:"Rasasi",nombre:"Hawas Ice",familia:"Aromática acuática",notas:["Cítricos","Notas marinas","Ámbar gris"],precio:41.90,ml:100,badge:"Top ventas",img:B+"11033dd5c-a6d6-4575-8238-187cd9f89d6a.png"},
 {cat:"hombre",col:true, marca:"Lattafa",nombre:"Khamrah Ámbar",familia:"Ámbar especiada",notas:["Dátiles","Canela","Ámbar"],precio:38.90,ml:100,badge:"Favorito",img:B+"15cc1fac9-7d9c-47b3-8a02-0dbb49691a43.png"},
 {cat:"hombre",col:true, marca:"Rayhaan",nombre:"Rayhaan",familia:"Ámbar aromática",notas:["Naranja","Lavanda","Vainilla","Ámbar"],precio:42.90,ml:100,badge:"Nuevo",img:"rayhaanElixir.png"},
 {cat:"hombre",col:false,marca:"Lattafa",nombre:"Asad Noir",familia:"Especiada amaderada",notas:["Pimienta negra","Oud","Vainilla"],precio:36.90,ml:100,badge:"",img:B+"1c34ff835-3565-4caa-80cb-2bb3a73468b4.png"},
 {cat:"hombre",col:false,marca:"Lattafa",nombre:"Fakhar Gentlemen",familia:"Aromática moderna",notas:["Bergamota","Lavanda","Cedro"],precio:35.50,ml:100,badge:"",img:B+"1a53f4d69-f909-496a-acaf-427a6c040277.png"}
];
