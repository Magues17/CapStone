'use client'

import Format from "../components/Format";
import PostsOfMine from "../pages/profile/posts/page";
import PostFormCard from '../components/PostFormCard';


export default function Home() {
  return (
<Format>
              <PostFormCard />
              <PostsOfMine />

</Format>
  );
}
