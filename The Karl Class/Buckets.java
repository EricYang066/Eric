// public class Buckets {
//     public static void main(String[] args) {
//         int[] s = {10, 15, 20, 26, 40, 50, 100};
//         int counter = 1;

//         for (int i = 0; i < s.length; i++) {
//             System.out.println("You get " + counter + " buckets for $" + s[i] + " at a deal of $" + s[i] / counter + " per bucket.");
//             counter = counter << 1;
//         }
//         System.out.println("Making 32 for $50 and 64 for $100 the best deals.");

//     }
// }

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
public class Buckets {
    public static void main(String[] args) {
        HashMap<Integer, Integer> m = new HashMap<>();
        int[] s = {10, 15, 20, 26, 40, 50, 100};
        int c = 1;
        for (int i = 0; i < s.length; i++) {
            m.put(c, s[i]);
            c = c << 1;
        }
        for (Map.Entry<Integer, Integer> deal : m.entrySet()){
            System.out.println("You're buying " + deal.getKey() + " buckets for $" + deal.getValue() + "!");
        }
        System.out.println(m);

        List<Integer> keys = new ArrayList<>(m.keySet());
        System.out.println(keys);
        
        Collections.sort(keys);
        System.out.println(keys);
        for(Integer key : keys) {
            System.out.println("You're buying " + key + " buckets for $" + m.get(key) + "!");
        }
        ArrayList<Double> eff = new ArrayList<>();
        int d = 1;
        for (int i = 0; i < 7; i++) {
            double a = s[i]/d;
            d = d << 1;
            eff.add(a);
        }
        System.out.println(eff);
    }
}