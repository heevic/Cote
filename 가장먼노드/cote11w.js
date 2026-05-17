function solution(n, vertex) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [a, b] of vertex) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const distance = Array(n + 1).fill(-1);
    distance[1] = 0;
    const queue = [1];
    let front = 0;

    while (front < queue.length) {
        const current = queue[front++];
        for (const next of graph[current]) {
            if (distance[next] === -1) {
                distance[next] = distance[current] + 1;
                queue.push(next);
            }
        }
    }

    const maxDistance = Math.max(...distance);
    return distance.filter(v => v === maxDistance).length;
}