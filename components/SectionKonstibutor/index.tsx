import { BrandGithub, GitCommit, Location, Users } from "@mynaui/icons-react";
import Image from "next/image";

async function Kontributor() {
  let kontributor: Array<Record<string, unknown>> = [];

  const contributors1 = await fetchContributors(
    "https://api.github.com/repos/zerocosttechschool/0cts-web/contributors",
  );
  const contributors2 = await fetchContributors(
    "https://api.github.com/repos/zerocosttechschool/0cts-curriculum/contributors",
  );

  kontributor = [...contributors1, ...contributors2];

  kontributor = kontributor.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id),
  );

  return (
    <>
      <div className='py-32 px-8 max-w-7xl mx-auto bg-white text-black grid gap-10'>
        <div className='text-center flex flex-col items-center justify-center gap-10'>
          <h2 className='text-4xl font-semibold max-w-xl'>
            Bergabung Bersama Menjadi Kontributor kami
          </h2>
          <h3 className='max-w-2xl'>
            Bangun relasi dengan orang orang hebat dengan bergabung bersama kami
            menjadi kontributor
          </h3>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-6'>
          {kontributor.map((kontributor: any) => {
            return (
              <Card
                key={kontributor.id}
                name={kontributor.login}
                profile={kontributor.avatar_url}
                userUrl={kontributor.url}
                githubUrl={kontributor.html_url}
              />
            );
          })}
        </div>
        <div className='flex items-center justify-center'>
          <a
            href='https://github.com/zerocosttechschool/0cts-curriculum'
            target='_blank'
            rel='noreferrer'
          >
            <button className='bg-[#1e293b] py-4 px-7 rounded-full flex items-center justify-center gap-2 text-white hover:scale-105 duration-200 ease-in-out'>
              Join Project <Users />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

async function fetchContributors(
  url: string,
): Promise<Array<Record<string, unknown>>> {
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

async function Card({
  name,
  profile,
  githubUrl,
  userUrl,
}: {
  name: string;
  profile: string;
  githubUrl: string;
  userUrl: string;
}) {
  let user: Record<string, string | number> = {};

  let res = await fetch(userUrl, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      Authorization: "Bearer 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",
    },
  });

  user = await res.json();

  return (
    <div className='border-2 border-black rounded-xl px-5 py-6 grid gap-3'>
      <div className='flex items-start justify-between'>
        <figure>
          <Image
            src={profile}
            alt={name}
            width={100}
            height={100}
            className='rounded-full w-16 h-16'
          />
        </figure>
        <a href={githubUrl}>
          <button className='text-lg px-4 py-1 border-2 border-black rounded-xl flex gap-2 items-center'>
            <BrandGithub width={20} /> <span>Follow</span>
          </button>
        </a>
      </div>
      <div className='grid'>
        <h4 className='font-medium text-xl'>
          {name} <span className='font-normal text-lg'>{user.name}</span>
        </h4>
        <div className='flex items-center justify-start gap-1'>
          <Location width={16} height={16} className='-mb-1' />{" "}
          <address className='not-italic'>{user.location ?? "Unknown"}</address>
        </div>
        <div className='flex items-center justify-start gap-1'>
          <GitCommit width={16} height={16} className='-mb-1' />{" "}
          <div>
            <span className='font-medium'>commited</span> to this project
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontributor;
