// This is a JavaScript file
function getDisplayingDate() {
    d = document.getElementById('date_display');
    return d.innerHTML;
}
function getDisplayingTime() {
    t = document.getElementById('time_display');
    return t.innerHTML;
}

function getCurrentDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    return year+"年"+month+"月"+day+"日";
}

function getCurrentTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    return hour + "時" + minute + "分";
}

function showAllHistory() {
    var History = ncmb.DataStore("History");
    History.order('createDate', true)
           .fetchAll()
           .then(function(results){
                for(var i=0; i<results.length; i++) {
                    var obj = results[i];
                    h = document.getElementById('all_history');
                    h.insertAdjacentHTML('beforeend', '<tr><td>' + obj.date + '</td><td>' + obj.time + '</td><td>' + obj.category + '</td></tr>');
                }
           })
           .catch(function(error){
               console.log('履歴の取得でエラーが発生しました');
           });
}

function showTodayHistory() {
    var History = ncmb.DataStore('History');
    History.equalTo('date', getCurrentDate())
           .equalTo('category', 'in')
           .order('createDate', true)
           .limit(1)
           .fetchAll()
           .then(function(results){
                var obj = results[0];
                var in_time = obj.time;
                var h = document.getElementById('today_in');
                h.innerHTML = in_time;
           })
           .catch(function(error){
               console.log('履歴の取得でエラーが発生しました');
           });
    History.equalTo('date', getCurrentDate())
           .equalTo('category', 'out')
           .order('createDate', true)
           .limit(1)
           .fetchAll()
           .then(function(results){
                var obj = results[0];
                var out_time = obj.time;
                var h = document.getElementById('today_out');
                h.innerHTML = out_time;
           })
           .catch(function(error){
               console.log('履歴の取得でエラーが発生しました');
           });
}

function showCurrentDateTime() {
    var date_display = document.getElementById('date_display');
    date_display.innerHTML= getCurrentDate();
    var time_display = document.getElementById('time_display');
    time_display.innerHTML = getCurrentTime();
}

