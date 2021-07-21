a_array=[];
function submit(){
var d_array=[];
for(var j=1;j<=4;j++){
var n=document.getElementById("name_of_the_student_"+j).value;
console.log(n)
a_array.push(n)
}

console.log(a_array);
var l_array=a_array.length
console.log(l_array);
for(var k=0;k<=l_array;k++){
 d_array.push("<h4> name-"+a_array[k]+"</h4>");
    console.log(d_array)
}
document.getElementById("display_name_with_commas").innerHTML=d_array
var r_c=d_array.join("");
console.log(r_c)
document.getElementById("display_name_without_commas").innerHTML=r_c
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
};
function sorting(){
a_array.sort();
console.log(a_array);
var d_s_s=[]
var l_array=a_array.length
console.log(l_array);
for(var k=0;k<=l_array;k++){
    d_s_s.push("<h4> name-"+a_array[k]+"</h4>");
       console.log(d_s_s)
   }
   var r_c=d_s_s.join("");
console.log(r_c);
document.getElementById("display_name_without_commas").innerHTML=r_c
};
function new_update() { 
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + a_array +"</h1>"; }