import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import { Route, useParams } from 'react-router';
import './Styling.css';
import { useRef, useState } from 'react';

interface UniversityData {
  name: string,
  domains: string[],
  web_pages: string[],
}

const CountryUniversities: React.FC = () => {
  const [presentLoading, dismissLoading] = useIonLoading();
  const [universities, setUniversities] = useState<UniversityData[]>([]);
  const [countryName, setCountryName] = useState<string>("");
  const countryNameIsEmpty = countryName?.length == 0;
  const modalRef = useRef<HTMLIonModalElement>(null);

  const fetchUniversity = () => {
    fetch(`http://universities.hipolabs.com/search?country=${countryName}`)
      .then(response => response.json())
      .then(data => handleUniversityData(data as UniversityData[]))
      .catch(error => console.error(error));
  }

  const handleUniversityClick = () => {
    setUniversities([]);
    presentLoading({
      message: 'Cargando universidades...',
    });
    fetchUniversity();
    modalRef.current?.present();
  };

  const handleUniversityData = (uniParam: UniversityData[]) => {
    console.log(uniParam);
    setUniversities(uniParam);
    dismissLoading();
  }

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Universidades de un pais</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
        <IonCard>
          <IonCardHeader color="primary">
            <h3><strong>Inserte un nombre de un pais en ingles...</strong></h3>
          </IonCardHeader>
          <IonCardContent>
            <IonInput labelPlacement="floating" placeholder="Nombre" onIonInput={(event) => setCountryName((event.currentTarget as HTMLInputElement).value)}>
              <div slot="label">
                Pais
              </div>
            </IonInput>
            <IonButton expand="block" disabled={countryNameIsEmpty}
              onClick={() => handleUniversityClick()}>
              Mostrar universidades
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonModal ref={modalRef}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Universidades de {countryName}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => modalRef.current?.dismiss()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonList>
              {universities.map((university) => 
            <IonItem>
              <IonLabel>
                <h2><strong>{university.name}</strong></h2>
                <br />
                <p><strong>Dominios:</strong></p>
                {university.domains.map((domain) => 
                <p>- {domain}</p>
                )}
                <br />
                <p><strong>Paginas web:</strong></p>
                {university.web_pages.map((page) => 
                <p><a href={page}>{page}</a></p>
                )}
                <br />
              </IonLabel>
            </IonItem>
        )}
            </IonList>
          </IonContent>
        </IonModal>
    </IonContent>
  </IonPage>
  );
};

export default CountryUniversities;
