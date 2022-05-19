export const sortByService = (sortBy, posts) => {
  const temp = posts?.slice();
  if (sortBy === "Latest") {
    temp.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
  }

  if (sortBy === "Oldest") {
    temp.sort((a, b) => new Date(a?.createdAt) - new Date(b?.createdAt));
  }

  if (sortBy === "Trending") {
    temp.sort((a, b) => b?.likes?.likeCount - a?.likes?.likeCount);
  }

  return temp;
};
