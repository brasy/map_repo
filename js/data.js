      var map;

      // Create a new blank array for all the listing markers.
      var markers = [];

      //for marker
      // These are the real estate listings that will be shown to the user.
      // Normally we'd have these in a database instead.
      var locations = [
          {ids:1, title: 'Sun Yat-sen Mausoleum', location: {lat: 32.062516, lng: 118.847289}},
          {ids:2, title: 'Purple Mountain Obervatory', location: {lat: 32.064247, lng: 118.829842}},
          {ids:3, title: 'Yangtze River Bridge', location: {lat: 32.114269, lng: 118.74215}},
          {ids:4, title: 'Rain Flower Terrace', location: {lat: 31.997498, lng: 118.780392}},
          {ids:5, title: 'Xuanwu Lake', location: {lat: 32.071229, lng: 118.791046}},
          {ids:6, title: 'Yuejiang Tower', location: {lat: 32.09474, lng: 118.747985}},
          {ids:7, title: 'Presidential palace', location: {lat: 32.044286, lng: 118.797292}},
          {ids:8, title: 'Nanjing University', location: {lat: 32.050423, lng: 118.780603}},
          {ids:9, title: 'Confucian Temple', location: {lat: 32.023987, lng: 118.790955}},
          {ids:10, title: 'The Memorial Hall of the Victims in Nanjing Massacre by Japanese Invaders', location: {lat: 32.035542, lng: 118.74335}}
        ];

      // This global polygon variable is to ensure only ONE polygon is rendered.
      var polygon = null;