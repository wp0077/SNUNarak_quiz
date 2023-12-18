// //시작 화면
let globalTimer; //hj
let collegeSelect;
let majorInput;
let nameInput;
// let currentScene = 1; //제(혜원)가 임시로 바꿔놨고 원하는 scene 고치고 싶으실 때 바꿔서 해보세용~!!!!

let previousScene; // 중도포기 했다가 돌아가는

let userCollege;
let userMajor;
let userName;

// 열종
//let intro_video;
let introImages = [];
let imageDurations = [7000, 3000, 4000];
let currentImage = 0;
let startTime;
let fadeInDuration = 2000; // fade-in 지속 시간 (밀리초)
let fadeStartTime; // fade-in 시작 시간
let op_music
let opening = false;

let red_logo_img;
//let rules_img; //지워도 됨
//let tips_img;

let btnW = 200;
let btnH = 50;

let widebox; //현진

let nameTwinkle = false; //HW //sh

// let next_button;s
let answerArray = []; //HW

//camTint-민규
let camRed = 255;
let camGreen = 255;
let camBlue = 255;
let regionImage; 

// //본 화면
let logo;
let video; //캠
let nanumBG;

let optDistance = 33; //선지 간 거리
let optW = 250; //선지의 너비 (option.js에 있는 this.w 어케 받아오는지 모르겠어서 여기다 설정함. 만약 option.js에서 바꾸면 얘도 바꿔야 됨 ㅠ)

//종열
//게이지
let gaugeValue = 5; // 초기 게이지 값
let gaugeSpeed = 1; // 게이지 애니메이션 속도
let gauge_img;
//spacebar
let spacebar_img;

let givingUp = false; // 중도포기 누르면 true -> 정말 중도포기? 화면으로 넘어감
// let giveupButton;
let img_gameover // 열종
let sound_gameover // 열종
let over = false;

let timer;
let timerSound;

// 종열
// 리액션 화면도 삭제

// 엔딩 화면
let cutfront_img;
let cutback_img;
let ending;
let ending2; //HW
let ending3;

// 20231209
let mode; // MAIN, INTRO, USER, INTRO, QUIZ, ENDING
let quizList;
let quizIdx;

let img_quiz_2_1;
let img_quiz_2_2;
let img_quiz_2_3;
let img_quiz_2_4;

let reactionVoice_1; //sh
let reactionVoice_2_1;
let reactionVoice_2_2;
let reactionVoice_2_3;
let reactionVoice_2_4;
let reactionVoice_2_all; //HW
let reactionVoice_3_1;
let reactionVoice_3_2a;
let reactionVoice_3_2b;
let reactionVoice_3_3a;
let reactionVoice_3_3b;
let reactionVoice_4_1;
let reactionVoice_4_2;
let reactionVoice_4_3;
let reactionVoice_4_4;
let reactionVoice_4_all;
let reactionVoice_5;//sh (let reactionVoice5 삭제, 세미콜론 추가)

//20231211
let quiz1_narration;
let quiz2_narration;
let quiz3_1_narration;
let quiz3_2_narration;
let quiz4_narration;
let quiz5_narration;

let reactionVoices;

let reactionImg_1_1;
let reactionImg_1_2;
let reactionImg_1_3;
let reactionImg_1_4;

let reactionImg_2_1; //HW
let reactionImg_2_2;//HW
let reactionImg_2_3;//HW
let reactionImg_2_4;//HW
let reactionImg_2_5;//HW

//현진
let reactionImg_3_1;
let reactionImg_3_2a;
let reactionImg_3_2b;
let reactionImg_3_3a;
let reactionImg_3_3b;

// 종열
let reactionImg_4_1;
let reactionImg_4_2;
let reactionImg_4_3;
let reactionImg_4_4;
let reactionImg_4_5;

//sh
let reactionImg_5_1;
let reactionImg_5_2;
let reactionImg_5_3;
let reactionImg_5_4;

//엔딩을 위한 사진 캡쳐
let capturedImage0; //HW
let capturedImage1; //HW
let capturedImage2; //HW
let capturedImage3; //HW
let capturedImage4; //HW

