$(document).ready(function(){
    var dbUrl = 'https://api.themoviedb.org/4/list';
    var apiKey = '32128564cf5de76f488b6252aaa3684d';


   var main_movies = {
  "async": true,
  "crossDomain": true,
  "url": dbUrl+"/20?sort_by=release_date.desc&api_key="+apiKey+"&page=1",
  "method": "GET",
  "headers": {
    "content-type": "application/json;charset=utf-8",
    "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjEyODU2NGNmNWRlNzZmNDg4YjYyNTJhYWEzNjg0ZCIsInN1YiI6IjU4MTY4NjJjYzNhMzY4NzRiNzAxMDk5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._s-RabG4AWTsxkuGS6PRiIp1zj0Abtrdlb9ai9cxHSU"
  },
  "processData": false,
   "dataType":"jsonp",
}

$.ajax(main_movies).done(function (response) {
    var movieList = response.results;
         for(var i=0 ; i<6; i++){
                    movieStr = movieList[i];
                    var imgUrl = 'https://image.tmdb.org/t/p/w500'+movieStr.poster_path;
                    var title = movieStr.title;
                    var topMovies = $('.row_one');

                    if(movieStr.adult == true){
                      var age = "18+";
                    }else{
                      var age = "PG 13";
                    }

                    var vote = movieStr.vote_average;

                    topMovies.append('<div class="post col-md-2 col-sm-4">'+
                       '<img src="'+imgUrl+'" alt="movie_name poster">'+
                       '<h3 class="title">'+title+'</h3>'+
                       '<p class="post_info">'+age+' | vote rate = '+vote+'.</p>'+
                   '</div>');
                }
  console.log(movieList);
}); 







////////////////////////////////////////






 var main_shows = {
  "async": true,
  "crossDomain": true,
  "url": dbUrl+"/5?sort_by=release_date.desc&api_key="+apiKey+"&page=1",
  "method": "GET",
  "headers": {
    "content-type": "application/json;charset=utf-8",
    "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjEyODU2NGNmNWRlNzZmNDg4YjYyNTJhYWEzNjg0ZCIsInN1YiI6IjU4MTY4NjJjYzNhMzY4NzRiNzAxMDk5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._s-RabG4AWTsxkuGS6PRiIp1zj0Abtrdlb9ai9cxHSU"
  },
  "processData": false,
   "dataType":"jsonp",
}

$.ajax(main_shows).done(function (response) {
    var movieList = response.results;
         for(var i=0 ; i<6; i++){
                    movieStr = movieList[i];
                    var imgUrl = 'https://image.tmdb.org/t/p/w500'+movieStr.poster_path;
                    var title = movieStr.title;
                    var topShows = $('.row_two');

                    if(movieStr.adult == true){
                      var age = "18+";
                    }else{
                      var age = "PG 13";
                    }

                    var vote = movieStr.vote_average;

                    topShows.append('<div class="post col-md-2 col-sm-4">'+
                       '<img src="'+imgUrl+'" alt="movie_name poster">'+
                       '<h3 class="title">'+title+'</h3>'+
                       '<p class="post_info">'+age+' | vote rate = '+vote+'.</p>'+
                   '</div>');
                }
  console.log(movieList);
}); 



///////////////////////////////////




});