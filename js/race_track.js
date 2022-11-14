                    var canvas = document.getElementById("myCanvas");
                    var ctx = canvas.getContext("2d");
                    
                    //vertical ine 
                    ctx.moveTo(100,20);
                    ctx.lineTo(100,300);
                    ctx.stroke();
                  
                    
                     // distance cover 
                    ctx.font = "12px Arial";
                    ctx.fillText("Distance:-",8,10);

                    ctx.font = "12px Arial";
                    ctx.fillText("0",100,10);

                    ctx.font = "12px Arial";
                    ctx.fillText("50",300,10);

                    ctx.font = "12px Arial";
                    ctx.fillText("100",500,10);

                    ctx.font = "12px Arial";
                    ctx.fillText("150",700,10);

                    ctx.font = "12px Arial";
                    ctx.fillText("200",900,10);

                    ctx.font = "12px Arial";
                    ctx.fillText("250",1100,10);

                    ctx.font = "12px Arial";
                    ctx.fillText("300",1200,10);

                    //distnace cover
                    
                    //1st row
                    ctx.moveTo(1300,20);
                    ctx.lineTo(0,20);
                    ctx.stroke();

                    //2nd row
                    ctx.moveTo(1300,100);
                    ctx.lineTo(0,100);
                    ctx.stroke();
                     
                    // 3rd row
                    ctx.moveTo(1300,200);
                    ctx.lineTo(0,200);
                    ctx.stroke();
                    
                    