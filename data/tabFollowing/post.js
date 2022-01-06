var listPost = [
    [
        {
            name: "Binz Da Poet",
            time:"19 tháng 12 lúc 00:07",
            content: "Shout out for #FlyTeam",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist1.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist1.jpg"
        },
        {
            name: "Bray",
            time:"10 tháng 10 lúc 20:40",
            content: "Tuyệt Vời <3",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist2.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist2.jpg"
        },
        {
            name: "M - TP",
            time:"14 tháng 12 lúc 12:37",
            content: "Tặng cho trái tym nè",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist3.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist3.jpg"
        },
        {
            name: "Đen Vâu",
            time:"15 tháng 12 lúc 08:36",
            content: "Nghe nhạc cùng Đen trên Spotify nhaaa",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist4.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist4.jpg"
        },
        {
            name: "Karik",
            time:"17 tháng 12 lúc 16:36",
            content: "People make it complicated, nên là mình cứ enjoy cái moment này :))",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist5.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist5.jpg"
        },
    ],
    [
        {
            name: "Ninh Dương Lan Ngọc",
            time:"16 tháng 12 lúc 21:35",
            content: "Nay bé ổnn",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist6.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist6.jpg"
        },
        {
            name: "Ribi Sachi",
            time:"18 tháng 12 lúc 17:33",
            content: "Chào các huynh đệ =)) ",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist7.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist7.jpg"
        },
        {
            name: "Suni Hạ Linh",
            time:"18 tháng 12 lúc 23:31",
            content: "Tadaaaa </br>Cảm ơn tất cả mọi người 😎",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist8.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist8.jpg"
        },
        {
            name: "AMEE",
            time:"20 tháng 12 lúc 14:36",
            content: "Cám ơn các khán giả thân yêu của AMEE đã luôn yêu thương âm nhạc của MEE 🥰",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist9.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist9.jpg"
        },
        {
            name: "Chau Bui",
            time:"16 tháng 12 lúc 19:35",
            content: "Bữa tối vui vẻ cùng Châu và mẹ Mít nhé mọi người ơi 🍠",
            authorAvatar: "./assets/img/tabFollowing/storys/avatars/artist10.jpg",
            image: "./assets/img/tabFollowing/storys/posts/artist10.jpg"
        },
    ]
];

const POST_STORAGE_KEY = 'VIK_POST';

localStorage.setItem(POST_STORAGE_KEY, JSON.stringify(listPost));