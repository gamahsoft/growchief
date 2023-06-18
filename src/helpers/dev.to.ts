import axios from "axios";

const headers = {
  api_key: process.env.DEV_API_KEY,
};

const getFollowers = async (page = 1): Promise<number> => {
  const { data } = await axios.get(
    `https://dev.to/api/followers/users?per_page=1000&page=${page}`,
    {
      headers,
    }
  );
  if (data.length === 0) {
    return 0;
  }

  return data.length + (await getFollowers(page + 1));
};

export const loadDevToAnalytics = async () => {
  const { data } = await axios.get(
    "https://dev.to/api/articles/me?per_page=1000",
    {
      headers,
    }
  );

  const totalFollowers = await getFollowers();

  const countParams = data.reduce(
    (all: any, current: any) => ({
      views: all.views + (current?.page_views_count || 0),
      likes: all.likes + (current?.public_reactions_count || 0),
      followers: all.followers,
    }),
    { views: 0, likes: 0, followers: totalFollowers }
  );

  return {
    ...countParams,
    list: data
      .filter((f: any) => f.page_views_count > 10000)
      .slice(0, 10)
      .map((current: any) => ({
        title: current.title,
        organization: current?.organization?.name || "Self",
        views: current?.page_views_count,
        likes: current?.public_reactions_count,
        url: current?.url,
      })),
  };
};
