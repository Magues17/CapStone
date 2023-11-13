// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// export default function Pathway() {
//   ReactDOM.render(
//     <Router>
//       <div>
//         <Route exact path="/">
//           <ProfilePage />
//         </Route>
//         <Route path="/about">
//           <AboutMe />
//         </Route>
//       </div>
//     </Router>,
//     node
//     );
// }

// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your page components
import ProfilePage from './profile';
import AboutMe from './profile/about';
import FriendsofMine from './profile/friends';
import PhotosMe from './profile/photos';
import PostsOfMine from './profile/posts';

// Your main App component
export default function App() {
  return (
    <Router>
      <Switch>
        {/* Route for Profile page */}
        <Route path="/profile" component={page} />

        {/* Nested routes for profile sub-pages */}
        <Route path="/profile/about" component={page} />
        <Route path="/profile/friends" component={page} />
        <Route path="/profile/photos" component={page} />
        <Route path="/profile/posts" component={page} />
      </Switch>
    </Router>
  );
}





