import java.util.*;

public class AdventureQuestv4 {
    static Scanner scanner = new Scanner(System.in);
    static Random random = new Random();

    // Player attributes
    static String playerName;
    static int hp = 20;
    static int attack = 5;
    static int armor = 5;
    static int critChance = 50;
    static boolean weaponEquip = false;
    static boolean armorEquip = false;
    static int level;
    static int xp;
    static int xpToLvl;


    // Items
    static String[] enemies = {"Goblin","Orc","Dragon","Slime"};
    static String[] weaponList = {"Sword","Bow"};
    static String[] armorList = {"Cloth","Mail"};
    static String[] skills = {"fireball","ice lance"};
    static ArrayList<String> inventory = new ArrayList<>();
    static ArrayList<String> mySkills = new ArrayList<>();
    static int potions;

    // Enemy stats
    static int[] enemiesHP = {5,10,15,20};
    static int[] enemiesATK = {2,3,4,5};

    // Map
    static Location currentLocation;

    public static void main(String[] args) {
        // Build the world
        Location spawn = new Location("Spawn", "Welcome to the game!");
        Location plain = new Location("Plain","Nothing here.");
        Location forest = new Location("Forest","It is very quiet here...");

        // connect locations
        spawn.setExit("east", forest);
        spawn.setExit("south", plain);
        forest.setExit("west", spawn);
        plain.setExit("north", spawn);

        // starting location
        currentLocation = spawn;

        System.out.println("Welcome to Adventure Quest!");
        System.out.print("Enter your name: ");
        playerName = scanner.nextLine();
        System.out.println("Hello " + playerName + "! Your adventure begins...");

        gameLoop();
        System.out.println("Game Over. Thanks for playing!");
    }

    public static void gameLoop() {
        level = 2;
        xp = 0;
        xpToLvl = 10;

        while (hp > 0) {
            System.out.println("\nYou are at: " + currentLocation.getName());
            System.out.println(currentLocation.getDescription());

            System.out.println("\nWhat would you like to do?");
            System.out.println("1. Explore");
            System.out.println("2. Rest");
            System.out.println("3. Move");
            System.out.println("4. Equip");
            System.out.println("5. Exit");
            System.out.println("6. View Skills");
            System.out.print("> ");
            int choice = scanner.nextInt();
            potions = Collections.frequency(inventory,"Potion");

            switch (choice) {
                case 1 -> explore();
                case 2 -> rest();
                case 3 -> move();
                case 4 -> equip();
                case 5 -> { return; }
                case 6 -> viewSkills();
                default -> System.out.println("Invalid choice!");
            }
        }
    }

    public static void equip(){
        if (!armorEquip){
            for (String item :inventory){
                if (item.equals("Mail")){
                    armor += 5;
                    inventory.remove("Mail");
                    armorEquip = true;
                    System.out.println("You have equipped the item, defense is: "+armor);
                    return;
                }
            }
            System.out.println("No armor to equip.");
        } else {
            System.out.println("Armor slot not empty.");
        }
    }

    public static void explore() {
        int event = random.nextInt(3); // 0,1,2
        if (event == 0) {
            System.out.println("You found nothing...");
        } else if (event == 1) {
            inventory.add("Potion");
            System.out.println("You found a potion!");
            System.out.println(inventory);
        } else {
            battle();
        }
    }

    public static void rest() {
        hp = 20;
        System.out.println("You take a rest and recover your health!");
    }

    public static void move() {
        System.out.println("\nExits from here: ");
        currentLocation.showExits();

        System.out.print("Where would you like to go? > ");
        String direction = scanner.next().toLowerCase();

        Location next = currentLocation.getExit(direction);
        if (next != null) {
            currentLocation = next;
            System.out.println("You travel " + direction + "...");
        } else {
            System.out.println("You can't go that way!");
        }
    }

