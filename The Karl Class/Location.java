import java.util.HashMap;
import java.util.Map;
public class Location {
    String name;
    String description;
    Map<String,Location> exits;
    public Location (String name,String description){
        this.name = name;
        this.description = description;
        this.exits = new HashMap<>();
    }
    public String getName(){
        return name;
    }
    public String getDescription(){
        return description;
    }
    public void setExit(String direction, Location neighbor){
        exits.put(direction,neighbor);
        System.out.println("Neighbor added");
    }
    public Location getExit(String direction){
        return exits.get(direction);
    }
    public void showExit(){
        System.out.println("Exits: " + exits.keySet());
        System.out.println("Spawn  "+ "Forest  \n"+"Plain ");
    }
}
