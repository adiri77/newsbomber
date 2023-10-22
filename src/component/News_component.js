import React ,{useState,useEffect} from 'react'
import { json } from 'react-router-dom';
import News_section from './News_section';
import axios from 'axios';
import Spinner from './Spinner';
import Navbar from './Navbar';


export default function News_component(props) {

  const article =[
    {"source":{"id":"bild","name":"Bild"},"author":"BILD","title":"Nationalmannschaft: Mexiko-Spiel um 2 Uhr! So sehen Sie die DFB-Elf tagsüber im TV | Sport","description":"Mitten in der Nacht gegen Mexiko! Trotzdem kann man das DFB-Team tagsüber sehen.","url":"https://www.bild.de/sport/fussball/nationalmannschaft/nationalmannschaft-mexiko-spiel-um-2-uhr-so-sehen-sie-die-dfb-elf-tagsueber-im-t-85778936.bild.html","urlToImage":"https://images.bild.de/652e9dd503f9af5c277fdc0c/1fb5bf69dee95d6b7463a12aed5928c2,e779cada?w=1280","publishedAt":"2023-10-17T21:43:37Z","content":"Mitten in der Nacht gegen Mexiko!\r\nAm ganz, ganz frühen Mittwochmorgen spielt die deutsche \r\nNationalmannschaft in Philadelphia (USA) gegen die Mexikaner. Das letzte Duell der beiden Teams hatte El T… [+840 chars]"},
    {"source":{"id":"bild","name":"Bild"},"author":"Yvonne Gabriel","title":"Bundesliga: Nationalspieler trägt jeden Tag neue Fußball-Schuhe | Sport","description":"Mal bunt, mal weiß, mal mit Rückennummer oder verchromter Sohle  ein Nationalspieler tauscht ständig seine Schuhe. Doch warum?","url":"https://www.bild.de/bild-plus/sport/fussball/rb-leipzig/bundesliga-nationalspieler-traegt-jeden-tag-neue-fussball-schuhe-85778876.bild.html","urlToImage":"https://images.bild.de/652e9daf9e4f7e1fd7e28063/00a482a3c6987b9775188b348363129c,dd547553?w=1280","publishedAt":"2023-10-17T21:41:04Z","content":"Mal bunt, mal weiß, mal mit Rückennummer, mal mit verchromter Sohle ein deutscher Nationalspieler tauscht derzeit ständig seine Schuhe.\r\nWas hinter seinem Schuh-Geheimnis steckt, lesen Sie nur mit BI… [+6 chars]"},
    {"source":{"id":"bild","name":"Bild"},"author":"DAVID VERHOFF","title":"FC Bayern: Isreal-Torwart Daniel Peretz trainiert vor „Rot gegen Rassismus“! | Sport","description":"Vor einem passenderen Hintergrund kann Bayern-Keeper Daniel Peretz nicht in die Ecken fliegen: Der Isreali trainierte vor dem Banner „Rot gegen Rassismus“!","url":"https://www.bild.de/sport/fussball/bayern-muenchen/fc-bayern-isreal-torwart-daniel-peretz-trainiert-vor-rot-gegen-rassismus-85782040.bild.html","urlToImage":"https://images.bild.de/652ef58ab5246d07b6bbe9fa/347b96924791a25f22a0ff3ba41e5be6,7b21d7d4?w=1280","publishedAt":"2023-10-17T21:20:18Z","content":"Vor einem passenderen Hintergrund kann Daniel Peretz (23) nicht fliegen!\r\nAm Dienstagmittag legte der Ersatzkeeper des \r\nFC Bayern eine Einzelschicht an der Säbener Straße ein. Nach dem Geheimtrainin… [+1929 chars]"},
    {"source":{"id":"bild","name":"Bild"},"author":"Florian Vonholdt","title":"Basketball: Leere Ränge wegen Judenhass: Ludwigsburg verliert Geisterspiel | Sport","description":"Antisemitismus war der Grund für leere Ränge beim Champions-League-Auftakt der Riesen Ludwigsburg bei AEK Athen.","url":"https://www.bild.de/sport/mehr-sport/basketball/basketball-leere-raenge-wegen-judenhass-ludwigsburg-verliert-geisterspiel-85782100.bild.html","urlToImage":"https://images.bild.de/652ef7b6b5246d07b6bbe9ff/acbdf0f2494cac97787e8a2f091a8c81,23426f7d?w=1280","publishedAt":"2023-10-17T21:19:00Z","content":"Endlich wieder Champions-League-Zeit im Basketball!\r\nAm Auftakt-Spieltag mussten die MHP Riesen Ludwigsburg bei AEK Athen ran. Beim griechischen Favoriten lieferten die Riesen eine starke Vorstellung… [+1747 chars]"},{"source":{"id":"bild","name":"Bild"},"author":"Kristina Ellwanger","title":"Bei Bayerns erstem Auswärts-Sieg: Rätsel um Superstar Ibaka | Sport","description":"Die Bayern können es also auch auswärts - ohne Ibaka!  Die FC Bayern Basketballer holen in Spanien bei Baskonia Vitoria einen 76:68 (42:41)- Sieg.","url":"https://www.bild.de/sport/mehr-sport/basketball/bei-bayerns-erstem-auswaerts-sieg-raetsel-um-superstar-ibaka-85782000.bild.html","urlToImage":"https://images.bild.de/652ef3c5a736880c438a7da8/4b44acd0a228724026b50b41a2043815,a3607220?w=1280","publishedAt":"2023-10-17T20:57:14Z","content":"Die Bayern können es also auch auswärts - ohne Ibaka! Die FC Bayern Basketballer holen in Spanien bei Baskonia Vitoria einen 76:68 (42:41)- Sieg.\r\nSensationssieg für Olympia-QualiDieser Volleyball-Pr… [+1612 chars]"},
    {"source":{"id":"techradar","name":"TechRadar"},"author":"Cody Hmelar","title":"Netflix is breaking into live sports  but probably not in the way you imagined","description":"What would F1 and golf look like?","url":"https://www.techradar.com/streaming/entertainment/netflix-is-breaking-into-live-sports-but-probably-not-in-the-way-you-imagined","urlToImage":"https://cdn.mos.cms.futurecdn.net/tFE3wC6tKK9DH6aHr737CR-1200-80.jpg","publishedAt":"2023-10-17T20:04:37Z","content":"Netflix is looking to tap into the growing global popularity of F1 racing and its own recent success with its Formula 1: Drive to Survive series with a first for the streamer: a live sporting event. … [+2115 chars]"},{"source":{"id":"der-tagesspiegel","name":"Der Tagesspiegel"},"author":"Der Tagesspiegel","title":"Kleintransporter fährt auf LKW auf: Ein Toter bei schwerem Autounfall auf A9 bei Beelitz","description":"Bei einem schweren Verkehrsunfall auf der A9 bei Beelitz ist am Dienstag ein Autofahrer ums Leben gekommen. Reanimationsversuche der Rettungskräfte blieben erfolglos.","url":"https://www.tagesspiegel.de/potsdam/potsdam-mittelmark/kleintransporter-fahrt-auf-lkw-auf-ein-toter-bei-schwerem-autounfall-auf-a9-bei-beelitz-10642003.html","urlToImage":"https://www.tagesspiegel.de/images/ein-toter-bei-schwerem-autounfall-bei-beelitz/alternates/BASE_16_9_W1400/ein-toter-bei-schwerem-autounfall-bei-beelitz.jpeg","publishedAt":"2023-10-17T18:21:59+00:00","content":"Bei einem schweren Verkehrsunfall auf der A9 bei Beelitz (Potsdam-Mittelmark) ist am Dienstagmittag der Fahrer eines Kleintransporters ums Leben gekommen. Das teilte das Lagezentrum der Polizei in Po… [+469 chars]"},
    {"source":{"id":"talksport","name":"TalkSport"},"author":"Robert Calcutt","title":"Famous beach ball that Darren Bent scored iconic goal against Liverpool with makes talkSPORT appearance...","description":"The beach ball that Darren Bent scored his iconic, but controversial goal against Liverpool with appeared in all its glory on talkSPORT Drive. Tuesday marks 14 years the former Sunderland striker n…","url":"https://talksport.com/football/1605260/beach-ball-darren-bent-goal-sunderland-liverpool-talksport/","urlToImage":"https://talksport.com/wp-content/uploads/sites/5/2023/10/JW-TALKSPORT-TWINUP-BENT-BEACHBALL.jpg?strip=all&quality=100&w=1500&h=1000&crop=1","publishedAt":"2023-10-17T17:57:07Z","content":"The beach ball that Darren Bent scored his iconic, but controversial goal against Liverpool with appeared in all its glory on talkSPORT Drive.\r\nTuesday marks 14 years the former Sunderland striker ne… [+2828 chars]"},{"source":{"id":"handelsblatt","name":"Handelsblatt"},"author":null,"title":"Sportartikel: Adidas hebt dank Yeezy-Abverkauf erneut die Jahresprognose an","description":"Die Restbestände aus der Kooperation mit dem US-Skandalrapper Kanye West lindern die Sorgen des Dax-Konzerns. Der erwartete Verlust soll kleiner ausfallen.","url":"https://www.handelsblatt.com/unternehmen/handel-konsumgueter/sportartikel-adidas-hebt-dank-yeezy-abverkauf-erneut-die-jahresprognose-an/29451728.html","urlToImage":null,"publishedAt":"2023-10-17T16:50:00+00:00","content":"Die Restbestände aus der Kooperation mit dem US-Skandalrapper Kanye West lindern die Sorgen des Dax-Konzerns. Der erwartete Verlust soll kleiner ausfallen."},{"source":{"id":null,"name":"[Removed]"},"author":null,"title":"[Removed]","description":"[Removed]","url":"https://removed.com","urlToImage":null,"publishedAt":"1970-01-01T00:00:00Z","content":"[Removed]"},
  {"source":{"id":"t3n","name":"T3n"},"author":null,"title":"Karriere und Ausdauersport: So hat Laufen meine Job-Skills entwickelt","description":"Kilometerweit zu laufen, ist anstrengend  warum also tun so viele Berufstätige das? Weil die körperliche und mentale Fitness auch im Job hilft.","url":"https://t3n.de/news/job-skills-ausdauersport-karriere-laufen-1301355/","urlToImage":"https://t3n.de/news/wp-content/uploads/2020/07/karriere-ausdauersport-laufen-job.jpg","publishedAt":"2023-10-17T16:30:00Z","content":"Der Grund, warum ich mit dem Laufen anfing, hatte rein gar nichts mit Selbstoptimierung zu tun. Vielmehr war der Auslöser eine persönliche Krise, die ich 2015 zu bewältigen hatte: Nach einem längeren… [+5700 chars]"},{"source":{"id":"google-news-ar","name":"Google News (Argentina)"},"author":"ámbito.com","title":"Ramiro Marra sobre los subsidios al transporte: \"Están discriminando por el voto\" - ámbito.com","description":null,"url":"https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LmFtYml0by5jb20vcG9saXRpY2EvcmFtaXJvLW1hcnJhLWxvcy1zdWJzaWRpb3MtYWwtdHJhbnNwb3J0ZS1lc3Rhbi1kaXNjcmltaW5hbmRvLWVsLXZvdG8tbjU4NDc5NjfSAW1odHRwczovL3d3dy5hbWJpdG8uY29tL3BvbGl0aWNhL3JhbWlyby1tYXJyYS1sb3Mtc3Vic2lkaW9zLWFsLXRyYW5zcG9ydGUtZXN0YW4tZGlzY3JpbWluYW5kby1lbC12b3RvLW41ODQ3OTY3?oc=5","urlToImage":null,"publishedAt":"2023-10-17T16:19:26+00:00","content":null},
  {"source":{"id":"four-four-two","name":"FourFourTwo"},"author":"Ben Hayward","title":"Barcelona will find it 'difficult' to sign new players in January  sporting director Deco","description":"The Catalan club have already exceeded the season spending limit imposed by LaLiga and will be heavily restricted in the winter window","url":"https://www.fourfourtwo.com/news/barcelona-will-find-it-difficult-to-sign-new-players-in-january-sporting-director-deco","urlToImage":"https://cdn.mos.cms.futurecdn.net/HXh662pLgx3sJjydhzAA7N-1200-80.jpg","publishedAt":"2023-10-17T15:01:46Z","content":"Barcelona sporting director Deco has admitted that it will be \"difficult\" for the Catalan club to sign new players in January.\r\nBarça saw their spending severely restricted in the summer due to their… [+1789 chars]"},{"source":{"id":"bleacher-report","name":"Bleacher Report"},"author":null,"title":"New Travis Hunter Show ","description":"Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.","url":"https://bleacherreport.com/videos/468937-twelve-talks-ep-7-vod","urlToImage":null,"publishedAt":"2023-10-12T15:37:18.5821493Z","content":"Colorado star reacts to win vs. Arizona State and more."},
    {"source":{"id":"bleacher-report","name":"Bleacher Report"},"author":null,"title":"New Micah Parsons Show ","description":"Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.","url":"https://bleacherreport.com/videos/468648-the-edge-with-micah-parsons-ep-5-vod","urlToImage":null,"publishedAt":"2023-10-12T15:37:17.2699761Z","content":"The Edge with Micah Parsons Ep. 5 VOD"},{"source":{"id":"ansa","name":"ANSA.it"},"author":"ANSA.it","title":"Mit, 'impegnati affinché gli italiani non paghino scioperi' - Ultima Ora","description":"Il ministero dei Trasporti e delle Infrastrutture, guidato da Matteo Salvini, \"farà di tutto affinché gli italiani non paghino troppo pesantemente la mobilitazione\". (ANSA)","url":"http://www.ansa.it/sito/notizie/topnews/2023/07/11/mit-impegnati-affinche-gli-italiani-non-paghino-scioperi_6fbc8cb6-a3fc-469f-935f-4d9273e5ec50.html","urlToImage":"https://www.ansa.it/webimages/img_700/2022/7/17/d74c98bc5695ae497236c29292735b84.jpg","publishedAt":"2023-07-11T16:44:00Z","content":"Se hai scelto di non accettare i cookie di profilazione e tracciamento, puoi aderire allabbonamento \"Consentless\" a un costo molto accessibile, oppure scegliere un altro abbonamento per accedere ad … [+320 chars]"},
    {"source":{"id":"lequipe","name":"L'equipe"},"author":"L'EQUIPE","title":"Marseille dans un nouveau monde après avoir intégré la Ligue Magnus","description":"Les Spartiates de Marseille ont rejoint la Ligue Magnus, jeudi. Une grande première. Le club avancera avec prudence. Il est solide, en termes de structures et de finances, mais irrégulier sur le plan sportif. Objectifs : se renforcer et assurer le maintien.","url":"https://www.lequipe.fr/Hockey-sur-glace/Actualites/Marseille-dans-un-nouveau-monde-apres-avoir-integre-la-ligue-magnus/1401523","urlToImage":"https://medias.lequipe.fr/img-photo-jpg/les-marseillais-vont-decouvrir-la-ligue-magnus-c-matteoli-mouhanad-spartiates-de-marseille-d-r/1500000001796012/101:283,1675:1332-640-427-75/ee3a9.jpg","publishedAt":"2023-06-08T14:48:14+00:00","content":"La NHL a ses franchises de Californie et de Floride, mais la Ligue Magnus a aussi son coin de mer et de soleil. Après Nice (en 2016) et Anglet, au tour de Marseille de rejoindre le plus haut niveau d… [+4342 chars]"},
    {"source":{"id":"the-irish-times","name":"The Irish Times"},"author":"Michael McDowell","title":"Michael McDowell: Car use is not simply the prerogative of the odious and hysterical middle class","description":"Michael McDowell: Any suggestion that public transport will suffice to sustain the entire transport needs of a vast number of people is fanciful and unrealistic","url":"https://www.irishtimes.com/opinion/2023/03/29/car-use-is-not-simply-the-prerogative-of-the-odious-and-hysterical-middle-class/","urlToImage":"https://www.irishtimes.com/resizer/PjutyV7tTE8E5gbQFWXo3W2Obms=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/KVJU64TMR24AFWPRLNDG3IKSOY.jpg","publishedAt":"2023-03-29T04:00:03Z","content":"There seems to be a vogue for condemning everyone who doesnt share your opinions as being morally reprehensible, selfish, ignorant or a class enemy. Violent language is often used online against peop… [+4638 chars]"},
    {"source":{"id":"usa-today","name":"USA Today"},"author":null,"title":"Daily Briefing","description":"The day's top stories, from sports to movies to politics to world events.","url":"https://profile.usatoday.com/newsletters/daily-briefing/","urlToImage":"https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg","publishedAt":"2021-08-15T15:35:07+00:00","content":"The day's top stories, from sports to movies to politics to world events."},
    {"source":{"id":"the-hindu","name":"The Hindu"},"author":"The Hindu","title":"In search of gold: On Tokyo Olympics","description":"The Olympic Games remain the greatest sporting event for fans and athletes alike","url":"https://www.thehindu.com/opinion/editorial/in-search-of-gold-the-hindu-editorial-on-tokyo-olympics-2021/article35478354.ece","urlToImage":"https://www.thehindu.com/static/theme/default/base/img/og-image.jpg","publishedAt":"2021-07-22T18:32:00Z","content":"A medal can lose its lustre but the athletes sporting immortality is set in stone, such is the enduring allure of triumphs at the Olympics. Even a participant without any titles, is referred to as an… [+2521 chars]"
  }
  ]

  let [page,setPage]=useState(1);
  let [totle,setTotle]=useState(12);
  let [loading,setLoading]=useState(false);
    const [state, setState]= useState(
      {
          a:[],
          b:1
          
           
      }
  );
  
  

  useEffect(()=>{
    let amb=`https://newsapi.org/v2/top-headlines?country=${props.con}&category=${props.cat}&apiKey=5fc9a5d4e1304c8c93ab346ad3381981&page=1&pageSize=${totle}`
    setLoading(true);
    fetch(amb)
    .then((supp)=>supp.json())
    .then((json)=>
    setState(
      {
      a:json.articles,
      b:json.totalResults
      
           
      
  
    },
    setLoading(false))
    );
 
  },[]);
  let d=(Math.ceil(state.b/totle));
  
  
  
 



  

// const options = {
//   method: 'GET',
//   url: 'https://news-api14.p.rapidapi.com/top-headlines',
//   params: {
//     country: 'us',
//     language: 'en',
//     pageSize: '20',
//     category: 'sports'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'b698f3a435msh608ebede0ef2c31p1a1a55jsnf41e366e1efe',
//     'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
//   }
// };

// useEffect(()=>{

  
//     axios.request(options).then(function(response){
//     setState({
//       a:response.data.articles
//     })
//   }).catch (function(error) {
//     console.error(error);
//   });
// },[]);

     // Add an empty dependency array to run this effect only once on component mount
    
    

const  aditya=()=>{
  if(page<=1){
    document.getElementById("ad").setAttribute("disabled","true");
  }
  else{
    document.getElementById("ad1").removeAttribute("disabled");
    
    setPage(--page);
    let amb=`https://newsapi.org/v2/top-headlines?country=${props.con}&category=${props.cat}&apiKey=5fc9a5d4e1304c8c93ab346ad3381981&page=${page}&pageSize=${totle}`
    setLoading(true);
    fetch(amb)
    .then((response)=>response.json())
    .then((json)=>{
      setState({
        a:json.articles,
        b:json.totalResults,
        
        
        
  },setLoading(false))
})

}
  };

const  aryan=()=>{
  if(page>= d){

    document.getElementById("ad1").setAttribute("disabled","true");
  }
  else{
  
document.getElementById("ad").removeAttribute("disabled");
setPage(++page);
let amb=`https://newsapi.org/v2/top-headlines?country=${props.con}&category=${props.cat}&apiKey=5fc9a5d4e1304c8c93ab346ad3381981&page=${page}&pageSize=${totle}`
   setLoading(true);
fetch(amb)
    .then((response)=>response.json())
    .then((json)=>{
      setState({
        a:json.articles,
        b:json.totalResults,
      
      
      
      },setLoading(false))
    })
  }
    
      };
      

  

  return (
    <div className={`container mt-4 text-center text-${props.mode=='light'?'dark':'light'}`}>
        <h1><b>Top HeadLines</b></h1>
        {loading && <Spinner/>}
        
  <div className='row'>
{!loading && state.a.map((ele)=>{
     return  <div key={ele.url} className='col col-md-4' style={{marginTop:"30px"}}>
      <News_section url={ele.urlToImage} description={ele.description} title={ele.title} clickurl={ele.url} mode={props.mode}/>
    </div>
   
    
})
}
  </div>
  <div className='container d-flex justify-content-between mt-4'>
  <button type="button" id='ad'  onClick={aditya}  className="btn btn-dark">&larr;Left</button>
  <button type="button" id='ad1' onClick={aryan} className="btn btn-dark">Right&rarr;</button>
  </div>
</div>


  
  )
}
