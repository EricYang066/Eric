import java.awt.*;
import java.util.*;
public class Features {
    public static void main(String[] args) {
        ArrayList<Rectangle> bricks = new ArrayList();
        for(int i = 0; i < 5; i++) {
            bricks.add(new Rectangle(50+i*60, 10, 40, 20));
        }
    }
}