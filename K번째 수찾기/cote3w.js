function solution(array, commands) {
    let answer = []; // 결과를 담을 배열

    // commands 배열을 하나씩 순회
    for (let i = 0; i < commands.length; i++) {
        let start = commands[i][0]; // 시작 위치 (i)
        let end = commands[i][1];   // 끝 위치 (j)
        let k = commands[i][2];     // k번째 수

        // 배열 자르기
        let sliced = array.slice(start - 1, end);

        // 숫자 오름차순 정렬
        sliced.sort((a, b) => a - b);

        // k번째 값 선택
        answer.push(sliced[k - 1]);
    }

    // 결과 반환
    return answer;
}
// 커밋용 주석