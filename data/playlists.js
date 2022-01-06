var listPlaylist = [
    {
        name: "V-Pop Rising",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist1.jpg"
    },
    {
        name: "Giai Điệu Yêu Thích",
        creator: "liburii",
        image: "./assets/img/playlists/playlist17.jpg"
    },
    {
        name: "US - UK",
        creator: "liburii",
        image: "./assets/img/playlists/playlist3.jpg"
    },
    {
        name: "Lofi - Study",
        creator: "liburii",
        image: "./assets/img/playlists/playlist4.jpg"
    },
    {
        name: "Top 100 Nhạc Trẻ",
        creator: "Zing Mp3",
        image: "./assets/img/playlists/playlist5.jpg"
    },
    {
        name: "Khó Vẽ Nụ Cười",
        creator: "Đạt G x DuUyen",
        image: "./assets/img/playlists/playlist6.jpg"
    },
    {
        name: "Guitar Cover",
        creator: "Lib",
        image: "./assets/img/playlists/playlist7.jpg"
    },
    {
        name: "Lofi Chill",
        creator: "Lib",
        image: "./assets/img/playlists/playlist8.jpg"
    },
    {
        name: "Trốn Tìm",
        creator: "Đen",
        image: "./assets/img/playlists/playlist9.jpg"
    },
    {
        name: "Thế Giới V-Pop Vol. 3",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist10.jpg"
    },
    {
        name: "Có Chắc Yêu là Đây",
        creator: "MTP",
        image: "./assets/img/playlists/playlist11.jpg"
    },
    {
        name: "Playlist Này Chill Phết",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist12.jpg"
    },
    {
        name: "BlackJack",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist13.jpg"
    },
    {
        name: "4U - On Repeat",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist14.jpg"
    },
    {
        name: "Những Bài Hát Hay Nhất Của Mr. Siro",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist15.jpg"
    },
    {
        name: "Chúng Ta CỦa Hiện Tại",
        creator: "MTP",
        image: "./assets/img/playlists/playlist16.jpg"
    },
    {
        name: "Lối Nhỏ",
        creator: "Đen",
        image: "./assets/img/playlists/playlist2.jpg"
    },
    {
        name: "Rap Thả Thính",
        creator: "libnoluv",
        image: "./assets/img/playlists/playlist18.jpg"
    },
    {
        name: "100% Gây Nghiện",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist19.jpg"
    },
    {
        name: "Nhạc Việt Được Nghe Nhiều Nhất",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist20.jpg"
    },
    {
        name: "Rap Việt Hay Nhất",
        creator: "Zing MP3",
        image: "./assets/img/playlists/playlist21.jpg"
    },
];

const PLAYLIST_STORAGE_KEY = 'VIK_PLAYLIST';

localStorage.setItem(PLAYLIST_STORAGE_KEY, JSON.stringify(listPlaylist));