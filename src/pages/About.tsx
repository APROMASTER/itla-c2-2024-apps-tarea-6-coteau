import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Styling.css';
import Author from '../assets/author.jpg';
import { mail, logoGithub, logoLinkedin } from 'ionicons/icons';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Acerca de</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonLabel><img src={Author} alt="Foto de Ariel" width="100%" height="100%" /></IonLabel>
            <IonCardSubtitle color="primary"><h4>Ariel Alejandro Nuñez Mendez</h4></IonCardSubtitle>
            <IonCardSubtitle >Desarrollador de Software</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              <strong>Contacto:</strong>
            </p>
            <h1>
              <a href="mailto: arielnunezmendez@gmail.com"><IonIcon aria-hidden="true" md={mail} /></a>
              <a href="https://github.com/APROMASTER"><IonIcon aria-hidden="true" md={logoGithub} /></a>
              <a href="https://www.linkedin.com/in/ariel-alejandro-nuñez-mendez-53b333290/"><IonIcon aria-hidden="true" md={logoLinkedin} /></a>
            </h1>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
