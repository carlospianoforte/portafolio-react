import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';


const initialState = {
  'user': {},
  'playing': {},
  'myList': [],
  'search': [],
  'trends': [
    {
      'id': 2,
      'slug': 'tvshow-2',
      'title': 'Nocturno No. 20 in C sharp minor',
      'type': 'classical Music',
      'language': 'English',
      'year': 2020,
      'contentRating': '16+',
      'duration': '2:32',
      'cover': 'https://i.ytimg.com/vi/O93Bvb9sZoA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5Zn4vl2JDqx7-SARkOF4sTwa3MA',
      'description': 'Nocturno No. 20 de Chopin playing in Roland FP30',
      'source': 'https://youtu.be/O93Bvb9sZoA',

    },
    {
      'id': 3,
      'slug': 'tvshow-3',
      'title': 'Princess Mononoke - Ashitaka and San',
      'type': 'Anime Music',
      'language': 'English',
      'year': 2020,
      'contentRating': '16+',
      'duration': '2:49',
      'cover': 'https://i.ytimg.com/vi/j9MRikvH7tc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkML1HBpCJNWqTV-BW9ycKsuHr7w',
      'description': 'Princesa Mononoke (piano) - Ashitaka and San interpretado en Roland fp 30 ',
      'source': 'https://youtu.be/j9MRikvH7tc',
    },
    {
      'id': 4,
      'slug': 'tvshow-4',
      'title': 'Nocturno Op 72 N1 - Chopin',
      'type': 'classical Music',
      'language': 'English',
      'year': 2020,
      'contentRating': '16+',
      'duration': '2:58',
      'cover': 'https://i.ytimg.com/vi/PugSe3OoKS8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJdaUumtMgLkiY9Sy8SU7OOInhSg',
      'description': 'nocturno op 72 N1 de Chopin en Roland fp30, posthumes n7',
      'source': 'https://youtu.be/PugSe3OoKS8',
    },
    {
      'id': 5,
      'slug': 'tvshow-5',
      'title': 'Nocturno Op 9 No 1 - Chopin',
      'type': 'classical music',
      'language': 'English',
      'year': 2020,
      'contentRating': '16+',
      'duration': "4:08",
      'cover': 'https://i.ytimg.com/vi/Jc43derQKjM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBe-0mlHeDPpYnIa03DhdoUvFRCJQ',
      'description': 'nocturno Op 9 no 2 en Roland fp 30',
      'source': 'https://youtu.be/Jc43derQKjM',
    },
    {
      'id': 6,
      'slug': 'tvshow-6',
      'title': 'A Whole new world (aladino) - piano',
      'type': 'Scripted',
      'language': 'English',
      'year': 2020,
      'contentRating': '16+',
      'duration': '1:14',
      'cover': 'https://i.ytimg.com/vi/yJGc9x6cOOE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApVY8WBLG7NUB69qktV6Ame4E_hA',
      'description': 'aladino for piano on Roland fp30',
      'source': 'https://youtu.be/yJGc9x6cOOE',
    },
    {
      'id': 7,
      'slug': 'tvshow-7',
      'title': 'The InBetween',
      'type': 'Drama',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 179,
      'cover': 'http://dummyimage.com/800x600.png/FF7A90/ffffff',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    },
  ],
  'originals': [
    {
      'id': 8,
      'slug': 'tvshow-6',
      'title': 'A Whole new world (aladino) - piano',
      'type': 'Scripted',
      'language': 'English',
      'year': 2020,
      'contentRating': '16+',
      'duration': '1:14',
      'cover': 'https://i.ytimg.com/vi/yJGc9x6cOOE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApVY8WBLG7NUB69qktV6Ame4E_hA',
      'description': 'aladino for piano on Roland fp30',
      'source': 'https://youtu.be/yJGc9x6cOOE',
      },
    {
      'id': 9,
      'slug': 'tvshow-9',
      'title': 'El choclo (piano) - tango',
      'type': 'Tango',
      'language': 'English',
      'year': 2020,
      'contentRating': '16+',
      'duration': '1:59',
      'cover': 'https://i.ytimg.com/vi/pB8ApdxoxWI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBkuyxewiHrNDLgHbe0kH1YEDjDrg',
      'description': 'tango el choclo for piano playing in Roland fp30',
      'source': 'https://youtu.be/pB8ApdxoxWI',
    },
    {
      'id': 10,
      'slug': 'tvshow-10',
      'title': 'Risaralda (piano)-Carlos Vieco Ortiz',
      'type': 'Musica Colombiana',
      'language': 'English',
      'year': 2020,
      'contentRating': '16+',
      'duration': '2:01',
      'cover': 'https://i.ytimg.com/vi/v1vpAIaXBxo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN_vR9int0NVzIOOvuvgkk0DraXw',
      'description': 'Pasillo fiestero Risaralda de Carlos Vieco Ortiz en Roland fp30',
      'source': 'https://youtu.be/v1vpAIaXBxo',
    },
    {
      'id': 11,
      'slug': 'tvshow-11',
      'title': 'Georgia on my mind (piano)',
      'type': 'classical',
      'language': 'English',
      'year': 2020,
      'contentRating': '16+',
      'duration': '1:37',
      'cover': 'https://i.ytimg.com/vi/njSygGeInJA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCz-Ihqz72iSS1OemLiVV3bxMjH5w',
      'description': 'Georgia on my mind playing in roland Fp30',
      'source': 'https://youtu.be/njSygGeInJA',
    },
    {
      'id': 12,
      'slug': 'tvshow-12',
      'title': 'Yoru no Uta (Sakura card captors)',
      'type': 'Anime',
      'language': 'English',
      'year': 2020,
      'contentRating': '16+',
      'duration': '1:23',
      'cover': 'https://i.ytimg.com/vi/QTrq4LeV37g/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoUrobepxUogIk2Zuyod-1QtBNRw',
      'description': 'Yoru no uta for piano, Roland FP30',
      'source': 'https://youtu.be/QTrq4LeV37g',
    },
    {
      'id': 13,
      'slug': 'tvshow-13',
      'title': 'Live set trance en juno Gi',
      'type': 'Electronica',
      'language': 'English',
      'year': 2020,
      'contentRating': '16+',
      'duration': '2:08',
      'cover': 'https://i.ytimg.com/vi/Pk1eG_ZfV88/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvrKvSjbpQxslCzvk9J0ixQlHP0w',
      'description': 'trance en juno Gi',
      'source': 'https://youtu.be/Pk1eG_ZfV88',
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>

    <App />

  </Provider>,
  document.getElementById('app'),
);
