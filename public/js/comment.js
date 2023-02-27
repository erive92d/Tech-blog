const formCom = document.getElementById('comment-form');

const commentArea = document.querySelector(".comment-area")
const postId = commentArea.getAttribute("data-id")

const commentHandler = async ()=> {

    const commentText = document.getElementById('comment-text').value.trim()
   
    const result = {
        comment: commentText,
        post_id: Number(postId)
    }

    if(commentText) {
        const response = await fetch(`/api/comments/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( result ),
           
        })
    

        if(response.ok) {
           document.location.reload
        } else {
            console.log("bad")
        }

    }
   
}


formCom.addEventListener("submit", commentHandler)