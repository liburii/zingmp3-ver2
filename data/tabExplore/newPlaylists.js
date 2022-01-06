var listNewPlaylist = [
    {
        name: "Freaky Squad",
        singer: ["SpaceSpeakers"],
        order: "1",
        time: "01.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist1.jpg"
    },
    {
        name: "Nghe - Nói",
        singer: ["Obito", "PjPo"],
        order: "2",
        time: "06.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist2.jpg"
    },
    {
        name: "101520",
        singer: ["Sol7, PrettyXiX"],
        order: "3",
        time: "07.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist3.jpg"
    },
    {
        name: "Missing You",
        singer: ["Phương Ly"],
        order: "4",
        time: "08.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist4.jpg"
    },
    {
        name: "Bao Lâu Ta Lại Yêu Một Người",
        singer: ["Doãn Hiếu", "B."],
        order: "5",
        time: "10.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist5.jpg"
    },
    {
        name: "BigCityBoi",
        singer: ["Binz"],
        order: "6",
        time: "17.12.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist6.jpg"
    },
];

const NEW_PLAYLIST_STORAGE_KEY = 'VIK_NEW_PLAYLIST';

localStorage.setItem(NEW_PLAYLIST_STORAGE_KEY, JSON.stringify(listNewPlaylist));