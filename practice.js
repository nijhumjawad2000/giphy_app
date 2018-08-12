var array=["This","is","a","test","string","!"];
var string=" ";
for(var i=0; i<array.length; i++){
    if(array[i]=="!"){
    string+= array[i]
}else{
    string+=" "+array[i]
}

}

console.log(string)
