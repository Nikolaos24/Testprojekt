let posts = [
    {
        "img": "icons/user.png",
        "userName": "Memepage",
        "picture": "pictures/IMG20231214203820.jpg",
        "comments": []



    },
    {
        "img": "icons/user.png",
        "userName": "SP_rel",
        "picture": "pictures/IMG20231215101808.jpg",
        "comments": []


    }





]



function render() {
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';
    mainContent.innerHTML += `<div class="HeadSection">
        <h1>Instagram</h1>
        <input class="HeadSearch" placeholder="Search...">
        <div class="IconsHead">
        <img src="icons/home.png">
        <img src="icons/compass.png">
        <img src="icons/email.png">
        <img src="icons/heart.png">
        <img src="icons/user.png">
        </div>
    </div>
    <div class="PostSection" id="PostSection"></div>`;
    PostSection();





}

function PostSection() {
    let Posts = document.getElementById('PostSection');

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        Posts.innerHTML += `<div class="PostCard">
        <div class="PostHead">
        <div class="PostHeadLeft">
        <img src="${post['img']}">
        <p>${post['userName']}</p>
        </div>
        <div class="PostHeadRight">
        <img src="icons/more (1).png">
        </div>
        </div>
        <div class="picture">
        <img src="${post['picture']}"> 
        </div>
        <div class="IconsFooter">
        <div class="IconsFooterLeft">
        <img src="icons/heart.png">
        <img src="icons/chat.png">
        <img src="icons/compass.png">
        </div>
        <div class="IconsFooterRight">
        <img src="icons/tag.png">
        </div>
        </div>
        <div class="LikeArea">
        <img src="icons/user.png">
        <p>Gefällt <b>dragonworr</b> und <b>102 weitere Personen</b> </p>
        </div>
        <div class="TagText">
        <p><b>${post['userName']}</b> War ein super Urlaub!!!</p>
        </div>
        <div class="CommentSection" id="commentContent${i}"></div>
        <div class="InputSection">
        <input id="input${i}" placeholder="Add comment..."><img onclick="addComment(${i})" src="icons/compass.png">
        </div>
        </div>`;

        let commentContent= document.getElementById(`commentContent${i}`);

        for (let j = 0; j < post['comments'].length; j++) {
            const comment = post['comments'][j];
            commentContent.innerHTML+=`<div>${comment}</div>`;
            
        }


    }



}

function addComment(index){
    let input = document.getElementById(`input${index}`);
    posts[index]['comments'].push(input.value);
    render();
    input.value = '';



}
render();