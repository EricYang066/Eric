import java.io.FileWriter;
import java.io.IOException;
public class IOExample {
    static String playername = "er";
    static int hp = 25;
    static int lvl = 2;
    public static void main(String[] args) {
        try {
            FileWriter writer = new FileWriter("./save1.txt");
            writer.write(playername+ "\n");
            writer.write(hp + "\n");
            writer.write(lvl + "\n");
            
            writer.close();
            System.out.println("File Saved!");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}