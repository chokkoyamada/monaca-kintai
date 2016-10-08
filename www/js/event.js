// This is a JavaScript file
function registerPageTransitionEvent() {
    var push_button = document.getElementById('push-button');
    var navigator = document.getElementById('navigator');
    push_button.onclick = function(){
        navigator.pushPage('page2');
        showAllHistory();
    };
}

function registerInEvent() {
    var in_button = document.getElementById('in-button');
    in_button.onclick = function() {
        var History= ncmb.DataStore("History");
        var history= new History();
        var d = getDisplayingDate();
        var t = getDisplayingTime();
        var m = t + 'に出勤しました。';
        history.set('date', d)
                .set("time", t)
                .set('category', 'in')
                .save()
                .then(function(object){
                    ons.notification.alert({
                        message: m
                    });
                    showTodayHistory();
                })
                .catch(function(error){
                   console.log('データの書き込みでエラーが発生しました');
                });
    };
}
        
function registerOutEvent() {
    var out_button = document.getElementById('out-button');
    out_button.onclick = function() {
        var History= ncmb.DataStore("History");
        var history= new History();
        var d = getDisplayingDate();
        var t = getDisplayingTime();
        var m = t + 'に退勤しました。';
        history.set('date', d)
                .set("time", t)
                .set('category', 'out')
                .save()
                .then(function(object){
                    ons.notification.alert({
                        message: m
                    });
                    fetchTodayHistory();
                })
                .catch(function(error){
                   console.log('データの書き込みでエラーが発生しました');
                });
    };
}
