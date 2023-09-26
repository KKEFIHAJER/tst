c=0;
v=0;

ch=prompt("enter your sentence here")
for (let i = 0; i < ch.length;i++) {
    if(ch[i]==" "){
        c++;
    }
   
    if(ch[i]==="a"||ch[i]==="y"||ch[i]==="o"||ch[i]==="e"||ch[i]==="i") {
        v++;
    }

}
console.log( "number of words in the sentence is ",c+1," and number of vowels in the sentence is" ,v)

