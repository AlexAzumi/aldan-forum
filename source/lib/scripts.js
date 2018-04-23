/* Made by Aldan Project | 2018 */
var forumID, forumTitle, forumDescription;
var postID, postTitle, postCreator, postComments;
var serverURL;

/* Write the user information in user.php */
function setUserProfile(username, imageURL, email, biography, location, gender)
{
  document.title = 'Perfil de ' + username + ' | Foro de Aldan Project';

  var container = document.getElementById('user');
  var userTitle = document.getElementById('user-title');
  var userEmail = document.getElementById('user-email');
  var userImage = document.getElementById('user-image');
  var userGender = document.getElementById('user-gender');
  var userBiography = document.getElementById('user-biography');
  var userLocation = document.getElementById('user-location');

  var userGenderP = userGender.childNodes;

  userTitle.innerHTML = username;
  userEmail.innerHTML = '<b>Correo: </b>' + email;
  userImage.src = imageURL;
  switch (gender)
  {
    case 0:
      userGenderP[3].innerHTML = 'Sin especificar';
      break;
    case 1:
      userGenderP[3].innerHTML = 'Masculino';
      break;
    case 2:
      userGenderP[3].innerHTML = 'Femenino';
      break;
  }

  if(biography != '[NONE]')
  {
    var userBiographyP = userBiography.childNodes;
    userBiographyP[3].innerHTML = biography;
    userBiography.style.display = 'block';
  }

  if(location != '[NONE]')
  {
    var userLocationP = userLocation.childNodes;
    userLocationP[3].innerHTML = location;
    userLocation.style.display = 'inline-block';
  }
  container.style.display = 'block';
}

/* Control the navbar buttons */
function setMenuElements(serverURL, activeUser, username)
{
  var loginButton = document.getElementById('login-button');
  var secondButton = document.getElementById('second-button');
  var secondButtonLink = secondButton.childNodes;

  if(activeUser)
  {
    loginButton.style.display = 'none';
    secondButton.classList.toggle('dropdown');
    secondButtonLink[1].innerHTML = username;
    secondButtonLink[1].href = serverURL + 'user/' + username;
  }
  else
  {
    secondButtonLink[1].innerHTML = 'Registrarse';
    secondButtonLink[1].href = serverURL + "signup";
  }
}

/* Forum link */
function callForumPage(forumDiv)
{
  window.location.href = "forum/" + forumDiv.id;
}

/* Add forums */
function addForum()
{
  //Search for main-container div
  var mainContainer = document.getElementById('main-container');
  for(var i = 0; i < forumID.length; i++)
  {
    //Create a new div
    var mainDiv = document.createElement('div');
    mainDiv.id = forumID[i];
    mainDiv.classList.add('forum-box');
    mainDiv.setAttribute('onClick', 'callForumPage(this);');
    //Create a image (forum icon)
    var icon = document.createElement('img');
    icon.classList.add('forum-icon');
    icon.src = 'img/forum/' + forumID[i] + '.png';
    //Create title
    var title = document.createElement('p');
    title.classList.add('forum-title');
    title.innerHTML = forumTitle[i];
    //Create description
    var description = document.createElement('p');
    description.classList.add('forum-description');
    description.innerHTML = forumDescription[i];
    //Add arrow
    var arrow = document.createElement('img');
    arrow.classList.add('arrow');
    arrow.src = 'img/assets/arrow.png';
    //Append to mainDiv
    mainDiv.appendChild(icon);
    mainDiv.appendChild(title);
    mainDiv.appendChild(description);
    mainDiv.appendChild(arrow);
    //Append to mainContainer
    mainContainer.appendChild(mainDiv);
  }
}

/* Post link */
function callPostPage(forumDiv)
{
  window.location.href = forumID + "/post/" + forumDiv.id;
}

/* Add posts */
function addPost()
{
  //Search for main-container div
  var mainContainer = document.getElementById('main-container');
  for(var i = 0; i < postID.length; i++)
  {
    //Create new div
    var mainDiv = document.createElement('div');
    mainDiv.classList.add('forum-box');
    mainDiv.classList.add('post');
    if(i == 0)
      mainDiv.classList.add('first-post');
    mainDiv.id = postID[i];
    mainDiv.setAttribute('onClick', 'callPostPage(this);');
    //Create title
    var title = document.createElement('p');
    title.classList.add('forum-title');
    title.innerHTML = postTitle[i];
    //Create post's creator
    var creator = document.createElement('p');
    creator.classList.add('post-creator');
    creator.innerHTML = "por " + postCreator[i];
    //Create # of postComments
    var comments = document.createElement('p');
    comments.classList.add('num-post');
    comments.innerHTML = "<b>Número de comentarios: </b>" + postComments[i];
    //Create arrow
    var arrow = document.createElement('img');
    arrow.classList.add('arrow');
    arrow.src = '../img/assets/arrow.png';
    //Append to mainDiv
    mainDiv.appendChild(title);
    mainDiv.appendChild(creator);
    mainDiv.appendChild(comments);
    mainDiv.appendChild(arrow);
    //Append to mainContainer
    mainContainer.append(mainDiv);
  }
}

function searchUser(username)
{
  window.location.href = serverURL + 'user/' + username;
}

function createPost(title, date, content, avatar, username, forumName, forumID)
{
  document.title = title + ' | Foro de Aldan Project';
  /* Search tags */
  var forumStructure = document.getElementById('forum-structure');
  var post = document.getElementById('post');
  var postTitle = document.getElementById('post-title');
  var postDate = document.getElementById('post-date');
  var postContent = document.getElementById('post-content');
  var userImage = document.getElementById('user-image');
  var usernameText = document.getElementById('username');
  /* Apply changes */
  postTitle.innerHTML = title;
  postDate.innerHTML = 'Fecha de publicación: ' + date;
  postContent.innerHTML = content;
  userImage.src = avatar;
  var userClick = "searchUser('" + username + "')";
  userImage.setAttribute('onClick', userClick);
  usernameText.innerHTML = username;
  usernameText.setAttribute('onClick', userClick);
  forumStructure.innerHTML = '<a href="' + serverURL + 'forum/' + forumID + '">' + forumName + "</a> > " + title;
  /* Show containers */
  forumStructure.style.display = "block";
  post.style.display = "table";
}
