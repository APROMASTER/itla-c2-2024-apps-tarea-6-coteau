import WeatherIconNotAvailable from '../assets/weather-icons/1.svg';
import WeatherIconSunny from '../assets/weather-icons/2.svg';
import WeatherIconMostlySunny from '../assets/weather-icons/3.svg';
import WeatherIconPartlySunny from '../assets/weather-icons/4.svg';
import WeatherIconMostlyCloudy from '../assets/weather-icons/5.svg';
import WeatherIconCloudy from '../assets/weather-icons/6.svg';
import WeatherIconOvercast from '../assets/weather-icons/7.svg';
import WeatherIconOvercastWithLowClouds from '../assets/weather-icons/8.svg';
import WeatherIconFog from '../assets/weather-icons/9.svg';
import WeatherIconLightRain from '../assets/weather-icons/10.svg';
import WeatherIconRain from '../assets/weather-icons/11.svg';
import WeatherIconPossibleRain from '../assets/weather-icons/12.svg';
import WeatherIconRainShower from '../assets/weather-icons/13.svg';
import WeatherIconThunderstorm from '../assets/weather-icons/14.svg';
import WeatherIconLocalThunderstorms from '../assets/weather-icons/15.svg';
import WeatherIconClearNight from '../assets/weather-icons/26.svg';
import WeatherIconMostlyClearNight from '../assets/weather-icons/27.svg';
import WeatherIconPartlyClearNight from '../assets/weather-icons/28.svg';
import WeatherIconMostlyCloudyNight from '../assets/weather-icons/29.svg';
import WeatherIconCloudyNight from '../assets/weather-icons/30.svg';
import WeatherIconOvercastWithLowCloudsNight from '../assets/weather-icons/31.svg';
import WeatherIconRainShowerNight from '../assets/weather-icons/32.svg';
import WeatherIconLocalThunderstromsNight from '../assets/weather-icons/33.svg';

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