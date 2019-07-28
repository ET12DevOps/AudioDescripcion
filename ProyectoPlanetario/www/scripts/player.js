// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.getElementById('idioma').addEventListener('OnChange', selecionarIdioma, false);
}

function seleccionarIdioma(data) {

    var hostname = '';
    var msg = '';

    switch (document.getElementById('idioma').value) {
        case 'Español':
            msg = 'Reproduciendo audio español';
            console.log(msg);
            document.getElementById('mensaje').innerHTML = msg;
            hostname = '192.168.88.232';
            break;
        case 'Portugues':
            msg = 'Reproduciendo idioma Portugues';
            console.log(msg);
            document.getElementById('mensaje').innerHTML = msg;
            hostname = '';
            break;
        case 'Ingles':
            msg = 'Reproduciendo idioma Ingles';
            console.log(msg);
            document.getElementById('mensaje').innerHTML = msg;
            hostname = '';
            break;
        default:
            console.log('Seleccione idioma');
            msg = "stop";
            break;
    }

    if (msg !== 'stop') {
        setTimeout(function () {
            document.getElementById('mensaje').innerHTML = '';
        }, 3000);

        playAudio('http://' + hostname + ':60000/stream/swyh.mp3');
    } else {
        my_media.stop();
        my_media = null;
    }
}

var my_media = null;
var mediaTimer = null;

function playAudio(src) {
    if (my_media === null) {
        // Create Media object from src
        my_media = new Media(src, onSuccess, onError);
    } // else play current audio
    // Play audio
    my_media.play();
    //alert("Transmición iniciada");

    // Update my_media position every second
    //if (mediaTimer === null) {
    //    mediaTimer = setInterval(function () {
    //        // get my_media position
    //        my_media.getCurrentPosition(
    //            // success callback
    //            function (position) {
    //                if (position > -1) {
    //                    setAudioPosition((position) + " sec");
    //                }
    //            },
    //            // error callback
    //            function (e) {
    //                console.log("Error getting pos=" + e);
    //                setAudioPosition("Error: " + e);
    //            }
    //        );
    //    }, 1000);
    //}
}

// Pause audio
//
//function pauseAudio() {
//    if (my_media) {
//        my_media.pause();
//    }
//}

// Stop audio
//
//function stopAudio() {
//    if (my_media) {
//        my_media.stop();
//    }
//    clearInterval(mediaTimer);
//    mediaTimer = null;
//}

// onSuccess Callback
//
function onSuccess() {
    //alert("Transmición iniciada");
}

// onError Callback
//
function onError(error) {
    var msg = 'code: ' + error.code + '\n' + 'message: ' + error.message + '\n';
    console.log(msg);
    //alert(msg);
}

// Set audio position
//
//function setAudioPosition(position) {
//    document.getElementById('audio_position').innerHTML = position;
//}