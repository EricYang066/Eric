public class Parking {
    private char[][] grid;
    int rows;
    int cols;
    boolean parked;
    public Parking(int rows, int cols) {
        this.rows = rows;
        this.cols = cols;
        grid = new char[rows][cols];
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < cols; j++) {
                grid[i][j] = ',';
            }
        }
    }
    public void showLot() {
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                System.out.println(grid[i][j]);
            }
            System.out.println();
        }
    }

    public void parking() {
        parked = false;

        for (int i=0; i <rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == ',' && !parked) {
                    grid[i][j] = '*';
                    parked = true;
                    break;
                }
                if (parked == true) {
                    break;
                }
            }
        }
    }
    public static void main(String[] args) {
        Parking lot = new Parking(2, 5);
        lot.parking();
        lot.showLot();
        lot.parking();
        lot.showLot();
    }
}
