setTimeout(() => {
    console.log("Logging this statement after 5s")
    
}, 5000);
document.getElementById("button").addEventListener("click", function btnClick(){
    console.log("The button has clicked")
})
console.log("Log!")