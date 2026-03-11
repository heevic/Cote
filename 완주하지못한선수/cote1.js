function solution(participant, completion) {
    const pMap = {};

    // 1. 참여자 명단을 돌며 객체에 인원수 기록
    participant.forEach(name => {
        // 이미 이름이 있다면 +1, 없으면 1로 초기화
        pMap[name] = (pMap[name] || 0) + 1;
    });

    // 2. 완주자 명단을 돌며 인원수 차감
    completion.forEach(name => {
        pMap[name]--;
    });

    // 3. 인원수가 남아있는(0이 아닌) 사람 찾기
    for (let name in pMap) {
        if (pMap[name] > 0) {
            return name;
        }
    }
}