    public static void battle() {
        int enemyHp = enemiesHP[random.nextInt(enemiesHP.length)];
        String enemyName = enemies[random.nextInt(enemies.length)];
        System.out.println("A wild " + enemyName+ " appears!");

        while (enemyHp > 0 && hp > 0) {
            System.out.println("\nYour HP: " + hp + " | "+ enemyName +" HP: " + enemyHp);
            System.out.println("1. Attack");
            System.out.println("2. Use Potion (" + Collections.frequency(inventory, "Potion") + ")");
            System.out.println("3. Run");
            System.out.println("4. Use Skills");
            System.out.print("> ");
            int choice = scanner.nextInt();

            if (choice == 1) {
                int damage = random.nextInt(attack) + 1;
                int critCheck = random.nextInt(100);
                if (critCheck < critChance ){
                    damage *= 2;
                }
                enemyHp -= damage;
                if (damage > attack){
                    System.out.println("Critical hit! "+enemyName+ " takes "+damage+" damage!");
                } else {
                    System.out.println("You hit the "+enemyName+ " for " + damage + " damage!");
                }
            } else if (choice == 2) {
                if (potions > 0) {
                    inventory.remove("Potion");
                    hp = Math.min(20, hp + 10);
                    System.out.println("You drink a potion. HP restored to " + hp);
                } else {
                    System.out.println("No potions left!");
                }
            } else if (choice == 3) {
                System.out.println("You ran away!");
                return;
            } else if (choice == 4){
                if (mySkills.size()>0){
                    for(String skill:mySkills ){
                        System.out.println(skill);
                    }
                    System.out.println("Please enter the skill you want to cast: ");
                    int selectedSkill = scanner.nextInt();
                    System.out.println("Casting...");
                    
                    int damage = 2*(random.nextInt(attack) + 1);
                    int critCheck = random.nextInt(100);
                    if (critCheck < critChance ){
                        damage *= 2;
                    }
                    enemyHp -= damage;
                    if (damage > attack){
                        System.out.println("Critical hit! "+enemyName+ " takes "+damage+" damage!");
                    } else {
                        System.out.println("You hit the "+enemyName+ " for " + damage + " damage!");
                    }
                }else{
                    System.out.println("You have no skills to use");
                }
            } else{
                System.out.println("Invalid choice!");
            }

            // Enemy turn
            if (enemyHp > 0) {
                int enemyDamage = random.nextInt(4) + 1;
                hp -= enemyDamage;
                System.out.println("The "+enemyName+ " hits you for " + enemyDamage + " damage!");
            }
        }

        if (enemyHp <= 0) {
            System.out.println("You defeated the " + enemyName + "!");
            inventory.add("Mail"); // drop loot
            xp += 5;
            System.out.println("You have gained 5 exp!");
            if (xp>=xpToLvl){
                levelUp();
            }
        } else if (hp <= 0) {
            System.out.println("You were defeated by the "+enemyName+" ...");
        }
    }
    
    public static void levelUp(){
        level++;
        xp -= xpToLvl;
        xpToLvl = (int)(100 * Math.pow(level, 1.5)); // scaling formula
        hp += 10;
        attack += 2;
        armor += 1;
        System.out.println("Leveled up! You have reached level " + level + "!");
        System.out.println("Your stats have been increased!");

        // Every 5 levels -> unlock next skill from skills[] if available
        if (level % 5 == 0) {
            if (mySkills.size() < skills.length) {
                String newSkill = skills[mySkills.size()];
                mySkills.add(newSkill);
                System.out.println("Unlocked new skill: " + newSkill);
            } else {
                System.out.println("You have mastered all skills!");
            }
        }
    }

    /**
     * Displays the player's currently unlocked skills.
     */
    public static void viewSkills() {
        if (mySkills.isEmpty()) {
            System.out.println("You have not unlocked any skills yet.");
        } else {
            System.out.println("Your skills: " + mySkills);
        }
    }


}

// -------------------------
// Location Class
// -------------------------
class Location {
    private String name;
    private String description;
    private Map<String, Location> exits = new HashMap<>();

    public Location(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public void setExit(String direction, Location neighbor) {
        exits.put(direction.toLowerCase(), neighbor);
    }

    public Location getExit(String direction) {
        return exits.get(direction.toLowerCase());
    }

    public void showExits() {
        if (exits.isEmpty()) {
            System.out.println("No exits here.");
        } else {
            System.out.println(exits.keySet());
        }
    }

    public String getName() { return name; }
    public String getDescription() { return description; }
}
