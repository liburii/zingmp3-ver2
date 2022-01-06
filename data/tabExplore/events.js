var listEvent = [
    {
        name: "Sinh Nhật Sao x B Ray",
        time: "00:00 Thứ Hai, 11 tháng 10",
        fans: [
            "./assets/img/tabExplore/events/fans/singer1/fan1.jpg",
            "./assets/img/tabExplore/events/fans/singer1/fan2.jpg",
            "./assets/img/tabExplore/events/fans/singer1/fan3.jpg",
            "./assets/img/tabExplore/events/fans/singer1/fan4.jpg",
            "./assets/img/tabExplore/events/fans/singer1/fan5.jpg",
        ],
        fanAmount: "84K",
        image: "./assets/img/tabExplore/events/event1.jpg",
        action: "Quan Tâm"
    },
    {
        name: "Sinh Nhật Sao x ERIK",
        time: "00:00 Thứ Tư, 13 tháng 10",
        fans: [
            "./assets/img/tabExplore/events/fans/singer2/fan1.jpg",
            "./assets/img/tabExplore/events/fans/singer2/fan2.jpg",
            "./assets/img/tabExplore/events/fans/singer2/fan3.jpg",
            "./assets/img/tabExplore/events/fans/singer2/fan4.jpg",
            "./assets/img/tabExplore/events/fans/singer2/fan5.jpg",
        ],
        fanAmount: "68K",
        image: "./assets/img/tabExplore/events/event2.jpg",
        action: "Quan Tâm"
    },
    {
        name: "Sinh Nhật Sao x Sơn Tùng",
        time: "00:00 Thứ Tư, 5 tháng 7",
        fans: [
            "./assets/img/tabExplore/events/fans/singer3/fan1.jpg",
            "./assets/img/tabExplore/events/fans/singer3/fan2.jpg",
            "./assets/img/tabExplore/events/fans/singer3/fan3.jpg",
            "./assets/img/tabExplore/events/fans/singer3/fan4.jpg",
            "./assets/img/tabExplore/events/fans/singer3/fan5.jpg",
            "./assets/img/tabExplore/events/fans/singer3/fan6.jpg",
        ],
        fanAmount: "88K",
        image: "./assets/img/tabExplore/events/event3.jpg",
        action: "Quan Tâm"
    },
];

const EVENT_STORAGE_KEY = 'VIK_EVENT';

localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(listEvent));