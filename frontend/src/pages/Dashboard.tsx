import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Note from '../components/Note';
import Sidebar from '../components/Sidebar';

// Note type definition
export interface INote {
  id: number;
  title: string;
  content: string;
  user:string;
  createdAt: string;
}

const DashboardPage: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([
    { id: 1, user:'1', title: 'Meeting Notes', content: 'Discussed project timeline with team', createdAt: '2023-10-15' },
    { id: 2, user:"1", title: 'Shopping List', content: 'Milk, Eggs, Bread, Fruits', createdAt: '2023-10-14' },
    { id: 3, user:"1", title: 'Ideas', content: 'New feature ideas for the app', createdAt: '2023-10-13' }
  ]);

  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateNote = () => {
    if (newNoteTitle.trim() && newNoteContent.trim()) {
      const newNote: INote = {
        id: notes.length + 1,
        user: "1",
        title: newNoteTitle,
        content: newNoteContent,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setNotes([newNote, ...notes]);
      setNewNoteTitle('');
      setNewNoteContent('');
      setIsCreating(false);
    }
  };

  const handleCancelCreate = () => {
    setNewNoteTitle('');
    setNewNoteContent('');
    setIsCreating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation Bar */}
      <Navbar/>

      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Header */}
        <header className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Welcome, Jonas Kahnwald!
              </h1>
              <p className="text-gray-600 mt-1">Email: j****@gmail.com</p>
            </div>
            <button
              onClick={() => setIsCreating(true)}
              className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
            >
              Create Note
            </button>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <main className="w-full lg:w-2/3">
            {/* Create Note Form */}
            {isCreating && (
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Note</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="noteTitle">
                      Title
                    </label>
                    <input
                      id="noteTitle"
                      type="text"
                      value={newNoteTitle}
                      onChange={(e) => setNewNoteTitle(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Note title"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="noteContent">
                      Content
                    </label>
                    <textarea
                      id="noteContent"
                      value={newNoteContent}
                      onChange={(e) => setNewNoteContent(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Note content"
                      rows={4}
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={handleCreateNote}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                    >
                      Save Note
                    </button>
                    <button
                      onClick={handleCancelCreate}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notes Section */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Notes</h2>
              {notes.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No notes yet. Create your first note!</p>
              ) : (
                <div className="space-y-4">
                  {notes.map((note) => (
                    <Note note={note}/>
                  ))}
                </div>
              )}
            </div>
          </main>

          {/* Sidebar */}
          <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;