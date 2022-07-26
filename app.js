// import { render } from '@testing-library/react';
import React from 'react';
import {useState} from 'react';
import {nanoid} from 'nanoid';
import Search from './components/search.js';
import NotesList from './components/notesList';
import Header from './components/header.js';

const App = () => {
    const [notes, setNotes] = useState([
    {
        id: nanoid(),
        text: 'You need go to the park',
        date: '22/03/2022'
    },
    {
        id: nanoid(),
        text: 'Buy milk,some potato,buy coffee',
        date: '21/03/2022'
    },
    {
        id: nanoid(),
        text: 'Clean your room',
        date: '22/03/2022'
    },
    {
        id: nanoid(),
        text: 'Meet with John in 8:30pm',
        date: '25/03/2022'
    },
]);

const [searchText, setSearchText] = useState('');
const [toggleMode, setToggleMode] = useState(false);

const addNote = (text) => {
    const date = new Date();
    const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
}

const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
}

    return (
        <div className={`${toggleMode && 'toggle-mode'}`}>
            <div className="container">
                <Header handleToggleMode={setToggleMode} />
                <Search handleSearchNote={setSearchText}/>
                <NotesList notes={notes.filter((note) => 
                    note.text.toLocaleLowerCase().includes(searchText)
                )} 
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}/>
        </div>
        </div>
    )
}

export default App;


// export default App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             notes: [{
    // text: 'You need go to the park',
    // date: '22/03/2022'
// }]
//         }
//     }

//     render() {
//         return (

//         )
//     }
// }