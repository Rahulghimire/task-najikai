var myarray=[1,2,3,4];
console.log(myfunc(myarray));
function myfunc(myarray){
for(var i=0;i<myarray.length;i++){
myarray[i]+=10;
}
return myarray;
}