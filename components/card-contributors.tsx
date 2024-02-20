import { GitCommit, Location } from "@mynaui/icons-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { fetchUser } from "../lib/fetchContributors";

export default async function CardContributors({
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
  try {
    user = await fetchUser(userUrl);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
  return (
    <div className=" grid  gap-3 rounded-xl border-2 border-black px-5 py-4">
      <div className="flex items-start justify-between">
        <figure>
          <Image
            src={profile}
            alt={name}
            width={100}
            height={100}
            className="h-16 w-16 rounded-full"
          />
        </figure>
        <a href={githubUrl}>
          <button className="text-md flex items-center gap-2 rounded-xl border-2 border-black px-2 py-1">
            <FaGithub size={22} /> <span>Follow</span>
          </button>
        </a>
      </div>
      <div className="grid">
        <h4 className="text-lg font-medium">
          {name} <span className="text-sm font-normal">{user.name}</span>
        </h4>
        <div className="flex items-center justify-start gap-1">
          <Location width={16} height={16} className="-mb-1" />{" "}
          <address className="not-italic">{user.location ?? "Unknown"}</address>
        </div>
        <div className="flex items-center justify-start gap-1">
          <GitCommit width={16} height={16} className="-mb-1" />{" "}
          <div>
            <span className="font-medium">commited</span> to this project
          </div>
        </div>
      </div>
    </div>
  );
}
