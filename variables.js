let college_major = {
  인문대학: [
    "국어국문학과",
    "중어중문학과",
    "영어영문학과",
    "불어불문학과",
    "독어독문학과",
    "노어노문학과",
    "서어서문학과",
    "언어학과",
    "역사학부",
    "고고미술사학과",
    "철학과",
    "종교학과",
    "미학과",
    "아시아언어문명학부",
  ],
  사회과학대학: [
    "정치외교학부",
    "경제학부",
    "사회학과",
    "인류학과",
    "심리학과",
    "지리학과",
    "사회복지학과",
    "언론정보학과",
    "정보문화학과",
  ],
  자연과학대학: [
    "수리과학부",
    "통계학과",
    "물리천문학부",
    "화학부",
    "생명과학부",
    "지구환경과학부",
    "뇌인지과학과",
    "과학학과",
  ],
  간호대학: ["간호학과"],
  경영대학: ["경영학과"],
  공과대학: [
    "건설환경공학부",
    "건축학과",
    "기계공학부",
    "산업공학과",
    "에너지자원공학과",
    "원자핵공학과",
    "재료공학부",
    "전기정보공학부",
    "조선해양공학과",
    "컴퓨터공학부",
    "항공우주공학과",
    "화학생물공학부",
  ],
  농업생명과학대학: [
    "식물생산과학부",
    "산림과학부",
    "식품동물생명공학부",
    "응용생물화학부",
    "조경지역시스템공학부",
    "바이오시스템소재학부",
    "농경제사회학부",
    "글로벌환경경영학과",
  ],
  미술대학: [
    "동양화과",
    "서양화과",
    "조소과",
    "공예과",
    "디자인과",
    "영상매체예술과",
  ],
  사범대학: [
    "교육학과",
    "국어교육과",
    "영어교육과",
    "독어교육과",
    "불어교육과",
    "사회교육과",
    "역사교육과",
    "지리교육과",
    "윤리교육과",
    "수학교육과",
    "물리교육과",
    "화학교육과",
    "생물교육과",
    "지구과학교육과",
    "체육교육과",
    "AI융합교육학과",
  ],
  사범대학: [
    "교육학과",
    "국어교육과",
    "영어교육과",
    "독어교육과",
    "불어교육과",
    "사회교육과",
    "역사교육과",
    "지리교육과",
    "윤리교육과",
    "수학교육과",
    "물리교육과",
    "화학교육과",
    "생물교육과",
    "지구과학교육과",
    "체육교육과",
    "AI융합교육학과",
  ],
  생활과학대학: ["소비자학과", "아동가족학과", "식품영양학과", "의류학과"],
  수의과대학: ["수의예과", "수의학과"],
  약학대학: ["약학과"],
  음악대학: ["성악과", "작곡과", "관현악과", "국악과", "피아노과", "음악학과"],
  의과대학: ["의예과", "의학과"],
  치과대학: ["치의예과"],
  자유전공학부: ["자유전공학부"],
};
// Quiz 1

let q1Buildups = [
  `USER_MAJOR USER_NAME 학우님, <서울대 나락퀴즈쇼>의 초대에 응해주셔서 감사합니다.`,
  `내년에 학생증 디자인이 개편되는데요. 예쁘고 실용적인 디자인으로 학생들에게 호평이 자자합니다.`,
  `이렇게 예쁜 학생증, 안 써볼 수 없겠죠?`, //현진pt
];

let q1Questions = [
  "그렇다면 다음 중 s-card(서울대 학생증)를 내밀기에 가장 적절한 상황을 고르시오.", //현진pt
];

let q1OptionsTexts = [
  "스터디 카페에서\n시끄러운 학생에게\n엄중하게 경고할 때",
  "거리에서\n마음에 드는 사람을\n반드시 꼬시고 싶을 때",
  "카페에 자리가 없어\n당당하게 다른 사람한테\n비키라고 말할 때",
  "커뮤니티에서\n서울대생인 걸 자랑하며\n우월감을 느끼고 싶을 때",
]; //현진pt //sh


let q1ReactionScene1_4 = () => {
  image(reactionImg_1_1, 0, 0, width, height);
};

let q1ReactionScene2_4 = () => {
  image(reactionImg_1_2, 0, 0, width, height);
};

let q1ReactionScene3_4 = () => {
  image(reactionImg_1_3, 0, 0, width, height);
};

let q1ReactionScene4_4 = () => {
  image(reactionImg_1_4, 0, 0, width, height);
};

// Quiz 2

let q2Buildups = [
  "패션에 대한 현대인들의 관심이 급증하고, 이에 따라 다양한 패션도 많이 등장하고 있는데요.",
];

