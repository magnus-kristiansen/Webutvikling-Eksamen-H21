const KanyeModule = ( function(){

    const albums = [
        {
            title: "DONDA",
            releaseYear: "2021",
            length: "108",
            numberOfSongs: "27",
            isPlatinum: "false",
            img: "donda-cover.jpg"
        },
        {
            title: "JESUS IS KING",
            releaseYear: "2019",
            length: "27",
            numberOfSongs: "11",
            isPlatinum: "false",
            img: "jik-cover.jpg"
        },
        {
            title: "YE",
            releaseYear: "2018",
            length: "23",
            numberOfSongs: "7",
            isPlatinum: "true",
            img: "ye-cover.jpg"
        },
        {
            title: "THE LIFE OF PABLO",
            releaseYear: "2016",
            length: "66",
            numberOfSongs: "20",
            isPlatinum: "true",
            img: "tlop-cover.png"
        },
        {
            title: "YEEZUS",
            releaseYear: "2013",
            length: "40",
            numberOfSongs: "10",
            isPlatinum: "true",
            img: "yeezus-cover.jpg"
        },
        {
            title: "MY BEAUTIFUL DARK TWISTED FANTASY",
            releaseYear: "2010",
            length: "68",
            numberOfSongs: "13",
            isPlatinum: "true",
            img: "mbdtf-cover.jpg"
        },
        {
            title: "808S AND HEARTBREAK",
            releaseYear: "2008",
            length: "51",
            numberOfSongs: "12",
            isPlatinum: "true",
            img: "808s-and-heartbreak-cover.jpg"
        },
        {
            title: "GRADUATION",
            releaseYear: "2007",
            length: "51",
            numberOfSongs: "13",
            isPlatinum: "true",
            img: "graduation-cover.jpg"
        },
        {
            title: "LATE REGISTRATION",
            releaseYear: "2005",
            length: "70",
            numberOfSongs: "21",
            isPlatinum: "true",
            img: "late-registration-cover.jpg"
        },
        {
            title: "THE COLLEGE DROPOUT",
            releaseYear: "2004",
            length: "76",
            numberOfSongs: "21",
            isPlatinum: "true",
            img: "college-dropout-cover.jpg"
        }
    ];

    // Get all album-objects from employeeArray
    const getAllAlbums = () => albums;

    // Get all albums from coins-array by searchWord from user
    const getAlbumsByWordInput = (searchWord) => {

        // albumsByWordInput-array that contains the filtered albums
        const albumsByWordInput = albums.filter(album => {

            // Returns objects that contains values that includes the searchWord
            // val = value
            return Object.values(album).some(val => val.includes(searchWord))
        })

        return albumsByWordInput;
    }

    
    // Public methods/functions that are accessible when you call on the Module
    return {getAllAlbums, getAlbumsByWordInput};

}() )

export default KanyeModule;