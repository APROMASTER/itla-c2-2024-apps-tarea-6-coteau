import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { Route, useParams } from 'react-router';
import './Styling.css';
import Home from './Home';
import GenderGuessing from './GenderGuessing';
import AgeGuessing from './AgeGuessing';
import CountryUniversities from './CountryUniversities';
import WeatherRd from './WeatherRd';
import WordpressVisitorPage from './WordpressVisitorPage';
import About from './About';

const Page: React.FC = () => {
  // const { name } = useParams<{ name: string; }>();

  return (
    <IonRouterOutlet>
      <Route path="/app/home" exact={true} component={Home} />
      <Route path="/app/gender-guessing" exact={true} component={GenderGuessing} />
      <Route path="/app/age-guessing" exact={true} component={AgeGuessing} />
      <Route path="/app/country-universities" exact={true} component={CountryUniversities} />
      <Route path="/app/weather-rd" exact={true} component={WeatherRd} />
      <Route path="/app/wordpress-visitor-page" exact={true} component={WordpressVisitorPage} />
      <Route path="/app/about" exact={true} component={About} />
    </IonRouterOutlet>


  );
};

export default Page;
