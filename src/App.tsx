import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { userSlice } from './store/reducers/UserSlice'
import { fetchUsers } from './store/reducers/ActionCreator'
import PostContainer from './components/PostContainer'
import './App.css'

const App = () => {
    // const dispatch = useAppDispatch()
    // const { users, isLoading, error } = useAppSelector(state => state.userReducer)

    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    return (
        <div>
            {/* {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {users.map(user =>
                <div
                    key={user.id}
                    style={{ margin: '20px', fontSize: '2rem' }}
                >
                    {user.name}
                </div>)} */}
            <PostContainer />
        </div>
    )
}

export default App;
