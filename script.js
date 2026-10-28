/* ==========================================

   THE FEAR WITHIN — EPISODE 2

   COMPLETE SCRIPT.JS

   ========================================== */



// ==========================================

// HTML ELEMENTS

// ==========================================



const titleScreen = document.getElementById("title-screen");

const episodeScreen = document.getElementById("episode-screen");

const episode2Opening = document.getElementById("episode2-opening");



const startButton = document.getElementById("start-button");

const helpButton = document.getElementById("help-button");

const helpText = document.getElementById("help-text");



const menuMusic = document.getElementById("intro-music");

const menuVideo = document.getElementById("menu-background-video");

const audioHint = document.getElementById("menu-audio-hint");



const calmMusic = document.getElementById("calm-music");

const typingSound = document.getElementById("typing-sound");

const ravenYawn = document.getElementById("raven-yawn");

const phoneVibration = document.getElementById("phone-vibration");



const cabinetSound = document.getElementById("cabinet-sound");

const takingPillsSound = document.getElementById("taking-pills-sound");

const ravenNormalVoice = document.getElementById("raven-normal-voice");

const cabinetCloseSound = document.getElementById("cabinet-close-sound");



const horrorStaticSound = document.getElementById("horror-static-sound");

const manSuspenseMusic = document.getElementById("man-suspense-music");

const audienceLaughTrack = document.getElementById("audience-laugh-track");



const hostGreetingVoice = document.getElementById("host-greeting-voice");

const hostQuestionVoice = document.getElementById("host-question-voice");

const hostNewGreeting = new Audio(

    "audio/ElevenLabs_2026-10-16T22_20_07_Dave - Male Deep Voice - for Media and AI_pvc_sp100_s100_sb90_v4.mp3"

);



const hostJoke = new Audio(

    "audio/ElevenLabs_2026-10-16T22_21_44_Dave - Male Deep Voice - for Media and AI_pvc_sp100_s100_sb90_v4.mp3"

);



const hostCloseupIntro = new Audio(

    "audio/ElevenLabs_2026-10-16T22_22_51_Dave - Male Deep Voice - for Media and AI_pvc_sp100_s100_sb90_v4.mp3"

);



const hostFinalQuestion = new Audio(

    "audio/ElevenLabs_2026-10-16T22_23_52_Dave - Male Deep Voice - for Media and AI_pvc_sp100_s100_sb90_v4.mp3"

);



const ravenDontRememberVoice = new Audio(

    "audio/ElevenLabs_2026-10-18T23_12_45_Natasha - Upset, Clear and Serious_pvc_sp100_s50_sb75_v4.mp3"

);





const ellieCarOfferVoice = new Audio(

    "audio/ElevenLabs_2026-10-18T23_19_21_Isla Sterling - Engaging Audiobook Narrator_pvc_sp91_s29_sb56_v4.mp3"

);



ellieCarOfferVoice.volume = 0.9;

ellieCarOfferVoice.preload = "auto";



ravenDontRememberVoice.volume = 0.9;





const ravenCarReplyVoice = new Audio(

    "audio/ElevenLabs_2026-10-18T23_28_47_Natasha - Upset, Clear and Serious_pvc_sp100_s50_sb75_v4.mp3"

);


const ellieFinalReplyVoice = new Audio(
    "audio/ElevenLabs_2026-10-19T17_03_31_Isla Sterling - Engaging Audiobook Narrator_pvc_sp91_s29_sb56_v4.mp3"
);

ellieFinalReplyVoice.volume = 0.9;
ellieFinalReplyVoice.preload = "auto";


ravenCarReplyVoice.volume = 0.9;

ravenCarReplyVoice.preload = "auto";





[

    hostNewGreeting,

    hostJoke,

    hostCloseupIntro,

    hostFinalQuestion

].forEach(audio => {

    audio.volume = 0.85;

    audio.preload = "auto";

});

const ravenHeavyBreathing = document.getElementById("raven-heavy-breathing");

const ravenHeartbeat = document.getElementById("raven-heartbeat");

const tvStaticNoise = document.getElementById("tv-static-noise");



const episode2Text = document.getElementById("episode2-text");

const episode2Continue = document.getElementById("episode2-continue");



const nextScene = document.getElementById("next-scene");

const phoneVideo = document.getElementById("phone-video");

const phoneText = document.getElementById("phone-text");

const phoneContinue = document.getElementById("phone-continue");

const phoneObjective = document.getElementById("phone-objective");

const phoneBack = document.getElementById("phone-back");



const phoneNotificationScene = document.getElementById("phone-notification-scene");

const phoneNotificationText = document.getElementById("phone-notification-text");

const phoneNotificationContinue = document.getElementById("phone-notification-continue");

const notificationBack = document.getElementById("notification-back");



const bathroomScene = document.getElementById("bathroom-scene");

const bathroomImage = document.getElementById("bathroom-image");

const bathroomText = document.getElementById("bathroom-text");

const bathroomContinue = document.getElementById("bathroom-continue");

const takePillButton = document.getElementById("take-pill-button");



const toothbrushScene = document.getElementById("toothbrush-scene");

const toothbrushImage = document.getElementById("toothbrush-image");



const tvStaticScene = document.getElementById("tv-static-scene");

const tvStaticVideo = document.getElementById("tv-static-image");

const tvStaticDialogue = document.getElementById("tv-static-dialogue");

const tvStaticText = document.getElementById("tv-static-text");



const mysteriousManScene = document.getElementById("mysterious-man-scene");

const mysteriousManVideo = document.getElementById("mysterious-man-video");

const watchManButton = document.getElementById("watch-man-button");

const mysteriousManDialogue = document.getElementById("mysterious-man-dialogue");

const mysteriousManText = document.getElementById("mysterious-man-text");



const shadowAudienceScene = document.getElementById("shadow-audience-scene");

const shadowAudienceText = document.getElementById("shadow-audience-text");



const hostCloseupScene = document.getElementById("host-closeup-scene");

const hostCloseupVideo = document.getElementById("host-closeup-video");

const hostCloseupDialogue = document.getElementById("host-closeup-dialogue");

const hostCloseupText = document.getElementById("host-closeup-text");



const glowingEyesScene = document.getElementById("glowing-eyes-scene");

const glowingEyesVideo = document.getElementById("glowing-eyes-video");

const backAwayPrompt = document.getElementById("back-away-prompt");

const backAwayProgress = document.getElementById("back-away-progress");



const sinisterHostScene = document.getElementById("sinister-host-scene");

const sinisterHostVideo = document.getElementById("sinister-host-video");



const tvTurnOffScene = document.getElementById("tv-turn-off-scene");

const tvTurnOffVideo = document.getElementById("tv-turn-off-video");



const episode1Link = document.getElementById("episode1-link");



// ==========================================

// ELLIE PHONE CALL

// ==========================================



const elliePhoneCallScene = document.getElementById("ellie-phone-call-scene");

const elliePhoneCallText = document.getElementById("ellie-phone-call-text");

const answerEllieButton = document.getElementById("answer-ellie-button");



const elliePhoneRingtone = document.getElementById("ellie-phone-ringtone");

const ravenHelloVoice = document.getElementById("raven-hello-voice");

const ravenPhoneReplyVoice = document.getElementById("raven-phone-reply-voice");

const elliePhoneVoice = document.getElementById("ellie-phone-voice");



const ellieBedroomPOV = document.getElementById("ellie-bedroom-pov");

const ellieTVGlanceImage = document.getElementById("ellie-tv-glance-image");

const glanceTVButton = document.getElementById("glance-tv-button");

const continueEllieConversation = document.getElementById("continue-ellie-conversation");



const ellieSeriousVoice = document.getElementById("ellie-serious-voice");

const ravenWaitWhatVoice = document.getElementById("raven-wait-what-voice");

const ellieShoulderVoice = document.getElementById("ellie-shoulder-voice");



// SOFT HORROR MUSIC



const ellieCallAtmosphere = document.getElementById("ellie-call-atmosphere");



// PARTY PHOTOS



const partyPhotosScene = document.getElementById("party-photos-scene");

const partyPhotoImage = document.getElementById("party-photo-image");

const partyPhotoText = document.getElementById("party-photo-text");

const partyScrollButton = document.getElementById("party-scroll-button");





const partyTVGlanceButton = document.createElement("button");



partyTVGlanceButton.id = "party-tv-glance-button";

partyTVGlanceButton.textContent = "Glance at TV";

partyTVGlanceButton.hidden = true;

partyTVGlanceButton.type = "button";



partyPhotosScene.appendChild(partyTVGlanceButton);



let partyTVGlanceActive = false;



partyTVGlanceButton.addEventListener("click", () => {

    if (partyPhotosScene.hidden) return;



    partyTVGlanceActive = !partyTVGlanceActive;



    if (partyTVGlanceActive) {

        partyPhotoImage.src = ellieTVGlanceImage.src;

        partyTVGlanceButton.textContent = "Look at Phone";

    } else {

        partyPhotoImage.src = partyPhotos[partyPhotoIndex];

        partyTVGlanceButton.textContent = "Glance at TV";

    }

});





const partyPhotos = [

    "images/Late-Night Party Glow from Bed.jpg",

    "images/Cozy Night Party From Bed.jpg",

    "images/Midnight Party on the Phone.jpg"

];



// ==========================================

// STORY NARRATION

// ==========================================



const episode2Narration =

    "Morning light flooded the room, but it didn’t bring the relief I’d hoped for. " +

    "The brightness felt invasive, highlighting the grit in my eyes and the dull throb behind my temples. " +

    "I lay there longer than I meant to before finally forcing the covers off.";



const phoneNarration =

    "My phone buzzed against the nightstand.";



const notificationNarration =

    "I picked up my phone and glanced at the notification.";



const campusNarration =

    "I had time but did not want to step foot on campus anymore. " +

    "However, I dragged myself out of bed.";



const medicineNarration =

    "I hated that I missed my dose last night, but maybe that explained why I thought I had seen things.";



const normalNarration =

    '“Normal,” I told myself. “Just feel normal.”';



const tvNarration =

    "I stepped into the room. The television was on, its screen flickering with static. But I hadn't turned it on.";



const mysteriousManNarration =

    "An old talk show filled the screen—grainy, washed-out footage that looked like it had been pulled from a vault forty years ago. A man in a sharp grey suit...";



const shadowAudienceNarration =

    "Laughter swelled around him, but when the camera panned, " +

    "I couldn't see the audience. They were all just shadow figures....";



const hostGreeting = "“Good morning, Ashervale.”";



const hostJokeDialogue =

    "“You know, folks, they say you're never truly alone. " +

    "Isn't that comforting? Even when you lock your doors!”";



const hostCloseupIntroDialogue =

    "“But tell me something...”";



const hostQuestion =

    "“You ever feel like someone’s watching?”";



const elliePhoneRingNarration =

    "My phone rang, startling me.";



const ravenHelloDialogue = "“Hello?”";



const elliePhoneDialogue =

    "“Hey, Raven—it’s Ellie. " +

    "Just checking in. How’s that graduation hangover treating you..Are you okay?”";





const ravenPhoneReplyDialogue =

    "“It’s... rough. Ellie, what happened last night? I don’t remember leaving.”";



// ==========================================

// GAME STATE

// ==========================================



let gameStarted = false;

let audioEnabled = false;



let glitchTimer = null;

let glitchResetTimer = null;

let musicFadeTimer = null;

let yawnTimer = null;

let typingTimer = null;



let bathroomTransitionStarted = false;

let medicineStage = 0;

let campusSceneStage = 0;

let phoneSceneEntered = false;



let bathroomImageTimer = null;

let medicinePauseTimer = null;



let horrorSequenceStarted = false;

let mysteriousManStarted = false;

let shadowAudienceStarted = false;

let hostCloseupStarted = false;

let glowingEyesStarted = false;

let sinisterHostStarted = false;

let tvTurnOffStarted = false;



let backAwayTimer = null;

let backAwayPresses = 0;

let backAwayReady = false;

let backAwayFinishing = false;



let ellieCallStarted = false;

let ellieCallAnswered = false;



let tvGlanceUsed = false;

let tvGlanceActive = false;

let ellieFinishedSpeaking = false;

let ellieConversationAdvanced = false;



let ellieRevelationStarted = false;

let partyPhotoIndex = 0;

let partyPhotoChanging = false;



const REQUIRED_BACK_AWAY_PRESSES = 6;

const BACK_AWAY_START_SCALE = 1.12;

const BACK_AWAY_END_SCALE = 1;

const SINISTER_HOST_DURATION = 5000;

const TV_OFF_TIME = 2.0;



// ==========================================

// AUDIO SETTINGS

// ==========================================



menuMusic.volume = 0.45;



calmMusic.volume = 0;

calmMusic.loop = true;



typingSound.volume = 0.12;

typingSound.loop = true;



ravenYawn.volume = 0.45;

phoneVibration.volume = 0.45;



cabinetSound.volume = 0.65;

takingPillsSound.volume = 0.65;

ravenNormalVoice.volume = 0.85;

cabinetCloseSound.volume = 0.65;



horrorStaticSound.volume = 0.75;



manSuspenseMusic.volume = 0.28;

manSuspenseMusic.loop = true;



audienceLaughTrack.volume = 0.20;

audienceLaughTrack.loop = false;



hostGreetingVoice.volume = 0.85;

hostQuestionVoice.volume = 0.85;



ravenHeavyBreathing.volume = 0.65;

ravenHeavyBreathing.loop = true;



ravenHeartbeat.volume = 1.0;

ravenHeartbeat.loop = true;



tvStaticNoise.volume = 0.30;

tvStaticNoise.loop = true;



elliePhoneRingtone.volume = 0.8;

elliePhoneRingtone.loop = true;



ravenHelloVoice.volume = 0.9;

ravenPhoneReplyVoice.volume = 0.9;

elliePhoneVoice.volume = 0.9;



ellieSeriousVoice.volume = 0.9;

ravenWaitWhatVoice.volume = 0.9;

ellieShoulderVoice.volume = 0.9;



ellieCallAtmosphere.volume = 0.12;

ellieCallAtmosphere.loop = true;



// ==========================================

// AUDIO HELPERS

// ==========================================



function playSound(audio) {

    if (!audio) return;



    audio.pause();

    audio.currentTime = 0;



    const playPromise = audio.play();



    if (playPromise && typeof playPromise.catch === "function") {

        playPromise.catch((error) => {

            console.warn("Audio could not play:", audio.id, error);

        });

    }

}



function stopSound(audio) {

    if (!audio) return;



    audio.pause();

    audio.currentTime = 0;

}



function stopPhoneEffects() {

    phoneVideo.pause();

    stopSound(phoneVibration);

}



// ==========================================

// MAIN MENU AUDIO

// ==========================================



function enableMenuAudio() {

    if (audioEnabled || gameStarted) return;



    audioEnabled = true;



    menuMusic.play()

        .then(() => {

            audioHint.hidden = true;

        })

        .catch(() => {

            audioEnabled = false;

        });

}



titleScreen.addEventListener("pointerdown", enableMenuAudio);



titleScreen.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {

        enableMenuAudio();

    }

});



// ==========================================

// HOW TO PLAY

// ==========================================



helpButton.addEventListener("click", () => {

    const isHidden = helpText.hidden;



    helpText.hidden = !isHidden;



    helpButton.setAttribute(

        "aria-expanded",

        String(isHidden)

    );

});



// ==========================================

// RANDOM MAIN MENU GLITCH

// ==========================================



function triggerMenuGlitch() {

    if (gameStarted || titleScreen.hidden) return;



    titleScreen.classList.remove("menu-glitch");

    void titleScreen.offsetWidth;

    titleScreen.classList.add("menu-glitch");



    glitchResetTimer = setTimeout(() => {

        titleScreen.classList.remove("menu-glitch");

    }, 230);

}



