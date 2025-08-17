let users = [];

const saveToLocalStorage = (obj) => {
  if(localStorage.getItem("users") === null) {
    users = [];
    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    users = JSON.parse(localStorage.getItem("users"));
    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
  }
};

// Display users on page load
let showUsers = (users) => {
  users = JSON.parse(localStorage.getItem("users"));
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";
  
  users.forEach((user) => {
    const card = document.createElement("div");
    card.className =
      "card h-80 w-60 bg-gray-200 rounded-2xl overflow-hidden relative";
    const img = document.createElement("img");
    img.className = "absolute";
    img.src = user.pic;

    const blurredLayer = document.createElement("div");
    blurredLayer.className = "blurred-layer absolute";

    const content = document.createElement("div");
    content.className = "content text-center text-[#fff] absolute bottom-2";

    const name = document.createElement("h2");
    name.className = "text-2xl font-semibold mb-2";
    name.textContent = user.name;

    const desc = document.createElement("p");
    desc.textContent = user.bio;

    content.appendChild(name);
    content.appendChild(desc);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // You can now append `card` to the desired parent in your document. For example:
    document.querySelector(".card-container").appendChild(card);
  });
};
showUsers(users);

const searchUser = () => {
  // Search functionality
  let search = document.querySelector(".search");
  search.addEventListener("input", (e) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    document.querySelector(".card-container").innerHTML = "";
    if (filteredUsers.length === 0) {
      document.querySelector(".card-container").innerHTML =
        "<h1 class='text-center text-xl'>No users found</h1>";
    } else {
      showUsers(filteredUsers);
    }
  });
};
searchUser();

const createNewUser = () => {
  const createBtn = document.querySelector("#create-card");
  const cardContainer = document.querySelector(".card-container");
  const userForm = document.querySelector(".userForm");
  const closeForm = document.querySelector(".closeForm");

  createBtn.addEventListener("click", () => {
    userForm.classList.remove("hidden");
    cardContainer.classList.add("hidden");
  });

  closeForm.addEventListener("click", () => {
    userForm.classList.add("hidden");
    cardContainer.classList.remove("hidden");
  });

  userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = userForm.name.value;
    const pic = userForm.pic.value;
    const bio = userForm.bio.value;
    if (!name || !pic || !bio) {
      alert("All fields are required!");
      return;
    }

    const newUser = {
      name,
      pic,
      bio,
    };

    users.push(newUser);
    saveToLocalStorage(newUser);
    showUsers(users);
    userForm.reset();
    userForm.classList.add("hidden");
    cardContainer.classList.remove("hidden");
  });
};

createNewUser();
