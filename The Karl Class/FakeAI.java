import java.util.*;

public class FakeAI {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Random rand = new Random();

        int password = rand.nextInt(50) + 1;
        String input = "";

        System.out.println("AI SECURITY TERMINAL v1.0");

        while (!input.equals("exit")) {

            System.out.print("> ");
            input = sc.nextLine();

            if (input.equals("help")) {
                System.out.println("Commands: hint, guess #, analyze #, exit");
            }

            else if (input.equals("hint")) {

                int chance = rand.nextInt(2);
                if (chance == 0)
                    if (password % 2 == 0)
                        System.out.println("AI: The password is EVEN.");
                    else
                        System.out.println("AI: The password is ODD.");
                else if (chance == 1)
                    if (password < 10)
                        System.out.println("AI: The password is a SINGLE DIGIT.");
                    else if (password < 20)
                        System.out.println("AI: The password is in the TEENS.");
                    else if (password < 30)
                        System.out.println("AI: The password is in the TWENTIES.");
                    else if (password < 40)
                        System.out.println("AI: The password is in the THIRTIES.");
                    else if (password < 50)
                        System.out.println("AI: The password is in the FOURTIES.");
                    else if (password == 50) {
                        System.out.println("AI: The password is BIG.");
                    }

            }

            else if (input.startsWith("guess")) {

                int guess = Integer.parseInt(input.substring(6));
                System.out.println("AI: PROCESSING...");
                if (guess == 50)
                    System.out.println("AI: I see, binary search...");

                if (guess == 25)
                    System.out.println("AI: I see, binary search...");

                if (guess == password) {
                    System.out.println("AI: ACCESS GRANTED 🔓");
                    break;
                }
                else {
                    System.out.println("AI: Incorrect password.");
                }
            }

            else if (input.startsWith("analyze")) {

                int guess = Integer.parseInt(input.substring(8));

                if (guess < password)
                    System.out.println("AI: The password is HIGHER.");

                else if (guess > password)
                    System.out.println("AI: The password is LOWER.");

                if (Math.abs(password - guess) <= 3)
                    System.out.println("AI: VERY CLOSE...");
                
                else if (Math.abs(password - guess) <= 10)
                    System.out.println("AI: PRETTY CLOSE...");
            }

            else {
                System.out.println("AI: Command not recognized.");
            }
        }

        System.out.println("System shutdown.");
    }
}