function scheduleMenuGlitch() {

    if (gameStarted) return;



    const delay = 3000 + Math.random() * 5000;



    glitchTimer = setTimeout(() => {

        triggerMenuGlitch();

        scheduleMenuGlitch();

    }, delay);

}



const reducedMotion = window.matchMedia(

    "(prefers-reduced-motion: reduce)"

).matches;



if (!reducedMotion) {

    scheduleMenuGlitch();

}



// ==========================================

// MUSIC TRANSITION

// ==========================================



function transitionToCalmMusic() {

    clearInterval(musicFadeTimer);



    const duration = 5500;

    const interval = 50;

    const steps = duration / interval;



    const startingEerieVolume = menuMusic.volume;

    const targetCalmVolume = 0.35;



    let step = 0;



    calmMusic.volume = 0;

    calmMusic.currentTime = 0;

    calmMusic.play().catch(() => {});



    musicFadeTimer = setInterval(() => {

        step++;



        const progress = Math.min(step / steps, 1);



        menuMusic.volume =

            startingEerieVolume *

            Math.cos(progress * Math.PI / 2);



        calmMusic.volume =

            targetCalmVolume *

            Math.sin(progress * Math.PI / 2);



        if (progress >= 1) {

            clearInterval(musicFadeTimer);

            musicFadeTimer = null;



            stopSound(menuMusic);

            calmMusic.volume = targetCalmVolume;

        }

    }, interval);

}



// ==========================================

// TYPEWRITER

// ==========================================



function stopTyping() {

    clearInterval(typingTimer);

    typingTimer = null;

    stopSound(typingSound);

}



function typeNarration(text, element, button, speed = 40) {

    stopTyping();



    element.textContent = "";



    button.hidden = true;

    button.disabled = true;



    let index = 0;



    playSound(typingSound);



    typingTimer = setInterval(() => {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

        } else {

            stopTyping();



            button.disabled = false;

            button.hidden = false;

        }

    }, speed);

}



// ==========================================

// SCENE FADE OVERLAY

// ==========================================



const sceneFadeOverlay = document.createElement("div");

sceneFadeOverlay.id = "scene-fade-overlay";

sceneFadeOverlay.setAttribute("aria-hidden", "true");

document.body.appendChild(sceneFadeOverlay);



// ==========================================

// OBJECTIVES

// ==========================================



function hidePhoneObjective() {

    phoneObjective.hidden = true;

    phoneObjective.disabled = true;

}



function showPhoneObjective() {

    phoneObjective.hidden = false;

    phoneObjective.disabled = false;

}



function hideTakePillObjective() {

    takePillButton.hidden = true;

    takePillButton.disabled = true;

}



function showTakePillObjective() {

    takePillButton.hidden = false;

    takePillButton.disabled = false;

}



// ==========================================

// START EPISODE 2

// ==========================================



startButton.addEventListener("click", () => {

    if (gameStarted) return;



    gameStarted = true;



    clearTimeout(glitchTimer);

    clearTimeout(glitchResetTimer);



    titleScreen.classList.remove("menu-glitch");

    titleScreen.hidden = true;

    menuVideo.pause();



    if (menuMusic.paused) {

        menuMusic.play().catch(() => {});

    }



    episodeScreen.classList.remove(

        "title-reveal",

        "darkness-rising",

        "title-flicker",

        "static-active",

        "static-fadeout"

    );



    episodeScreen.hidden = false;

    episodeScreen.classList.add("title-reveal");



    setTimeout(() => {

        episodeScreen.classList.add("darkness-rising");

    }, 2000);



    setTimeout(() => {

        transitionToCalmMusic();

    }, 2500);



    setTimeout(() => {

        episodeScreen.classList.remove("title-reveal");

        episodeScreen.classList.add("title-flicker");

    }, 6500);



    setTimeout(() => {

        episodeScreen.hidden = true;



        episodeScreen.classList.remove(

            "title-reveal",

            "darkness-rising",

            "title-flicker"

        );



        startBedroomScene();

    }, 8000);

});



// ==========================================

// SCENE 1 - RAVEN WAKES UP

// ==========================================



function startBedroomScene(showFullText = false) {

    clearTimeout(yawnTimer);

    stopTyping();



    stopSound(ravenYawn);

    stopSound(cabinetSound);

    stopSound(takingPillsSound);

    stopSound(ravenNormalVoice);

    stopSound(cabinetCloseSound);



    stopPhoneEffects();

    hidePhoneObjective();

    hideTakePillObjective();



    nextScene.hidden = true;

    phoneNotificationScene.hidden = true;

    bathroomScene.hidden = true;

    toothbrushScene.hidden = true;

    tvStaticScene.hidden = true;

    mysteriousManScene.hidden = true;

    shadowAudienceScene.hidden = true;

    hostCloseupScene.hidden = true;

    glowingEyesScene.hidden = true;

    sinisterHostScene.hidden = true;

    tvTurnOffScene.hidden = true;

    elliePhoneCallScene.hidden = true;

    partyPhotosScene.hidden = true;



    episode2Opening.hidden = false;

    episode2Opening.classList.add("scene-enter");



    episode2Continue.hidden = true;

    episode2Continue.disabled = true;



    if (showFullText) {

        episode2Text.textContent = episode2Narration;

        episode2Continue.disabled = false;

        episode2Continue.hidden = false;

    } else {

        typeNarration(

            episode2Narration,

            episode2Text,

            episode2Continue,

            35

        );

    }

}



// ==========================================

// FIRST YAWN

// ==========================================



episode2Continue.addEventListener("click", () => {

    if (episode2Continue.disabled) return;



    episode2Continue.disabled = true;

    episode2Continue.hidden = true;



    stopTyping();

    episode2Text.textContent = "";



    playSound(ravenYawn);



    clearTimeout(yawnTimer);



    yawnTimer = setTimeout(() => {

        stopSound(ravenYawn);

        episode2Opening.hidden = true;

        startPhoneScene();

    }, 2500);

});



// ==========================================

// SCENE 2 - PHONE BUZZING

// ==========================================



function startPhoneScene() {

    clearTimeout(yawnTimer);

    stopTyping();



    stopSound(ravenYawn);

    stopSound(cabinetSound);



    episode2Opening.hidden = true;

    phoneNotificationScene.hidden = true;

    bathroomScene.hidden = true;

    toothbrushScene.hidden = true;

    tvStaticScene.hidden = true;

    mysteriousManScene.hidden = true;

    shadowAudienceScene.hidden = true;

    hostCloseupScene.hidden = true;

    glowingEyesScene.hidden = true;

    sinisterHostScene.hidden = true;

    tvTurnOffScene.hidden = true;

    elliePhoneCallScene.hidden = true;

    partyPhotosScene.hidden = true;



    nextScene.hidden = false;



    nextScene.classList.remove("phone-zoom");

    void nextScene.offsetWidth;

    nextScene.classList.add("phone-zoom");



    showPhoneObjective();



    phoneVideo.currentTime = 0;

    phoneVideo.play().catch(() => {});



    playSound(phoneVibration);

    phoneSceneEntered = true;



    typeNarration(

        phoneNarration,

        phoneText,

        phoneContinue,

        55

    );

}



// ==========================================

// PHONE BACK BUTTON

// ==========================================



phoneBack.addEventListener("click", () => {

    if (!phoneSceneEntered) return;



    stopTyping();

    stopPhoneEffects();

    hidePhoneObjective();



    nextScene.hidden = true;

    startBedroomScene(true);

});



// ==========================================

// PICK UP PHONE

// ==========================================



function pickUpPhone() {

    if (nextScene.hidden) return;

    if (phoneObjective.disabled) return;



    phoneObjective.disabled = true;

    phoneContinue.disabled = true;

    phoneContinue.hidden = true;



    stopTyping();

    stopPhoneEffects();

    hidePhoneObjective();



    nextScene.hidden = true;

    startNotificationScene();

}



phoneObjective.addEventListener("click", pickUpPhone);



phoneContinue.addEventListener("click", () => {

    if (phoneContinue.disabled) return;

    pickUpPhone();

});



// ==========================================

// SCENE 3 - PHONE NOTIFICATION

// ==========================================



function startNotificationScene() {

    stopTyping();



    episode2Opening.hidden = true;

    nextScene.hidden = true;

    bathroomScene.hidden = true;

    toothbrushScene.hidden = true;

    tvStaticScene.hidden = true;

    mysteriousManScene.hidden = true;

    shadowAudienceScene.hidden = true;

    hostCloseupScene.hidden = true;

    glowingEyesScene.hidden = true;

    sinisterHostScene.hidden = true;

    tvTurnOffScene.hidden = true;

    elliePhoneCallScene.hidden = true;

    partyPhotosScene.hidden = true;



    phoneNotificationScene.hidden = false;



    campusSceneStage = 0;

    notificationBack.disabled = false;



    typeNarration(

        notificationNarration,

        phoneNotificationText,

        phoneNotificationContinue,

        45

    );

}



// ==========================================

// NOTIFICATION BACK

// ==========================================



notificationBack.addEventListener("click", () => {

    if (campusSceneStage === 2) return;



    stopTyping();

    phoneNotificationScene.hidden = true;

    campusSceneStage = 0;



    startPhoneScene();

});



// ==========================================

// SCENE 4 - CAMPUS THOUGHTS

// ==========================================



phoneNotificationContinue.addEventListener("click", () => {

    if (phoneNotificationContinue.disabled) return;



    if (campusSceneStage === 0) {

        campusSceneStage = 1;



        typeNarration(

            campusNarration,

            phoneNotificationText,

            phoneNotificationContinue,

            40

        );



        return;

    }



    if (campusSceneStage === 1) {

        campusSceneStage = 2;



        phoneNotificationContinue.disabled = true;

        phoneNotificationContinue.hidden = true;

        notificationBack.disabled = true;



        stopTyping();

        phoneNotificationText.textContent = "";



        playSound(ravenYawn);



        clearTimeout(yawnTimer);



        yawnTimer = setTimeout(() => {

            stopSound(ravenYawn);

            transitionToBathroom();

        }, 2500);

    }

});



// ==========================================

// SCENE 5 - BATHROOM TRANSITION

// ==========================================



function transitionToBathroom() {

    if (bathroomTransitionStarted) return;



    bathroomTransitionStarted = true;



    stopTyping();

    stopPhoneEffects();

    hidePhoneObjective();

    hideTakePillObjective();



    bathroomText.textContent = "";

    bathroomText.classList.remove("spoken-dialogue");



    bathroomContinue.hidden = true;

    bathroomContinue.disabled = true;



    bathroomImage.src =

        "images/Raven opening the medicine cabinet.jpg";



    sceneFadeOverlay.classList.add("fade-active");



    setTimeout(() => {

        phoneNotificationScene.hidden = true;



        bathroomScene.hidden = false;

        bathroomScene.classList.remove("bathroom-reveal");



        playSound(cabinetSound);



        setTimeout(() => {

            bathroomScene.classList.add("bathroom-reveal");

            sceneFadeOverlay.classList.remove("fade-active");



            setTimeout(() => {

                startMedicineSequence();

            }, 3000);

        }, 1800);

    }, 1500);

}



// ==========================================

// BATHROOM IMAGE TRANSITIONS

// ==========================================



function changeBathroomImage(imagePath, callback) {

    clearTimeout(bathroomImageTimer);



    bathroomImage.classList.remove("image-changing");

    bathroomImage.style.opacity = "0";



    bathroomImageTimer = setTimeout(() => {

        const preloadedImage = new Image();



        preloadedImage.onload = () => {

            bathroomImage.src = imagePath;



            bathroomImage.classList.remove("image-changing");

            void bathroomImage.offsetWidth;



            bathroomImage.style.opacity = "";

            bathroomImage.classList.add("image-changing");



            if (callback) callback();

        };



        preloadedImage.onerror = () => {

            console.error(

                "Could not load bathroom image:",

                imagePath

            );



            bathroomImage.style.opacity = "1";

        };



        preloadedImage.src = imagePath;

    }, 400);

}



// ==========================================

// RAVEN GRABS HER MEDICINE

// ==========================================



function startMedicineSequence() {

    medicineStage = 0;

    hideTakePillObjective();



    bathroomText.textContent = "";

    bathroomText.classList.remove("spoken-dialogue");



    bathroomContinue.hidden = true;

    bathroomContinue.disabled = true;



    changeBathroomImage(

        "images/Golden Medicine Cabinet Moment.jpg",

        () => {

            medicineStage = 1;



            medicinePauseTimer = setTimeout(() => {

                changeBathroomImage(

                    "images/Woods, Raven’s Prescription Bottle.jpg",

                    () => {

                        medicineStage = 2;

                        typeMedicineNarration();

                    }

                );

            }, 2000);

        }

    );

}



// ==========================================

// MEDICINE NARRATION

// ==========================================



function typeMedicineNarration() {

    stopTyping();



    bathroomText.textContent = "";

    bathroomContinue.hidden = true;

    bathroomContinue.disabled = true;



    hideTakePillObjective();



    let index = 0;

    playSound(typingSound);



    typingTimer = setInterval(() => {

        if (index < medicineNarration.length) {

            bathroomText.textContent +=

                medicineNarration.charAt(index);

            index++;

        } else {

            stopTyping();

            bathroomContinue.hidden = false;

            bathroomContinue.disabled = false;

        }

    }, 40);

}



// ==========================================

// CONTINUE AFTER MEDICINE NARRATION

// ==========================================



bathroomContinue.addEventListener("click", () => {

    if (bathroomContinue.disabled) return;

    if (medicineStage !== 2) return;



    bathroomContinue.hidden = true;

    bathroomContinue.disabled = true;



    stopTyping();

    bathroomText.textContent = "";



    changeBathroomImage(

        "images/Warm Dusk Medicine Cabinet Moment.jpg",

        () => {

            medicineStage = 3;



            medicinePauseTimer = setTimeout(() => {

                startNormalScene();

            }, 1000);

        }

    );

});



// ==========================================

// "JUST FEEL NORMAL"

// ==========================================



function startNormalScene() {

    if (medicineStage !== 3) return;



    medicineStage = 4;

    hideTakePillObjective();



    bathroomText.textContent = normalNarration;

    bathroomText.classList.add("spoken-dialogue");



    bathroomContinue.hidden = true;

    bathroomContinue.disabled = true;



    ravenNormalVoice.onended = null;



   ravenNormalVoice.onended = () => {
    ravenNormalVoice.onended = null;

    setTimeout(() => {
        showTakePillObjective();
    }, 100);
};



    playSound(ravenNormalVoice);

}



// ==========================================

// TAKE PILL

// ==========================================



takePillButton.addEventListener("click", () => {

    if (bathroomScene.hidden) return;

    if (medicineStage !== 4) return;

    if (takePillButton.disabled) return;



    hideTakePillObjective();



    bathroomText.textContent = "";

    bathroomText.classList.remove("spoken-dialogue");



    playSwallowingEffect();

});



// ==========================================

// SWALLOWING EFFECT

// ==========================================



function playSwallowingEffect() {

    if (medicineStage !== 4) return;



    medicineStage = 5;



    bathroomText.textContent = "";

    bathroomText.classList.remove("spoken-dialogue");



    takingPillsSound.onended = null;

    playSound(takingPillsSound);



    clearTimeout(medicinePauseTimer);



    medicinePauseTimer = setTimeout(() => {

        stopSound(takingPillsSound);

        closeMedicineCabinet();

    }, 1400);

}



// ==========================================

// CLOSE MEDICINE CABINET

// ==========================================



