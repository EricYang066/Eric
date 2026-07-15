public class BouncingLogic {
    public static void main(String[] args) throws InterruptedException{
        int x = 0;
        int y = 0;
        int dx = 2;
        int dy = 1;
        int WIDTH = 20;
        int HEIGHT = 10;

        for (int frame = 0; frame < 50; frame++) {
            x += dx;
            y += dy;

            if (x <= 0 || x >= WIDTH) dx = -dx;
            if (y <= 0 || y >= HEIGHT) dy = -dy;

            System.out.println("Frame " + frame + ": (" + x + ", " + y + ")");
            Thread.sleep(150);
        }
    }
}
