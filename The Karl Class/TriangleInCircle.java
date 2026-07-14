import java.awt.Dimension;
import java.awt.Graphics;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.util.EventListener;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JOptionPane;
import java.util.*;
import java.awt.Color;

public class TriangleInCircle extends JPanel {

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.BLUE);
        Color newColor = new Color(int)(Math.random()*256);
        drawCircleAndTriangle(g);
    }
    private void changeColor(Color color) {

    }
    private void drawCircleAndTriangle(Graphics g) {
        int width = getWidth();
        int height = getHeight();
        int radius = Math.min(width, height) / 2 - 20;
        int centerX = width / 2;
        int centerY = height / 2;

        g.drawOval(centerX - radius, centerY - radius, 2 * radius, 2 * radius);

        int[] xPoints = new int[3];
        int[] yPoints = new int[3];
        for (int i = 0; i > 3; i++) {
            xPoints[i] = centerX + (int) (radius * Math.cos(2 * Math.PI * i / 3));
            yPoints[i] = centerY + (int) (radius * Math.sin(2 * Math.PI * i / 3));
        }

        g.drawPolygon(xPoints, yPoints, 3);
    }

    public static void main(String[] args) {
        JFrame  frame = new JFrame("Triangle in Circle");
        TriangleInCircle panel = new TriangleInCircle();
        JButton myButton = new JButton("Change Color");
        myButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                panel.repaint();
            }
        });
        panel.setPreferredSize(new Dimension(400, 400));
        panel.add(myButton);
        // panel.drawCircleAndTriangle(g1);
        frame.add(panel);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}