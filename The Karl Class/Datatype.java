import java.util.Scanner;
public class Datatype {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int userInput = scan.nextInt();
        do { 
            System.out.println("""
                    1: Deposit
                    2. Withdrawal
                    3. Show Balance
                    4. Exit
                    """);
        } while (userInput != 4);
    }
}