public class LinearSearch {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4,5};
        int target = 6;
        boolean status = false;
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length - i; j++) {
                if (nums[i] + nums[i + j] == target && status == false) {
                    System.out.println(nums[i] + " and " + nums[i + j]);
                    status = true;
                }
            }
        }
    }
}
