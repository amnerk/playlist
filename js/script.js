/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Edge of Seventeen", "Sex Dwarf", "Lemon", "Platinum"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = ["Stevie Nicks", "Soft Cell", "U2", "Orgy"];
var images_links = ["http://image.iheart.com/WMG4/Thumb_Content/Full_PC/WMG/Nov12/112012/093624999805/resources/093624999157.jpg", "http://www.recordrunnerusa.com/product_images/w/794/SOFTCELL-12-RSD__70228_zoom.jpg", "https://cdn.ontourmedia.io/u2/non_secure/images/20140502/discography/lemon_cover/600.jpg", "https://i.ytimg.com/vi/tr0t-oveuoY/maxresdefault.jpg"];
var songlinks = ["https://youtu.be/Dn8-4tjPxD8", "https://youtu.be/lrRmgbchiGY", "https://youtu.be/iJYyPLKJcFc"]
function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
songs.forEach(function(song) {
    $("#songs").append("<p>" + song + "</p>");
    });

images_links.forEach(function(image) {
    $("#images").append("<img src=" + image + ">");
    });

artists.forEach(function(artist) {
    $("#artists").append("<p>" + artist + "</p>");
    });
songlinks.forEach(function(links) {
    $("#link").append("<p>" + links + "</p>");
});
}
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
