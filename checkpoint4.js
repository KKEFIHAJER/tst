array=[]
let elt
let indice
for (let i = 0; i < array.length; i++) {
   if(array[i]>=elt) 
   indice=i
}   

for(j=length;j>indice;j--){
  array[j]=array[j-1]
}

array[indice]=elt