function preload() {
  logo = loadImage("assets/narak_logo_final.png");
  nanumBG = loadFont("assets/NanumBarunGothicBold.ttf");
  //시작화면
  red_logo_img = loadImage("assets/red_logo.png");
  rules_img = loadImage("assets/rules.png");
  tips_img = loadImage("assets/tips.png");
  widebox = loadImage("assets/black_button_quiz.png"); //현진

  introImages[0] = loadImage('assets/opening1.png'); // 열종
  introImages[1] = loadImage('assets/opening2.png'); // 열종
  introImages[2] = loadImage('assets/opening3.png'); // 열종
  op_music = loadSound("assets/op_music.mp3"); // 열종

  img_gameover = loadImage("assets/GAME_OVER.png"); // 열종
  sound_gameover = loadSound("assets/GAME_IS_OVER.mp3") // 열종
  
  //타이머 시계소리
  timerSound = loadSound("assets/timer_sound.mp3");
  //엔딩화면
  cutback_img = loadImage("assets/cutback1.png");
  cutfront_img = loadImage("assets/cutfront1.png");
  ending = loadImage("assets/ending.png");
  ending2 = loadImage("assets/ending2.png"); //HW
  ending3 = loadImage("assets/ending3.png");

  // 20231209
  img_quiz_2_1 = loadImage("assets/quiz2/quiz2_1.jpg");
  img_quiz_2_2 = loadImage("assets/quiz2/quiz2_2.jpg");
  img_quiz_2_3 = loadImage("assets/quiz2/quiz2_3.jpg");
  img_quiz_2_4 = loadImage("assets/quiz2/quiz2_4.jpg");
  
  // 1212 종열
  // 1215 sh
  reactionVoice_1 = loadSound("assets/reactionVoice/voice1.mp3"); //sh
  reactionVoice_2_1 = loadSound("assets/reactionVoice/voice2_1.mp3");
  reactionVoice_2_2 = loadSound("assets/reactionVoice/voice2_2.mp3");
  reactionVoice_2_3 = loadSound("assets/reactionVoice/voice2_3.mp3");
  reactionVoice_2_4 = loadSound("assets/reactionVoice/voice2_4.mp3");
  reactionVoice_2_all = loadSound("assets/reactionVoice/voice2_all.mp3");
  reactionVoice_3_1 = loadSound("assets/reactionVoice/voice3_1.mp3");
  reactionVoice_3_2a = loadSound("assets/reactionVoice/voice3_2a.mp3");
  reactionVoice_3_2b = loadSound("assets/reactionVoice/voice3_2b.mp3");
  reactionVoice_3_3a = loadSound("assets/reactionVoice/voice3_3a.mp3");
  reactionVoice_3_3b = loadSound("assets/reactionVoice/voice3_3b.mp3");
  reactionVoice_4_1 = loadSound("assets/reactionVoice/voice4_1.mp3");
  reactionVoice_4_2 = loadSound("assets/reactionVoice/voice4_2.mp3");
  reactionVoice_4_3 = loadSound("assets/reactionVoice/voice4_3.mp3");
  reactionVoice_4_4 = loadSound("assets/reactionVoice/voice4_4.mp3");
  reactionVoice_4_all = loadSound("assets/reactionVoice/voice4_all.mp3");
  reactionVoice_5 = loadSound("assets/reactionVoice/voice5.mp3");
 
  //20231211 -> 친일파 사진, 동그라미 엑스, 기존 정문 관련 사진 asset에서 삭제 및 preload, let 삭제
  //게이지 이미지
  gauge_img = loadImage("assets/gauge.png"); // 종열
  //spacebar
  spacebar_img = loadImage("assets/spacebar.png"); // 종열
  
  quiz1_narration = loadSound("assets/narr/narr1.mp3");
  quiz2_narration = loadSound("assets/narr/narr2.mp3");
  quiz3_1_narration = loadSound("assets/narr/narr3_1.mp3");
  quiz3_2_narration = loadSound("assets/narr/narr3_2.mp3");
  quiz4_narration = loadSound("assets/narr/narr4.mp3");
  quiz5_narration = loadSound("assets/narr/narr5.mp3");

  reactionImg_1_1 = loadImage("assets/reactionImage/reaction1_1.png");
  reactionImg_1_2 = loadImage("assets/reactionImage/reaction1_2.png");
  reactionImg_1_3 = loadImage("assets/reactionImage/reaction1_3.png");
  reactionImg_1_4 = loadImage("assets/reactionImage/reaction1_4.png");

  reactionImg_2_1 = loadImage("assets/reactionImage/reaction2_1.png"); //HW
  reactionImg_2_2 = loadImage("assets/reactionImage/reaction2_2.png"); //HW
  reactionImg_2_3 = loadImage("assets/reactionImage/reaction2_3.png");//HW
  reactionImg_2_4 = loadImage("assets/reactionImage/reaction2_4.png");//HW
  reactionImg_2_5 = loadImage("assets/reactionImage/reaction2_5.png");//HW

  //현진
  reactionImg_3_1 = loadImage("assets/reactionImage/reaction3_1.png");
  reactionImg_3_2a = loadImage("assets/reactionImage/reaction3_2a.png");
  reactionImg_3_2b = loadImage("assets/reactionImage/reaction3_2b.png");
  reactionImg_3_3a = loadImage("assets/reactionImage/reaction3_3a.png");
  reactionImg_3_3b = loadImage("assets/reactionImage/reaction3_3b.png");

// 종열
  reactionImg_4_1 = loadImage("assets/reactionImage/reaction4_1.png");
  reactionImg_4_2 = loadImage("assets/reactionImage/reaction4_2.png");
  reactionImg_4_3 = loadImage("assets/reactionImage/reaction4_3.png");
  reactionImg_4_4 = loadImage("assets/reactionImage/reaction4_4.png");
  reactionImg_4_all = loadImage("assets/reactionImage/reaction4_5.png");
  //sh
  reactionImg_5_1 = loadImage("assets/reactionImage/reaction5_1.png");
  reactionImg_5_2 = loadImage("assets/reactionImage/reaction5_2.png");
  reactionImg_5_3 = loadImage("assets/reactionImage/reaction5_3.png");
  reactionImg_5_4 = loadImage("assets/reactionImage/reaction5_4.png");
}

