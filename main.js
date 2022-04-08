function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VtByIWrST/model.json',modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}


var dog=0;
var cat=0;
var lion=0;
var cow=0;


function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
    
        document.getElementById("result_label").innerHTML=" Detected Dog - "+dog+", Detected Cat - "+cat+", Detected Lion - "+lion+", Detected Cow - "+cow;
        document.getElementById("result_confidence").innerHTML="Detected Voice is of - "+results[0].label;
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
        img=document.getElementById('ear');
        
    
        if(results[0].label=="Meowing"){
            img.src="cat.gif";
            cat=cat+1;
        }
        else if(results[0].label=="Barking"){
            img.src="dog.gif";
            dog=dog+1;
        }
            
        else if(results[0].label=="Roar"){
            img.src="lion.gif";
            lion=lion+1;
        }
            
        else if(results[0].label=="Mooing"){
            img.src="cow.gif";
            cow=cow+1;
        }
        else{
            img.src="Hearing image.gif"
        }
    }
    
}