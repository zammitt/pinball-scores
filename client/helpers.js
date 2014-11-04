var DateFormats = {
       short: "MM/DD/YYYY",
       long: "dddd DD/MM/YYYY HH:mm"
};

UI.registerHelper("formatDate", function (datetime, format) {
    f = DateFormats[format];
    return moment(datetime).format(f);
});