function setup() {
  createCanvas(1600, 1200);
  background(255, 88, 88);
  noStroke();

  textFont(nanumBG);

  globalTimer = millis(); //hj

  //웹캠
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.position(width / 2 - video.width / 2, height / 2 - video.height / 2);
  video.hide();

  mainTb = new Maintextbox(); //메인 텍스트박스
  next = new Next(); //다음 버튼

  //시작 화면
  // intro_video = createVideo("assets/intro.mp4");
  // intro_video.size(1600, 1200);
  // intro_video.hide();
  if (opening === true) { //열종
    op_music.play();
  }
//hj 1216
  collegeSelect = createSelect();
  collegeSelect.parent('p5-doms')
  collegeSelect.position(800, 650);
  collegeSelect.style("width", "250px");
  collegeSelect.style("height", "50px");
  collegeSelect.style("border", "none");
  collegeSelect.style("border-radius", "8px");
  collegeSelect.style("padding-left", "20px");

  for (let college in college_major) {
    collegeSelect.option(college);
  }
  collegeSelect.hide();
  // console.log(collegeSelect);

  majorInput = createSelect();
  majorInput.parent('p5-doms')
  majorInput.position(800, 710);
  majorInput.style("width", "250px");
  majorInput.style("height", "50px");
  majorInput.style("border", "none");
  majorInput.style("border-radius", "8px");
  majorInput.style("padding-left", "20px");

  for (let major of college_major["인문대학"]) {
    majorInput.option(major);
  }

  majorInput.hide();

  collegeSelect.changed(() => {
    let optionCount = majorInput.elt.options.length;
    for (let i = optionCount - 1; i >= 0; i--) {
      majorInput.elt.options[i].remove();
    }
    let majors = college_major[collegeSelect.value()];
    for (let major of majors) {
      majorInput.option(major);
    }
  });

  nameInput = createInput();
  nameInput.parent('p5-doms')
  nameInput.position(800, 770);
  nameInput.style("width", "227px");
  nameInput.style("height", "45px");
  nameInput.style("border", "none");
  nameInput.style("border-radius", "8px");
  nameInput.style("padding-left", "20px");

  nameInput.hide();

  textAlign(CENTER, CENTER);

  startBtn = new Button(width / 2.3, height / 1.4, btnW, btnH, "시작하기");

  nextBtn = new Button(
    width * 0.9 - btnW / 2,
    height * 0.9 - btnH / 2,
    btnW,
    btnH,
    "다음으로"
  );

  skipBtn = new Button(
    width * 0.9 - btnW / 2,
    height * 0.9 - btnH / 2,
    btnW,
    btnH,
    "넘어가기"
  );

  photoBtn = new Button( //HW
    940, //HW 
    800, //HW
    450, //HW
    200, //HW
    "나락한컷" //HW
  ); //HW

  homeBtn = new Button( //HW
    80, //HW
    980 , //HW
    150, //HW
    130, //HW
    "홈으로" //HW
  );//현진 //HW

  // 타이머
  timer = new Timer(10); // 10초

  // 20231209
  mode = "MAIN";

  reactionVoices = {
    reactionVoice_1,
    reactionVoice_2_1,
    reactionVoice_2_2,
    reactionVoice_2_3,
    reactionVoice_2_4,
    reactionVoice_2_all, //HW
    reactionVoice_3_1,
    reactionVoice_3_2a,
    reactionVoice_3_2b,
    reactionVoice_3_3a,
    reactionVoice_3_3b,
    reactionVoice_4_1, // 종열
    reactionVoice_4_2,
    reactionVoice_4_3,
    reactionVoice_4_4,
    reactionVoice_4_all,
    reactionVoice_5,
  };
  setupQuiz();
}