function closeMedicineCabinet() {

    if (medicineStage !== 5) return;



    medicineStage = 6;



    bathroomText.textContent = "";

    bathroomText.classList.remove("spoken-dialogue");



    changeBathroomImage(

        "images/Golden Hour Medicine Cabinet.jpg",

        () => {

            cabinetCloseSound.onended = null;



            cabinetCloseSound.onended = () => {

                cabinetCloseSound.onended = null;



                setTimeout(() => {

                    startToothbrushSequence();

                }, 1000);

            };



            playSound(cabinetCloseSound);

        }

    );

}



// ==========================================

// TOOTHBRUSH CINEMATIC

// ==========================================



function startToothbrushSequence() {

    if (horrorSequenceStarted) return;



    horrorSequenceStarted = true;



    stopTyping();

    hideTakePillObjective();



    bathroomScene.hidden = true;

    toothbrushScene.hidden = false;

    tvStaticScene.hidden = true;

    mysteriousManScene.hidden = true;

    shadowAudienceScene.hidden = true;

    hostCloseupScene.hidden = true;

    glowingEyesScene.hidden = true;

    sinisterHostScene.hidden = true;

    tvTurnOffScene.hidden = true;

    elliePhoneCallScene.hidden = true;

    partyPhotosScene.hidden = true;



    toothbrushImage.src =

        "images/Golden Hour Toothbrush Ritual.jpg";



    setTimeout(() => {

        triggerToothbrushScare();

    }, 2000);

}



// ==========================================

// TOOTHBRUSH DROP

// ==========================================



function triggerToothbrushScare() {

    stopSound(calmMusic);

    playSound(horrorStaticSound);



    changeHorrorImage(

        toothbrushImage,

        "images/Dropped Toothbrush.jpg"

    );



    setTimeout(() => {

        showRavenDistress();

    }, 2000);

}



// ==========================================

// RAVEN'S DISTRESS

// ==========================================



function showRavenDistress() {

    changeHorrorImage(

        toothbrushImage,

        "images/Moody Sunset Bathroom Reflection .jpg"

    );



    setTimeout(() => {

        showHauntedTelevision();

    }, 3000);

}



// ==========================================

// ANIMATED TELEVISION STATIC

// ==========================================



function showHauntedTelevision() {

    sceneFadeOverlay.classList.add("fade-active");



    setTimeout(() => {

        toothbrushScene.hidden = true;

        tvStaticScene.hidden = false;



        tvStaticVideo.pause();

        tvStaticVideo.currentTime = 0;

        tvStaticVideo.muted = true;

        tvStaticVideo.loop = true;



        tvStaticVideo.play().catch((error) => {

            console.warn(

                "Animated TV static could not play:",

                error

            );

        });



        tvStaticDialogue.hidden = true;

        tvStaticText.textContent = "";



        sceneFadeOverlay.classList.remove("fade-active");



        setTimeout(() => {

            showTVNarration();

        }, 4000);

    }, 1200);

}



// ==========================================

// RAVEN NOTICES TV

// ==========================================



function showTVNarration() {

    tvStaticDialogue.hidden = false;

    tvStaticText.textContent = tvNarration;



    setTimeout(() => {

        transitionToMysteriousMan();

    }, 4500);

}



// ==========================================

// MYSTERIOUS HOST

// ==========================================



function transitionToMysteriousMan() {

    if (mysteriousManStarted) return;



    mysteriousManStarted = true;

    sceneFadeOverlay.classList.add("fade-active");



    setTimeout(() => {

        stopSound(horrorStaticSound);

        tvStaticVideo.pause();



        tvStaticScene.hidden = true;

        mysteriousManScene.hidden = false;



        mysteriousManScene.classList.remove("man-zoom-out");

        void mysteriousManScene.offsetWidth;

        mysteriousManScene.classList.add("man-zoom-out");



        watchManButton.hidden = true;

        watchManButton.disabled = false;



        mysteriousManDialogue.hidden = true;

        mysteriousManText.textContent = "";



        mysteriousManVideo.pause();

        mysteriousManVideo.currentTime = 0;

        mysteriousManVideo.muted = true;

        mysteriousManVideo.loop = true;



        mysteriousManVideo.play().catch((error) => {

            console.warn("Host video could not play:", error);

        });



        manSuspenseMusic.volume = 0.28;



        if (manSuspenseMusic.paused) {

            manSuspenseMusic.play().catch(() => {});

        }



        sceneFadeOverlay.classList.remove("fade-active");



        setTimeout(() => {

            watchManButton.hidden = false;

        }, 3000);

    }, 1200);

}



// ==========================================

// WATCH THE MAN

// ==========================================



watchManButton.addEventListener("click", () => {

    if (mysteriousManScene.hidden) return;

    if (shadowAudienceStarted) return;



    watchManButton.hidden = true;

    watchManButton.disabled = true;



    mysteriousManDialogue.hidden = false;

    mysteriousManText.textContent = mysteriousManNarration;



   setTimeout(() => {

    playHostOpening();

}, 4500);

});

function playHostOpening() {

    mysteriousManDialogue.hidden = false;

    mysteriousManText.textContent = hostGreeting;



    hostNewGreeting.onended = () => {

        hostNewGreeting.onended = null;



        setTimeout(() => {

            mysteriousManText.textContent = hostJokeDialogue;



            hostJoke.onended = () => {

                hostJoke.onended = null;

                showShadowAudience();

            };



            playSound(hostJoke);

        }, 350);

    };



    playSound(hostNewGreeting);

}

// ==========================================

// SHADOW AUDIENCE

// ==========================================



function showShadowAudience() {

    if (shadowAudienceStarted) return;



    shadowAudienceStarted = true;

    sceneFadeOverlay.classList.add("fade-active");



    setTimeout(() => {

        mysteriousManVideo.pause();



        mysteriousManScene.hidden = true;

        shadowAudienceScene.hidden = false;



        shadowAudienceText.textContent =

            shadowAudienceNarration;



        ravenHeartbeat.volume = 1.0;

        ravenHeartbeat.loop = true;

        playSound(ravenHeartbeat);



        manSuspenseMusic.volume = 0.12;



        audienceLaughTrack.volume = 0.20;

        audienceLaughTrack.loop = false;

        playSound(audienceLaughTrack);



        shadowAudienceScene.classList.remove("audience-zoom-out");

        void shadowAudienceScene.offsetWidth;

        shadowAudienceScene.classList.add("audience-zoom-out");



        sceneFadeOverlay.classList.remove("fade-active");



        setTimeout(() => {

            transitionToHostCloseup();

        }, 5000);

    }, 700);

}



// ==========================================

// HOST CLOSEUP

// ==========================================





 // ==========================================

 // HOST CLOSEUP

 // ==========================================



function transitionToHostCloseup() {

    if (hostCloseupStarted) return;



    hostCloseupStarted = true;

    sceneFadeOverlay.classList.add("fade-active");



    setTimeout(() => {

        shadowAudienceScene.hidden = true;

        hostCloseupScene.hidden = false;



        hostCloseupVideo.pause();

        hostCloseupVideo.currentTime = 0;

        hostCloseupVideo.muted = true;

        hostCloseupVideo.loop = true;



        hostCloseupVideo.play().catch((error) => {

            console.warn("Host close-up video could not play:", error);

        });



        hostCloseupDialogue.hidden = true;

        hostCloseupText.textContent = "";



        manSuspenseMusic.volume = 0.12;



        if (manSuspenseMusic.paused) {

            manSuspenseMusic.play().catch(() => {});

        }



        sceneFadeOverlay.classList.remove("fade-active");



        setTimeout(() => {

            showHostGreeting();

        }, 1200);



    }, 700);

}



// ==========================================

// BUT TELL ME SOMETHING...

// ==========================================



function showHostGreeting() {

    stopSound(audienceLaughTrack);



    hostCloseupDialogue.hidden = false;

    hostCloseupText.textContent = hostCloseupIntroDialogue;



    hostCloseupIntro.onended = () => {

        hostCloseupIntro.onended = null;



        setTimeout(() => {

            showHostQuestion();

        }, 850);

    };



    playSound(hostCloseupIntro);

}



// ==========================================

// YOU EVER FEEL LIKE SOMEONE'S WATCHING?

// ==========================================



function showHostQuestion() {

    hostCloseupDialogue.hidden = false;

    hostCloseupText.textContent = hostQuestion;



    hostFinalQuestion.onended = () => {

        hostFinalQuestion.onended = null;

        showGlowingEyes();

    };



    playSound(hostFinalQuestion);

}





// ==========================================

// GLOWING RED EYES

// ==========================================



function showGlowingEyes() {

    if (glowingEyesStarted) return;



    glowingEyesStarted = true;



    hostCloseupVideo.pause();

    stopSound(audienceLaughTrack);



    hostCloseupScene.hidden = true;

    glowingEyesScene.hidden = false;



    stopSound(ravenHeavyBreathing);



    manSuspenseMusic.volume = 0.12;



    if (manSuspenseMusic.paused) {

        manSuspenseMusic.play().catch(() => {});

    }



    backAwayPresses = 0;

    backAwayReady = false;

    backAwayFinishing = false;



    backAwayPrompt.hidden = true;

    backAwayProgress.textContent =

        `0 / ${REQUIRED_BACK_AWAY_PRESSES}`;



    glowingEyesVideo.pause();

    glowingEyesVideo.currentTime = 0;

    glowingEyesVideo.muted = true;

    glowingEyesVideo.loop = true;



    glowingEyesVideo.style.transition = "none";

    glowingEyesVideo.style.transform =

        `scale(${BACK_AWAY_START_SCALE})`;



    void glowingEyesVideo.offsetWidth;



    glowingEyesVideo.style.transition =

        "transform 0.18s ease-out";



    glowingEyesVideo.play().catch((error) => {

        console.warn(

            "Blinking eyes video could not play:",

            error

        );

    });



    clearTimeout(backAwayTimer);



    backAwayTimer = setTimeout(() => {

        if (glowingEyesScene.hidden) return;

        if (sinisterHostStarted) return;



        backAwayReady = true;

        backAwayPrompt.hidden = false;

    }, 2000);

}



// ==========================================

// SPACEBAR INTERACTION

// ==========================================



document.addEventListener("keydown", (event) => {

    if (event.code !== "Space") return;

    if (event.repeat) return;



    if (!backAwayReady) return;

    if (backAwayFinishing) return;

    if (glowingEyesScene.hidden) return;



    event.preventDefault();



    backAwayPresses++;



    backAwayProgress.textContent =

        `${backAwayPresses} / ${REQUIRED_BACK_AWAY_PRESSES}`;



    const progress = Math.min(

        backAwayPresses / REQUIRED_BACK_AWAY_PRESSES,

        1

    );



    const zoom =

        BACK_AWAY_START_SCALE -

        (BACK_AWAY_START_SCALE - BACK_AWAY_END_SCALE) *

        progress;



    glowingEyesVideo.style.transform =

        `scale(${zoom.toFixed(3)})`;



    if (backAwayPresses >= REQUIRED_BACK_AWAY_PRESSES) {

        backAwayReady = false;

        backAwayFinishing = true;



        backAwayPrompt.hidden = true;



        clearTimeout(backAwayTimer);

        backAwayTimer = null;



        setTimeout(() => {

            glowingEyesVideo.pause();

            showSinisterHost();

        }, 250);

    }

});



// ==========================================

// SINISTER HOST

// ==========================================



function showSinisterHost() {

    if (sinisterHostStarted) return;



    sinisterHostStarted = true;



    backAwayReady = false;

    backAwayFinishing = false;



    clearTimeout(backAwayTimer);

    backAwayTimer = null;



    backAwayPrompt.hidden = true;



    glowingEyesVideo.pause();

    glowingEyesScene.hidden = true;



    sinisterHostScene.hidden = false;



    sinisterHostVideo.pause();

    sinisterHostVideo.currentTime = 0;

    sinisterHostVideo.muted = true;

    sinisterHostVideo.loop = true;



    sinisterHostVideo.play().catch((error) => {

        console.warn(

            "Sinister host video could not play:",

            error

        );

    });



    ravenHeavyBreathing.volume = 0.65;

    ravenHeavyBreathing.loop = true;

    playSound(ravenHeavyBreathing);



    ravenHeartbeat.volume = 1.0;

    manSuspenseMusic.volume = 0.12;



    if (manSuspenseMusic.paused) {

        manSuspenseMusic.play().catch(() => {});

    }



    sinisterHostScene.classList.remove("sinister-host-zoom");

    void sinisterHostScene.offsetWidth;

    sinisterHostScene.classList.add("sinister-host-zoom");



    setTimeout(() => {

        showTVTurnOff();

    }, SINISTER_HOST_DURATION);

}



// ==========================================

// TV TURNS OFF

// ==========================================



function showTVTurnOff() {

    if (tvTurnOffStarted) return;



    tvTurnOffStarted = true;



    sinisterHostVideo.pause();

    sinisterHostScene.hidden = true;



    tvTurnOffScene.hidden = false;



    ravenHeavyBreathing.volume = 0.65;

    ravenHeavyBreathing.loop = true;



    if (ravenHeavyBreathing.paused) {

        ravenHeavyBreathing.play().catch((error) => {

            console.warn(

                "Raven breathing could not continue:",

                error

            );

        });

    }



    stopSound(ravenHeartbeat);

    stopSound(manSuspenseMusic);



    tvStaticNoise.volume = 0.45;

    tvStaticNoise.loop = true;

    playSound(tvStaticNoise);



    tvTurnOffVideo.pause();

    tvTurnOffVideo.currentTime = 0;

    tvTurnOffVideo.muted = true;

    tvTurnOffVideo.loop = false;



    let staticStopped = false;



    function stopTelevisionStatic() {

        if (staticStopped) return;



        staticStopped = true;

        stopSound(tvStaticNoise);

    }



    function checkTelevisionTime() {

        if (tvTurnOffVideo.currentTime >= TV_OFF_TIME) {

            stopTelevisionStatic();



            tvTurnOffVideo.removeEventListener(

                "timeupdate",

                checkTelevisionTime

            );

        }

    }



    tvTurnOffVideo.addEventListener(

        "timeupdate",

        checkTelevisionTime

    );



    tvTurnOffVideo.onended = null;



    tvTurnOffVideo.onended = () => {

        tvTurnOffVideo.onended = null;



        tvTurnOffVideo.removeEventListener(

            "timeupdate",

            checkTelevisionTime

        );



        stopTelevisionStatic();



        setTimeout(() => {

            startElliePhoneCall();

        }, 1200);

    };



    tvTurnOffVideo.play().catch((error) => {

        console.warn(

            "TV turn-off video could not play:",

            error

        );



        tvTurnOffVideo.removeEventListener(

            "timeupdate",

            checkTelevisionTime

        );



        stopTelevisionStatic();

    });

}



// ==========================================

// ELLIE CALLS RAVEN

// ==========================================



function startElliePhoneCall() {

    if (ellieCallStarted) return;



    ellieCallStarted = true;

    ellieCallAnswered = false;



    tvGlanceUsed = false;

    tvGlanceActive = false;

    ellieFinishedSpeaking = false;

    ellieConversationAdvanced = false;



    tvTurnOffScene.hidden = true;

    elliePhoneCallScene.hidden = false;

    partyPhotosScene.hidden = true;



    ellieBedroomPOV.hidden = false;

    ellieTVGlanceImage.hidden = true;



    glanceTVButton.hidden = true;

    glanceTVButton.disabled = true;



    continueEllieConversation.hidden = true;

    continueEllieConversation.disabled = true;



    ravenHeavyBreathing.volume = 0.45;



    elliePhoneCallText.textContent =

        elliePhoneRingNarration;



    answerEllieButton.hidden = true;

    answerEllieButton.disabled = false;



    elliePhoneRingtone.volume = 0.8;

    elliePhoneRingtone.loop = true;



    playSound(elliePhoneRingtone);



    setTimeout(() => {

        if (!ellieCallAnswered) {

            answerEllieButton.hidden = false;

        }

    }, 1500);

}



