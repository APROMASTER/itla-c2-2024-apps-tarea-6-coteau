import WeatherIconNotAvailable from '../assets/weather-icons/1.png';
import WeatherIconSunny from '../assets/weather-icons/2.png';
import WeatherIconMostlySunny from '../assets/weather-icons/3.png';
import WeatherIconPartlySunny from '../assets/weather-icons/4.png';
import WeatherIconMostlyCloudy from '../assets/weather-icons/5.png';
import WeatherIconCloudy from '../assets/weather-icons/6.png';
import WeatherIconOvercast from '../assets/weather-icons/7.png';
import WeatherIconOvercastWithLowClouds from '../assets/weather-icons/8.png';
import WeatherIconFog from '../assets/weather-icons/9.png';
import WeatherIconLightRain from '../assets/weather-icons/10.png';
import WeatherIconRain from '../assets/weather-icons/11.png';
import WeatherIconPossibleRain from '../assets/weather-icons/12.png';
import WeatherIconRainShower from '../assets/weather-icons/13.png';
import WeatherIconThunderstorm from '../assets/weather-icons/14.png';
import WeatherIconLocalThunderstorms from '../assets/weather-icons/15.png';
import WeatherIconClearNight from '../assets/weather-icons/26.png';
import WeatherIconMostlyClearNight from '../assets/weather-icons/27.png';
import WeatherIconPartlyClearNight from '../assets/weather-icons/28.png';
import WeatherIconMostlyCloudyNight from '../assets/weather-icons/29.png';
import WeatherIconCloudyNight from '../assets/weather-icons/30.png';
import WeatherIconOvercastWithLowCloudsNight from '../assets/weather-icons/31.png';
import WeatherIconRainShowerNight from '../assets/weather-icons/32.png';
import WeatherIconLocalThunderstromsNight from '../assets/weather-icons/33.png';

const WeatherIcons: string[] =
[
    WeatherIconNotAvailable,
    WeatherIconSunny,
    WeatherIconMostlySunny,
    WeatherIconNotAvailable,
    WeatherIconSunny,
    WeatherIconMostlySunny,
    WeatherIconPartlySunny,
    WeatherIconMostlyCloudy,
    WeatherIconCloudy,
    WeatherIconOvercast,
    WeatherIconOvercastWithLowClouds,
    WeatherIconFog,
    WeatherIconLightRain,
    WeatherIconRain,
    WeatherIconPossibleRain,
    WeatherIconRainShower,
    WeatherIconThunderstorm,
    WeatherIconLocalThunderstorms,
    WeatherIconClearNight,
    WeatherIconMostlyClearNight,
    WeatherIconPartlyClearNight,
    WeatherIconMostlyCloudyNight,
    WeatherIconCloudyNight,
    WeatherIconOvercastWithLowCloudsNight,
    WeatherIconRainShowerNight,
    WeatherIconLocalThunderstromsNight,
]

export const GetWeatherIcon = (icon : string | undefined) => {
    switch (icon)
    {
        case "not_available": return WeatherIconNotAvailable;
        case "sunny": return WeatherIconSunny;
        case "mostly_sunny": return WeatherIconMostlySunny;
        case "partly_sunny": return WeatherIconPartlySunny;
        case "mostly_cloudy": return WeatherIconMostlyCloudy;
        case "cloudy": return WeatherIconCloudy;
        case "overcast": return WeatherIconOvercast;
        case "overcast_with_low_clouds": return WeatherIconOvercastWithLowClouds;
        case "fog": return WeatherIconFog;
        case "light_rain": return WeatherIconLightRain;
        case "rain": return WeatherIconRain;
        case "possible_rain": return WeatherIconPossibleRain;
        case "rain_shower": return WeatherIconRainShower;
        case "thunderstorm": return WeatherIconThunderstorm;
        case "local_thunderstorms": return WeatherIconLocalThunderstorms;
        case "clear_night": return WeatherIconClearNight;
        case "mostly_clear_night": return WeatherIconMostlyClearNight;
        case "partly_clear_night": return WeatherIconPartlyClearNight;
        case "icon_mostly_cloudy_night": return WeatherIconMostlyCloudyNight;
        case "cloudy_night": return WeatherIconCloudyNight;
        case "overcast_with_low_clouds_night": return WeatherIconOvercastWithLowCloudsNight;
        case "rain_shower_night": return WeatherIconRainShowerNight;
        case "local_thunderstorms_night": return WeatherIconLocalThunderstromsNight;
        default: return "";
    }
}