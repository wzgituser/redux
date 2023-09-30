import "./App.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addUser, rmUser, updateUser } from "./features/Users";

import { useState } from "react";
function App() {
  const list = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [update, setUpdate] = useState("");
  console.log(update);
  return (
    <div className="App">
      <div className="add">
        <input placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input
          type="text"
          placeholder="surename"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="text"
          className="btn"
          onClick={() => {
            dispatch(
              addUser({
                id: list[list.length - 1].id + 1,
                name: name,
                username: username
              })
            );
          }}
        >
          add user
        </button>
      </div>
      <div className="display">
        {list.map((list) => {
          return (
            <div key={list.id}>
              <h1>
                {list.id} {list.name}
              </h1>
              <p>{`user:...${list.username}`}</p>
              <input
                placeholder="upload name ..."
                type="text"
                onChange={(e) => setUpdate(e.target.value)}
              />
              <button
                onClick={() =>
                  dispatch(updateUser({ id: list.id, username: update }))
                }
              >
                upload name
              </button>
              <button onClick={() => dispatch(rmUser({ id: list.id }))}>
                remove user
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
