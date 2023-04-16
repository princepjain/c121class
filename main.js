function setup() {
  canvas = createCanvas(300, 250);
   canvas.position(550,325);
   video = createCapture(VIDEO)
   video.hide();
   classifier = ml5.imageClassifier("MobileNet" , modaloaded)
   }
 
   function modaloaded(){
     console.log("snkfnsudfbanfajdgiajbdfgascbaef")
   }

   function draw(){
     image(video,0,0,300,250)
    classifier.classify(video , gotresults)
   }

   function gotresults(error, results){
     if(error){
       console.log("hiiiii")
      }
       else{
         console.log(results)
         document.getElementById("result_object_name").innerHTML = results[0].label;
         document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
       }
     }
   





   

 
 
 