function setupQuiz() {
  let opt1XT4 = width / 2 - optW * 2 - optDistance * 1.5;
  let opt2XT4 = width / 2 - optW - optDistance / 2;
  let opt3XT4 = width / 2 + optDistance / 2;
  let opt4XT4 = width / 2 + optW + optDistance * 1.5;
  let optXsT4 = [opt1XT4, opt2XT4, opt3XT4, opt4XT4];

  let opts1XT2 = opt1XT4;
  let opts2XT2 = opt3XT4;
  let optXsT2 = [opts1XT2, opts2XT2];
  let reactions = createReaction();

  // Quiz 1
  let q1Options = q1OptionsTexts.map((text, idx) => {
    return new QuizOption(optXsT4[idx], "TEXT4", text);
  });

  // let q1ReactionVoices = [
  //   reactionVoice_1_1,
  //   reactionVoice_1_2,
  //   reactionVoice_1_3,
  //   reactionVoice_1_4,
  // ];

  // Quiz 2
  let q2OptionsImages = [
    img_quiz_2_1,
    img_quiz_2_2,
    img_quiz_2_3,
    img_quiz_2_4,
  ];
  let q2Options = q2OptionsImages.map((img, idx) => {
    return new QuizOption(optXsT4[idx], "IMAGE4", img);
  });
  // let q2ReactionVoices = [
  //   reactionVoice_2_1,
  //   reactionVoice_2_2,
  //   reactionVoice_2_3,
  //   reactionVoice_2_4,
  // ];

  // Quiz 3
  let q3Options = q3OptionsTexts.map((text, idx) => {
    return new QuizOption(optXsT2[idx], "TEXT2", text);
  });

  let q3OptionsAdditional = q3OptionsTextsAdditional.map((text, idx) => {
    return new QuizOption(optXsT2[idx], "TEXT2", text);
  });

  // let q3ReactionVoices = [
  //   reactionVoice_3_1,
  //   reactionVoice_3_2,
  //   reactionVoice_3_3,
  // ];

  let q3Additional = {
    buildupMentions: q3BuildupsAdditional,
    questions: q3QuestionsAdditional,
    answers: q3OptionsAdditional,
    reactions: reactions["REACTION_3_2"],
    narration: quiz3_2_narration,
  };

  // 종열
  // Quiz 4
  let q4Options = q4OptionsTexts.map((text, idx) => {
    return new QuizOption(optXsT4[idx], "TEXT4", text);
  });

  // Quiz 5
  let q5Options = q5OptionsTexts.map((text, idx) => {
    return new QuizOption(optXsT4[idx], "TEXT4", text);
  });

  // let q5ReactionVoices = [
  //   reactionVoice5,
  //   reactionVoice5,
  //   reactionVoice5,
  //   reactionVoice5,
  // ];

  // mode = "QUIZ"; // MAIN, INTRO, USER, INTRO, QUIZ, ENDING
  let quiz1 = new Quiz(
    1,
    q1Buildups,
    q1Questions,
    quiz1_narration,
    q1Options,
    reactions["REACTION_1"]
    // q1ReactionVoices,
    //10
    // 1
  );
  let quiz2 = new Quiz(
    2,
    q2Buildups,
    q2Questions,
    quiz2_narration,
    q2Options,
    reactions["REACTION_2"]
    // q2ReactionVoices,
    //-1
    // 1
  );
  let quiz3 = new Quiz(
    3,
    q3Buildups,
    q3Questions,
    quiz3_1_narration,
    q3Options,
    reactions["REACTION_3_1"],
    // q3ReactionVoices,
    //-1,
    // 1,
    q3Additional
  );
    // 종열
    let quiz4 = new Quiz(
      4,
      q4Buildups,
      q4Questions,
      quiz4_narration,
      q4Options,
      reactions["REACTION_4"]
    );

  let quiz5 = new Quiz(
    5,
    q5Buildups,
    q5Questions,
    quiz5_narration,
    q5Options,
    reactions["REACTION_5"]
    // q5ReactionVoices,
    //6
    // 1
  );

  quizList = [quiz1, quiz2, quiz3, quiz4, quiz5];
  quizIdx = 0;
}

function draw() {
  background(255, 88, 88);
  // console.log(currentScene);
  //console.log('previous:'+ previousScene);

  if (mode == "MAIN") {
    drawMain();
    allReset();
  } else if (mode == "DESC") {
    drawDescription();
  } else if (mode == "USER") {
    drawUser();
  } else if (mode == "INTRO") {
    drawIntro();
  } else if (mode == "QUIZ") {
    if (quizList[quizIdx].status == "END") {
      quizIdx += 1;
      if (quizIdx == quizList.length) {
        mode = "ENDING";
      }
    } else if (quizList[quizIdx].status == "RESET") {
      mode = "MAIN";
      //setupQuiz(); //1218
      allReset();
    } else {
      quizList[quizIdx].draw();
    }
  }
  if (mode == "ENDING") {
    drawEnding();
  } else if (mode == "CAPTURE") { //현진
    drawCapture();//현진
  }//현진
  //if (mode == "ENDING") {
    //drawEnding();
    //if (photoBtn.isMouseOver()) { //HW
      //mode = "CAPTURE"; // HW
    //}//HW
  //} else if (mode == "CAPTURE") {
    //drawCapture(); //HW
    //if (homeBtn.isMouseOver()) { //HW
      //mode = "MAIN"; //HW
   // }
  //}

  const idleTime = millis() - globalTimer;

  if (idleTime > 120000) { // 2분으로 바꿈(180,000 밀리초) //sh
    mode = "MAIN"; 
    allReset(); //hw 20231216
  } //현진pt
}//hj

function drawMain() { 
  buttonX = width / 3;
  buttonY = height / 1.5;

  image(
    red_logo_img,
    width / 2 - red_logo_img.width / 2,
    height / 2 - red_logo_img.height / 2
  );
  fill(0); //HW
  strokeWeight(10);//HW
  textSize(30);//HW
  text('Click to start', 800, 900);//HW

//  startBtn.draw(); //HW
}

