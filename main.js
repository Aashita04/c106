Webcam.set(
    {
        width:350,
        height:300,
        image_format:"png",
        png_quality:100
    }
);

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML="<img id='img_taken'src='"+data_uri+"'>";
      });
}

console.log("ml5 version is",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hLWJ1z7Rf/model.json",model_loaded);

function model_loaded(){
    console.log("model_loaded");
}
function check(){
    img = document.getElementById('img_taken');
    classifier.classify(img, gotResult);
}

function gotResult(error,result){
    if (error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}