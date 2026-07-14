import java.util.*;

public class Reverse {
    public static void main(String[] args) {
        Stack<Character> reverse = new Stack<>();
        Scanner scanner = new Scanner(System.in);
        String sentence = scanner.nextLine();
        for (int i = 0; i < sentence.length(); i++) {
            Character temp = sentence.charAt(i);
            reverse.push(temp);
        }
        System.out.println(reverse);
        String a = "";
        for(int i = 0; i < sentence.length(); i++) {
            a = a + reverse.pop();
        }
        System.out.println(a);
    }
}