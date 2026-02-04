import { useState } from 'react';
import { createUser } from '../../itproger-react/src/api';

const UserForm = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [createdUser, setCreatedUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = await createUser({ name: name, bio: bio });
        setCreatedUser(newUser);
        setName('');
        setBio('');
    };

    return (
        <div>
            <h2>Добавить пользователя</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Введите имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Введите биографию"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <button type="submit">Добавить</button>
            </form>

            {createdUser && (
                <div>
                    <p>
                        Пользователь создан: {createdUser.name} (ID: {createdUser.id})
                    </p>
                </div>
            )}
        </div>
    );
};
export default UserForm;
