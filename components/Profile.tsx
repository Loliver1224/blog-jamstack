import Image from "next/image";

export default function Profile() {

  return (
    <aside>
      <h3>プロフィール</h3>
      <div className="text-center border border-indigo-900 rounded p-5">
        <figure className="mx-auto w-max">
          <Image src="/favicon.png" alt="avatar" width="100" height="100" className="rounded-full" />
        </figure>
        <div>
          <div className="text-xl">Loliver</div>
          <p className="text-left">
            熊本の高専卒<br />
            毎週金曜はやる気・元気・無敵になる涼風青葉<br />
            ブログ活動もアイカツ！
          </p>
          <div>[ソーシャルリンク]</div>
        </div>
      </div>
    </aside>
  );
}
