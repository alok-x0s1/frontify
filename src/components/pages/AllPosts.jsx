import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../index";
import appwriteService from "../../appwrite/config";

const AllPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);
  // TODO: use useEffect instead of using state
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
