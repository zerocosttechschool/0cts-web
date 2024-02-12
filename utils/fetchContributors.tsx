async function fetchContributors(url: string): Promise<Array<Record<string, unknown>>> {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  const contributors = await response.json();
  return contributors;
}

async function fetchUser(userUrl: string): Promise<Record<string, string | number>> {
  const response = await fetch(userUrl, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  const user = await response.json();
  return user;
}

export { fetchUser, fetchContributors };
