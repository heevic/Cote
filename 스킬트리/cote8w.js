function solution(skill, skill_trees) {
    let answer = 0; // 조건을 만족하는 스킬트리의 개수를 저장할 변수

    for (const tree of skill_trees) { // 배열의 각 스킬트리를 하나씩 순회
        // 문자열 tree를 전개 연산자([...])로 문자 배열로 변환한 뒤,
        // filter를 사용해 skill(선행 스킬 순서)에 포함된 문자만 남김
        const filtered = [...tree].filter(ch => skill.includes(ch)).join("");
        // 다시 join("")으로 문자열로 합침 → 선행 스킬만 남긴 순서 문자열
        // skill.startsWith(filtered):
        // filtered 문자열이 skill의 앞부분과 일치하는지 검사
        if (skill.startsWith(filtered)) {
            answer++; // 조건을 만족하면 유효한 스킬트리이므로 카운트 증가
        }
    }

    return answer; // 최종적으로 가능한 스킬트리 개수 반환
}