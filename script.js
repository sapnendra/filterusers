let users = [
  {
    name: "Arpita",
    pic: "https://avatars.githubusercontent.com/u/235424133?v=4",
    bio: "Chase your dreams",
  },
  {
    name: "Devank Manjhi",
    pic: "https://avatars.githubusercontent.com/u/223325483?v=4",
    bio: "Your Friendly Neighborhood Devil.",
  },
  {
    name: "Crockery House",
    pic: "https://avatars.githubusercontent.com/u/213515906?v=4",
    bio: "A modern crockery house to fulfill all your crockery needs.",
  },
  {
    name: "Sapnendra Jaiswal",
    pic: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Full-stack developer who wants to create big impact anywhere.",
  },
  {
    name: "Aarav Mehta",
    pic: "https://images.unsplash.com/photo-1619241805829-34fb64299391?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Full-stack developer who loves solving real-world problems.",
  },
  {
    name: "Sneha Kapoor",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "Creative graphic designer and illustrator with a modern touch.",
  },
  {
    name: "Rohan Verma",
    pic: "https://images.unsplash.com/photo-1647346799779-387aef766c36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Data analyst passionate about turning data into insights.",
  },
  {
    name: "Priya Sharma",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "Marketing strategist with a knack for storytelling.",
  },
  {
    name: "Vikram Singh",
    pic: "https://images.unsplash.com/photo-1657771072153-878f8b0ce74a?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Product manager focused on building user-centric products.",
  },
  {
    name: "Nisha Patel",
    pic: "https://images.unsplash.com/photo-1617729770694-a76a0a296048?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "UX designer passionate about creating seamless experiences.",
  },
  {
    name: "Aditya Rao",
    pic: "https://images.unsplash.com/photo-1752486268300-1bb7d6d9867d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Mobile app developer specializing in Android and iOS apps.",
  },
  {
    name: "Kritika Joshi",
    pic: "https://images.unsplash.com/photo-1578875249445-3ade45200ac5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Content creator and blogger who loves sharing ideas online.",
  },
  {
    name: "Manish Gupta",
    pic: "https://images.unsplash.com/photo-1619241805829-34fb64299391?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "DevOps engineer with a focus on cloud infrastructure.",
  },
  {
    name: "Pooja Desai",
    pic: "https://images.unsplash.com/photo-1662330287468-399c22049d20?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Frontend developer who loves crafting interactive UIs.",
  },
  {
    name: "Rahul Nair",
    pic: "https://images.unsplash.com/photo-1647346799779-387aef766c36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Cybersecurity expert who loves keeping systems safe.",
  },
];

// Display users on page load
let showUsers = (users) => {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";

  if (users) {
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
      content.className =
        "content text-center text-[#fff] absolute bottom-2 w-full px-1 py-0";

      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-2";
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
  }
};
showUsers(users);

// Add search functionality
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

// Add new user functionality
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
    const name = userForm.name.value;
    const bio = userForm.bio.value;
    let pic = userForm.pic.value;

    if (!name || !bio) {
      alert("All fields are required!");
      return;
    }

    if (pic) {
      const newUser = {
        name,
        pic,
        bio,
      };
      users.push(newUser);
      showUsers(users);
      userForm.reset();
      userForm.classList.add("hidden");
      cardContainer.classList.remove("hidden");
    } else {
      const imageInput = document.getElementById("image");
      const file = imageInput.files[0];
      const imgUrl = URL.createObjectURL(file);
      pic = imgUrl;
      const newUser = {
        name,
        pic,
        bio,
      };
      users.push(newUser);
      showUsers(users);
      userForm.reset();
      userForm.classList.add("hidden");
      cardContainer.classList.remove("hidden");
    }
  });
};

createNewUser();