function drawDescription() {
  image(logo, 50, 50, 350, 140);//현진
  image(widebox,300,200,1000,200); //현진

  fill(255); //현진
  textSize(100);//현진
  text("게임 설명", 800,300); //현진
  
  image(widebox, 300, 500, 1000,500);//현진
  
  textSize(35);//현진
  text("<서울대 나락퀴즈쇼>는 총 5문제로 이루어지며, \n 중도 포기 없이 모두 풀면 선물을 받습니다. \n\n 모든 문제는 10초 안에 풀어주세요. \n 10초가 지나면 중도 포기로 간주하여 퀴즈가 종료됩니다. \n\n 화면을 클릭하면 당신의 모습이 나타납니다. \n 준비가 되면 눌러주세요.", 800,750);//현진 sh
  //nextBtn.draw();
}

function drawUser() {
    image(logo, 50, 50, 350, 140);//현진
  
    image(widebox, 100, 900, 1200, 250);//현진 hj
    
    fill(255);//현진
    textSize(33);//현진
    text("복수전공을 하시는 경우 원하는 학과 하나를 선택하시면 됩니다. \n학과, 이름은 게임 플레이 이외의 목적으로 사용되지 않으며, 별도로 저장되지 않습니다.\n\n이름을 입력 후 다음으로 버튼을 눌러주세요.", 700, 1020);//현진 hj
  
    push();
    translate(width, 0);
    scale(-1, 1);
    image(video, 480, 120); //캠 위치 대충 해놨어요!!!! 고쳐야 됨
    pop();

  fill(255); //hj
  rect(650, 650, 120, 50, 8);
  rect(800, 650, 120, 50, 8);
  fill(0);
  text("단과대", 710, 670);
  fill(255);
  rect(650, 710, 120, 50, 8);
  rect(800, 710, 120, 50, 8);
  fill(0);
  text("전공", 707, 730);
  fill(255);
  rect(650, 770, 120, 50, 8);
  rect(800, 770, 120, 50, 8);
  fill(0);
  text("이름", 707, 790);

  //이름을 입력하면 NEXT 버튼 
  if (nameInput.value()) { //HW
    nextBtn.draw(); //HW
  }//HW

  if (nameTwinkle) { //HW //sh
    push(); // 현재의 그래픽 상태를 저장 //HW
    fill(255); // 빨간색으로 텍스트 색상 설정 //HW
    textSize(40); // 원하는 크기로 텍스트 크기 설정 //HW
    textAlign(CENTER, CENTER); //HW
    text("이름을 입력한 뒤 클릭해주세요.", width / 2, height / 2 + 250); //HW //sh
    pop(); // 그래픽 상태를 이전 상태로 복원 //HW
  }
}

// 열종
function drawIntro() {
  if (!op_music.isPlaying()) {
    op_music.play();
    opening = true;
  }
    // 시작 시간 설정
    startTime = startTime || millis();
  
    // 첫 번째 이미지를 fade-in 효과로 보여줍니다.
    if (currentImage === 0) {
      console.log('currentimage 0');
      // fade-in이 시작되지 않은 경우, 시작 시간 설정
      fadeStartTime = fadeStartTime || millis();
  
      // 현재 시간과 fade-in 시작 시간 간의 경과 시간 계산
      let fadeInTime = millis() - fadeStartTime;
  
      // fade-in 효과 적용
      let alpha = map(fadeInTime, 0, fadeInDuration, 0, 255);
      tint(255, alpha);
    } else {
      // 다른 이미지는 투명도를 변경하지 않음
      noTint();
    }
    
  // 각 이미지를 일정 시간 동안 보여줌
  image(introImages[currentImage], 0, 0, width, height);

  let currentTime = millis() - startTime;

  if (currentTime >= imageDurations[currentImage]) {
    // 현재 이미지의 시간이 지나면 다음 이미지로 전환
    currentImage++;
    console.log('currentImage: '+currentImage);

    // 모든 이미지가 표시되었을 경우
    if (currentImage >= introImages.length) {
      op_music.stop();
      opening = false;
      mode = "QUIZ";
    } else {
      // 다음 이미지로 전환하기 위해 시작 시간 업데이트
      startTime = millis();
    }
  }
}

function drawEnding() {
  photoBtn.draw(); //HW
  image(ending, 0, 0, 1600, 1200);
}


