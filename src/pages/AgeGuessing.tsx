import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonMenuButton, IonModal, IonPage, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import { Route, useParams } from 'react-router';
import './Styling.css';
import { useRef, useState } from 'react';

interface AgeData {
  name: string,
  age: number,
}

const AgeGuessing: React.FC = () => {
  const [presentLoading, dismissLoading] = useIonLoading();
  const [age, setAge] = useState<number>(0);
  const [agePreview, setAgePreview] = useState<string>("");
  const [ageLabel, setAgeLabel] = useState<string>("");
  const [name, setName] = useState<string>("");
  const nameIsEmpty = name?.length == 0;
  const modalRef = useRef<HTMLIonModalElement>(null);

  const fetchAge = () => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then(response => response.json())
      .then(data => handleAgeData((data as AgeData)))
  }

  const handleAgeClick = () => {
    presentLoading({
      message: 'Cargando...',
    });
    fetchAge();
    modalRef.current?.present();
  };

  const handleAgeData = (sexParam: AgeData) => {
    if (sexParam.age == null) {
      setAgeLabel("No identificado");
      setAge(-1);
    }
    else {
      setAge(sexParam.age);

      if (sexParam.age <= 1) {
        setAgeLabel("bebe");
      }
      else if (sexParam.age < 13) {
        setAgeLabel("niño");
      }
      else if (sexParam.age < 18) {
        setAgeLabel("adolescente");
      }
      else if (sexParam.age < 25) {
        setAgeLabel("joven adulto");
      }
      else if (sexParam.age < 65) {
        setAgeLabel("adulto");
      }
      else setAgeLabel("anciano");
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
          <IonTitle>Advinador de edad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader color="primary">
            <h3><strong>Inserte un nombre y adivinaremos la edad!</strong></h3>
          </IonCardHeader>
          <IonCardContent>
            <IonInput labelPlacement="floating" placeholder="Nombre" onIonInput={(event) => setName((event.currentTarget as HTMLInputElement).value)}>
              <div slot="label">
                Nombre
              </div>
            </IonInput>
            <IonButton expand="block" disabled={nameIsEmpty}
              onClick={() => handleAgeClick()}>
              Adivinar edad
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonModal ref={modalRef}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>La edad de {name} es...</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => modalRef.current?.dismiss()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <h1>{ageLabel}</h1>
            <img src={agePreview} alt="Foto representada de la edad" />
            <h4>Edad aproximada: {age}</h4>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default AgeGuessing;
