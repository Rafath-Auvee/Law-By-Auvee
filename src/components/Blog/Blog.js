import React from 'react';

const Blog = () => {
    return (
        <div>
            
            <div className='border container'>
            <h1>Difference between authorization and authentication</h1>
            <p><strong>Answer: </strong>A very short explanation: Authentication is for knowing who a user is, and authorization is what the user its allow to do. Since Firebase Auth handles different ways for only recognize the user, it will allow anyone to access your application, if you don’t complement the authentication with access control.</p></div>
            <div className='border container'>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p><strong>Answer: </strong>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. 
                Other options to implement authentication rather than firebase are: Parse, Deployd, Nhost, Heroku, Kinvey, Pubnub, Kuzzle etc.</p>
            </div>
            <div  className='border container'>
                <h1>What other services does firebase provide other than authentication</h1>
                <p><strong>Answer: </strong> Firebase also provides: Realtime Database, Google analytics, Cloud storage, Cloud messaging for cross platform apps, Higher website traffic with app indexing etc.</p>
            </div>
        </div>
    );
};

export default Blog;