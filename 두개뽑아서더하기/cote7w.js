function solution(numbers) {
    // 중복을 자동으로 제거하기 위한 Set 생성
    const set = new Set();

    // 첫 번째 숫자를 선택하는 반복문
    for (let i = 0; i < numbers.length; i++) {

        // 두 번째 숫자를 선택 (같은 인덱스 방지 위해 i+1부터 시작)
        for (let j = i + 1; j < numbers.length; j++) {

            // 두 숫자를 더한 값을 Set에 추가
            set.add(numbers[i] + numbers[j]);
        }
    }

    // Set을 배열로 변환 후 오름차순 정렬해서 반환
    return [...set].sort((a, b) => a - b);
}