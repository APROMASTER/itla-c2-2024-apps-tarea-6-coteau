import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonText, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import { Route, useParams } from 'react-router';
import './Styling.css';
import { useState, useEffect, useRef } from 'react';

interface SexData {
  name: string,
  gender: string,
  probability: number,
}

const GenderGuessing: React.FC = () => {
  const [presentLoading, dismissLoading] = useIonLoading();
  const [sex, setSex] = useState<string>("");
  const [sexLabel, setSexLabel] = useState<string>("");
  const [sexProb, setSexProb] = useState<number>();
  const [name, setName] = useState<string>("");
  const nameIsEmpty = name?.length == 0;
  const modalRef = useRef<HTMLIonModalElement>(null);

  const fetchSex = () => {
    fetch(`https://api.genderize.io/?name=${name}`)
      .then(response => response.json())
      .then(data => handleGenderData((data as SexData)))
  }

  const handleGenderClick = () => {
    setSex("null");
    presentLoading({
      message: 'Cargando...',
    });
    fetchSex();
    modalRef.current?.present();
  };

  const handleGenderData = (sexParam: SexData) => {
    setSex(sexParam.gender);
    setSexProb(sexParam.probability*100);
    switch (sexParam.gender) {
      case "male":
        {
          setSexLabel('Masculino');
        } break;

      case "female":
        {
          setSexLabel('Femenino');
        } break;

      default:
        {
          setSexLabel('No identificado');
        } break;
    }
    dismissLoading();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Advinador de sexo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader color="primary">
            <h3><strong>Inserte un nombre y adivinaremos el sexo!</strong></h3>
          </IonCardHeader>
          <IonCardContent>
            <IonInput labelPlacement="floating" fill="solid" placeholder="Nombre" onIonInput={(event) => setName((event.currentTarget as HTMLInputElement).value)}>
              <div slot="label">
                Nombre
              </div>
            </IonInput>
            <IonButton expand="block" disabled={nameIsEmpty}
              onClick={() => handleGenderClick()}>
              Adivinar sexo
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonModal ref={modalRef}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>El sexo de {name} es...</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => modalRef.current?.dismiss()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding" color={sex}>
            <h1>{sexLabel}</h1>
            <h4>Probabilidad del sexo adivinado: {sexProb}%</h4>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default GenderGuessing;
