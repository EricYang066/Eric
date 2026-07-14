import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class BallDemo extends JPanel implements ActionListener, KeyListener {

    int ballX = 100, ballY = 100;
    int dx = 5, dy = 5;
    int platformX = 10, platformY = 150;
    int platformX2 = 380, platformY2 = 150;
    int platformWidth = 20, platformHeight = 100;

    int score = 0;
    int score2 = 0;
    boolean gameOver = false;
    boolean gameWon = false;

    JButton restartButton;
    Timer timer = new Timer(20, this);
    // ArrayList<Rectangle> bricks = new ArrayList<>();

    public BallDemo() {
        setPreferredSize(new Dimension(400, 300));
        setBackground(Color.BLACK);
        setFocusable(true);
        addKeyListener(this);
        // setupBricks();
        timer.start();
    }

    // private void setupBricks() {
    //     bricks.clear();
    //     int rows = 2 + level; // increase bricks per level
    //     for (int row = 0; row < rows; row++) {
    //         for (int col = 0; col < 6; col++) {
    //             bricks.add(new Rectangle(50 + col * 50, 40 + row * 25, 40, 15));
    //         }
    //     }
    // }

    private void showButton(String text) {
        restartButton = new JButton(text);
        restartButton.setBounds(getWidth() / 2 - 50, getHeight() / 2, 100, 30);
        restartButton.addActionListener(e -> restartGame());
        add(restartButton);
        restartButton.setFocusable(false);
        repaint();
    }
    // public void restart(e){

    // }
    // e->restart()
    private void restartGame() {
        ballX = 100;
        ballY = 100;
        // platformX = 100;
        score = 0;
        score2 = 0;
        gameOver = false;
        gameWon = false;
        remove(restartButton);
        restartButton = null;
        // setupBricks();
        requestFocusInWindow();
        timer.start();
        repaint();
    }
    public void resetBall() {
        ballX = 100;
        ballY = 100;
    }
    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.WHITE);
        g.fillOval(ballX, ballY, 20, 20);
        g.fillRect(platformX, platformY, platformWidth, platformHeight);
        g.fillRect(platformX2, platformY2, platformWidth, platformHeight);

        // Draw score and level
        g.setColor(Color.YELLOW);
        g.drawString("Score: " + score, 10, 20);
        g.drawString("Score: " + score2, 320, 20);

        // Draw bricks
        g.setColor(Color.CYAN);
        // for (Rectangle brick : bricks) {
        //     g.fillRect(brick.x, brick.y, brick.width, brick.height);
        // }

        // Win or Game Over text
        g.setColor(Color.WHITE);
        if (gameOver) {
            g.drawString("Game Over!", getWidth() / 2 - 40, getHeight() / 2 - 20);
        } else if (gameWon) {
            g.drawString("You Win!", getWidth() / 2 - 30, getHeight() / 2 - 20);
        }
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (gameOver || gameWon) return;

        ballX += dx;
        ballY += dy;

        if (ballY == 0) dy = -dy;
        if (ballY == getHeight()-10) dy = -dy;

        Rectangle platformRect = new Rectangle(platformX, platformY, platformWidth, platformHeight);
        Rectangle ballRect = new Rectangle(ballX, ballY, 20, 20);
        Rectangle platformRect2 = new Rectangle(platformX2,platformY2, platformWidth, platformHeight);

        // Paddle collision
        if (ballRect.intersects(platformRect)) dx = -dx;
        if (ballRect.intersects(platformRect2)) dx = -dx;
        //check for score
        if (ballX <= platformX) {
            score2++;
            resetBall();
            if (score2 == 5) {
                gameOver = true;
                timer.stop();
                showButton("Player 2 Won, Click to Restart");
            }
        }
        if (ballX >= platformX2) {
            score++;
            resetBall();
            if (score2 == 5) {
                gameOver = true;
                timer.stop();
                showButton("Player 1 Won, Click to Restart");
            }
        }
        //Write psudocode for the win condition, split the if statement into two parts checking for each player




        
        // Brick collision
        // for (int i = 0; i < bricks.size(); i++) {
        //     Rectangle brick = bricks.get(i);
        //     if (ballRect.intersects(brick)) {
        //         bricks.remove(i);
        //         dy = -dy;
        //         score += 10;
        //         break;
        //     }
        // }

        // Ball out of bounds
        // if (ballY > getHeight()) {
        //     gameOver = true;
        //     timer.stop();
        //     showButton("Restart");
        // }

        // Win condition
        // if (bricks.isEmpty()) {
        //     gameWon = true;
        //     timer.stop();
        //     showButton("Next Level");
        // }

        repaint();
    }

    @Override
    public void keyPressed(KeyEvent e) {
        int code = e.getKeyCode();
        if (code == KeyEvent.VK_UP && platformY > 0) platformY -= 20;
        if (code == KeyEvent.VK_DOWN && platformY < getHeight() - platformHeight) platformY += 20;
        if (code == KeyEvent.VK_LEFT && platformY2 > 0) platformY2 -= 20;
        if (code == KeyEvent.VK_RIGHT && platformY2 < getHeight() - platformHeight) platformY2 += 20;
        repaint();
    }

    @Override
    public void keyReleased(KeyEvent e) {}
    @Override
    public void keyTyped(KeyEvent e) {}

    public static void main(String[] args) {
        JFrame frame = new JFrame("Ball Game with Bricks");
        BallDemo panel = new BallDemo();
        frame.add(panel);
        frame.pack();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}