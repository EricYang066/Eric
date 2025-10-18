import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Graphics;
import java.awt.Dimension;

public class TriangleInCircle extends JPanel {

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        drawCircleAndTriangle(g);
    }

    private void drawCircleAndTriangle(Graphics g) {
        int width = getWidth();
        int height = getHeight();
        int radius = Math.min(width, height);
        int centerX = width / 2;
        int centerY = height / 2;

        g.drawOval(centerX - radius, centerY - radius, 2 * radius, 2 * radius);
    }

    public static void main(String[] args) {
        JFrame  frame = new JFrame("Triangle in Circle");
        TriangleCircle panel = new TriangleCircle();
        panel.setPreferredSize(new Dimension(400, 400));
        frame.add(panel);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}