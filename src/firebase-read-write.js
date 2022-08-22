import { getDatabase, ref, set } from "firebase/database";
/*
//write
function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

//write use case

function writeUserData(time) {
    const db = getDatabase();
    set(ref(db, 'users/' + time), {
      timeProp : time
    });
  }
  

//read
const db = getDatabase();
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
*/