// ==========================================

// RAVEN ANSWERS ELLIE

// ==========================================



answerEllieButton.addEventListener("click", () => {

    if (!ellieCallStarted) return;

    if (ellieCallAnswered) return;



    ellieCallAnswered = true;



    answerEllieButton.hidden = true;

    answerEllieButton.disabled = true;



    stopSound(elliePhoneRingtone);

    stopSound(ravenHeavyBreathing);



    // Start soft horror music when Raven answers.



    ellieCallAtmosphere.volume = 0.12;

    ellieCallAtmosphere.loop = true;

    playSound(ellieCallAtmosphere);



    showCinematicPhoneDialogue(
    elliePhoneCallText,
    "Raven",
    ravenHelloDialogue
);



    // No programmed delay between Raven and Ellie.







ravenHelloVoice.onended = null;

playSound(ravenHelloVoice);

setTimeout(() => {
    playEllieDialogue();
}, 1800);







});



// ==========================================

// ELLIE'S GREETING

// ==========================================



function playEllieDialogue() {

    ellieFinishedSpeaking = false;

    ellieConversationAdvanced = false;



    tvGlanceUsed = false;

    tvGlanceActive = false;



    ellieBedroomPOV.hidden = false;

    ellieTVGlanceImage.hidden = true;



    showCinematicPhoneDialogue(
    elliePhoneCallText,
    "Ellie",
    elliePhoneDialogue
);



    glanceTVButton.hidden = false;

    glanceTVButton.disabled = false;



    continueEllieConversation.hidden = false;

    continueEllieConversation.disabled = true;



    elliePhoneVoice.onended = null;



    elliePhoneVoice.onended = () => {

        elliePhoneVoice.onended = null;



        ellieFinishedSpeaking = true;

        continueEllieConversation.disabled = false;

    };



    playSound(elliePhoneVoice);

}



// ==========================================

// GLANCE AT TV

// ==========================================



glanceTVButton.addEventListener("click", () => {

    if (elliePhoneCallScene.hidden) return;

    if (!ellieCallAnswered) return;

    if (ellieConversationAdvanced) return;

    if (tvGlanceActive) return;



    tvGlanceUsed = true;

    tvGlanceActive = true;



    ellieBedroomPOV.hidden = true;

    ellieTVGlanceImage.hidden = false;



    glanceTVButton.hidden = true;

    glanceTVButton.disabled = true;

});



// ==========================================

// CONTINUE CONVERSATION

// ==========================================



continueEllieConversation.addEventListener("click", () => {

    if (elliePhoneCallScene.hidden) return;

    if (!ellieCallAnswered) return;

    if (ellieConversationAdvanced) return;

    if (!ellieFinishedSpeaking) return;



    ellieConversationAdvanced = true;



    glanceTVButton.hidden = true;

    glanceTVButton.disabled = true;



    continueEllieConversation.hidden = true;

    continueEllieConversation.disabled = true;



    ellieTVGlanceImage.hidden = true;

    ellieBedroomPOV.hidden = false;



    tvGlanceActive = false;



    showRavenBedNarration();

});



// ==========================================

// RAVEN SITS ON BED

// ==========================================



function showRavenBedNarration() {

    elliePhoneCallText.textContent =

        typeof ravenBedNarration !== "undefined" ? ravenBedNarration : "";



    setTimeout(() => {

        playRavenPhoneReply();

    }, 1800);

}



// ==========================================

// RAVEN ASKS WHAT HAPPENED

// ==========================================



function playRavenPhoneReply() {

   showCinematicPhoneDialogue(
    elliePhoneCallText,
    "Raven",
    ravenPhoneReplyDialogue
);



    ravenPhoneReplyVoice.onended = null;



    ravenPhoneReplyVoice.onended = () => {
        ravenPhoneReplyVoice.onended = null;

        setTimeout(() => {

            playEllieSeriousResponse();
        }, 200);

    };



    playSound(ravenPhoneReplyVoice);

}



// ==========================================

// ELLIE'S SERIOUS RESPONSE

// ==========================================



function playEllieSeriousResponse() {
    showCinematicPhoneDialogue(
    elliePhoneCallText,
     "Ellie",
    "“That’s actually why I called. You scared me, Rae. " +
    "One second, we were talking, and the next... " +
    "you just checked out. You stopped responding. " +
    "You were staring at nothing.”"
);

    if (ellieRevelationStarted) return;



    ellieRevelationStarted = true;


    ellieSeriousVoice.onended = null;



    ellieSeriousVoice.onended = () => {

        ellieSeriousVoice.onended = null;

        showRavenChill();

    };



    playSound(ellieSeriousVoice);

}



// ==========================================

// RAVEN FEELS A CHILL

// ==========================================



function showRavenChill() {

    elliePhoneCallText.textContent =

        "A chill washed down my spine.";



    setTimeout(() => {

        if (elliePhoneCallScene.hidden) return;



        playRavenWaitWhat();
        showCinematicPhoneDialogue(
    elliePhoneCallText,
    "Raven",
    "“Wait, what?”"
);

    }, 1300);

}



// ==========================================

// RAVEN: "WAIT, WHAT?"

// ==========================================



function playRavenWaitWhat() {

    elliePhoneCallText.textContent =

        "“Wait, what?”";



    ravenWaitWhatVoice.onended = null;



    ravenWaitWhatVoice.onended = () => {

        ravenWaitWhatVoice.onended = null;



        setTimeout(() => {

            playEllieShoulderResponse();
            showCinematicPhoneDialogue(
    elliePhoneCallText,
    "Ellie",
    '“I had to tap your shoulder to get your attention. ' +
    'Even then, you seemed off. ' +
    'Like you were looking through me instead of at me.”'
);

        }, 150);

    };



    playSound(ravenWaitWhatVoice);

}



// ==========================================

// ELLIE DESCRIBES TAPPING RAVEN

// ==========================================



function playEllieShoulderResponse() {

    elliePhoneCallText.textContent =

        '“I had to tap your shoulder to get your attention. ' +

        'Even then, you seemed off. ' +

        'Like you were looking through me instead of at me.”';



    ellieShoulderVoice.onended = null;



    ellieShoulderVoice.onended = () => {

        ellieShoulderVoice.onended = null;



        // Go directly to party photos.

        // The old flashback scene is removed.



        startPartyPhotoSequence();

    };



    playSound(ellieShoulderVoice);

}



// ==========================================

// PARTY PHOTO SCROLLING

// ==========================================



function startPartyPhotoSequence() {
    partyPhotoIndex = 0;
    partyPhotoChanging = false;
    partyScrollButton.disabled = false;
    partyScrollButton.hidden = true;
    partyTVGlanceButton.hidden = true;
    partyTVGlanceActive = false;

    partyPhotoImage.classList.remove("photo-changing");
    partyPhotoImage.style.filter = "";
    partyPhotoImage.src = partyPhotos[0];

    elliePhoneCallScene.hidden = true;
    partyPhotosScene.hidden = false;
    partyPhotoText.textContent =
        "My thumb was already scrolling, viewing pictures " +
        "from the party, faces frozen mid-laugh, " +
        "people dancing.";

    setTimeout(() => {
        if (partyPhotosScene.hidden || partyPhotoIndex !== 0) return;
        partyPhotoText.textContent = "“I don't remember any of that.”";

        ravenDontRememberVoice.onended = () => {
            ravenDontRememberVoice.onended = null;
            playEllieCarOffer();
        };
        playSound(ravenDontRememberVoice);
    }, 3000);
}

// ==========================================
// ELLIE OFFERS TO HELP RAVEN
// ==========================================

function playEllieCarOffer() {
    if (partyPhotosScene.hidden) return;

    partyPhotoText.textContent =
        "“I figured. However, just take it easy today. " +
        "You want me to take you to get your car?”";

    partyScrollButton.hidden = true;
    partyTVGlanceActive = false;
    partyTVGlanceButton.textContent = "Glance at TV";
    partyTVGlanceButton.hidden = false;

    ellieCarOfferVoice.onended = () => {
        ellieCarOfferVoice.onended = null;
        setTimeout(playRavenCarReply, 350);
    };
    playSound(ellieCarOfferVoice);
}

function playRavenCarReply() {
    if (partyPhotosScene.hidden) return;

    partyTVGlanceActive = false;
    partyPhotoImage.src = partyPhotos[partyPhotoIndex];
    partyTVGlanceButton.hidden = true;
    partyScrollButton.hidden = true;
    partyPhotoText.textContent =
        "“It's okay, you've done enough. Thank you though.”";

    ravenCarReplyVoice.onended = () => {
        ravenCarReplyVoice.onended = null;
        setTimeout(playEllieFinalReply, 350);
    };
    playSound(ravenCarReplyVoice);
}

function playEllieFinalReply() {
    if (partyPhotosScene.hidden) return;

    partyPhotoText.textContent =
        "“Alright. Just call me if you need anything. I mean it.”";

    partyScrollButton.hidden = true;
    partyTVGlanceButton.hidden = true;

    ellieFinalReplyVoice.onended = () => {
        ellieFinalReplyVoice.onended = null;
        partyScrollButton.hidden = false;
    };
    playSound(ellieFinalReplyVoice);
}

// ==========================================
// SCROLL THROUGH PARTY PHOTOS
// ==========================================

partyScrollButton.addEventListener("click", () => {

    if (partyPhotosScene.hidden) return;

    if (partyPhotoChanging) return;

    if (partyPhotoIndex >= partyPhotos.length - 1) return;



    partyPhotoChanging = true;

    partyScrollButton.disabled = true;



    partyPhotoImage.classList.add("photo-changing");



    setTimeout(() => {

        partyPhotoIndex++;



        partyPhotoImage.src =

            partyPhotos[partyPhotoIndex];



        if (partyPhotoIndex === 1) {

            partyPhotoText.textContent =

                "I kept staring at every photo, every video, " +

                "but none of it matched what I remembered.";

        }



        if (partyPhotoIndex === 2) {

            partyPhotoText.textContent =

                "Something about the picture felt wrong.";



            // Third photo contains the shadow figure.



            partyScrollButton.hidden = true;

            // Continue automatically after Raven notices the shadow.
            setTimeout(() => {
                if (!partyPhotosScene.hidden && partyPhotoIndex === 2) {
                    startKitchenTransition();
                }
            }, 3200);

        }



        partyPhotoImage.classList.remove("photo-changing");



        partyPhotoChanging = false;

        partyScrollButton.disabled = false;

    }, 350);

});



// ==========================================

// CINEMATIC IMAGE TRANSITIONS

// ==========================================



function changeHorrorImage(imageElement, imagePath) {

    imageElement.style.transition = "opacity 0.5s ease";

    imageElement.style.opacity = "0";



    setTimeout(() => {

        const imageLoader = new Image();



        imageLoader.onload = () => {

            imageElement.src = imagePath;

            imageElement.style.opacity = "1";

        };



        imageLoader.onerror = () => {

            console.error(

                "Could not load horror scene image:",

                imagePath

            );



            imageElement.style.opacity = "1";

        };



        imageLoader.src = imagePath;

    }, 500);

}



// ==========================================

// EPISODE 1 LINK

// ==========================================



episode1Link.addEventListener("click", (event) => {

    if (episode1Link.getAttribute("href") === "#") {

        event.preventDefault();

        alert("Episode 1 link will be added soon!");

    }

});



// ==========================================

// MAIN MENU HOVER SOUND

// ==========================================



(() => {

    function setupMenuHoverSound() {

        const buttons = document.querySelectorAll(

            "#title-screen .game-menu button"

        );



        const AudioContextClass =

            window.AudioContext || window.webkitAudioContext;



        if (!buttons.length || !AudioContextClass) return;



        let menuAudioContext = null;

        let lastToneTime = -Infinity;



        function getMenuAudioContext() {

            if (!menuAudioContext) {

                menuAudioContext = new AudioContextClass();

            }



            return menuAudioContext;

        }



        function unlockMenuAudio() {

            try {

                const context = getMenuAudioContext();



                if (context.state === "suspended") {

                    context.resume().catch(() => {});

                }

            } catch (error) {

                console.warn(

                    "Menu audio could not start:",

                    error

                );

            }

        }



        function playMenuHoverTone() {

            if (

                !menuAudioContext ||

                menuAudioContext.state !== "running"

            ) {

                return;

            }



            const context = menuAudioContext;

            const now = context.currentTime;



            if (now - lastToneTime < 0.12) return;



            lastToneTime = now;



            const oscillator = context.createOscillator();

            const gain = context.createGain();



            oscillator.type = "sine";



            oscillator.frequency.setValueAtTime(220, now);

            oscillator.frequency.exponentialRampToValueAtTime(

                130,

                now + 0.16

            );



            gain.gain.setValueAtTime(0, now);

            gain.gain.linearRampToValueAtTime(

                0.055,

                now + 0.015

            );

            gain.gain.exponentialRampToValueAtTime(

                0.001,

                now + 0.18

            );



            oscillator.connect(gain);

            gain.connect(context.destination);



            oscillator.onended = () => {

                oscillator.disconnect();

                gain.disconnect();

            };



            oscillator.start(now);

            oscillator.stop(now + 0.2);

        }



        document.addEventListener(

            "pointerdown",

            unlockMenuAudio,

            { capture: true }

        );



        document.addEventListener(

            "keydown",

            unlockMenuAudio,

            { capture: true }

        );



        buttons.forEach((button) => {

            button.addEventListener("mouseenter", () => {

                if (!button.disabled) {

                    playMenuHoverTone();

                }

            });



            button.addEventListener("focus", () => {

                if (!button.disabled) {

                    playMenuHoverTone();

                }

            });

        });

    }



    if (document.readyState === "loading") {

        document.addEventListener(

            "DOMContentLoaded",

            setupMenuHoverSound,

            { once: true }

        );

    } else {

        setupMenuHoverSound();

    }

})();

// ==========================================
// RAVEN GOES DOWNSTAIRS — KITCHEN CONTACTS
// ==========================================
// New scene is created here so no HTML or CSS changes are required.
// Keep the image and both MP3 files in their existing folders.

const ravenDownstairsThoughts = new Audio(
    "audio/ElevenLabs_2026-10-19T17_30_27_Natasha - Upset, Clear and Serious_pvc_sp100_s50_sb75_v4.mp3"
);
ravenDownstairsThoughts.preload = "auto";
ravenDownstairsThoughts.volume = 0.95;

const ravenDownstairsFootsteps = new Audio(
    "audio/davidgallie-going-down-stairs-139175.mp3"
);
ravenDownstairsFootsteps.preload = "auto";
ravenDownstairsFootsteps.volume = 0.85;

let kitchenTransitionStarted = false;

function startKitchenTransition() {
    if (kitchenTransitionStarted) return;
    kitchenTransitionStarted = true;
    partyPhotosScene.hidden = true;
    partyScrollButton.hidden = true;
    if (typeof ellieCallAtmosphere !== "undefined" && ellieCallAtmosphere) {
        stopSound(ellieCallAtmosphere);
    }

    // Cover the previous scene in black during the narration and footsteps.
    const transition = document.createElement("div");
    transition.id = "raven-downstairs-transition";
    Object.assign(transition.style, {
        position: "fixed", inset: "0", background: "#000",
        zIndex: "99999", opacity: "0", transition: "opacity 1.3s ease"
    });
    document.body.appendChild(transition);
    requestAnimationFrame(() => { transition.style.opacity = "1"; });

    const playFootsteps = () => {
        ravenDownstairsFootsteps.onended = showMorningKitchenContacts;
        ravenDownstairsFootsteps.onerror = showMorningKitchenContacts;
        ravenDownstairsFootsteps.currentTime = 0;
        ravenDownstairsFootsteps.play().catch(showMorningKitchenContacts);
    };

    setTimeout(() => {
        ravenDownstairsThoughts.onended = playFootsteps;
        ravenDownstairsThoughts.onerror = playFootsteps;
        ravenDownstairsThoughts.currentTime = 0;
        ravenDownstairsThoughts.play().catch(playFootsteps);
    }, 1500);
}

