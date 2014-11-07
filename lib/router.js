Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('scores'), Meteor.subscribe('comments'), Meteor.subscribe('users') ]; }
});

Router.route('/', {name: 'highScores', fastRender: true});
Router.route('/my-scores', {name: 'myScores', fastRender: true});

