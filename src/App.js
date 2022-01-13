import { useState } from 'react';
import './App.css';

import Header from './components/header/Header.jsx';

function App() {

  const [user , setUser] = useState({
    name: 'José Corte',
    email: 'josesilvacorte34@gmail.com',
    emailVerified: true,
    phoneNumeber: null,
    photoURL: "https://lh3.googleusercontent.com/ogw/ADea4I4zvqaA5-og_eKORMXeS_Sopzp3tG5Y2yMkFUOr=s83-c-mo",
  })

  return (
    <div className="App">
      <Header userProfile={user.photoURL} />
      {/* <h1>Hello World	&#128640; </h1> */}
    </div>
  );
}

export default App;
