import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        // 절댓값 기준 최소 힙
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> {
            // 절댓값이 같으면 실제 값 작은 것 우선 (음수 먼저)
            if (Math.abs(a) == Math.abs(b)) {
                return a - b;
            }
            // 절댓값이 작은 값 우선
            return Math.abs(a) - Math.abs(b);
        });

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < n; i++) {
            int x = Integer.parseInt(br.readLine());

            if (x != 0) {
                // 값 추가
                pq.add(x);
            } else {
                // 값 출력 및 제거
                if (pq.isEmpty()) {
                    sb.append(0).append("\n");
                } else {
                    sb.append(pq.poll()).append("\n");
                }
            }
        }

        System.out.print(sb);
    }
}
// 커밋용 주석