import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const YourTreeScreen = () => {

     const dispatch = useDispatch();

     const handleLogout = () => {
          console.log('logedout');
          dispatch( startLogout() );
     }
     
     return (
          <>
               <h1>YourTreeScreen</h1>
               <button onClick={handleLogout}>Logout</button>
          </>
     )
}
