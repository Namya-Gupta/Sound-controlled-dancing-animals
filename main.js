function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Qd3fULInc/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 225) + 1;
        random_number_g = Math.floor(Math.random() * 225) + 1;
        random_number_b = Math.floor(Math.random() * 225) + 1;
    }

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"

    img1 = document.getElementById('dance1');
    img2 = document.getElementById('dance2');
    img3 = document.getElementById('dance3');
    img4 = document.getElementById('dance4');

    if (results[0].label == "Cat") {
        img1.src = 'dancing_cat1.gif';
        img2.src = 'dancing_cow2.png';
        img3.src = 'dancing_dog2.png';
        img4.src = 'dancing_rabbit2.png';
    } else if (results[0].label == "Cow") {
        img1.src = 'dancing_cat2.png';
        img2.src = 'dancing_cow1.gif';
        img3.src = 'dancing_dog2.png';
        img4.src = 'dancing_rabbit2.png';
    } else if (results[0].label == "Dog") {
        img1.src = 'dancing_cat2.png';
        img2.src = 'dancing_cow2.png';
        img3.src = 'dancing_dog1.gif';
        img4.src = 'dancing_rabbit2.png';
    }else{
            img1.src = 'dancing.cat2.png';
            img2.src = 'dancing.cow2.png';
            img3.src = 'dancing.dog2.png';
            img4.src = 'dancing.rabbit1.gif';
        }
    }


