var listRadios = [
    {
        name: "Xone Radio",
        viewers: "4.1K",
        image: "./assets/img/tabExplore/radios/radio1.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach1.jpg",
    },
    {
        name: "On Air",
        viewers: "1.4K",
        image: "./assets/img/tabExplore/radios/radio2.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach2.jpg",
    },
    {
        name: "Chạm",
        viewers: "3.2K",
        image: "./assets/img/tabExplore/radios/radio3.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach3.jpg",
    },
    {
        name: "Acoustic",
        viewers: "6.6K",
        image: "./assets/img/tabExplore/radios/radio4.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach4.jpg",
    },
    {
        name: "Rap Việt",
        viewers: "25K",
        image: "./assets/img/tabExplore/radios/radio5.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach5.jpg",
    },

    {
        name: "US-UK",
        viewers: "1.6K",
        image: "./assets/img/tabExplore/radios/radio6.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach6.jpg",
    },
    {
        name: "K-POP",
        viewers: "2K",
        image: "./assets/img/tabExplore/radios/radio7.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach7.jpg",
    },
    {
        name: "V-POP",
        viewers: "5K",
        image: "./assets/img/tabExplore/radios/radio8.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach8.jpg",
    },
    {
        name: "Bolero",
        viewers: "1K",
        image: "./assets/img/tabExplore/radios/radio9.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach9.jpg",
    },
    {
        name: "The One Radio",
        viewers: "2.6K",
        image: "./assets/img/tabExplore/radios/radio10.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach10.jpg",
    },
];

const RADIO_STORAGE_KEY = 'VIK_RADIO';

localStorage.setItem(RADIO_STORAGE_KEY, JSON.stringify(listRadios));