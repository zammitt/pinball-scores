if(Games.find().count() === 0) {
  Games.insert({
    name: 'Laser Cue',
    logo: '/laser-cue-logo.png',
    backglass: '/thedudes.jpg'
  });
  
  Games.insert({
    name: 'Whirlwind',
    logo: '/wwlogo.gif',
    backglass: '/ww_backglass.jpg'
  });
}