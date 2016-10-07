// This is a JavaScript file
function getDate() {
    d = document.getElementById('date_display');
    return d.innerHTML;
}
function getTime() {
    t = document.getElementById('time_display');
    console.log(t.innerHTML);
    return t.innerHTML;
}

function fetchHistory() {
    var History = ncmb.DataStore("TestClass");
    History.order('createDate', true)
           .fetchAll()
           .then(function(results){
                for(var i=0; i<results.length; i++) {
                    var obj = results[i];
                    h = document.getElementById('history_data');
                    h.insertAdjacentHTML('beforeend', '<tr><td>' + obj.date + '</td><td>' + obj.time + '</td><td>' + obj.category + '</td></tr>');
                }
           })
           .catch(function(error){
               console.log('履歴の取得でエラーが発生しました');
           });
}
var ncmb = new NCMB("77082e991c30b91d3f6fca74f6f5f190a6ddb09bd3cdb1422f777c9ade0d1cd8","9999aab9befa4027d8d3c346e83436be5c029f4434ab91e9427232d7f3e4f6d8");
