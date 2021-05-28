const qnaList = [
  {
    q: '1. 아침에 눈 뜨는 게 두려운 적이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '2. 잠을 잘 못 들거나 깊은 잠을 못 자고 자주 잠에서 깬다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '3. 늘 쫓기는 느낌이 든다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '4. 식욕이 없어 잘 안 먹거나 갑자기 폭식을 한다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '5. 매사에 집중이 안되고 일의 능률이 떨아진다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },

  {
    q: '6. 기억력이 나빠져 잘 잊어버린다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '7. 텔레파시, 육감, 사주를 믿는다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '8. 만사가 귀찮고 피로감을 자주 느낀다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '9. 나에 대한 안 좋은 뜬소문에 시달린 적이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '10. 말과 행동이 거칠어졌다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '11. 느닷없이 화가 치밀어 오르는 때가 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '12. 남들과 터놓고 속얘기하기를 꺼린다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '13. 귀가 얇은 편이다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '14. 집안 식구들로부터 가정에 소홀하다는 이야기를 들었다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '15. 내 일이 지겹게 느껴진다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '16. 동료가 제멋대로 행동한 적이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '17. 납득할 수 없는 요구 때문에 골치가 아팠다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '18. 시간 약속 때문에 압박감을 느껴본 적이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '19. 리액션이 과하다는 말을 종종 듣는다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '20. 생각이 많아 일이 늦어진다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '21. 나는 남들보다 특별했으면 좋겠다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '22. 쉽게 부끄러워하고 반응에 몹시 민감하다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '23. 동료와 말다툼을 한 적이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '24. 내 의지와는 전혀 상관없는 일을 한 적이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '25. 나의 의견이 무시당한 적이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '26. 아무런 이유 없이 나를 괴롭히는 사람이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '27. 공개적으로 혼난 적이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '28. 일의 분배가 불공정하게 이루어진다고 생각한 적이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '1. 아침에 눈 뜨는 게 두려운 적이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
  {
    q: '1. 아침에 눈 뜨는 게 두려운 적이 있다.',
    a: [
      { answer: 'a. 전혀 없었다', type: [0] },
      { answer: 'b. 가끔 있었다', type: [1] },
      { answer: 'c. 자주 있었다.', type: [2] },
    ]
  },
]

const infoList = [
  {
    name: '다행이네요',
    desc: '현재 특별한 정서적 불편을 느끼지 않는 상태에요.'
  },
  {
    name: '의심돼요',
    desc: '조금 많은 스트레스가 의심되며 예방책이 필요할거 같아요.'
  },
  {
    name: '위험할지 몰라요',
    desc: '중등도의 스트레스가 있으며 적극적인 도움을 받으면 좋아요.'
  },

]
