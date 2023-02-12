const formCom = document.getElementById('comment-form');

const commentHandler = async (e)=> {
    e.preventDefault()
    const commentText = document.getElementById('comment-text').value.trim()
    const result = {
        comment: commentText
    }

    if(commentText) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( result ),
           
        })
    

        if(response.ok) {
            alert("okay")
        } else {
            console.log("bad")
        }

    }
   
}


formCom.addEventListener("submit", commentHandler)