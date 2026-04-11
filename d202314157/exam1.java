import java.io.*;
import java.util.*;

public class exam1 {
    static class Point {
        int x, y;
        Point(int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    public static void main(String[] args) throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(reader.readLine());

        Point[] arr = new Point[N];

        for (int i = 0; i < N; i++) {
            StringTokenizer st = new StringTokenizer(reader.readLine());
            int x = Integer.parseInt(st.nextToken());
            int y = Integer.parseInt(st.nextToken());
            arr[i] = new Point(x, y);
        }

        Arrays.sort(arr, (p, q) -> {
            if (p.x == q.x) return p.y - q.y; // y ASC
            return q.x - p.x; // x DESC
        });

        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
        for (int i = 0; i < N; i++) {
            writer.write(arr[i].x + " " + arr[i].y);
            writer.newLine();
        }
        writer.flush();
    }
}