function drawCapture() { //HW 1216
  let firstAnswerX = 130; //(기준이 되는) 첫 번째 답의 x좌표
  let XInt = 65; //답 가로 간격
  let firstAnswerY = 620; //(기준이 되는) 첫 번째 답의 y좌표
  let YInt = 77; //답 세로 간격
  
  homeBtn.draw(); //HW
  image(ending2, 0, 0, 1600, 1200);  //HW
  image(capturedImage0, 70, 50, width / 8, height / 6);  //HW
  image(capturedImage1, 380, 260, width / 8, height / 6); //HW
  image(capturedImage2, 720, 430, width / 8, height / 6); //HW
  image(capturedImage3, 1020, 580, width / 8, height / 6); //HW 퀴즈4,5 들어오면 주석 풀어야 됨
  image(capturedImage4, 1340, 780, width / 8, height / 6); //HW 퀴즈4,5 들어오면 주석 풀어야 됨

  textAlign(RIGHT); //sh
  fill(0); //HW
  textSize(80); //HW
  textStyle(BOLD); //sh
  text(`${userName}`, 1200, 1000); //HW sh - 학우님 뺌

  textStyle(NORMAL); //sh
  textAlign(LEFT); //sh 
  //선택된선지 텍스트 (위치 조정 필요) //HW (전체)
  if (answerArray.length == 6) { //Q3에 '그렇다' 선택해서, 선지를 총 여섯 번 고른 경우
//    textAlign(LEFT);
    if (answerArray[0] == 0) { //Q1-A1 
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('학생증을 옐로 카드처럼 쓰고', firstAnswerX, firstAnswerY);//HW
    } else if (answerArray[0] == 1) { //Q1-A2
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('학생증으로 카사노바가 되려 하고', firstAnswerX, firstAnswerY);//HW
    } else if (answerArray[0] == 2) { //Q1-A3
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('학생증으로 상대방을 위협하고', firstAnswerX, firstAnswerY);//HW
    } else if (answerArray[0] == 3) { //Q1-A4
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('학생증으로 자아도취에 빠지고', firstAnswerX, firstAnswerY);//HW
    } 
    if (answerArray[1] == 0){ //Q2-A1
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('자신이 김태희보다 낫다고 생각하며', firstAnswerX + XInt, firstAnswerY + YInt);//HW
    } else if (answerArray[1] == 1) { //Q2-A2
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('자신이 이상윤보다 낫다고 생각하며', firstAnswerX + XInt, firstAnswerY + YInt);//HW
    } else if (answerArray[1] == 2) { //Q2-A3
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('자신이 이하늬보다 낫다고 생각하며', firstAnswerX + XInt, firstAnswerY + YInt);//HW
    } else if (answerArray[1] == 3) { //Q2-A4
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('자신이 빈지노보다 낫다고 생각하며', firstAnswerX + XInt, firstAnswerY + YInt);//HW
    } 
    if (answerArray[3] == 0){ //Q3 그렇다 -> 그렇다
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('약자를 전혀 고려하지 않고', firstAnswerX + 2*XInt, firstAnswerY + 2*YInt);//HW
    } else if (answerArray[3] == 1) { //Q3 그렇다 -> 아니다
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('매사에 이기적이고', firstAnswerX + 2*XInt, firstAnswerY + 2*YInt);//HW
    }
    if (answerArray[4] == 0){ //Q4-A1
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('안철수를 적극 지지함과 동시에', firstAnswerX + 3*XInt, firstAnswerY + 3*YInt);//HW
    } else if (answerArray[4] == 1) { //Q4-A2
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('유시민을 적극 지지함과 동시에', firstAnswerX + 3*XInt, firstAnswerY + 3*YInt);//HW
    } else if (answerArray[4] == 2) { //Q4-A3
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('윤석열을 적극 지지함과 동시에', firstAnswerX + 3*XInt, firstAnswerY + 3*YInt);//HW
    } else if (answerArray[4] == 3) { //Q4-A4
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('원희룡을 적극 지지함과 동시에', firstAnswerX + 3*XInt, firstAnswerY + 3*YInt);//HW
    }
    if (answerArray[5] == 0){ //Q5-A1
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('에브리타임을 서울대 그 자체라 보는', firstAnswerX + 4*XInt, firstAnswerY + 4*YInt);//HW
    } else if (answerArray[5] == 1) { //Q5-A2
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('스누라이프를 서울대 그 자체라 보는', firstAnswerX + 4*XInt, firstAnswerY + 4*YInt);//HW
    } else if (answerArray[5] == 2) { //Q5-A3
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('트루스포럼을 서울대 그 자체라 보는', firstAnswerX + 4*XInt, firstAnswerY + 4*YInt);//HW
    } else if (answerArray[5] == 3) { //Q5-A4
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('오르비를 서울대 그 자체라 보는', firstAnswerX + 4*XInt, firstAnswerY + 4*YInt);//HW
    }
  } else { //Q3에 '아니다' 선택해서, 선지를 총 다섯 번 고른 경우
//    textAlign(LEFT);
    if (answerArray[0] == 0) { //Q1-A1 
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('학생증을 옐로 카드처럼 쓰고', firstAnswerX, firstAnswerY);//HW
    } else if (answerArray[0] == 1) { //Q1-A2
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('학생증으로 카사노바가 되려 하고', firstAnswerX, firstAnswerY);//HW
    } else if (answerArray[0] == 2) { //Q1-A3
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('학생증으로 상대방을 위협하고', firstAnswerX, firstAnswerY);//HW
    } else if (answerArray[0] == 3) { //Q1-A4
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('학생증으로 자아도취에 빠지고', firstAnswerX, firstAnswerY);//HW
    } 
    if (answerArray[1] == 0){ //Q2-A1
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('자신이 김태희보다 낫다고 생각하며', firstAnswerX + XInt, firstAnswerY + YInt);//HW
    } else if (answerArray[1] == 1) { //Q2-A2
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('자신이 이상윤보다 낫다고 생각하며', firstAnswerX + XInt, firstAnswerY + YInt);//HW
    } else if (answerArray[1] == 2) { //Q2-A3
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('자신이 이하늬보다 낫다고 생각하며', firstAnswerX + XInt, firstAnswerY + YInt);//HW
    } else if (answerArray[1] == 3) { //Q2-A4
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('자신이 빈지노보다 낫다고 생각하며', firstAnswerX + XInt, firstAnswerY + YInt);//HW
    } 
    if (answerArray[2] == 1){ //Q3 아니다
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('국가적 문제 해결에 전혀 기여할 생각이 없고', firstAnswerX + 2*XInt, firstAnswerY + 2*YInt);//HW
    }
    if (answerArray[3] == 0){ //Q4-A1
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('안철수를 적극 지지함과 동시에', firstAnswerX + 3*XInt, firstAnswerY + 3*YInt);//HW
    } else if (answerArray[3] == 1) { //Q4-A2
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('유시민을 적극 지지함과 동시에', firstAnswerX + 3*XInt, firstAnswerY + 3*YInt);//HW
    } else if (answerArray[3] == 2) { //Q4-A3
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('윤석열을 적극 지지함과 동시에', firstAnswerX + 3*XInt, firstAnswerY + 3*YInt);//HW
    } else if (answerArray[3] == 3) { //Q4-A4
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('원희룡을 적극 지지함과 동시에', firstAnswerX + 3*XInt, firstAnswerY + 3*YInt);//HW
    }
    if (answerArray[4] == 0){ //Q5-A1
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('에브리타임을 서울대 그 자체라 보는', firstAnswerX + 4*XInt, firstAnswerY + 4*YInt);//HW
    } else if (answerArray[4] == 1) { //Q5-A2
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('스누라이프를 서울대 그 자체라 보는', firstAnswerX + 4*XInt, firstAnswerY + 4*YInt);//HW
    } else if (answerArray[4] == 2) { //Q5-A3
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('트루스포럼을 서울대 그 자체라 보는', firstAnswerX + 4*XInt, firstAnswerY + 4*YInt);//HW
    } else if (answerArray[4] == 3) { //Q5-A4
      fill(0); //HW
      strokeWeight(10);//HW
      textSize(30);//HW
      text('오르비를 서울대 그 자체라 보는', firstAnswerX + 4*XInt, firstAnswerY + 4*YInt);//HW
    }
  }
  image(ending3, 0, 0, 1600, 1200);// 민규 이미지
  textAlign(CENTER); //sh
}

