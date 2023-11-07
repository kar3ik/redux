import React from 'react'
import { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
    const user = useSelector((state) => state.user); // Use 'state.user' instead of 'state.users'
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h1>List of users</h1>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? (
                <div>Error: {user.error}</div>
            ) : null}
            {!user.loading && user.users.length ? (
                <ul>
                    {user.users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};
export default UserView