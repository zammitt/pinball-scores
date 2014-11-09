Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('scores'), Meteor.subscribe('comments'), Meteor.subscribe('users'), Meteor.subscribe('games') ]; }
});

Router.route('/', {name: 'highScores'});
Router.route('/my-scores', {name: 'myScores'});

