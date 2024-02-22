// Question 40

function make_album(artist: string, title: string, tracks?: number): object {
    const album: { artist: string, title: string, tracks?: number } = {
      artist: artist,
      title: title
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  const album1 = make_album('Artist 1', 'Album 1');
  const album2 = make_album('Artist 2', 'Album 2', 12);
  const album3 = make_album('Artist 3', 'Album 3');
  
  console.log(album1);
  console.log(album2);
  console.log(album3);

//   In this code, we have a function make_album() that accepts two required parameters: 
//   artist and title, and one optional parameter tracks.

//   Inside the function, we create an album object with properties artist and title, 
//   which are assigned the values passed as arguments.

//   If the tracks parameter is provided, we add a tracks property to the album 
//   object and assign it the value of tracks.

//   The function then returns the album object.

//   We then call the make_album() function multiple times to create different album objects. 
//   The resulting objects are assigned to the variables album1, album2, and album3.

//   Finally, we use console.log() to print the values of album1, album2, and album3, 
//   which represent the album information stored in objects.