function showMorningKitchenContacts() {
    // Reuse an existing kitchen scene if one was added in HTML earlier.
    let scene = document.getElementById("kitchen-contact-scene");
    if (!scene) {
        scene = document.createElement("section");
        scene.id = "kitchen-contact-scene";
        document.body.appendChild(scene);
    }
    scene.hidden = false;
    Object.assign(scene.style, {
        position: "fixed", inset: "0", background: "#000",
        zIndex: "100000", display: "flex", alignItems: "center",
        justifyContent: "center", opacity: "0", transition: "opacity 1.4s ease"
    });
    scene.innerHTML = "";

    // Maintain the image's 16:9 proportions on desktop and mobile.
    const frame = document.createElement("div");
    Object.assign(frame.style, {
        position: "relative", width: "min(100vw, 177.78vh)",
        aspectRatio: "16 / 9", maxHeight: "100vh"
    });
    const img = document.createElement("img");
    img.src = "images/Morning Kitchen Contact Call.jpg";
    img.alt = "Raven at the kitchen table, holding her phone contacts";
    Object.assign(img.style, {
        width: "100%", height: "100%", objectFit: "contain", display: "block"
    });
    frame.appendChild(img);

    // Invisible touch target over the Mom contact in the supplied artwork.
   
    // Visible Call Mom button
    const tapMom = document.createElement("button");

    tapMom.id = "tap-mom-contact";
    tapMom.type = "button";
    tapMom.textContent = "Call Mom";

    Object.assign(tapMom.style, {
        position: "absolute",
        left: "50%",
        bottom: "4%",
        top: "auto",
        transform: "translateX(-50%)",
        width: "auto",
        height: "auto",
        minWidth: "160px",
        padding: "13px 30px",
        background: "#a61919",
        color: "#ffffff",
        border: "1px solid #d64242",
        borderRadius: "8px",
        fontFamily: "Georgia, serif",
        fontSize: "17px",
        fontWeight: "bold",
        cursor: "pointer",
        zIndex: "10"
    });

    tapMom.addEventListener("click", () => {
        startMomKitchenCall();
    });

    frame.appendChild(tapMom);
    
scene.appendChild(frame);

requestAnimationFrame(() => {
    scene.style.opacity = "1";
});

}



// ==========================================
// RAVEN CALLS GLENDA — ANIMATED KITCHEN SCENE
// ==========================================
// The kitchen video includes the entire room and the moving candle.
// All voice clips are played sequentially after the outgoing ringback.

const momRingback = new Audio("audio/izafi-analog_phone_ringback_tone-431303.mp3");
momRingback.preload = "auto";
momRingback.volume = 0.45;

const momCallLines = [
    { speaker: "Glenda", text: "Hello?", file: "ElevenLabs_2026-10-19T19_08_51_Autumn Veil - Warm and Reflective_pvc_sp96_s29_sb75_v4.mp3" },
    { speaker: "Raven", text: "H-Hey, Mom. Could you give me a lift? I left my car at Willow Hall after the party.", file: "ElevenLabs_2026-10-19T19_14_01_Natasha - Upset, Clear and Serious_pvc_sp100_s50_sb75_v4.mp3" },
    { speaker: "Glenda", text: "I'm just pulling into work, honey. Could Ellie take you? Or an Uber?", file: "ElevenLabs_2026-10-19T19_15_40_Autumn Veil - Warm and Reflective_pvc_sp96_s29_sb75_v4.mp3" },
    { speaker: "Raven", text: "I already told Ellie not to worry about it.", file: "ElevenLabs_2026-10-19T19_17_17_Natasha - Upset, Clear and Serious_pvc_sp100_s50_sb75_v4.mp3" },
    { speaker: "Thought", text: "I knew what was coming.", pause: 1800 },
    { speaker: "Glenda", text: "So... I assume you were you drinking?", file: "ElevenLabs_2026-10-19T19_20_40_Autumn Veil - Warm and Reflective_pvc_sp96_s29_sb75_v4.mp3" },
    { speaker: "Raven", text: "I don't think so. I don't remember choosing to.", file: "ElevenLabs_2026-10-19T19_22_48_Natasha - Upset, Clear and Serious_pvc_sp100_s50_sb75_v4.mp3" },
    { speaker: "Glenda", text: "Raven, what does that mean?", file: "ElevenLabs_2026-10-19T19_25_09_Autumn Veil - Warm and Reflective_pvc_sp96_s29_sb75_v4.mp3" },
    { speaker: "Raven", text: "I don't know, Mom. That's what's bothering me.", file: "ElevenLabs_2026-10-19T19_25_51_Natasha - Upset, Clear and Serious_pvc_sp100_s50_sb75_v4.mp3" },
    { speaker: "Glenda", text: "I should've checked on you last night.", file: "ElevenLabs_2026-10-19T19_29_57_Autumn Veil - Warm and Reflective_pvc_sp96_s29_sb75_v4.mp3" },
    { speaker: "Raven", text: "I'm fine. I promise.", file: "ElevenLabs_2026-10-19T19_30_46_Natasha - Upset, Clear and Serious_pvc_sp100_s50_sb75_v4.mp3" },
    { speaker: "Glenda", text: "Are you taking your medication? Consistently?", file: "ElevenLabs_2026-10-19T19_31_27_Autumn Veil - Warm and Reflective_pvc_sp96_s29_sb75_v4.mp3" },
    { speaker: "Raven", text: "I missed last night's dose... but I took it this morning.", file: "ElevenLabs_2026-10-19T19_32_08_Natasha - Upset, Clear and Serious_pvc_sp100_s50_sb75_v4.mp3" },
    // The two skipped lines (Glenda's "Raven..." and Raven's apology) are intentionally omitted.
    { speaker: "Glenda", text: "I just worry. Especially after everything you've been through. You know how important the schedule is.", file: "ElevenLabs_2026-10-19T19_48_59_Autumn Veil - Warm and Reflective_pvc_sp96_s29_sb75_v4.mp3" },
    { speaker: "Raven", text: "I know.", file: "ElevenLabs_2026-10-19T19_49_45_Natasha - Upset, Clear and Serious_pvc_sp100_s50_sb75_v4.mp3" },
    { speaker: "Glenda", text: "I have to go into a meeting, honey. But call me later? Let me know you're home safe.", file: "ElevenLabs_2026-10-19T19_50_25_Autumn Veil - Warm and Reflective_pvc_sp96_s29_sb75_v4.mp3" },
    { speaker: "Raven", text: "I will.", file: "ElevenLabs_2026-10-19T19_51_05_Natasha - Upset, Clear and Serious_pvc_sp100_s50_sb75_v4.mp3" }
];

const momCalmMusic = new Audio(
    "audio/soul_frequencies-ambient-meditation-music-498455.mp3"
);
momCalmMusic.loop = true;
momCalmMusic.volume = 0.12;

const momTensionDrone = new Audio(
    "audio/freesound_community-low-pitched-drone-scary-34446.mp3"
);
momTensionDrone.loop = true;
momTensionDrone.volume = 0;


function fadeMomMusic(audio, targetVolume, duration = 2000) {
    const startingVolume = audio.volume;
    const startTime = performance.now();

    function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);

        audio.volume =
            startingVolume + (targetVolume - startingVolume) * progress;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else if (targetVolume === 0) {
            audio.pause();
        }
    }

    requestAnimationFrame(update);
}

let momCallStarted = false;

function startMomKitchenCall() {
    if (momCallStarted) return;
    momCallStarted = true;

    
momCalmMusic.currentTime = 0;
momCalmMusic.play().catch(console.warn);


    const contactsScene = document.getElementById("kitchen-contact-scene");
    if (contactsScene) {
        contactsScene.hidden = true;
        contactsScene.style.display = "none";
    }

    const scene = document.createElement("section");
    scene.id = "mom-kitchen-call-scene";
    Object.assign(scene.style, {
        position: "fixed", inset: "0", zIndex: "100001", background: "#000",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden"
    });

    const video = document.createElement("video");
    video.src = "video/Candle Flame Motion.mp4";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    Object.assign(video.style, {
        position: "absolute", inset: "0", width: "100%", height: "100%",
        objectFit: "contain", background: "#000"
    });
    scene.appendChild(video);

    const dialogue = document.createElement("div");
    dialogue.id = "mom-kitchen-call-dialogue";
    dialogue.setAttribute("aria-live", "polite");
    Object.assign(dialogue.style, {
        position: "absolute", bottom: "0", left: "0", right: "0",
        zIndex: "2", padding: "75px 18px 28px", color: "white",
        background: "linear-gradient(to bottom, transparent, rgba(0,0,0,.85))",
        textAlign: "center", fontFamily: "Georgia, serif",
        fontSize: "clamp(16px, 2vw, 23px)", lineHeight: "1.55",
        textShadow: "0 2px 5px black", pointerEvents: "none"
    });
    scene.appendChild(dialogue);
    document.body.appendChild(scene);
    video.play().catch(() => {});

    dialogue.textContent = "Calling Mom...";
    momRingback.currentTime = 0;
    momRingback.loop = true;
    momRingback.play().catch((error) => console.warn("Ringback playback failed:", error));

    // About three outgoing rings; adjust 9000 to change the wait.
    setTimeout(() => {
        momRingback.pause();
        momRingback.currentTime = 0;
        momRingback.loop = false;
        playMomCallLine(0, dialogue);
    }, 9000);
}


function playMomCallLine(index, dialogue) {
    if (index >= momCallLines.length) {
        dialogue.textContent = "";
         
        fadeMomMusic(momCalmMusic, 0, 3000);
    fadeMomMusic(momTensionDrone, 0, 2000);

    setTimeout(() => {
    const gettingReadyScene = document.getElementById("raven-getting-ready-scene");
    const gettingReadyText = document.getElementById("getting-ready-text");

    gettingReadyText.textContent =
         "I slipped into black jeans and pulled on my coat. After checking the windows and making sure the doors were locked, I grabbed my phone.";

    gettingReadyScene.hidden = false;

   let gettingReadyFinished = false;

function finishGettingReady() {
    if (gettingReadyFinished) return;

    gettingReadyFinished = true;
    clearTimeout(gettingReadyTimer);

    gettingReadyScene.hidden = true;
    startRideshareScene();
}

const gettingReadyTimer = setTimeout(finishGettingReady, 5500);

document.getElementById("getting-ready-skip").onclick = finishGettingReady;

}, 2000);
        return;
    }

    const line = momCallLines[index];

    
if (line.speaker === "Glenda" && line.text.startsWith("So...")) {
    momTensionDrone.currentTime = 0;
    momTensionDrone.volume = 0;
    momTensionDrone.play().then(() => {
        fadeMomMusic(momTensionDrone, 0.05, 3500);
    }).catch(console.warn);
}

if (line.speaker === "Glenda" &&
    line.text.startsWith("I have to go into a meeting")) {
    fadeMomMusic(momTensionDrone, 0, 2500);
}


    // Create a fresh cinematic subtitle for every line.
    dialogue.replaceChildren();

    const subtitle = document.createElement("div");
    subtitle.className = "mom-call-subtitle";

    if (line.speaker !== "Thought") {
        const speaker = document.createElement("div");
        speaker.className = "mom-call-speaker";
       speaker.textContent =
    line.speaker === "Glenda" ? "MOM" : line.speaker.toUpperCase();
        subtitle.appendChild(speaker);
    }

    const words = document.createElement("div");
    words.className = "mom-call-words";
    words.textContent = line.speaker === "Thought"
        ? line.text
        : `“${line.text}”`;

    subtitle.appendChild(words);
    dialogue.appendChild(subtitle);

    // Restart the fade-in on every line.
    void subtitle.offsetWidth;
    subtitle.classList.add("mom-call-fade-in");

    if (!line.file) {
        setTimeout(
            () => playMomCallLine(index + 1, dialogue),
            line.pause || 800
        );
        return;
    }

    const voice = new Audio("audio/" + line.file);
    voice.volume = 0.95;

    let advanced = false;

    const next = () => {
        if (advanced) return;
        advanced = true;

        setTimeout(
            () => playMomCallLine(index + 1, dialogue),
            500
        );
    };

    voice.addEventListener("ended", next, { once: true });

    voice.addEventListener("error", () => {
        console.warn("Missing or invalid voice file:", line.file);
        setTimeout(next, 1500);
    }, { once: true });

    voice.play().catch((error) => {
        console.warn("Voice playback failed:", line.file, error);
        setTimeout(next, 1500);
    });
}


function showCinematicPhoneDialogue(element, speaker, text) {
    if (!element) return;

    element.replaceChildren();

    const subtitle = document.createElement("div");
    subtitle.className = "cinematic-phone-subtitle";

    const name = document.createElement("div");
    name.className = "cinematic-phone-speaker";
    name.textContent = speaker.toUpperCase();

    const words = document.createElement("div");
    words.className = "cinematic-phone-words";
    words.textContent = text;

    subtitle.appendChild(name);
    subtitle.appendChild(words);
    element.appendChild(subtitle);

    void subtitle.offsetWidth;
    subtitle.classList.add("cinematic-phone-fade");
}

// ==========================================
// RAVEN'S RIDESHARE APP — LEO IS ON THE WAY
// ==========================================

let rideshareStarted = false;

function startRideshareScene() {
    if (rideshareStarted) return;
    rideshareStarted = true;

    const scene = document.getElementById("rideshare-scene");
    const car = document.getElementById("rideshare-car");
    const route = document.getElementById("rideshare-route");
    const continueButton = document.getElementById("rideshare-continue");
    const narration = document.getElementById("rideshare-narration");

    if (!scene || !car || !route || !continueButton || !narration) {
        console.error("Rideshare scene elements are missing.");
        return;
    }

    // Close Mom's phone call scene.
    const momScene = document.getElementById("mom-kitchen-call-scene");

    if (momScene) {
        momScene.remove();
    }

    scene.hidden = false;
    playRideshareTone();
    continueButton.hidden = true;

    narration.textContent =
    "I opened the rideshare app and requested a ride to Willow Hall. A driver named Leo accepted, and I watched his car move closer to my street.";

    // Animate Leo's car along the actual map route.
    const routeLength = route.getTotalLength();
    const animationDuration = 15000;
    let animationStart = null;

    function moveCar(timestamp) {
        if (animationStart === null) {
            animationStart = timestamp;
        }

        const elapsed = timestamp - animationStart;
        const progress = Math.min(elapsed / animationDuration, 1);

        const position = route.getPointAtLength(progress * routeLength);

        car.setAttribute(
            "transform",
            `translate(${position.x} ${position.y})`
        );

        if (progress < 1) {
            requestAnimationFrame(moveCar);
        } else {
            continueButton.hidden = false;
        }
    }

    requestAnimationFrame(moveCar);
}

// ==========================================
// RIDESHARE CONTINUE BUTTON
// ==========================================

document.getElementById("rideshare-continue")
    ?.addEventListener("click", () => {

        const narration = document.getElementById("rideshare-narration");
        const continueButton = document.getElementById("rideshare-continue");
                narration.textContent = "";
        continueButton.hidden = true;

        document.getElementById("rideshare-scene").hidden = true;
        startLeoCarScene();
        });

        /* =====================================
   RAVEN WALKS TO LEO'S CAR
   ===================================== */

const ravenFootsteps = new Audio(
    "audio/freeeverythingxx-walking-outside-268459.mp3"
);

ravenFootsteps.volume = 0.55;

let leoCarTimer;

