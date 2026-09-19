async function getUserData(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return await response.json();
}

async function getPosts(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await response.json();
}

async function getComments(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return await response.json();
}

function mappedFun(data) {
  const parentDiv = document.getElementById("container");
  parentDiv.innerHTML = ""; 

  data.forEach(item => {
    parentDiv.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <h4>${item.email}</h4>
        <p>${item.body}</p>
      </div>
    `;
  });
}

// Button
document.getElementById("loadBtn").addEventListener("click", async () => {
  const container = document.getElementById("container");
  const btn = document.getElementById("loadBtn");
  container.innerHTML = "Loading...";
  btn.innerText = "Loading...";
  btn.disabled = true;

  try {
    const data = await getComments(1);
    mappedFun(data);
    btn.innerText = "Comments Loaded";
  } catch (error) {
    container.innerHTML = "Error loading comments!";
    btn.innerText = "Try Again";
    btn.disabled = false;
  }
});