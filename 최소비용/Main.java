import java.io.*;
import java.util.*;

public class Main {

    static int N;
    static ArrayList<int[]>[] edges;

    static int dijkstra(int start, int goal) {
        boolean[] visited = new boolean[N + 1];

        PriorityQueue<int[]> queue = new PriorityQueue<>((a, b) -> a[1] - b[1]);

        queue.add(new int[] {start, 0});

        while (queue.size() > 0) {
            int[] u = queue.remove();

            int node = u[0];
            int distance = u[1];

            if (visited[node]) continue;
            visited[node] = true;

            if (node == goal) return distance;

            for (int[] edge : edges[node]) {
                int neighbor = edge[0];
                int cost = edge[1];

                queue.add(new int[] {neighbor, distance + cost});
            }
        }

        return -1;
    }

    @SuppressWarnings("unchecked")
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());

        edges = new ArrayList[N + 1];

        for (int i = 1; i <= N; ++i) {
            edges[i] = new ArrayList<>();
        }

        for (int i = 0; i < M; ++i) {
            StringTokenizer st = new StringTokenizer(br.readLine());

            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int cost = Integer.parseInt(st.nextToken());
            edges[a].add(new int[] {b, cost});
        }

        StringTokenizer st = new StringTokenizer(br.readLine());

        int start = Integer.parseInt(st.nextToken());
        int goal = Integer.parseInt(st.nextToken());

        System.out.println(dijkstra(start, goal));
    }
}