function startLeoCarScene() {
    const scene = document.getElementById("leo-car-scene");
    const continueButton = document.getElementById("leo-car-continue");

    scene.hidden = false;
    continueButton.hidden = true;

    ravenFootsteps.currentTime = 0;
    ravenFootsteps.play().catch(() => {});

    clearTimeout(leoCarTimer);

    leoCarTimer = setTimeout(() => {
        ravenFootsteps.pause();
        ravenFootsteps.currentTime = 0;
        continueButton.hidden = false;
    }, 5000);
}

function playRideshareTone() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const notes = [660, 880];

    notes.forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator();
        const volume = audioContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = frequency;

        const start = audioContext.currentTime + index * 0.16;

        volume.gain.setValueAtTime(0.0001, start);
        volume.gain.exponentialRampToValueAtTime(0.08, start + 0.02);
        volume.gain.exponentialRampToValueAtTime(0.0001, start + 0.28);

        oscillator.connect(volume);
        volume.connect(audioContext.destination);

        oscillator.start(start);
        oscillator.stop(start + 0.28);
    });

    setTimeout(() => audioContext.close(), 700);
}

/* =====================================
   RAVEN ENTERS LEO'S CAR
   ===================================== */

   /* LEO'S OPENING GREETING */

const leoGoodMorning = new Audio("audio/Leo-greeting-Raven.mp3");
leoGoodMorning.volume = 0.9;
leoGoodMorning.preload = "auto";
const leoCarAmbience = new Audio(
    "audio/freesound_community-inside-car-noise-while-driving-29978.mp3"
);

leoCarAmbience.loop = true;
leoCarAmbience.volume = 0.25;

document.getElementById("leo-car-continue")
    ?.addEventListener("click", () => {
        if (document.getElementById("leo-car-scene").hidden) return;

        // Stop Raven's footsteps
        clearTimeout(leoCarTimer);
        ravenFootsteps.pause();
        ravenFootsteps.currentTime = 0;

        // Hide the outdoor scene
        document.getElementById("leo-car-scene").hidden = true;

        // Show Raven's view from the back seat
        // Show the one-time Calm Meter tutorial before Raven gets into the car.
        showRavenCalmTutorial(() => {
            document.getElementById("leo-parking-continue")?.click();
        });


        // Start the car ambience
leoCarAmbience.pause();
leoCarAmbience.currentTime = 0;

// Hide Continue while Leo greets Raven
document.getElementById("backseat-continue")?.setAttribute("hidden", "");

// Leo's old greeting disabled for the redesigned scene

});
    /* =====================================
   LEO'S OPENING DIALOGUE CHOICES
   ===================================== */

const leoOpeningChoices = document.createElement("div");
leoOpeningChoices.id = "leo-opening-choices";
leoOpeningChoices.hidden = true;

leoOpeningChoices.innerHTML = `
    <button id="leo-opening-friendly" type="button">
        Friendly — I'm okay. Just a long morning.
    </button>

    <button id="leo-opening-distant" type="button">
        Distant — I'd rather not talk about it.
    </button>
`;

document.getElementById("leo-backseat-scene")
    .appendChild(leoOpeningChoices);

// Show choices only after Leo finishes greeting Raven
// Play Raven's choice, followed by Leo's response
async function playLeoOpeningChoice(ravenFile, leoFile) {
    leoOpeningChoices.hidden = true;

    const continueButton = document.getElementById("backseat-continue");
    continueButton.hidden = true;

    await playCarDialogue(ravenFile);
    await new Promise(resolve => setTimeout(resolve, 600));
    await playCarDialogue(leoFile);

    // Give players a moment before continuing
    await new Promise(resolve => setTimeout(resolve, 1000));

    continueButton.hidden = false;
}

document.getElementById("leo-opening-friendly")
    .addEventListener("click", () => {
        playLeoOpeningChoice(
            "Raven-im-okay-long.mp3",
            "Leo-enjoy-ride.mp3"
        );
    });

document.getElementById("leo-opening-distant")
    .addEventListener("click", () => {
        playLeoOpeningChoice(
            "Raven-I-rather-not.mp3",
            "Leo-no-worries.mp3"
        );
    });
leoGoodMorning.onended = () => {
    leoOpeningChoices.hidden = true;
};
    /* BACK SEAT → HIGHWAY — PLAY VIDEOS */
document.getElementById("backseat-continue")
    ?.addEventListener("click", () => {
        if (billboardSequencePlayed) return;
// The player has started the car ride
       // Leave the backseat and begin driving through Ashervale
document.getElementById("leo-backseat-scene").hidden = true;

// Stop the shadow animation if it's still playing
const shadowVideo = document.getElementById("leo-shadow-flash");
shadowVideo.pause();
shadowVideo.hidden = true;

// Stop the car ambience
leoCarAmbience.pause();

// Show Willow Hall
document.getElementById("willow-hall-scene").hidden = false;

return;
        document.getElementById("raven-downstairs-transition")?.remove();
        document.getElementById("scene-fade-overlay")?.classList.remove("fade-active");

       
const highwayScene = document.getElementById("leo-highway-scene");
const enteringHighwayVideo = document.getElementById("leo-entering-highway-video");
const christmasVideo = document.getElementById("christmas-billboard-video");
const tremblingVideo = document.getElementById("raven-hands-trembling-video");

// Show the highway scene
highwayScene.hidden = false;

// Hide the other videos
christmasVideo.hidden = true;
tremblingVideo.hidden = true;

// Play Leo entering the highway
enteringHighwayVideo.hidden = false;
enteringHighwayVideo.currentTime = 0;
enteringHighwayVideo.play().catch(console.error);

    });

    /* =====================================
   ASHERVALE DRIVE → RED LIGHT
   ===================================== */

let leoPhoneSceneStarted = false;

document.getElementById("leo-town-video")
    ?.addEventListener("ended", () => {
        if (leoPhoneSceneStarted) return;
        leoPhoneSceneStarted = true;

    
        // Show Raven looking out the side window
const windowScene = document.getElementById("raven-window-scene");
const windowVideo = document.getElementById("raven-window-video");

windowScene.hidden = false;
windowVideo.currentTime = 0;
windowVideo.loop = true;
windowVideo.play().catch(console.error);

// Leo notices Raven is quiet

    // =====================================
// LISTEN BUTTON FOR LEO'S PHONE CALL
// =====================================

const leoListenButton = document.createElement("button");

leoListenButton.id = "leo-listen-button";
leoListenButton.type = "button";
leoListenButton.textContent = "Listen";

leoListenButton.style.cssText = `
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    padding: 14px 45px;
    background: #8b0000;
    color: white;
    border: 1px solid #ff4444;
    border-radius: 8px;
    font-family: Georgia, serif;
    font-size: 17px;
    cursor: pointer;
`;

document.getElementById("raven-window-scene")
    .appendChild(leoListenButton);
    // Hide the button until the phone rings
leoListenButton.hidden = true;
leoListenButton.style.display = "none";

// Create subtitles for Leo's conversation
const leoPhoneSubtitles = document.createElement("div");
leoPhoneSubtitles.id = "leo-phone-subtitles";

leoPhoneSubtitles.style.cssText = `
    position: absolute;
    bottom: 27%;
    left: 50%;
    transform: translateX(-50%);
    width: min(85%, 650px);
    padding: 16px;
    background: rgba(0, 0, 0, 0.85);
    color: white;
    text-align: center;
    font-family: Georgia, serif;
    font-size: 19px;
    border-radius: 8px;
    z-index: 101;
    display: none;
`;

document.getElementById("raven-window-scene")
    .appendChild(leoPhoneSubtitles);

// Player chooses to pay attention
leoListenButton.addEventListener("click", () => {
    leoListenButton.style.display = "none";
    leoPhoneSubtitles.style.display = "block";
    leoPhoneSubtitles.textContent = "Raven listens to Leo's conversation...";
});

   // =====================================
// LEO RECEIVES A PHONE CALL
// =====================================

// Hide Raven's old dialogue choices
document.getElementById("raven-dialogue-choices").hidden = true;

// Incoming phone ringtone
const leoPhoneRing = new Audio(
    "audio/leo-incomingphone-callring.mp3"
);

leoPhoneRing.volume = 0.8;
// Show Listen while Leo's phone is ringing
leoPhoneSubtitles.style.display = "none";
leoListenButton.hidden = false;
leoListenButton.style.display = "block";

// Play ringtone
leoPhoneRing.play().catch(console.error);

// Stop the ringtone after 3 seconds
setTimeout(() => {
    leoPhoneRing.pause();
    leoPhoneRing.currentTime = 0;
    leoPhoneRing.dispatchEvent(new Event("ended"));
}, 3000);

// Leo answers when the ringing finishes
leoPhoneRing.addEventListener("ended", async () => {
       
const leoPhoneLines = [
    "Leo-hey-what's-goingon.mp3",
    "Leo-wait-what.mp3",
    "Leo-psych-hospital.mp3",
    "Leo-he-seemed-fine.mp3",
    "Leo-did-he-agree-to-go.mp3",
    "Leo-wow-Ihad.mp3",
    "Leo-keep-me-updated.mp3"
];

const leoPhoneCaptions = [
    "Hey, what's going on?",
    "Wait, what? When did that happen?",
    "You're telling me they admitted him to a psychiatric hospital?",
    "Man, I just talked to him last week. He seemed fine.",
    "Did he agree to go, or did somebody make that decision for him?",
    "Wow. I had no idea things had gotten that bad.",
    "Yeah, keep me updated, alright? I'll check on him when I can."
];

    for (let i = 0; i < leoPhoneLines.length; i++) {

    // Show the current line only if Raven chose to listen
    if (leoPhoneSubtitles.style.display === "block") {
        leoPhoneSubtitles.textContent = "Leo: " + leoPhoneCaptions[i];
    }

    // Play Leo's recorded dialogue
    // Raven looks at her photos during Leo's third phone line
if (i === 2) {
    // Switch from the moving window to Raven's phone
    document.getElementById("raven-window-scene").hidden = true;
    document.getElementById("raven-photo-scene").hidden = false;
}
    await playCarDialogue(leoPhoneLines[i]);
    // Return to the window after Raven looks at the photo
if (i === 2) {
    document.getElementById("raven-photo-scene").hidden = true;
    document.getElementById("raven-window-scene").hidden = false;
}

    // Pause while the unheard caller responds
    if (leoPhoneSubtitles.style.display === "block") {
        leoPhoneSubtitles.textContent = "...";
    }

    await new Promise(resolve => setTimeout(resolve, 1800));
}

// Hide Listen and subtitles when the call ends
leoListenButton.hidden = true;
leoListenButton.style.display = "none";
leoPhoneSubtitles.style.display = "none";

console.log("Leo's phone conversation finished.");
// Leo apologizes after ending his phone call
console.log("REACHED LEO'S APOLOGY");
await playCarDialogue("leo-sorry-about-that.mp3");
// Show Raven's radio choices after Leo finishes speaking
document.getElementById("raven-dialogue-choices").hidden = false;

}, { once: true });
return;

        // Hide the town driving scene


        // Show the red-light scene
        const redLightScene = document.getElementById("leo-red-light-scene");
        const redLightVideo = document.getElementById("leo-red-light-video");

        redLightScene.hidden = false;

        // Keep the red-light video playing during dialogue
       redLightVideo.loop = false;
        redLightVideo.currentTime = 0;
        redLightVideo.play().catch(console.error);
        // Leo speaks at the red light
const leoUniversityVoice = new Audio("audio/leo-heading-university.mp3");

leoUniversityVoice.volume = 0.9;

leoUniversityVoice.addEventListener("canplaythrough", () => {
    leoUniversityVoice.play().catch(console.error);
}, { once: true });

leoUniversityVoice.load();
// Raven confirms her identity
const ravenYesThatsMe = new Audio("audio/Raven-yes-thatsme.mp3");
ravenYesThatsMe.volume = 0.9;
ravenYesThatsMe.preload = "auto";
// Raven responds after Leo finishes speaking
const ravenAnswerVoice = new Audio("audio/raven-answering-leo.mp3");
ravenAnswerVoice.volume = 0.9;

leoUniversityVoice.addEventListener("ended", () => {
    // Small pause before Raven answers
    setTimeout(() => {
        ravenAnswerVoice.currentTime = 0;
        ravenAnswerVoice.play().catch(console.error);
    }, 600);
}, { once: true });
/* RAVEN FINISHES SPEAKING → HIGHWAY */
ravenAnswerVoice.addEventListener("ended", () => {

    // Stop the red-light video
    redLightVideo.pause();
    redLightVideo.loop = false;
    redLightScene.hidden = true;

/* =====================================
   LEO ENTERS HIGHWAY → BILLBOARD
===================================== */

document.getElementById("leo-entering-highway-video")
    ?.addEventListener("ended", () => {

        const enteringVideo = document.getElementById("leo-entering-highway-video");
        const billboardVideo = document.getElementById("christmas-billboard-video");

        // Hide Leo's highway entrance
        enteringVideo.hidden = true;

        // Show the Christmas billboard transformation
        billboardVideo.hidden = false;
        billboardVideo.currentTime = 0;
        billboardVideo.play().catch(console.error);

    });

    // Show the highway
   
const highwayScene = document.getElementById("leo-highway-scene");
const enteringVideo = document.getElementById("leo-entering-highway-video");
const christmasVideo = document.getElementById("christmas-billboard-video");
const tremblingVideo = document.getElementById("raven-hands-trembling-video");
console.log("HIGHWAY TRANSITION REACHED");
highwayScene.hidden = false;

christmasVideo.hidden = true;
tremblingVideo.hidden = true;

enteringVideo.hidden = false;
enteringVideo.currentTime = 0;
enteringVideo.play().catch(console.error);



}, { once: true });
    });
/* RAVEN'S INTERACTIVE CAR CONVERSATION */

let ravenCarChoice = null;

function playCarDialogue(file) {
    return new Promise((resolve) => {
        const voice = new Audio("audio/" + file);
        voice.volume = 0.9;

        voice.addEventListener("ended", resolve, { once: true });
        voice.addEventListener("error", resolve, { once: true });

        voice.play().catch(() => resolve());
    });
}
// LEO'S CAR RADIO
const leoCarRadio = new Audio(
    "audio/shrek_30-creepy-radio-tune-in-326498.mp3"
);

leoCarRadio.volume = 0.35;
leoCarRadio.loop = false;
async function handleRavenCarChoice(choice) {
    const choices = document.getElementById("raven-dialogue-choices");

    choices.hidden = true;
    ravenCarChoice = choice;

 if (choice === "friendly") {
    // Raven agrees to listen to the radio
    await playCarDialogue("raven-that-would-be-nice.mp3");

    // Leo turns on the car radio
    leoCarRadio.currentTime = 0;
    leoCarRadio.play().catch(console.error);
}

// Finish the window conversation
const windowScene = document.getElementById("raven-window-scene");
const windowVideo = document.getElementById("raven-window-video");

windowVideo.pause();
windowScene.hidden = true;

// Continue to Leo's red-light scene
const redLightScene = document.getElementById("leo-red-light-scene");
const redLightVideo = document.getElementById("leo-red-light-video");

redLightScene.hidden = false;
redLightVideo.loop = true;
redLightVideo.currentTime = 0;
redLightVideo.play().catch(console.error);

// Leo asks about the university
const leoUniversityVoice = new Audio("audio/leo-heading-university.mp3");
leoUniversityVoice.volume = 0.9;

leoUniversityVoice.addEventListener("ended", () => {
    const ravenAnswerVoice = new Audio("audio/raven-answering-leo.mp3");
    ravenAnswerVoice.volume = 0.9;

    ravenAnswerVoice.addEventListener("ended", () => {
        redLightVideo.pause();
        redLightScene.hidden = true;

        // Show Leo entering the highway first
const highwayScene = document.getElementById("leo-highway-scene");
const enteringVideo = document.getElementById("leo-entering-highway-video");
const christmasVideo = document.getElementById("christmas-billboard-video");
const tremblingVideo = document.getElementById("raven-hands-trembling-video");

highwayScene.hidden = false;

// Keep the other videos hidden
christmasVideo.hidden = true;
tremblingVideo.hidden = true;

// Start Leo's highway entrance
enteringVideo.hidden = false;
enteringVideo.currentTime = 0;
enteringVideo.play().catch(console.error);
    }, { once: true });

    ravenAnswerVoice.play().catch(console.error);
}, { once: true });

leoUniversityVoice.play().catch(console.error);
    console.log("Raven selected:", ravenCarChoice);
}

