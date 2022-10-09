// make a function that have an dictionary object

function make_album(artist_name, album_title, track = 0) {
    album = {
        "Artist": artist_name,
        "Title": album_title,
        "tracks": track
    }
    return album;

}

var newAlbum = make_album("Nusrat Fateh Ali Khan", "Shahen shah");
console.log(newAlbum)
var newAlbum = make_album("Mehdi Hassan", "Ab ke hum bichde");
console.log(newAlbum)
var newAlbum = make_album("Tylor swift", "folklore",9);
console.log(newAlbum)