function createReaction() {
  let reactions = {};
  for (let data of reactionData) {
    let name = data.name;
    reactions[name] = [];
    let info = data.info;
    for (let i = 0; i < info.length; i++) {
      let reactionScenes = [];
      let reactionPages = info[i];
      for (let j = 0; j < reactionPages.length; j++) {
        let reactionPage = reactionPages[j];
        let type = reactionPage[0];
        let scene = reactionPage[1];
        let sound = reactionVoices[reactionPage[2]];
        let soundLength = reactionPage[3];
        // console.log(reactionPage);
        // console.log(type, scene, sound, soundLength);
        reactionScenes.push(
          new QuizReactionPage(type, scene, sound, soundLength)
        );
      }
      reactions[name].push(new QuizReaction(reactionScenes));
    }
  }
  return reactions;
}

function mousePressed() { //sh
  globalTimer = millis(); //hj
  if (mode == "MAIN") {
    mode = "DESC"; //HW
  } else if (mode == "DESC") {
    mode = "USER"; //HW
    collegeSelect.show(); //HW
    majorInput.show(); //HW
    nameInput.show(); //HW
  } else if (mode == "USER") {
    if (nameInput.value() && nextBtn.isMouseOver()) { //HW hj
      userCollege = collegeSelect.value(); //HW
      userMajor = majorInput.value(); //HW
      userName = nameInput.value(); //HW
      mode = "INTRO"; //HW
      collegeSelect.hide(); //HW
      majorInput.hide(); //HW
      nameInput.hide(); //HW
      // intro_video.stop(); //HW 열종
      // intro_video.play(); //HW
    } else if (!nameInput.value()) { //HW
      nameTwinkle = true; // 스페이스바가 눌렸음을 표시 //HW //sh
    } //HW
  } else if (mode == "INTRO") { // 열종
    //if (skipBtn.isMouseOver()) {
      //mode = "QUIZ";
      //intro_video.hide();
      //intro_video.stop();
    //}
  } else if (mode == "QUIZ") {
    quizList[quizIdx].mousePressed();
    setTimeout(captureImage, 3000); //3초 hw 1215

    // quizList[quizIdx].keyPressed(); //sh주석
  } else if (mode == "ENDING") {
    if (photoBtn.isMouseOver()) {
      mode = "CAPTURE";
    }//현진
  } else if (mode == "CAPTURE") {
    if (homeBtn.isMouseOver()) {
      mode = "MAIN";
      allReset(); //hw 20231216
    }
  } //현진
}

function keyPressed(){ //hj
  globalTimer = millis(); 
}

function mouseReleased() { //HW  //sh
  nameTwinkle = false; // 스페이스바가 떼어졌음을 표시   //HW //sh
}  

