const users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "kiara mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "ananya gupta",
    pic: "https://images.unsplash.com/photo-1617729770694-a76a0a296048?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "dreamer at heart 🌻 | chasing sunsets",
  },
  {
    name: "rohan kumar",
    pic: "https://images.unsplash.com/photo-1657771072153-878f8b0ce74a?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "coding my way through life 💻 | always learning",
  },
  {
    name: "zoya khan",
    pic: "https://images.unsplash.com/photo-1662330287468-399c22049d20?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "music is my escape 🎶 | pizza lover 🍕",
  },
  {
    name: "arjun reddy",
    pic: "https://images.unsplash.com/photo-1752486268300-1bb7d6d9867d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "exploring the unknown 🧭 | adventure awaits 🚴",
  },
  {
    name: "sania sharma",
    pic: "https://images.unsplash.com/photo-1578875249445-3ade45200ac5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "coffee, books, and rainy days ☕📚🌧️",
  },
  {
    name: "veer singh",
    pic: "https://images.unsplash.com/photo-1619241805829-34fb64299391?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "positivity on repeat 🔂 | living in the moment",
  },
  {
    name: "isha patel",
    pic: "https://images.unsplash.com/photo-1577343373199-9a3ac36689e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "fashion speaks louder than words 👗✨",
  },
  {
    name: "yash joshi",
    pic: "https://images.unsplash.com/photo-1647346799779-387aef766c36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "fitness first 💪 | keep pushing forward",
  },
];

let showUsers = (users) => {
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

let search = document.querySelector(".search");
search.addEventListener("input", (e) => {
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()));
    document.querySelector(".card-container").innerHTML = "";
    if(filteredUsers.length === 0) {
        document.querySelector(".card-container").innerHTML = "<h1 class='text-center text-xl'>No users found</h1>";
    } else {
        showUsers(filteredUsers);
    }
})