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

document
  .querySelector(".post-list")
  .addEventListener("click", delButtonHandler);

// document
//   .getElementById("comment-form")
//   .addEventListener("submit", commentHandler);
