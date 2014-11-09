UI.registerHelper('formatDate', function(date, format) {
  return moment(date).format(format);
});