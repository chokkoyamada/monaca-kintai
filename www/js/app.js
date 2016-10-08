// This is a JavaScript file
var ncmb = new NCMB("","");

ons.ready(function() {
    console.log("Onsen UI is ready!");
    showCurrentDateTime();
    registerInEvent();
    registerOutEvent();
    registerPageTransitionEvent();
    showTodayHistory();
});
