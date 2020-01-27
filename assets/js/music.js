const players = [];

playerInit = () => {
  players.push(new APlayer({
      container: document.querySelector('#COHPlayer'),
      theme: "#137752",
      audio: [
        {
          name: 'Safety',
          artist: ' ',
          url: 'assets/music/CityOfHunger/Safety.mp3',
          cover: 'assets/images/cityOfHunger.png'
        },
        {
          name: 'Wandering',
          artist: ' ',
          url: 'assets/music/CityOfHunger/Wandering.mp3',
          cover: 'assets/images/cityOfHunger.png'
        },
        {
          name: 'Wandering (Battle)',
          artist: ' ',
          url: 'assets/music/CityOfHunger/Wandering-Battle.mp3',
          cover: 'assets/images/cityOfHunger.png'
        },
      ]
  }));
  players.push(new APlayer({
      container: document.querySelector('#MITPlayer'),
      theme: "#137752",
      audio: [
        {
          name: 'Cleaning Up',
          artist: ' ',
          url: 'assets/music/CreatingVideoGames/CleaningUp.mp3',
          cover: 'assets/images/creatingVideoGames.png'
        },
        {
          name: 'Crazy City',
          artist: ' ',
          url: 'assets/music/CreatingVideoGames/CrazyCity.mp3',
          cover: 'assets/images/creatingVideoGames.png'
        },
      ]
  }));
  players.push(new APlayer({
      container: document.querySelector('#TBPlayer'),
      theme: "#137752",
      audio: [
        {
          name: 'The Clock Has Started',
          artist: ' ',
          url: 'assets/music/TripleBeat/TheClockHasStarted.mp3',
          cover: 'assets/images/tripleBeatAlbum.png'
        },
      ]
  }));
  players.push(new APlayer({
      container: document.querySelector('#MiscPlayer'),
      theme: "#137752",
      listMaxHeight: 396,
      audio: [
        {
          name: 'Pressing Onwards',
          artist: ' ',
          url: 'assets/music/HowEndSong/PressingOnwards.mp3',
          cover: 'assets/images/howDoIEndASong.png'
        },
        {
          name: 'Snow',
          artist: ' ',
          url: 'assets/music/HowEndSong/Snow.mp3',
          cover: 'assets/images/howDoIEndASong.png'
        },
        {
          name: 'Unknown Land',
          artist: ' ',
          url: 'assets/music/HowEndSong/UnknownLand.mp3',
          cover: 'assets/images/howDoIEndASong.png'
        },
        {
          name: 'Watch Your Step',
          artist: ' ',
          url: 'assets/music/HowEndSong/WatchYourStep.mp3',
          cover: 'assets/images/howDoIEndASong.png'
        },
        {
          name: 'Welcome Home',
          artist: ' ',
          url: 'assets/music/HowEndSong/WelcomeHome.mp3',
          cover: 'assets/images/howDoIEndASong.png'
        },
        {
          name: 'Lost Time',
          artist: ' ',
          url: 'assets/music/HowUseDrums/LostTime.mp3',
          cover: 'assets/images/howDoIEndASong.png'
        },
        {
          name: 'New Home',
          artist: ' ',
          url: 'assets/music/SomeVideoGameIDK/NewHome.mp3',
          cover: 'assets/images/howDoIEndASong.png'
        },
        {
          name: 'Homestretch',
          artist: ' ',
          url: 'assets/music/SomeVideoGameIDK/Homestretch.mp3',
          cover: 'assets/images/howDoIEndASong.png'
        },
        {
          name: 'Shop',
          artist: ' ',
          url: 'assets/music/SomeVideoGameIDK/Shop.mp3',
          cover: 'assets/images/howDoIEndASong.png'
        },
      ]
  }));
}
