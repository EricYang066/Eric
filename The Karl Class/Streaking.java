public class Streaking {
    public static void main(String[] args) {
        int a[] = {1, 2, 3, 6, 4, 10, 23, 59, 229, 100};
        int b[] = {1, 2, 23, 4, 4, 1, 2, 3, 6};
        int streak = 0;
        int m = 0;
        for (int i = 0; i < a.length - 1; i++) {
            if (a[i] <= a[i + 1]) {
                streak++;
                // if (streak > m) {
                //     m = streak;
                // }
                m = Math.max(m, streak);
                } else {
                    streak = 0;
                }
                for (int j = 0; j < b.length - 1; j++) {
                    if (b[i] <= b[i + 1]) {
                    streak++;
                    // if (streak > m) {
                    //     m = streak;
                    // }
                    m = Math.max(m, streak);
                    } else {
                        streak = 0;
                    }
            }
        }
        System.out.println(m + 1);
    }
}
