const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const contents = document.querySelector("#post-content").value.trim();

  if (title && contents) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, contents }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create post");
    }
  }
};


const updateHandler = async (event) => {
  event.preventDefault()
  const title = document.querySelector("#post-title").value.trim();
  const contents = document.querySelector("#post-content").value.trim();

  const id = event.target.hasAttribute("data-update")

  if(id) {

    let updateId = event.target.getAttribute("data-update")
    const response = await fetch(`/profile/${updateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({title, contents})
    })

    if(response.ok) {
      document.location.replace('/')
    } else {
      alert("bad")
    }
  }
}


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete post");
    }
  }
};


// const commentHandler = async (e) => {
//   e.preventDefault()
//   const commentText = document.getElementById("comment-text").value.trim()
//   const response = await fetch(`/api/posts/`)

// }

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

const deleteBtn = document.querySelectorAll('.deleteBtn')

const updateBtn = document.querySelectorAll('.updateBtn')

updateBtn.forEach((update)=> {
  update.addEventListener("click",updateHandler)
})

deleteBtn.forEach((del)=> {
  del.addEventListener("click",delButtonHandler)
})
// document
//   .getElementById("comment-form")
//   .addEventListener("submit", commentHandler);
