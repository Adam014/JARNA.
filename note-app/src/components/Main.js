import React, { useState, useEffect } from "react";
import Note from "./Note";
import { onSnapshot, addDoc, serverTimestamp, doc, deleteDoc, } from "firebase/firestore";
import { postColletion, db } from "../firebase";

export default function Main(props) {
  const [post, setPost] = useState({
    author: "",
    title: "",
    text: "",
    date: "",
  });

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // ukladani notes do firebase databaze
    const unsub = onSnapshot(postColletion, (snapshot) => {
      const notesArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      notesArray.sort((a, b) => b.date.toDate() - a.date.toDate());
      setNotes(notesArray);
    });
    return unsub;
  }, []);

  const handleChange = (event) => {
    // Handle input changes
    const { name, value } = event.target;

    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (post.author.trim() === "" || post.text.trim() === "") {
      return alert("All inputs must be filled");
    }

    // Use serverTimestamp() to get the current server timestamp
    const newPost = {
      ...post,
      date: serverTimestamp(), // Store server timestamp
    };

    addDoc(postColletion, newPost)
      .then(() => {
        setPost({
          author: "",
          title: "",
          text: "",
        });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const handleDeleteNote = async (noteId) => {
    // Handle note deletion
    const docRef = doc(db, "notes", noteId);
    await deleteDoc(docRef);
  };

  return (
    <main className={props.darkMode ? "dark" : ""}>
      <div className={props.darkMode ? "dark-input" : "post-input"}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={post.author}
            placeholder="Enter your author name / id"
            name="author"
            onChange={handleChange}
          />
          <input
            type="text"
            value={post.title}
            placeholder="Enter title"
            name="title"
            onChange={handleChange}
          />
          <textarea
            value={post.text}
            placeholder="Enter your post"
            name="text"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* kontrola zda mame nejake notes v array, jakmile ne, zobrazi se div 'no-notes', jakmile ano tak div 'dark-note'/'note-container' */}
      {notes.length === 0 ? (
        <div className="no-notes">
          <h1>We don't seem to have any notes!</h1>
        </div>
      ) : (
        <div className={props.darkMode ? "dark-note" : "note-container"}>
          {notes.map((note) => (
            <Note
              key={note.id}
              post={note}
              onDelete={() => handleDeleteNote(note.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
