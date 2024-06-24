import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import { Route, useParams } from 'react-router';
import './Styling.css';
import { useEffect, useState } from 'react';
import { GetWeatherIcon } from '../data/WeatherIcons';
import CelsiusIcon from '../assets/weather-icons/wi-celsius.svg';

const WeatherRd: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rainProbability, setRainProbability] = useState<number>(0);
  const [presentLoading, dismissLoading] = useIonLoading();
  const [currentWeather, setCurrentWeather] = useState<WeatherData>();
  const weatherIcon = GetWeatherIcon(currentWeather?.current.icon);

  interface WeatherData {
    current: WeatherState,
  }

  interface WeatherState {
    icon: string,
    summary: string,
    temperature: number,
    precipitation: Precipitation,
    cloud_cover: number,
  }

  interface Precipitation {
    total: number,
    type: string,
  }

  const fetchRDWeather = () => {
    fetch(`https://www.meteosource.com/api/v1/free/point?place_id=santo-domingo&sections=current&timezone=UTC&language=en&units=metric&key=hv3yge9yq6nsedidodi19mce9nbgndrb61q9ca43`)
      .then(response => response.json())
      .then(data => handleWeatherData(data as WeatherData))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (isLoading) {
      presentLoading({
        message: 'Cargando clima...',
      });
      fetchRDWeather();
    }
  }, [isLoading]);

  const handleWeatherData = (data: WeatherData) => {
    setCurrentWeather(data);
    setRainProbability((currentWeather?.current.precipitation.total == null ? 0 : currentWeather?.current.precipitation.total) * 100);
    dismissLoading();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Clima RD</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader color="primary">
            <h1><strong>{currentWeather?.current.summary}</strong></h1>
          </IonCardHeader>
          <IonCardContent>
            <IonThumbnail>
              {/* <svg><source src={weatherIcon} /></svg> */}
              <img id='weather-icon' src={weatherIcon} alt="" />
            </IonThumbnail>
            <IonCard color='primary'>
              <IonCardContent >
                <p><strong>Temperatura: </strong>{currentWeather?.current.temperature}°</p>
                <p><strong>Probabilidad de lluvia: </strong>{rainProbability}</p>
                <p><strong>Tipo de clima: </strong>{currentWeather?.current.precipitation.type}</p>
                <p><strong>Nubabilidad: </strong>{currentWeather?.current.cloud_cover}%</p>
              </IonCardContent>
            </IonCard>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default WeatherRd;
