var listAlbum = [
    {
        name: "Lạc Trôi",
        image: "./assets/img/albums/album1.jpg"
    },
    {
        name: "OK",
        image: "./assets/img/albums/album2.jpg"
    },
    {
        name: "Một Đêm Say",
        image: "./assets/img/albums/album3.jpg"
    },
    {
        name: "Em Là Châu Báu",
        image: "./assets/img/albums/album4.jpg"
    },
    {
        name: "Thằng Điên",
        image: "./assets/img/albums/album5.jpg"
    },
    {
        name: "The Show",
        image: "./assets/img/albums/album6.jpg"
    },
    {
        name: "Đen Đá Không Đường",
        image: "./assets/img/albums/album7.jpg"
    },
    {
        name: "Con Trai Cưng",
        image: "./assets/img/albums/album8.jpg"
    },
    {
        name: "Hơn Cả Yêu",
        image: "./assets/img/albums/album9.jpg"
    },
    {
        name: "Chạm Đáy Nỗi Đau",
        image: "./assets/img/albums/album10.jpg"
    },
    {
        name: "Yêu 5",
        image: "./assets/img/albums/album11.jpg"
    },
    {
        name: "Tháng năm",
        image: "./assets/img/albums/album12.jpg"},
     {
         name: "To The Moon",
        image: "./assets/img/albums/album13.jpg"
    },
    {
        name: "Dreamer",
        image: "./assets/img/albums/album14.jpg"
    },
    {
        name: "Sweety",
        image: "./assets/img/albums/album15.jpg"
    },
];

const ALBUM_STORAGE_KEY = 'VIK_ALBUM';

localStorage.setItem(ALBUM_STORAGE_KEY, JSON.stringify(listAlbum));