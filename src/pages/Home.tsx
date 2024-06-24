import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonButton, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { Route, useParams } from 'react-router';
import './Styling.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader color="primary">
            <IonCardTitle><h1><strong>Bienvenido a mi tarea 6!</strong></h1></IonCardTitle>
          </IonCardHeader>
          <IonThumbnail >
            <IonImg style={{ margin: '0 auto', width: '50%' }} src="https://cdn-icons-png.flaticon.com/512/5604/5604299.png" alt="" />
          </IonThumbnail>
          <IonCardContent>
          <IonCardSubtitle>Podras encontrar varias herramientas aca como:</IonCardSubtitle>
            <IonList>
                <IonButton id='menuButton' expand="block" routerLink='/app/gender-guessing'>Adivinador de sexo a partir de un nombre</IonButton>
                <IonButton id='menuButton' expand="block" routerLink='/app/age-guessing'>Adivinador de edad a partir de un nombre</IonButton>
                <IonButton id='menuButton' expand="block" routerLink='/app/country-universities'>Buscador de universidades a partir de un pais</IonButton>
                <IonButton id='menuButton' expand="block" routerLink='/app/weather-rd'>Visor del clima de Republica Dominicana</IonButton>
                <IonButton id='menuButton' expand="block" routerLink='/app/wordpress-visitor-page'>Ultimas noticias de Tails' Channel (Pagina de wordpress)</IonButton>
                <IonButton id='menuButton' expand="block" routerLink='/app/about'>Acerca de (info del creador de la app)</IonButton>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
