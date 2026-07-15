public class Forecast {
    public enum DayofWeek {
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY
    }
    public enum WeatherCondition {
        CLEAR("No clouds and no sun"),
        SUNNY("A lot of sun and few clouds"),
        CLOUDY("Many clouds cloaking the sun"),
        RAINY("Very cloudy with rain and thunder"),
        WINDY("Cloudy with lots of wind");

        private final String description;

        WeatherCondition(String description) {
            this.description = description;
        }
        public String getDescription() {
            return description;
        }
    }
    public class DailyForecast {
        private final DayofWeek day;
        private final WeatherCondition condition;

        public DailyForecast(DayofWeek day, WeatherCondition condition) {
            this.day = day;
            this.condition = condition;
        }
        public void displayForecast() {
            System.out.println(day + ": " + condition.getDescription());
        }
    }
    public static void main(String[] args) {
        DailyForecast[] weeklyForecast = new DailyForecast[3];
        weeklyForecast[0] = new DailyForecast(DayofWeek.MONDAY, WeatherCondition.CLOUDY);
        weeklyForecast[1] = new DailyForecast(DayofWeek.TUESDAY, WeatherCondition.SUNNY);
        weeklyForecast[2] = new DailyForecast(DayofWeek.WEDNESDAY, WeatherCondition.RAINY);
        System.out.println("--Forecast for next 3 days--");
        for (DailyForecast forecast : weeklyForecast) {
            forecast.displayForecast();
        }
    }
}