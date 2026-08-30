import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((s) => s.feed);
  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(
        BASE_URL + "/feed",

        {
          withCredentials: true,
        },
      );

      dispatch(addFeed(res?.data?.users));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  if (!feed || feed.length === 0) {
    return <h3>No new users found</h3>;
  }

  return (
    <div className="flex justify-center">
      {/* {feed?.map((user) => {
        return <UserCard key={user?._id} user={user[0]} />;
      })} */}
      {feed && <UserCard user={feed?.[0]} />}
    </div>
  );
};

export default Feed;
