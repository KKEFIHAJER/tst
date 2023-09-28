

"kayaj"
i=3 , j=1
function isPalindrome(ch) {
    while(i<=j){
        if(ch[i]!=ch[j]) return false
        i++;
        j--;
    }

   return true;
}


function Palindrome(ch,i,j) {
    if(i == undefined || j == undefined){
        i=0;
        j=ch.length-1
    }
    if(i>j){
        return true 
    }
    if(ch[i]==ch[j]){
        return Palindrome(ch,i+1,j-1)
    }

    return false
}


