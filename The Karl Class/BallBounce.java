public class BallBounce extends Thread{
    String name;
    int position = 0;
    int direction = 1;
    int max = 20;
    int rate;
    public BallBounce(String name, int rate) {
        this.name = name;
        this.rate = rate;
    }
    @Override
    public void run() {
        while (true) { 
            position += direction;
            if (position == 0 || position == max) {
                direction *= -1;
            }
            String line = "";
            for (int i = 0; i < position; i++) {
                line += " ";   
            }
            line += "0";
            System.out.println(name + ": " + line);
            try {
                Thread.sleep(rate);
            } catch (Exception e) {
                break;
            }
        }
    }
    public static void main(String[] args) {
        Thread a = new BallBounce("Ball 1", 200);
        Thread b = new BallBounce("Ball 2", 500);
        Thread c = new BallBounce("Ball 3", 1000);

        a.start();
        b.start();
        c.start();
    }
}
