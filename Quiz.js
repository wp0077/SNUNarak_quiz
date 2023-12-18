class Quiz {
  constructor(
    nextQuzeIndex,
    buildupMentions,
    questions,
    questionNarration,
    answers,
    reactions,
    // reactionVoices,
    // reactionVoiceLength,
    additionals
  ) {
    this.nextQuzeIndex = nextQuzeIndex;
    this.buildupMentions = buildupMentions;
    this.buildupIdx = 0;
    this.questions = questions;
    this.questionNarration = questionNarration;
    this.narrationStartTime;
    this.narrationStarted = false;
    this.narrationLength = -1;
    this.questionIdx = 0;
    this.answers = answers;
    this.selectedAnswer = -1;
    this.reactions = reactions;
    this.status = "BUILDUP"; // BUILDUP, QUESTION_ANSWER, TIMER, GIVEUP, GAMEOVER, REACTION, TO_START, END
    this.prevStatus = "BUILDUP";
    // this.reactionVoices = reactionVoices;
    // this.reactionVoiceStartTime;
    // this.reactionVoiceLength = reactionVoiceLength;
    this.additionals = additionals;
    this.timer = new Timer(10);
    this.gameoverSecond = 3;
    this.gameoverStartTime;
    this.giveupButton = new Giveup(width * 0.08, height / 2 + 400, 150);
  }

  setup() {
    this.buildupIdx = 0;
    this.questionIdx = 0;
    this.status = "BUILDUP";
  }

  draw() {
    this.drawBackground();
    this.drawCam();
    if (this.status == "BUILDUP") {
      this.drawBuildup();
      this.giveupButton.display();
      spacebarimg(); // 종열
    } else if (this.status == "QUESTION_ANSWER") {
      this.drawQuestion();
      this.giveupButton.display();
      
    } else if (this.status == "TIMER") {
      this.drawTimer();
      this.giveupButton.display();
      camTint();//민규
      Gauge(); // 종열
    } else if (this.status == "REACTION") {
      this.nextQuzeIndex = this.drawReaction();
      tintReset();//민규
      gaugeValue = 0;
    } else if (this.status == "GIVEUP") {
      this.drawGiveup();
      tintReset();//민규
    } else if (this.status == "GAMEOVER") {
      this.drawGameOver();
      tintReset();//민규
    }
  }

  drawBackground() {
    background(255, 88, 88); //백그라운드
    image(logo, 50, 50, 350, 140); //로고 퀴즈에서
  }
  drawCam() {
    push();
    translate(width, 0);
    scale(-1, 1);
    image(video, 480, 120); //캠 위치 대충 해놨어요!!!! 고쳐야 됨
    pop();
    CamFrame();
  }

  drawMainTextbox(t) {
    let x = 250;
    let y = 740;
    let w = 1100;
    let h = 230;
    let c = color(20, 20, 20);
    fill(c);
    rect(x, y, w, h);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(50);
    t = t.replace("USER_NAME", userName);
    t = t.replace("USER_COLLEGE", userCollege);
    t = t.replace("USER_MAJOR", userMajor);
    text(t, x, y, w, h);
  }

  drawBuildup() {
    textSize(50);
    text(`${quizIdx+1} / 5`, width -250, 120); //sh 현재 문제
    this.drawMainTextbox(this.buildupMentions[this.buildupIdx]);
    this.timer.startTime = millis();
  }

  
  drawOptions() { //hw 1215
    for (let answerIdx in this.answers) {
      let answer = this.answers[answerIdx];
      answer.draw();
      if (answer.selected) {
        this.selectedAnswer = answerIdx;
        answerArray.push(this.selectedAnswer); //HW answerArray에 선택된 선지를 저장
        console.log(answerArray); //HW
        this.status = "REACTION";
        if (!this.reactions[this.selectedAnswer].currentReactionPage) {
          this.setAdditional();
          this.timer.reset();
          timerSound.stop();
        }
        // else {
        //   this.reactionVoices[this.selectedAnswer].stop();
        //   this.reactionVoices[this.selectedAnswer].play();
        //   this.reactionVoiceStartTime = millis();
        //   if (this.reactionVoiceLength < 0) {
        //     this.reactionVoiceLength =
        //       this.reactionVoices[this.selectedAnswer].duration() + 0.5;
        //   }
        // }
      }
    }
  }

  // - 타이머 초기화
  drawQuestion() {
    textSize(50);
    text(`${quizIdx+1} / 5`, width -250, 120); //sh 현재 문제

    this.drawMainTextbox(this.questions[this.questionIdx]);
    // this.drawOptions();
    if (this.questionIdx == this.questions.length - 1) {
      if (!this.narrationStarted) {
        this.questionNarration.play();
        this.narrationStartTime = millis();
        this.narrationStarted = true;
      } else {
        if (
          millis() - this.narrationStartTime >
          (this.questionNarration.duration() + 0.5) * 1000
        ) {
          this.questionNarration.stop();
          this.status = "TIMER";
        }
      }
    }
    this.timer.reset();
  }

  drawTimer() {
    this.drawMainTextbox(this.questions[this.questionIdx]);
    this.drawOptions();
    this.timer.display();
    if (this.timer.timeout) {
      this.status = "GAMEOVER";
      this.gameoverStartTime = millis();
    } else if (!this.timer.running) {
      this.timer.start();
    }
  }

  drawGiveup() {
    this.narrationStarted = false;
    this.questionNarration.stop();
    this.timer.reset();
    timerSound.stop();

    fill(0); // 검정색, 투명도 150
    rect(0, 0, width, height);

    textSize(60);
    fill(255); // 흰색 텍스트
    textAlign(CENTER, TOP); // 텍스트 정렬 (가운데 정렬, 위쪽 정렬)
    text(`${userMajor} ${userName} 학우님께서는\n중도 포기를 선택하셨습니다.`, width / 2, height / 2 - 400); // 텍스트 좌표

    textAlign(CENTER, CENTER); // 텍스트 정렬 (가운데 정렬, 위쪽 정렬)
    textSize(50);
    text("중도 포기                   계속하기", width / 2, height / 2 -50); // 텍스트 좌표 (+50 바꿈 sh)
    // 중도포기 계속하기 버튼 원 sh
    fill(255,120);
    ellipse(width / 2 + 200, height / 2 -50, 250,250);
    ellipse(width / 2 - 195, height / 2 -50, 250,250);

    textSize(200);
    fill(255,0,0);
    textAlign(CENTER, BOTTOM); // 텍스트 정렬 (가운데 정렬, 위쪽 정렬)
    text("쫄?", width / 2+50, height / 2 + 400); //sh
    textSize(60);
    fill(255);
    textAlign(CENTER, BOTTOM); // 텍스트 정렬 (가운데 정렬, 위쪽 정렬)
    text("이십니까?", width / 2, height / 2 + 500); //sh

    textAlign(CENTER, CENTER);
    textSize();
  }

  drawReaction() {
    timerSound.stop(); // 타이머
    // this.reactions[this.selectedAnswer]();
    // if (
    //   millis() - this.reactionVoiceStartTime >
    //   this.reactionVoiceLength * 1000
    // ) {
    //   this.status = "END";
    // }
    // console.log(this.reactions[this.selectedAnswer]);
    if (
      this.reactions[this.selectedAnswer].currentReactionPage.type == "SOUND"
    ) {
      this.drawBackground();
      this.reactions[this.selectedAnswer].draw();
    } else {
      this.drawMainTextbox(this.reactions[this.selectedAnswer].draw());
    }

    if (this.reactions[this.selectedAnswer].reactionEnd) {
      this.status = "END";
    }
    // for (let reactionIdx in this.reactions) {
    //   let reaction = this.reactions[reactionIdx];

    // }
  }

    // 열종
    drawGameOver() {
      // 이미지 표시
      image(img_gameover, 0, 0, width, height);
    
      // 게임 오버 사운드 재생 및 중지
      if (!over && !sound_gameover.isPlaying()) {
        sound_gameover.play();
        // 게임 오버 상태 설정
        over = true;
      }
    
      // 일정 시간이 지나면 게임 상태 초기화
      if (millis() - this.gameoverStartTime > 6 * 1000) {
        // 게임 상태를 "RESET"으로 설정
        this.status = "RESET";
      }
    }

  setAdditional() {
    if (this.additionals) {
      tintReset(); //민규
      gaugeValue = 0; //민규
      this.buildupMentions = this.additionals.buildupMentions;
      this.buildupIdx = 0;
      this.questions = this.additionals.questions;
      this.questionNarration = this.additionals.narration;
      this.questionIdx = 0;
      this.answers = this.additionals.answers;
      this.selectedAnswer = -1;
      this.reactions = this.additionals.reactions;
      this.status = "BUILDUP";
      this.narrationStarted = false;
    } else {
      this.status = "END";
    }
  }

  // keyPressed() { //sh주석
  //     if (this.status == "BUILDUP") {
  //       this.buildupIdx += 1;
  //       if (this.buildupIdx == this.buildupMentions.length) {
  //         this.status = "QUESTION_ANSWER";
  //       }
  //     } else if (this.status == "QUESTION_ANSWER") {
  //       if (this.questionIdx < this.questions.length - 1) {
  //         this.questionIdx += 1;
  //       }
  //     } else if (this.status == "REACTION") {
  //       this.reactions[this.selectedAnswer].keyPressed();
  //     }
  // }

  mousePressed() { //sh 1218
     
    if (this.status == "BUILDUP") {
      if (this.giveupButton.checkMouseOver()) {
        this.status = "GIVEUP";
        this.prevStatus = "BUILDUP";
      } else {
        this.buildupIdx += 1; //sh
        if (this.buildupIdx == this.buildupMentions.length) {//sh
          this.status = "QUESTION_ANSWER";
        }
      }
    } else if (this.status == "QUESTION_ANSWER") {
      if (this.giveupButton.checkMouseOver()) {
        this.status = "GIVEUP";
        this.prevStatus = "QUESTION_ANSWER";
      } else if (this.questionIdx < this.questions.length - 1) { //sh
        this.questionIdx += 1;
      }
    } else if (this.status == "TIMER") {
      if (this.giveupButton.checkMouseOver()) {
        this.status = "GIVEUP";
        this.prevStatus = "TIMER";
      }
      // this.timer.reset(); //sh
      for (let answer of this.answers) {
        answer.mousePressed();
      }
    } else if (this.status == "REACTION") {
      this.reactions[this.selectedAnswer].mousePressed(); //sh
    } else if (this.status == "GIVEUP") { //sh 중도포기? 화면에서 
      let d1 = dist(mouseX, mouseY, width / 2 + 180, height / 2 + 50);
      let d2 = dist(mouseX, mouseY, width / 2 - 180, height / 2 + 50);
      if (d1 < 125) {//sh (범위 수정)
        this.timer.reset(); //sh
        this.timer.start();
        this.status = this.prevStatus;
      }
      if (d2 < 125) {//sh
        this.status = "GAMEOVER";
        this.gameoverStartTime = millis();
      }
    }
  }
}