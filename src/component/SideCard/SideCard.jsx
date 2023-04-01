import React, {useEffect, useState} from "react";

const SideCard = ({watchTime, read}) => {
  const [time, setTime] = useState(watchTime);
  useEffect(() => {
    const getWatchTime = localStorage.getItem("watchTime");
    setTime(getWatchTime);
  }, [watchTime]);
  return (
    <div>
      <div className="border rounded-xl border-green p-5 bg-red-900">
        <h4>Spent time on read : {time} min</h4>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl text-white">Bookmarked Blogs: {read.length}</h1>
        <div>
          {read.map((r) => (
            <h2
              className="border rounded-xl border-red-500 p-5 bg-orange-500 mb-2 mt-4"
              key={r.name}>
              {r.title}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideCard;
