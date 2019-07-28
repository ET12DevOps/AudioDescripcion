// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    //playAudio('http://192.168.25.3:60000/stream/swyh.mp3');
    document.getElementById('idioma').addEventListener('OnChange', SelecionarIdioma, false);
}

function SeleccionarIdioma(data)
{
    //console.log(data);
    //console.log(document.getElementById('idioma').value);

    var hostname = '';
    switch (document.getElementById('idioma').value) {
        case 'Español':
            console.log('Reproduciendo idioma Español.')
            //pasar cosas por un tiempo limitado 3 segundos
            document.getElementById('mensaje').innerHTML = 'Reproduciendo español';
            setTimeout(function () {
            document.getElementById('mensaje').innerHTML = '';
            }, 3000);
            hostname = '192.168.2.3';
            break;
        case 'Portugues':
            console.log('Reproduciendo idioma Portugues.')
            hostname = '';
            break;
        case 'Ingles':
            console.log('Reproduciendo idioma Ingles.')
            hostname = '';
            break;
        default:
            console.log('Seleccione idioma.');
            break;
    }
    playAudio('http://' + hostname + ':60000/stream/swyh.mp3');
}

// Audio player
//
var my_media = null;
var mediaTimer = null;

// Play audio 
//



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
    alert("Transmición iniciada");
}

// onError Callback
//
function onError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

// Set audio position
//
//function setAudioPosition(position) {
//    document.getElementById('audio_position').innerHTML = position;
//}