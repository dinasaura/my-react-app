import React from "react";
import { Route, Routes, Link} from "react-router-dom";
import Counter from "./Counter";
import GithubUserList from "./GithubUsers/GithubUserList";

function App() {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to="/users">GitHub Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Counter" element={<Counter initialValue={0} />} />
        <Route path="/users/*" element={<GithubUserList />} />
      </Routes>
    </div>
  );
}

export default App;





