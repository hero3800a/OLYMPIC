canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle ="grey";
ctx.lineWidth =4;
ctx.rect(120,130,430,200,);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="blue";
ctx.lineWidth =4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="black";
ctx.lineWidth =4;
ctx.arc(290,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="red";
ctx.lineWidth =4;
ctx.arc(375,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="yellow";
ctx.lineWidth =4;
ctx.arc(250,240,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="green";
ctx.lineWidth =4;
ctx.arc(320,240,40,0,2*Math.PI);
ctx.stroke();
