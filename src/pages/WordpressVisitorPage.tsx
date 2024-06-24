import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonMenuButton, IonPage, IonText, IonThumbnail, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import { Route, useParams } from 'react-router';
import './Styling.css';
import { useEffect, useState } from 'react';

const WordpressVisitorPage: React.FC = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [presentLoading, dismissLoading] = useIonLoading();
  const [currentSonicNews, setCurrentSonicNews] = useState<SonicNewsData[]>([]);

  interface SonicNewsData {
    date: Date,
    modified: Date,
    link: string,
    title: SonicNewsTitle,
    yoast_head_json: SonicNewsYoastHead
  }

  interface SonicNewsTitle {
    rendered: string,
  }

  interface SonicNewsYoastHead {
    title: string,
    og_description: string,
    og_site_name: string,
    og_image: SonicNewsYoastHeadOgImage[],
    author: string,
  }

  interface SonicNewsYoastHeadOgImage {
    width: number,
    height: number,
    url: string,
    type: string,
  }

  const fetchSonicNews = () => {
    fetch(`https://tailschannel.com/wp-json/wp/v2/posts?per_page=3&orderby=date&order=desc`)
      .then(response => response.json())
      .then(data => handleSonicNewsData(data as SonicNewsData[]))
      .catch(error => console.error(error));
  }

  const handleSonicNewsData = (data: SonicNewsData[]) => {
    setCurrentSonicNews(data);
    console.log(data);
    dismissLoading();
  }

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (isLoading) {
      presentLoading({
        message: 'Cargando las ultimas 3 noticias...',
      });
      fetchSonicNews();
    }
  }, [isLoading]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Pagina wordpress - Tails' Channel</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <a href="https://tailschannel.com"><IonImg style={{ display: 'block', margin: '0 auto', alignSelf: 'center', width: '25%', height: '25%' }} src="https://tailschannel.com/wp-content/uploads/2024/01/tcrad24webicon.png" alt="Logo de la pagina"/></a>
      <h1 style={{textAlign: 'center'}}>Ultimas noticias de Tails' Channel</h1>
        
        {currentSonicNews.map((news) =>
          <IonCard color="primary" href={news.link}>
            <IonCardHeader>
              <IonCardTitle><strong>{news.yoast_head_json.title.includes(news.yoast_head_json.og_site_name) ? news.yoast_head_json.title.split(" - " + news.yoast_head_json.og_site_name) : news.yoast_head_json.title}</strong></IonCardTitle>
            </IonCardHeader>
            <IonThumbnail>
              {news.yoast_head_json.og_image?.map((image) =>
                <img src={image.url} alt="Portada de la noticia" />
              )}
            </IonThumbnail>
            <IonCardContent>
              <IonCardSubtitle>
                {news.yoast_head_json.og_description}
              </IonCardSubtitle>
              <br />
              <IonText className="ion-text-left">
                <p><strong>{news.yoast_head_json.author}</strong></p>
                <p>{news.modified.toString().slice(0, 10)}</p>
              </IonText>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default WordpressVisitorPage;
