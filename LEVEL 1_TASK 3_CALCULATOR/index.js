function show(event){
    const output_screen = document.querySelector('.display');
    output_screen.value = output_screen.value + event.target.value;
}
function del(){
    const output_screen = document.querySelector('.display');
    output_screen.value = "";
} 

function clear1(){
    const output_screen = document.querySelector('.display');
    output_screen.value = output_screen.value.slice(0,-1);
}
function calc(){
    try{
    const output_screen = document.querySelector('.display');
    output_screen.value = eval(output_screen.value);
}
catch(err)
{
    del();
    alert("Invalid");   
}
    }
