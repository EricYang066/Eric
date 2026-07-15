import java.util.HashMap;
import java.util.Map;
import java.util.Random;

public class Hashtable {
    public static void main(String[] args) {
        // HashMap<String, Integer> hashTable = new HashMap<>(10);
        HashMap<Integer, Double> hashMap = new HashMap<>(10);
        Random rand = new Random();
        for (int i = 0; i < 10; i++) {
            int num1 = rand.nextInt(100)+1;
            double num2 = Math.pow(num1,2);
            hashMap.put(num1, num2);
        }
        for (Map.Entry<Integer, Double> pair : hashMap.entrySet()) {
                System.out.println("The square of " + pair.getKey() + " is " + pair.getValue());
        }
        

        // hashTable.put("Alice",25);
        // hashTable.put("Bob", 30);
        // hashTable.put("Charlie", 35);

        // System.out.println(hashTable.get("Charlie"));
        // if (hashTable.containsKey("Bob")) {
        //     System.out.println("There is already a Bob");
        // }
        // hashTable.remove("Bob");
        // if (hashTable.containsKey("Bob")) {
        //     System.out.println("There is already a Bob");
        // }

        // for (Map.Entry<String, Integer> pair : hashTable.entrySet()) {
        //     System.out.println(pair.getKey() + " : " + pair.getValue());
        // }
    }
}