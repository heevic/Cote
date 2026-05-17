function solution(n, vertex) {
    // 그래프
    const neighbors = Array.from({ length: n + 1 }, () => []);

    for (const [a, b] of vertex) {
        neighbors[a].push(b);
        neighbors[b].push(a); // 양방향
    }

    // 최단거리 배열
    const distances = Array(n + 1).fill(-1);

    // BFS
    const queue = [[1, 0]];
    let front = 0;

    while (front < queue.length) {
        const [node, distance] = queue[front++];

        // 이미 방문한 노드면 무시
        if (distances[node] >= 0) continue;

        // 최단거리 기록
        distances[node] = distance;

        // 다음 노드 등록
        for (const next of neighbors[node]) {
            queue.push([next, distance + 1]);
        }
    }

    // 가장 먼 거리
    const maxDistance = Math.max(...distances);

    // 가장 먼 노드 개수
    return distances.filter(v => v === maxDistance).length;
}