document.getElementById("raven-choice-friendly")
    ?.addEventListener("click", () => handleRavenCarChoice("friendly"));

document.getElementById("raven-choice-distant")
    ?.addEventListener("click", () => handleRavenCarChoice("distant"));

document.getElementById("raven-choice-silent")
    ?.addEventListener("click", () => handleRavenCarChoice("silent"));

        // RAVEN'S BILLBOARD NARRATION
const billboardNarration = document.getElementById("billboard-narration");

billboardNarration.hidden = false;
billboardNarration.textContent = "";


    /* =====================================
   SHADOW BILLBOARD → LEO SPEAKS
   ===================================== */

/* LEO'S HIGHWAY ENTRANCE → CHRISTMAS BILLBOARD */
document.getElementById("leo-entering-highway-video")
  ?.addEventListener("ended", () => {
    const enteringVideo = document.getElementById("leo-entering-highway-video");
    const billboardVideo = document.getElementById("christmas-billboard-video");

    enteringVideo.hidden = true;

    billboardVideo.hidden = false;
    billboardVideo.currentTime = 0;
    billboardVideo.play().catch(console.error);
  });
/* =====================================
   BILLBOARD → RAVEN'S TREMBLING HANDS
===================================== */

document.getElementById("christmas-billboard-video")
    ?.addEventListener("ended", () => {

        const billboardVideo = document.getElementById("christmas-billboard-video");
        const tremblingVideo = document.getElementById("raven-hands-trembling-video");
        const narration = document.getElementById("billboard-narration");

        // Hide the billboard
        billboardVideo.hidden = true;

        // Keep the heartbeat going
        billboardHeartbeat.loop = true;

        // Stop Leo's car radio before the eerie music begins
leoCarRadio.pause();
leoCarRadio.currentTime = 0;

        // Start eerie music
        billboardEerieMusic.currentTime = 0;
        billboardEerieMusic.play().catch(console.error);

        // Clear previous narration
        narration.hidden = true;
        narration.textContent = "";

        // Show Raven's trembling hands
        tremblingVideo.hidden = false;
tremblingVideo.loop = true;
tremblingVideo.currentTime = 0;
tremblingVideo.play().catch(console.error);
    });

    
/* =====================================
   BILLBOARD GLITCH — HEARTBEAT
===================================== */

const billboardGlitchVideo = document.getElementById("christmas-billboard-video");

let billboardGlitchTriggered = false;

billboardGlitchVideo?.addEventListener("timeupdate", () => {

    if (billboardGlitchVideo.currentTime < 0.5) {
        billboardGlitchTriggered = false;
    }

    // The shadow appears at 2 seconds
    if (billboardGlitchVideo.currentTime >= 2 && !billboardGlitchTriggered) {

        billboardGlitchTriggered = true;

        billboardHeartbeat.pause();
        billboardHeartbeat.currentTime = 0;
        billboardHeartbeat.loop = true;
        billboardHeartbeat.play().catch(console.error);
    }
});

/* =====================================
   RAVEN'S TREMBLING HANDS — NARRATION
===================================== */

let ravenHandsNarrationStarted = false;

function typeRavenHandsText(message, speed = 45) {
    const narration = document.getElementById("billboard-narration");

    narration.hidden = false;
    narration.textContent = "";

    let index = 0;

    return new Promise((resolve) => {
        const typing = setInterval(() => {
            if (index < message.length) {
                narration.textContent += message.charAt(index);
                index++;
            } else {
                clearInterval(typing);
                resolve();
            }
        }, speed);
    });
}

document.getElementById("raven-hands-trembling-video")
    ?.addEventListener("play", async () => {

        if (ravenHandsNarrationStarted) return;
        ravenHandsNarrationStarted = true;

        const narration = document.getElementById("billboard-narration");

        const wait = (ms) =>
            new Promise(resolve => setTimeout(resolve, ms));

        await wait(500);

        await typeRavenHandsText("My hands wouldn't stop shaking.");
        await wait(1200);

        await typeRavenHandsText("That didn't just happen.");
        await wait(1500);

        await typeRavenHandsText(
            "I wanted to turn around and look back, but it was best if I didn't."
        );

        await wait(2000);

        narration.hidden = true;
        narration.textContent = "";

        ravenHandsNarrationStarted = false;

        // Finish the trembling-hands scene
        const tremblingVideo = document.getElementById("raven-hands-trembling-video");

        tremblingVideo.loop = false;
tremblingVideo.pause();
tremblingVideo.currentTime = 0;

// Run the existing transition to Leo
tremblingVideo.dispatchEvent(new Event("ended"));
});

/* =====================================
   RAVEN'S HANDS → LEO SPEAKS
===================================== */

document.getElementById("raven-hands-trembling-video")
    ?.addEventListener("ended", () => {

        const tremblingVideo = document.getElementById("raven-hands-trembling-video");
        const narration = document.getElementById("billboard-narration");

        // Stop the heartbeat and eerie music
        billboardHeartbeat.pause();
        billboardHeartbeat.currentTime = 0;
        billboardHeartbeat.loop = false;

        billboardEerieMusic.pause();
        billboardEerieMusic.currentTime = 0;

        // Hide Raven's narration
        narration.hidden = true;
        narration.textContent = "";

        // Hide highway scene
        tremblingVideo.hidden = true;
        document.getElementById("leo-highway-scene").hidden = true;

        // Return to Leo's backseat scene
        const backseatScene = document.getElementById("leo-backseat-scene");
        const continueButton = document.getElementById("backseat-continue");

        continueButton.hidden = true;

    });



        /* =====================================
   EPISODE 2 — SHADOW FIGURE BILLBOARD
   ===================================== */

const billboardEerieMusic = new Audio(
    "audio/freesound_community-horror-texture-1-22890.mp3"
);
billboardEerieMusic.volume = 0.35;

const billboardHeartbeat = new Audio(
    "audio/universfield-rapid-heartbeat-151928.mp3"
);
billboardHeartbeat.volume = 0.6;

/* LEO — ALMOST THERE */
const leoAlmostThere = new Audio("audio/leo-almost-there.mp3");
leoAlmostThere.volume = 0.9;

let billboardSequencePlayed = false;



/* SHOW CONTINUE AFTER LEO SPEAKS */
leoAlmostThere.addEventListener("ended", () => {
    document.getElementById("backseat-continue").hidden = false;
});


billboardHeartbeat.volume = 0.6;

/* LEO'S PARKING LOT → INSIDE THE CAR */
document.getElementById("leo-parking-continue")
    ?.addEventListener("click", () => {

        // Hide Leo's parked sedan
        document.getElementById("leo-parking-lot-scene").hidden = true;

        // Show Raven's view from the backseat
        const backseatScene = document.getElementById("leo-backseat-scene");
        backseatScene.hidden = false;
        // Activate Raven's Calm Meter when she enters the car
const calmMeter = document.getElementById("raven-calm-meter");
const calmFill = document.getElementById("calm-meter-fill");
const calmPercentage = document.getElementById("calm-percentage");

calmMeter.hidden = true;
calmFill.style.width = "100%";
calmPercentage.textContent = "100%";
        // Show Leo looking back at Raven before driving
document.getElementById("leo-backseat-image").hidden = true;

const leoLookingImage = document.getElementById("leo-backseat-image");
leoLookingImage.hidden = false;
// The video supplies lip movement; the existing dialogue audio supplies the voices.
leoLookingImage.muted = true;
leoLookingImage.currentTime = 0;
leoLookingImage.play().catch(error => console.warn("Leo talking video could not play:", error));

// Leo greets Raven
leoGoodMorning.currentTime = 0;
leoGoodMorning.play().catch(console.error);
// Three voice lines play automatically, with no dialogue boxes or Continue button.
const ravenThanksLeo = new Audio("audio/Raven-thanking-leo.mp3");
const leoJiffy = new Audio("audio/Leo-jiffy.mp3");
ravenThanksLeo.volume = 0.9;
leoJiffy.volume = 0.9;
function playLeoSequenceNext(audio, next) {
    audio.currentTime = 0;
    audio.addEventListener("ended", next, {once:true});
    audio.play().catch(error => console.warn("Leo car dialogue could not play:", error));
}
let beginRavenRide;
leoGoodMorning.addEventListener("ended", () => {
    playLeoSequenceNext(ravenThanksLeo, () => {
        playLeoSequenceNext(leoJiffy, () => {
            // Give Leo's last line a beat, then fade into the snowy ride.
            setTimeout(() => {
                const fade = document.createElement("div");
                fade.style.cssText = "position:fixed;inset:0;background:#000;opacity:0;transition:opacity 850ms ease;z-index:100009;pointer-events:none";
                document.body.appendChild(fade);
                requestAnimationFrame(() => fade.style.opacity = "1");
                setTimeout(() => {
                    beginRavenRide();
                    setTimeout(() => {
                        fade.style.opacity = "0";
                        setTimeout(() => fade.remove(), 900);
                    }, 200);
                }, 1000);
            }, 1000);
        });
    });
}, {once:true});
// Cinematic car-ride audio. The files live in the game's audio folder.
const ravenRideAmbience = new Audio("audio/car ride ambience.mp3");
const ravenSlowHeartbeat = new Audio("audio/slow heartbeat.mp3");
const ravenTunnelDrone = new Audio("audio/slow drone.mp3");
ravenTunnelDrone.loop = true;
ravenRideAmbience.loop = true;
ravenSlowHeartbeat.loop = true;
let ravenRideFadeTimer = null;
let ravenHeartbeatFadeTimer = null;
let ravenDroneFadeTimer = null;
function fadeRavenAudio(audio, target, duration = 1400) {
    const timerKey = audio === ravenRideAmbience ? "ride" : audio === ravenTunnelDrone ? "drone" : "heartbeat";
    if (timerKey === "ride") clearInterval(ravenRideFadeTimer);
    else if (timerKey === "drone") clearInterval(ravenDroneFadeTimer);
    else clearInterval(ravenHeartbeatFadeTimer);
    const from = audio.volume;
    const steps = 24;
    let step = 0;
    const timer = setInterval(() => {
        step += 1;
        audio.volume = Math.max(0, Math.min(1, from + (target - from) * step / steps));
        if (step >= steps) {
            clearInterval(timer);
            if (target === 0) { audio.pause(); audio.currentTime = 0; }
        }
    }, duration / steps);
    if (timerKey === "ride") ravenRideFadeTimer = timer;
    else if (timerKey === "drone") ravenDroneFadeTimer = timer;
    else ravenHeartbeatFadeTimer = timer;
}
function startRavenAudio(audio, volume) {
    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0;
    audio.play().then(() => fadeRavenAudio(audio, volume, 2000))
        .catch(error => console.warn("Car scene audio could not play:", error));
}

// Begin the snowy ride automatically after Leo's last voice line.
beginRavenRide = () => {

    // Leo faces forward as the car begins moving
   document.getElementById("leo-backseat-image").hidden = true;
   document.getElementById("leo-backseat-image").pause();
   
    // Begin Raven's snowy window-view sequence
const winterViews = document.getElementById("raven-winter-views");
const sidewalkImage = document.getElementById("winter-sidewalk");

winterViews.hidden = false;
// Soft cinematic ambience accompanies the snowy image montage.
startRavenAudio(ravenRideAmbience, 0.20);
sidewalkImage.hidden = false;

requestAnimationFrame(() => {
    sidewalkImage.classList.add("active");
    // Fade from snowy sidewalks to pedestrians
setTimeout(() => {
    const pedestriansImage = document.getElementById("winter-crosswalk");

    pedestriansImage.hidden = false;

    requestAnimationFrame(() => {
        pedestriansImage.classList.add("active");
        sidewalkImage.classList.remove("active");
    });
}, 6000);
// Fade from pedestrians to snowy trees
setTimeout(() => {
    const pedestriansImage = document.getElementById("winter-crosswalk");
    const treesImage = document.getElementById("winter-trees");

    treesImage.hidden = false;

    requestAnimationFrame(() => {
        treesImage.classList.add("active");
        pedestriansImage.classList.remove("active");
    });
}, 12000);
// Tunnel montage: four stills with quick white flashes.
const tunnelFrames = ["tunnel-shadow-wall", "tunnel-shadow-sidewalk", "tunnel-shadow-near-car", "tunnel-shadow-handprint"].map(id => document.getElementById(id));
const snowyFrames = ["winter-sidewalk", "winter-crosswalk", "winter-trees"].map(id => document.getElementById(id));
const tunnelFlash = document.createElement("div");
tunnelFlash.className = "raven-tunnel-flash";
winterViews.appendChild(tunnelFlash);
if (!document.getElementById("raven-tunnel-style")) {
    const style = document.createElement("style");
    style.id = "raven-tunnel-style";
    style.textContent = `
      #raven-winter-views {position:absolute;inset:0;overflow:hidden}
      #raven-winter-views > img {position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .5s ease}
      #raven-winter-views > img[hidden] {display:none!important}
      #raven-winter-views > img.active {opacity:1}
      #raven-winter-views > img:not(.active) {opacity:0}
      .raven-tunnel-flash {position:absolute;inset:0;z-index:5;background:white;opacity:0;pointer-events:none;transition:opacity .12s ease}
      .raven-tunnel-flash.flash {opacity:.88}
    `;
    document.head.appendChild(style);
}
function showTunnelFrame(index) {
    [...snowyFrames, ...tunnelFrames].forEach(frame => {
        if (frame) {frame.classList.remove("active");frame.hidden=true;}
    });
    const frame = tunnelFrames[index];
    if (!frame) return;
    frame.hidden=false;
    requestAnimationFrame(() => frame.classList.add("active"));
    tunnelFlash.classList.add("flash");
    setTimeout(() => tunnelFlash.classList.remove("flash"), 115);
}
setTimeout(() => {
    // The snowy tree image is the end of the peaceful car ride.
    // Crossfade car ambience into the tunnel drone as the first shadow appears.
    fadeRavenAudio(ravenRideAmbience, 0, 1500);
    ravenTunnelDrone.pause();
    ravenTunnelDrone.currentTime = 0;
    ravenTunnelDrone.volume = 0;
    ravenTunnelDrone.play()
        .then(() => fadeRavenAudio(ravenTunnelDrone, 0.45, 1600))
        .catch(error => console.warn('Tunnel drone failed to play. Check audio/slow drone.mp3:', error));
    startRavenAudio(ravenSlowHeartbeat, 0.25);
    showTunnelFrame(0);
}, 18000);
setTimeout(() => showTunnelFrame(1), 22000);
setTimeout(() => showTunnelFrame(2), 26000);
setTimeout(() => showTunnelFrame(3), 29000);
// Begin the dashboard hallucination after the snowy views

setTimeout(() => {
    const winterViews = document.getElementById("raven-winter-views");
    const dashboardGlitch = document.getElementById("raven-dashboard-glitch");

    winterViews.hidden = true;
    // The calm ride gives way to Raven's slow, uneasy heartbeat.
    fadeRavenAudio(ravenRideAmbience, 0, 650);
    fadeRavenAudio(ravenTunnelDrone, 0, 650);
    // Heartbeat continues from the tunnel through the Calm Meter challenge.

    dashboardGlitch.hidden = false;
    dashboardGlitch.currentTime = 0;
    ravenCalmPresses = 0;
    ravenCalmChallengeStarted = false;
    ravenCalmChallengeFinished = false;
    ravenCalmMeter.hidden = true;
    ravenCalmInstruction.hidden = true;
    updateRavenCalm(100);
    // Allow the radio to fade again if the scene is replayed
delete dashboardGlitch.dataset.radioFading;

    // Start the distorted radio with Raven's dashboard hallucination
const radioGlitch = document.getElementById("raven-radio-glitch");

radioGlitch.pause();
radioGlitch.currentTime = 0;
radioGlitch.volume = 0.65;

radioGlitch.play().catch(error => {
    console.warn("Radio glitch audio could not play:", error);
});

    // Warn players before the three-press Calm Meter challenge.
    ravenCalmInstruction.textContent = "RAVEN'S ANXIETY IS RISING — GET READY TO PRESS SPACEBAR";
    ravenCalmInstruction.hidden = false;
    const calmNotice = new Audio("audio/notification.mp3");
    calmNotice.volume = 0.28;
    calmNotice.play().catch(() => {});
    dashboardGlitch.play().catch(error => {
        console.warn("Dashboard glitch video could not play:", error);
    });
}, 32000);
});
// The dashboard freezes briefly so players have time for three presses.
const dashboardGlitch = document.getElementById("raven-dashboard-glitch");
let ravenCalmPresses = 0;
let ravenCalmChallengeStarted = false;
let ravenCalmChallengeFinished = false;
const ravenCalmMeter = document.getElementById("raven-calm-meter");
const ravenCalmFill = document.getElementById("calm-meter-fill");
const ravenCalmPercentage = document.getElementById("calm-percentage");
const ravenCalmInstruction = document.getElementById("raven-calm-instruction");

function updateRavenCalm(value) {
    ravenCalmFill.style.width = value + "%";
    ravenCalmPercentage.textContent = value + "%";
    ravenCalmFill.style.backgroundColor = value >= 75 ? "#668f80" : value >= 40 ? "#c99a45" : "#b94040";
    ravenCalmMeter.classList.toggle("calm-danger", value < 60);
}

dashboardGlitch.addEventListener("timeupdate", () => {
    if (!ravenCalmChallengeStarted && !ravenCalmChallengeFinished && dashboardGlitch.currentTime >= 7) {
        ravenCalmChallengeStarted = true;
        ravenCalmPresses = 0;
        dashboardGlitch.pause();
        ravenCalmMeter.hidden = false;
        updateRavenCalm(35);
        ravenCalmPercentage.classList.add("calm-glitch");
        ravenCalmInstruction.textContent = "PRESS SPACEBAR TO STAY CALM — 0 / 3";
        ravenCalmInstruction.hidden = false;
        const tone = document.getElementById("calm-meter-tone");
        if (tone) { tone.volume = 0.5; tone.currentTime = 0; tone.play().catch(() => {}); }
    }
});

function steadyRaven(event) {
    if (event.code !== "Space" || event.repeat || !ravenCalmChallengeStarted || ravenCalmChallengeFinished) return;
    event.preventDefault();
    ravenCalmPresses += 1;
    updateRavenCalm(Math.min(100, 35 + ravenCalmPresses * 20));
    ravenCalmInstruction.textContent = `PRESS SPACEBAR TO STAY CALM — ${ravenCalmPresses} / 3`;
    if (ravenCalmPresses === 3) {
        ravenCalmChallengeFinished = true;
        ravenCalmChallengeStarted = false;
        ravenCalmPercentage.classList.remove("calm-glitch");
        ravenCalmInstruction.textContent = "RAVEN IS STEADY";
        fadeRavenAudio(ravenSlowHeartbeat, 0, 1700);
        updateRavenCalm(100);
        setTimeout(() => { ravenCalmInstruction.hidden = true; }, 900);
        dashboardGlitch.play().catch(console.error);
    }
}
document.addEventListener("keydown", steadyRaven);

// Restore Raven's calm when her hands steady
dashboardGlitch.addEventListener("timeupdate", () => {
    if (dashboardGlitch.currentTime >= 10) {
        // Fade out the distorted radio only once
if (!dashboardGlitch.dataset.radioFading) {
    dashboardGlitch.dataset.radioFading = "true";

    const radioFade = setInterval(() => {
        const radioGlitch = document.getElementById("raven-radio-glitch");
        radioGlitch.volume = Math.max(0, radioGlitch.volume - 0.05);

        if (radioGlitch.volume === 0) {
            clearInterval(radioFade);
            radioGlitch.pause();
        }
    }, 100);
}
        const calmFill = document.getElementById("calm-meter-fill");
        const calmPercentage = document.getElementById("calm-percentage");

        calmFill.style.width = "100%";
        calmPercentage.textContent = "100%";
        // Stop the heartbeat when Raven regains full calm
document.getElementById("raven-calm-meter")
    .classList.remove("calm-danger");
    }
});
dashboardGlitch.addEventListener("ended", () => {
    fadeRavenAudio(ravenSlowHeartbeat, 0, 900);
    fadeRavenAudio(ravenRideAmbience, 0, 900);
    fadeRavenAudio(ravenTunnelDrone, 0, 900);
    document.removeEventListener("keydown", steadyRaven);

    // Hide the dashboard hallucination after it finishes
    dashboardGlitch.pause();
    dashboardGlitch.hidden = true;

    // Hide Raven's Calm Meter until the next interaction
    document.getElementById("raven-calm-meter").hidden = true;
    startLeoArrivalDialogue();

}, { once: true });
    // Let Raven settle into the ride before the hallucination
// setTimeout(() => {
//     const shadowVideo = document.getElementById("leo-shadow-flash");

//     shadowVideo.currentTime = 0;
//     shadowVideo.hidden = false;

//     shadowVideo.play().catch(error => {
//         console.warn("Shadow hallucination could not play:", error);
//     });
// }, 8000);
};

        // Keep the old driving video paused for now

        // Allow the player to continue
       document.getElementById("backseat-continue")?.setAttribute("hidden", "");
        // Play the driving footage with the shadow hallucination
const shadowVideo = document.getElementById("leo-shadow-flash");

// Keep the shadow hallucination hidden during Leo's greeting
shadowVideo.hidden = true;
shadowVideo.pause();
shadowVideo.currentTime = 0;

shadowVideo.addEventListener("ended", () => {
    shadowVideo.hidden = true;
    document.getElementById("backseat-continue")?.removeAttribute("hidden");
}, { once: true });
// Leo car back button removed: prevents duplicate audio and Continue controls.
});

