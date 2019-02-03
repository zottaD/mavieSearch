$(document).ready(function () {
    $('#submitButton').click(function () {
        var searchText = $('#searchText').val();
        if(searchText.length>0){
            ajaxRequest(searchText);
        } else{
            alert('Введите название фильма');
        }
    })
    $('#resetButton').click(function(){
        $('#searchText').val('');
        $('#results').html('');
    });
});
function ajaxRequest(term){
    $.ajax({
        type: 'GET',
        url: 'https://api.themoviedb.org/3/search/multi',
        data: {'query': term, 'language' : 'ru-RU', 'api_key': 'd272326e467344029e68e3c4ff0b4059'},
        success: function(data){
            $.each(data.results, function (keyFilm, valFilm) {

                var $filmTable=$('<table align="center"></table>');
                $.each(valFilm, function(keyAttr, valAttr)
                {
                    var $filtAttrTr=$('<tr><td>' + keyAttr + '</td><td>' + valAttr  + '</td></tr>');
                    $filmTable.append($filtAttrTr);
                });
                $('#results').append($filmTable);
            });

        }
    });
}