export interface Member {
  id: number;
  name: string;
  part: string;
  role: string;
  resolution: string;
  image: string;
}

const resolutions = [
  "최고의 무대를 만들겠습니다!",
  "관객과 하나되는 연주를 보여드리겠습니다.",
  "우리 소리의 울림을 전하겠습니다.",
  "창단 연주회를 위해 땀 흘려 준비했습니다.",
  "천안의 자랑이 되도록 노력하겠습니다.",
  "전통의 멋을 현대적 감각으로 표현하겠습니다.",
  "서로의 소리를 들으며 하나가 되겠습니다.",
  "오랫동안 기억에 남는 연주가 되길 바랍니다."
];

const generateMembers = (): Member[] => {
  // New grouping structure requested
  const parts = [
    { name: '지휘자/지도위원', count: 4, role: '지도위원' },
    { name: '가야금', count: 12, role: '단원' },
    { name: '거문고', count: 6, role: '단원' },
    { name: '대금/소금', count: 8, role: '단원' },
    { name: '해금/아쟁', count: 10, role: '단원' }, // Merged as requested
    { name: '타악', count: 8, role: '단원' }
  ];

  let idCounter = 1;
  const members: Member[] = [];

  // 1. Add Conductor explicitly
  members.push({
    id: idCounter++,
    name: "박상진",
    part: "지휘자/지도위원",
    role: "지휘자",
    resolution: "천안 청소년들의 꿈과 희망을 우리 소리에 담아 세계로 나아가겠습니다.",
    image: "https://picsum.photos/id/64/300/300" // Specific image for conductor
  });

  parts.forEach(part => {
    // Determine loop count (if it's the first group, we already added conductor, so -1)
    const loopCount = part.name === '지휘자/지도위원' ? part.count - 1 : part.count;

    for (let i = 0; i < loopCount; i++) {
      let role = part.role;
      // Assign 'Principal' (Suseok) to the first member of instrument groups
      if (part.name !== '지휘자/지도위원' && i === 0) {
        role = '수석';
      }

      members.push({
        id: idCounter++,
        name: `${part.name.substring(0, 1)}단원${i + 1}`, // Dummy names
        part: part.name,
        role: role,
        resolution: resolutions[Math.floor(Math.random() * resolutions.length)],
        image: `https://i.pravatar.cc/300?img=${(idCounter % 70) + 1}`
      });
    }
  });

  return members;
};

export const membersData = generateMembers();