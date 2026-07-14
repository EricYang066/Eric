public class Ears {
    public static int bunnyEars(int bunnies) {
        if (bunnies == 0) {
            return 0;
        }
        else {
            return 2 + bunnyEars(bunnies - 1);
        }
    }

    public static void main(String[] args) {
        int answer = bunnyEars(30);
        System.out.println(answer);
    }
}