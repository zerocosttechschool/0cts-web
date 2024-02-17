import CardContributors from "@/components/card-contributors";
import { fetchContributors } from "@/lib/fetchContributors";
import { Users } from "@mynaui/icons-react";

export default async function Contributors() {
  
  let kontributor: Array<Record<string, any>> = [];
  const contributors1 = await fetchContributors(`${process.env.GITHUB_REPO_PROFILE}`);
  const contributors2 = await fetchContributors(`${process.env.GITHUB_REPO_DOCS}`);
  kontributor = [...contributors1, ...contributors2];
  kontributor = kontributor.filter(
    (item, index, self) => index === self.findIndex(t => t.id === item.id),
  );

  return (
    <div className="mx-auto grid max-w-7xl gap-10 bg-white px-8 py-32 text-black">
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <h2 className="max-w-xl text-4xl font-semibold">
          Bergabung Bersama Menjadi Kontributor kami
        </h2>
        <h3 className="max-w-2xl">
          Bangun relasi dengan orang orang hebat dengan bergabung bersama kami menjadi kontributor
        </h3>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        {kontributor.map((kontributor: any) => {
          return (
            <CardContributors
              key={kontributor.id}
              name={kontributor.login}
              profile={kontributor.avatar_url}
              userUrl={kontributor.url}
              githubUrl={kontributor.html_url}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <a
          href="https://github.com/zerocosttechschool/0cts-curriculum"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex items-center justify-center gap-2 rounded-full bg-[#1e293b] px-7 py-4 text-white duration-200 ease-in-out hover:scale-105">
            Join Project <Users />
          </button>
        </a>
      </div>
    </div>
  );
}
