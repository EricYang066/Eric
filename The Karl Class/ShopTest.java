import java.util.*;
public class ShopTest {
    static Scanner scan = new Scanner(System.in);
    static int gold = 50;
    //{Name, Price}
    static Map<String,Integer> inventory = new HashMap<>();
    static Map<String,Integer> shopItems = new HashMap<>();

    public static void main(String[] args) {
        //not using add or append, hashmap uses put() to add stuff
        shopItems.put("Health Potion", 10);
        shopItems.put("Sword", 30);
        shopItems.put("Shield", 20);

        System.out.println("Welcome to the shop!");
        boolean running = true;
        while (running) {
            System.out.println("\nYou have " + gold + " gold to spend.");
            System.out.println("What would you like to buy.");
            System.out.println("1. View Shop");
            System.out.println("2. Buy");
            System.out.println("3. Check Inventory");
            System.out.println("4. Exit");
            
            int choice = scan.nextInt();
            scan.nextLine();

            switch(choice) {
                case 1:
                    showShop();
                    break;
                case 2:
                    buyItem();
                    break;
                case 3:
                    showInventory();
                    break;
                case 4:
                    running = false;
                    System.out.println("Bye.");
                    break;
                default:
                    System.out.println("Invalid Input");
            }
        
        }
        
    }
    static void showShop() {
        System.out.println("-----Shop Items-----");
        //Hashmap {Key:Value} - this pair is called an entry
        //key = firstelement(usually name) = index, value = value
        for (Map.Entry<String, Integer> entry : shopItems.entrySet()) {
            System.out.println(entry.getKey()+ " - " + entry.getValue() + " gold");
        }
    }
    static void buyItem() {
        showShop();
        System.out.println("Enter item name to buy: ");
        String item = scan.nextLine();
        if (! shopItems.containsKey(item)) {
            System.out.println("Item not sold here.");
            return;
        }
        int price = shopItems.get(item);
        if (gold >= price) {
            gold -= price;
            //if item is limited remove the item first then add to inventory
            inventory.put(item, inventory.getOrDefault(item, 0) + 1);
            System.out.println("You purchased " + item);
        } else {
            System.out.println("Not enough gold.");
        }
    }
    static void showInventory() {
        System.out.println("This is your inventory: ");
        if (inventory.isEmpty()) {
            System.out.println("Nothing Here.");
        } else {
            for (Map.Entry<String, Integer> entry : inventory.entrySet()) {
                System.out.println(entry.getKey() + " x" + entry.getValue());
            }
        }
    }
}
