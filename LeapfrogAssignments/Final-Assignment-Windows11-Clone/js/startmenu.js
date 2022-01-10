

//windows icons list

const iconList = [
    { id: 1, src: "img/icons8-microsoft-edge-48.png", name: "edge" },
    { id: 2, src: "img/icons8-microsoft-word-2019-50.png", name: "Word" },
    {
      id: 3,
      src: "img/icons8-microsoft-excel-2019-50.png",
      name: "Excel",
    },
    {
      id: 4,
      src: "img/icons8-mail-50.png",
      name: "Mail",
    },
    {
      id: 5,
      src: "img/icons8-calendar-50.png",
      name: "Calendar",
    },
    {
      id: 6,
      src: "img/icons8-microsoft-store-50.png",
      name: "Store",
    },
    {
      id: 7,
      src: "img/icons8-photos-50.png",
      name: "Photos",
    },
    {
      id: 8,
      src: "img/icons8-settings-50.png",
      name: "Setting",
    },
    {
      id: 9,
      src: "img/icons8-microsoft-office-2019-48.png",
      name: "Office",
    },
    {
      id: 10,
      src: "img/icons8-microsoft-solitaire-collection-50.png",
      name: "Solitaire",
    },
    {
      id: 11,
      src: "img/icons8-spotify-50.png",
      name: "Spotify",
    },
    {
      id: 12,
      src: "img/icons8-whatsapp-48.png",
      name: "WhatsApp",
    },
    {
      id: 13,
      src: "img/icons8-microsoft-todo-2019-50.png",
      name: "Todo",
    },
    {
      id: 14,
      src: "img/icons8-xbox-x-48.png",
      name: "Xbox",
    },
    {
      id: 15,
      src: "img/icons8-amazon-prime-video-48.png",
      name: "Prime Video",
    },
    {
      id: 16,
      src: "img/icons8-tiktok-48.png",
      name: "Tiktok",
    },
  ];

  iconList.forEach((element) => {
    
    let windowsdiv = document.createElement("div");
    let windowsImg = document.createElement("img");
    let iconsName = document.createElement("p");
    windowsdiv.className="windows-div";
    windowsImg.className="windows-icons";
    iconsName.className = "icons-name";
    windowsImg.src = element.src;
    iconsName.innerHTML=element.name;
    
    
    windowsdiv.setAttribute("id", `${element.id}`);
    windowsdiv.append(windowsImg,iconsName);
    iconsDiv.append(windowsdiv);
  });