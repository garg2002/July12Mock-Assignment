document.addEventListener("DOMContentLoaded", getData);

function getData() {
  const postsContainer = document.getElementById("posts-container");
  showLoader(postsContainer);

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      return response.json();
    })
    .then(data => {
      displayData(data, postsContainer);
    })
    .catch(error => {
      console.error(error);
      hideLoader(postsContainer);
    });
}

function displayData(data, container) {
  container.innerHTML = "";

  data.forEach(function(post) {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;

    container.appendChild(postElement);
  });

  hideLoader(container);
}

function showLoader(container) {
  const loaderElement = document.createElement("div");
  loaderElement.classList.add("skeleton-loader");

  container.innerHTML = "";
  container.appendChild(loaderElement);
}

function hideLoader(container) {
  container.innerHTML = "";
}
