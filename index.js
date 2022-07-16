const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21432
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4245
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15278
    }
]

const posted = document.getElementById("post")

for (let i = 0; i < posts.length; i++) {

    let content = 
        `
            <div id="post" class="head-post">
                <div class="oldgram">
                    <div class="profile">
                        <img class="profile-pic" src=${posts[i].avatar}>
                        <div class="profile-desc">
                            <h3 class="name">${posts[i].name}</h3>
                            <p class="location">${posts[i].location}</p>
                        </div>
                    </div>
                <div class="oldgram">
                    <div class="post-div">
                        <img class="post" id="post-image" onclick = "myfunction()" src=${posts[i].post}>
                    </div>   
                    <div class="icons-div"> 
                        <img class="icon like" src="images/icon-heart.png">
                        <img class="icon comment" src="images/icon-comment.png">
                        <img class="icon dm" src="images/icon-dm.png">
                    </div>
                    
                    <div class="likes">
                        <p><span class="username bold-span">${posts[i].likes} likes </span></p>
                    </div>
                    
                    <div class="comment">
                        <p><span class="username bold-span">${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>
                </div>
            </div> 
         `
         
         posted.innerHTML += content
}