let q2Questions = [
  "이 패션은 도저히 못 참겠다! 다음 중, 서울대학교에서 마주치기 싫은 최악의 패션을 고르시오.",
];

let q2ReactionScene1_1 = () => { //HW
  image(reactionImg_2_1, 0, 0, width, height);
};

let q2ReactionScene2_1 = () => { //HW
  image(reactionImg_2_2, 0, 0, width, height);
};

let q2ReactionScene3_1 = () => { //HW
  image(reactionImg_2_3, 0, 0, width, height);
};

let q2ReactionScene4_1 = () => { //HW
  image(reactionImg_2_4, 0, 0, width, height);
};

let q2ReactionScene_2 = () => { //HW
  image(reactionImg_2_5, 0, 0, width, height);
};

// let q2DrawReaction1 = () => {
//   fill(255);
//   text("REACTION 2-1", width / 2, height / 2);
// };
// let q2DrawReaction2 = () => {
//   fill(255);
//   text("REACTION 2-2", width / 2, height / 2);
// };
// let q2DrawReaction3 = () => {
//   fill(255);
//   text("REACTION 2-3", width / 2, height / 2);
// };
// let q2DrawReaction4 = () => {
//   fill(255);
//   text("REACTION 2-4", width / 2, height / 2);
// };

// let q2Reactions = [
//   q2DrawReaction1,
//   q2DrawReaction2,
//   q2DrawReaction3,
//   q2DrawReaction4,
// ];

// Quiz 3

let q3Buildups = [
  "혹시 ‘서울 공화국’이라는 단어 들어보셨나요?",
  "정치, 경제, 사회, 문화 등 모든 분야에 걸쳐 대부분의 역량이 서울 및 수도권에 집중되는 현상을 빗댄 말인데요.",
  "세종시로의 행정 수도 이전이 논의될 정도로 지역 불균형 문제가 심각한 상황입니다.",
  "서울의 대표 대학교 서울대도 수도권 과밀화 문제 해결을 위해 앞장서야 하겠죠.",
];

let q3Questions = ["그렇다면 서울대는 세종시로 이전해야 하나요?"];

let q3OptionsTexts = ["그렇다", "아니다"];

let q3BuildupsAdditional = ["문제가 일부 누락되었네요. 다시 묻겠습니다."];

let q3QuestionsAdditional = [
  "서울대, 내가 졸업하기 전에 세종시로 이전해야 하나요? ",
];

let q3OptionsTextsAdditional = ["그렇다", "아니다"];

//현진
let q3ReactionScene1_1 = () => {
  image(reactionImg_3_1, 0, 0, width, height); // 그렇다 그렇다
}

let q3ReactionScene2_1 = () => {
  image(reactionImg_3_2a, 0, 0, width, height); //그렇다 아니다
}

let q3ReactionScene2_2 = () => {
  image(reactionImg_3_2b, 0, 0, width, height);
}

let q3ReactionScene3_1 = () => {
  image(reactionImg_3_3a, 0, 0, width, height); //아니다
}

let q3ReactionScene3_2 = () => {
  image(reactionImg_3_3b, 0, 0, width, height);
}

// 종열
// Quiz 4

let q4Buildups = [
  "최근 쿠팡플레이에서 방영한 <대학전쟁>은 ‘서카포연고’의 서열을 정한다며 큰 화제를 모았는데요.",
  "각 학교마다 4명씩 5팀으로 두뇌 배틀을 벌여 최종 승자를 정하는 프로그램입니다.",
];

let q4Questions = [
  "그렇다면, 우리의 자존심이 걸린 <대학 전쟁>에 서울대 대표로 보내고 싶은 사람을 고르시오.",
];

let q4OptionsTexts = [ //hj
  "서울대학교\n의과대학 출신\n천재 개발자",
  "서울대학교\n경제학과 출신\n베스트셀러 작가",
  "서울대학교\n법과대학 출신\n노력의 대가",
  "서울대학교\n공법학과 출신\n지리 전문가",
];

let q4ReactionScene1_1 = () => {
  image(reactionImg_4_1, 0, 0, width, height);
};

let q4ReactionScene2_1 = () => {
  image(reactionImg_4_2, 0, 0, width, height);
};

let q4ReactionScene3_1 = () => {
  image(reactionImg_4_3, 0, 0, width, height);
};

let q4ReactionScene4_1 = () => {
  image(reactionImg_4_4, 0, 0, width, height);
};

let q4ReactionScene2 = () => {
  image(reactionImg_4_all, 0, 0, width, height);
};

// Quiz 5