class Button {
  constructor(_x, _y, _w, _h, _v) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.v = _v;
  }
  draw() {
    noStroke();
    if (this.isMouseOver()) {
      fill(220);
      rect(this.x, this.y, this.w, this.h, 8);
      cursor(HAND);
    } else {
      fill(255);
      rect(this.x, this.y, this.w, this.h, 8);
      cursor(ARROW);
    }
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.v, this.x + this.w / 2, this.y + this.h / 2);
  }

  isMouseOver() {
    let xIn = mouseX > this.x && mouseX < this.x + this.w;
    let yIn = mouseY > this.y && mouseY < this.y + this.h;
    return xIn && yIn;
  }

  // clicked() {
  //   nextScene();
  //   cursor(ARROW);
  // }
}

function CamFrame() {
  //이 부분에 카메라가 들어가거나
  //이 함수 이전에 카메라 코드가 있으면 돼요

  fill(50,50,50); //마이크아래
  circle(580, 530, 120);
  noFill();
  strokeWeight(10);
  stroke(50,50,50); //마이크선
  curve(380, 530, 500, 600, 620, 400, 620, 530);
  noStroke();

  push();
  stroke(255);
  strokeWeight(5);
  translate(630, 380);
  rotate(radians(30));
  fill(100,100,100); //마이크
  ellipse(0, 0, 35, 50);
  pop();

  noStroke();
  fill(255); //단상아래
  rect(440, 523, 700, 218);

  fill(30, 30, 30, 50); //단상아래그림자
  rect(440, 523, 700, 100);

  fill(255); //단상
  rect(400, 523, 800, 66);

  image(logo, 630, 605, 330, 150);
}

//종열

//게이지
function Gauge() {
  
  drawGauge(790, 190, 300, 30, gaugeValue);

  // 랜덤으로 게이지 업데이트
  if (frameCount % 2 === 0) { // 1초마다 실행
    let randomChange = int(random(-2, 3  )); // -10에서 10까지의 랜덤한 값
    gaugeValue = constrain(gaugeValue + randomChange, 2, 100); // 최솟값 0, 최댓값 100으로 제한
  }  
}
function drawGauge(x, y, width, height, value) {
  // 게이지 바 그리기
  stroke(255);
  strokeWeight(8);
  fill(255, 0, 0);
  rect(x - width / 2, y - height / 2, map(value, 0, 100, 0, width), height);

  // 게이지 테두리 그리기
  noFill();
  stroke(0);
  strokeWeight(4);
  rect(x - width / 2, y - height / 2, width, height);
  //게이지이미지
  image(gauge_img,0,0,1600,1200);
}

//spacebar
function spacebarimg(){
  noStroke();

  // 가로로 90도 돌아간 quad 그리기
  push();
  translate(800, 1100);


  // 프레임마다 흰색 또는 검은색으로 깜빡거리기
  if (frameCount % 60 < 15) {
    fill(255); // 흰색
    
  } else {
    fill(0); // 검은색
  }
 
  textSize(25);
  text('Click Anywhere',0,0);
  
  pop();
}

function captureImage() { //HW
  // Capture the current frame from the webcam
  let capturedImage = video.get(); //HW

  if(quizIdx == 0){ //HW
  capturedImage0 = capturedImage //HW
  } else if(quizIdx == 1){ //HW
  capturedImage1 = capturedImage //HW
  } else if(quizIdx == 2){ //HW
  capturedImage2 = capturedImage //HW
  } else if(quizIdx == 3){ //HW
  capturedImage3 = capturedImage //HW
  } else if(quizIdx == 4){ //HW
  capturedImage4 = capturedImage //HW
  } //HW
} //HW

function allReset (){ //sh
  tintReset();
  gaugeValue = 0;
  nameInput.value(''); //sh
  collegeSelect.value('인문대학');//sh
  // majorInput.value('국어국문학과');//sh
  let optionCount = majorInput.elt.options.length; //sh 
    for (let i = optionCount - 1; i >= 0; i--) {
      majorInput.elt.options[i].remove();
    }
    let majors = college_major[collegeSelect.value()];
    for (let major of majors) {
      majorInput.option(major);
    }

  over = false; //열종
  currentImage = 0; //sh 
  startTime = null;
  answerArray = []; //sh 
  console.log('allReset');

  fadeInDuration = 2000; // fade-in 지속 시간 (밀리초)
  fadeStartTime = undefined; // fade-in 시작 시간

  //드롭다운 숨기기 hw 20231216
  collegeSelect.hide();
  majorInput.hide();
  nameInput.hide();

   //퀴즈 다시 셋업 hw 20231216
  setupQuiz();
}

//민큐민큐
function camTint() {
  push();
  translate(width, 0);
  scale(-1, 1);
  regionImage = video.get(0, 0, video.width, video.height);
  tint(camRed,camGreen,camBlue);
  image(regionImage, 480, 120);
   
  if(frameCount % 2  ==0){
    camGreen --;
    camBlue --;
  }
  noTint();
  pop();
  CamFrame();   
}

function tintReset() {
  noTint();
  camRed =255;
  camGreen =255;
  camBlue = 255;
}