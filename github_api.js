$(document).ready(function(){

  $('#search').on('click', searchGithub);

  function searchGithub(){
    var searchName = $('#githubName').val();
    $('#displayResults').show();

    $.getJSON('https://api.github.com/users/' + searchName, function(data){
      $('#location').text(data.location);
      $('#name').text(data.name);
      $('#avatar').attr('src', data.avatar_url);
      $('#blog_url').attr('href', data.blog);
      $('#github_url').attr('href', data.html_url);
      getRepositories(searchName);
    });
  }

  function getRepositories(name){
    $('#projects').empty();
    $.getJSON('https://api.github.com/users/' + name + '/repos', function(repositories){
      repositories.forEach(function(repository){
        $('#projects').append('<li><a href="' + repository.html_url + '">' + repository.name + '</a></li>');
      });
    });
  }
});
