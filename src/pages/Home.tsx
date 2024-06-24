import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
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
              <IonItem routerLink='/app/gender-guessing'>
                <IonLabel >Adivinador de sexo a partir de un nombre</IonLabel>
              </IonItem>
              <IonItem routerLink='/app/age-guessing'>
                <IonLabel >Adivinador de edad a partir de un nombre</IonLabel>
              </IonItem>
              <IonItem routerLink='/app/country-universities'>
                <IonLabel >Buscador de universidades a partir de un pais</IonLabel>
              </IonItem>
              <IonItem routerLink='/app/weather-rd'>
                <IonLabel >Visor del clima de Republica Dominicana</IonLabel>
              </IonItem>
              <IonItem routerLink='/app/wordpress-visitor-page'>
                <IonLabel >Ultimas noticias de Tails' Channel (Pagina de wordpress)</IonLabel>
              </IonItem>
              <IonItem routerLink='/app/about'>
                <IonLabel >Acerca de (info del creador de la app)</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
