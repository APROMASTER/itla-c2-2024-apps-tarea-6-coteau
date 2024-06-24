import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { home, homeOutline, transgender, transgenderOutline, people, peopleOutline, school, schoolOutline, sunny, sunnyOutline, list, listOutline, informationCircle, informationCircleOutline} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/app/home',
    iosIcon: homeOutline,
    mdIcon: home
  },
  {
    title: 'Advinador de sexo',
    url: '/app/gender-guessing',
    iosIcon: transgenderOutline,
    mdIcon: transgender
  },
  {
    title: 'Advinador de edad',
    url: '/app/age-guessing',
    iosIcon: peopleOutline,
    mdIcon: people
  },
  {
    title: 'Buscador de Universidades',
    url: '/app/country-universities',
    iosIcon: schoolOutline,
    mdIcon: school
  },
  {
    title: 'Clima en Republica Dominicana',
    url: '/app/weather-rd',
    iosIcon: sunnyOutline,
    mdIcon: sunny
  },
  {
    title: "Noticias de Tails' Channel",
    url: '/app/wordpress-visitor-page',
    iosIcon: listOutline,
    mdIcon: list
  },
  {
    title: 'Acerca de',
    url: '/app/about',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircle
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Tarea 6 (Couteau)</IonListHeader>
          <IonNote>20220551@ilta.edu.do</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