/* RAVEN'S CALM: tutorial + cinematic HUD. */
function showRavenCalmTutorial(onContinue) {
    const overlay = document.createElement("div");
    overlay.id = "raven-calm-tutorial-overlay";
    overlay.innerHTML = `<div class="raven-calm-tutorial-panel">
        <span class="raven-calm-tutorial-eyebrow">NEW MECHANIC</span>
        <h2>RAVEN'S CALM</h2>
        <p>When Raven feels stressed or frightened, her anxiety begins to creep in, making it harder for her to stay in control.</p>
        <p>Watch her Calm Meter closely. When fear takes hold, press <strong>SPACEBAR THREE TIMES</strong> to help her steady herself and regain control.</p>
        <button type="button" id="raven-calm-tutorial-go">UNDERSTOOD — ENTER CAR</button>
    </div>`;
    document.body.appendChild(overlay);
    // Play the Calm Meter's signature sound once when the tutorial opens.
    const tutorialTone = document.getElementById("calm-meter-tone");
    if (tutorialTone) {
        tutorialTone.pause();
        tutorialTone.currentTime = 0;
        tutorialTone.volume = 0.5;
        tutorialTone.play().catch(() => {});
    }
    overlay.querySelector("button").addEventListener("click", () => {
        sessionStorage.setItem("ravenCalmTutorialSeenV2", "yes");
        overlay.remove();
        onContinue();
    }, {once:true});
}
(function installRavenCalmStyles() {
    if (document.getElementById("raven-calm-ui-styles")) return;
    const style = document.createElement("style");
    style.id = "raven-calm-ui-styles";
    style.textContent = `
    #raven-calm-tutorial-overlay {position:fixed;inset:0;z-index:200000;display:grid;place-items:center;background:rgba(2,5,10,.89);padding:22px;backdrop-filter:blur(8px)}
    .raven-calm-tutorial-panel {width:min(520px,94vw);padding:35px 32px;background:linear-gradient(145deg,#18202a,#07090e);border:1px solid #7b3c40;box-shadow:0 20px 70px #000,0 0 35px #5a151b44;color:#f1eee9;text-align:center;font-family:Georgia,serif}
    .raven-calm-tutorial-eyebrow {font:700 12px Arial,sans-serif;letter-spacing:4px;color:#d08c91}
    .raven-calm-tutorial-panel h2 {font-size:30px;letter-spacing:3px;margin:14px 0 20px}
    .raven-calm-tutorial-panel p {font-size:17px;line-height:1.6;color:#d7d9db}
    #raven-calm-tutorial-go {margin-top:16px;padding:14px 20px;border:1px solid #c65b60;background:#83252c;color:#fff;cursor:pointer;font-weight:700;letter-spacing:1px}
    #raven-calm-meter:not([hidden]) {position:absolute!important;top:25px;left:25px;z-index:100020;width:min(390px,calc(100vw - 50px));box-sizing:border-box;padding:18px 20px!important;border:1px solid #68717a!important;border-radius:12px!important;background:linear-gradient(145deg,rgba(33,40,48,.96),rgba(6,9,14,.96))!important;box-shadow:inset 0 2px 2px #ffffff2a,inset 0 -3px 5px #000,0 10px 28px #0009,0 0 20px #3a6c6544!important;color:#eee!important}
    #raven-calm-meter .calm-meter-header {display:flex;justify-content:space-between;align-items:center;gap:16px;font:700 13px Arial,sans-serif;letter-spacing:2px;margin-bottom:12px;text-shadow:0 2px 4px #000}
    #raven-calm-meter #calm-percentage {font-size:20px;letter-spacing:0}
    #raven-calm-meter .calm-meter-track {height:18px!important;border-radius:20px!important;background:linear-gradient(#050708,#1a1f22)!important;border:2px solid #87919a!important;box-shadow:inset 0 3px 7px #000,0 1px 1px #ffffff22!important;overflow:hidden}
    #raven-calm-meter #calm-meter-fill {height:100%!important;border-radius:16px!important;background:linear-gradient(to bottom,#ffffff55,transparent 48%),#668f80;box-shadow:inset 0 2px 2px #fff6,0 0 15px currentColor;transition:width .22s ease,background-color .22s ease}
    #raven-calm-instruction:not([hidden]) {position:fixed;z-index:100021;left:50%;bottom:14%;transform:translateX(-50%);background:#090c12eb;color:#f8f8f8;border:1px solid #a44e55;padding:15px 24px;white-space:nowrap;font:700 15px Arial,sans-serif;letter-spacing:1px;box-shadow:0 0 20px #8a20204d}
    `;
    document.head.appendChild(style);
})();


/* Transition from Raven's Calm Meter to Leo's arrival, then Willow Hall. */
let leoArrivalStarted = false;
async function startLeoArrivalDialogue() {
    if (leoArrivalStarted) return;
    leoArrivalStarted = true;
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    const playVoice = filename => new Promise(resolve => {
        const voice = new Audio('audio/' + filename);
        let finished = false;
        const done = () => { if (!finished) { finished = true; resolve(); } };
        voice.addEventListener('ended', done, { once: true });
        voice.addEventListener('error', done, { once: true });
        voice.play().catch(done);
    });
    const backseat = document.getElementById('leo-backseat-scene');
    const willow = document.getElementById('willow-hall-scene');
    if (backseat) backseat.hidden = true;
    if (willow) willow.hidden = true;
    const black = document.createElement('div');
    black.id = 'leo-arrival-transition';
    black.style.cssText = 'position:fixed;inset:0;background:#000;z-index:250000;display:flex;align-items:center;justify-content:center;opacity:1;transition:opacity 1s ease';
    document.body.appendChild(black);
    await wait(700);
    await playVoice('Leo-alerting-Raven.mp3');
    await wait(100);
    const hand = document.createElement('img');
    hand.src = 'images/Raven door on handle.jpg';
    hand.alt = 'Raven reaching for the car door handle';
    hand.style.cssText = 'width:100%;height:100%;object-fit:contain;opacity:0;transition:opacity 1s ease';
    black.appendChild(hand);
    requestAnimationFrame(() => { hand.style.opacity = '1'; });
    await wait(120);
    await playVoice('Raven-sorry-thanks.mp3');
    await wait(900);
    hand.style.opacity = '0';
    await wait(1100);
    hand.remove();
    await wait(1000);
    if (willow) willow.hidden = false;
    black.style.opacity = '0';
    await wait(1100);
    black.remove();
}

/* EPISODE 2 — WILLOW HALL FINAL CINEMATIC (isolated from existing ride mechanics) */
(() => {
    const willowScene = document.getElementById('willow-hall-scene');
    const willowVideo = document.getElementById('willow-finale-video');
    const finale = document.getElementById('episode2-finale');
    const words = document.getElementById('episode2-final-words');
    const suitVideo = document.getElementById('episode2-suit-video');
    const endCard = document.getElementById('episode2-end-card');
    if (!willowScene || !willowVideo || !finale || !words || !suitVideo || !endCard) return;
    const ambience = new Audio('audio/creepy ambience.mp3');
    const ravenVoice = new Audio('audio/Raven-something-followed.mp3');
    ambience.loop = true;
    ambience.volume = 0.22;
    ravenVoice.volume = 0.95;
    let started = false;
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    const fadeAudio = (audio, duration = 1000) => {
        const start = audio.volume;
        const t0 = performance.now();
        const step = now => {
            const progress = Math.min(1, (now - t0) / duration);
            audio.volume = Math.max(0, start * (1 - progress));
            if (progress < 1) requestAnimationFrame(step);
            else audio.pause();
        };
        requestAnimationFrame(step);
    };
    const finished = media => new Promise(resolve => {
        if (media.ended || media.error) return resolve();
        media.addEventListener('ended', resolve, {once:true});
        media.addEventListener('error', resolve, {once:true});
    });
    async function typeLine(line) {
        words.textContent = '';
        for (const character of line) {
            words.textContent += character;
            await wait(character === '.' || character === '?' ? 320 : 47);
        }
    }
    async function runNarration() {
        willowScene.hidden = true;
        finale.hidden = false;
        words.hidden = false;
        ambience.play().catch(() => {});
        ravenVoice.play().catch(() => {});
        const lines = [
            'I have to get out of here and get to the main campus.',
            "Maybe I won't see things there...",
            'But why do I feel like something followed me?'
        ];
        for (const line of lines) {
            await typeLine(line);
            await wait(700);
        }
        await Promise.all([finished(ravenVoice), wait(1800)]);
        fadeAudio(ambience, 1100);
        words.hidden = true;
        await wait(900);
        suitVideo.hidden = false;
        suitVideo.currentTime = 0;
        suitVideo.play().catch(() => {});
        await finished(suitVideo);
        suitVideo.hidden = true;
        await wait(1100);
        endCard.hidden = false;
    }
    function beginIfVisible() {
        if (started || willowScene.hidden) return;
        started = true;
        willowVideo.currentTime = 0;
        willowVideo.play().catch(() => {
            // Browser autoplay policy: allow a click to start the finale.
            willowScene.addEventListener('click', () => willowVideo.play(), {once:true});
        });
    }
    willowVideo.addEventListener('ended', runNarration, {once:true});
    const observer = new MutationObserver(beginIfVisible);
    observer.observe(willowScene, {attributes:true,attributeFilter:['hidden']});
    beginIfVisible();
})();