let q5Buildups = [
  "최근 인터넷 기사들을 보면, 교내 커뮤니티 게시글을 그대로 가져와 서울대생 전체의 의견처럼 나타내는 경우가 종종 있는데요. ",
  "이러한 ‘일반화의 오류’를 최대한 방지하기 위해선 대표성을 띠는 공간이 필요합니다.",
];

let q5Questions = [
  "그렇다면 다음 중 서울대 전체 학생의 의견을 가장 잘 대변하는 곳을 고르시오.",
];

let q5OptionsTexts = [
  "에브리타임 HOT게시판",
  "스누라이프 BEST게시판",
  "서울대 트루스포럼",
  "오르비 ‘오늘의 추천글’",
];

let q5ReactionScene1_1 = () => {
  image(reactionImg_5_1, 0, 0, width, height);
};

let q5ReactionScene2_1 = () => {
  image(reactionImg_5_2, 0, 0, width, height);
};

let q5ReactionScene3_1 = () => {
  image(reactionImg_5_3, 0, 0, width, height);
};

let q5ReactionScene4_1 = () => {
  image(reactionImg_5_4, 0, 0, width, height);
};

// 종열
let reactionData = [
  {
    name: "REACTION_1",
    info: [
      [
        ["SOUND", q1ReactionScene1_4, "reactionVoice_1", 8],
      ],
      [
        ["SOUND", q1ReactionScene2_4, "reactionVoice_1", 8],
      ],
      [
        ["SOUND", q1ReactionScene3_4, "reactionVoice_1", 8],
      ],
      [
        ["SOUND", q1ReactionScene4_4, "reactionVoice_1", 8],
      ],
    ],
  },
  {
    name: "REACTION_2",
    info: [
      [
        ["SOUND", q2ReactionScene1_1, "reactionVoice_2_1", -1], //HW
        ["SOUND", q2ReactionScene_2, "reactionVoice_2_all", -1], //HW
      ],
      [
        ["SOUND", q2ReactionScene2_1, "reactionVoice_2_2", -1], //HW
        ["SOUND", q2ReactionScene_2, "reactionVoice_2_all", -1], //HW
      ],
      [
        ["SOUND", q2ReactionScene3_1, "reactionVoice_2_3", -1], //HW
        ["SOUND", q2ReactionScene_2, "reactionVoice_2_all", -1], //HW
      ],
      [
        ["SOUND", q2ReactionScene4_1, "reactionVoice_2_4", -1], //HW
        ["SOUND", q2ReactionScene_2, "reactionVoice_2_all", -1], //HW
      ],
    ],
  },
  {//현진
    name: "REACTION_3_1",
    info: [
      [], // 그렇다 눌렀을 때 넘어가는 것. //sh
      [ // 처음 문제에서 아니다 눌렀을 때 나오는 리액션
        ["SOUND", q3ReactionScene3_1, "reactionVoice_3_3a", -1],
        ["SOUND", q3ReactionScene3_2, "reactionVoice_3_3b", -1],
      ],
    ],
  },
  {
    name: "REACTION_3_2",
    info: [ // 처음에 그렇다 누르고 additional q에서 나오는 리액션
      [
        ["SOUND", q3ReactionScene1_1, "reactionVoice_3_1", -1],
      ],
      [
        ["SOUND", q3ReactionScene2_1, "reactionVoice_3_2a", -1],
        ["SOUND", q3ReactionScene2_2, "reactionVoice_3_2b",-1],
      ],
    ],
  },
  {
    name: "REACTION_4", // 종열
    info: [
      [
        ["SOUND", q4ReactionScene1_1, "reactionVoice_4_1", -1],
        ["SOUND", q4ReactionScene2, "reactionVoice_4_all", -1]
      ],
      [
        ["SOUND", q4ReactionScene2_1, "reactionVoice_4_2", -1],
        ["SOUND", q4ReactionScene2, "reactionVoice_4_all", -1],
      ],
      [
        ["SOUND", q4ReactionScene3_1, "reactionVoice_4_3", -1],
        ["SOUND", q4ReactionScene2, "reactionVoice_4_all", -1],
      ],
      [
        ["SOUND", q4ReactionScene4_1, "reactionVoice_4_4", -1],
        ["SOUND", q4ReactionScene2, "reactionVoice_4_all", -1],
      ],
    ],
  },
  {
    name: "REACTION_5", //sh
    info: [
      [
        ["SOUND", q5ReactionScene1_1, "reactionVoice_5", 8],
      ],
      [
        ["SOUND", q5ReactionScene2_1, "reactionVoice_5", 8],
      ],
      [
        ["SOUND", q5ReactionScene3_1, "reactionVoice_5", 8],
      ],
      [
        ["SOUND", q5ReactionScene4_1, "reactionVoice_5", 8],
      ],
    ],
  },
];