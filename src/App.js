import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Modal from "./Components/Modal/Modal";
import { deleteOneUser, getUsers } from "./services/user.service";

function App() {
	const [users, setUsers] = useState([]);

	const [isModalVisible, setIsModalVisible] = useState(false);
	
  const getAllUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if(!isModalVisible) {
      getAllUsers();
    }
  }, [isModalVisible])

  async function deleteUser(id) {
    const newUsers = [...users]
    const filteredUsers = newUsers.filter(user => user._id !== id) 
    setUsers(filteredUsers)
    await deleteOneUser(id)
}

  function closeModal() {
    setIsModalVisible(false);
  }

	return (
		<div>
			<button className="create" onClick={() => setIsModalVisible(true)}>
				Create +
			</button>
			<div className="App">
				{users.map((user) => (
					<Card
						key={user._id}
						userName={user.name}
						userStatus={user.status}
						id={user._id}
            deleteUser={deleteUser}
					/>
				))}
			</div>
			{isModalVisible && (
				<div
          onClick={() => setIsModalVisible(false)}
          className='modalBackground'>
          <div onClick={(e) => e.stopPropagation()} className='modal'><Modal cb={closeModal} /></div>
        </div>
			)}
		</div>
	);
}

export default App;
