import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithub, FaPenNib } from "react-icons/fa";
import { SiFeedly } from "react-icons/si";

export default function Profile() {
  return (
    <aside>
      <h3>プロフィール</h3>
      <div className="text-center border border-indigo-900 rounded p-5">
        <figure className="mx-auto w-max">
          <Image
            src="/favicon.png"
            alt="avatar"
            width="100"
            height="100"
            className="rounded-full"
          />
        </figure>
        <div className="p-4">
          <div className="text-xl">Loliver</div>
          <p className="text-left mb-2">
            熊本の高専卒
            <br />
            毎週金曜はやる気・元気・無敵になる涼風青葉
            <br />
            ブログ活動もアイカツ！
          </p>
          <div className="flex justify-center gap-2">
            <Link
              href="https://twitter.con/Lolitta_river"
              className="border rounded border-indigo-900 p-0.5"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://loliver.hatenablog.jp/"
              className="border rounded border-indigo-900 p-0.5"
            >
              <FaPenNib />
            </Link>
            <Link
              href="https://github.com/Loliver1224"
              className="border rounded border-indigo-900 p-0.5"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://feedly.com/i/discover/sources/search/feed/https%3A%2F%2Fblog.loliver.net"
              className="border rounded border-indigo-900 p-0.5"
            >
              <SiFeedly />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
