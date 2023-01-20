import { useEffect, useState } from "react";
import { useLastFM } from "use-last-fm";

const CurrentlyPlaying = () => {
  const lastFM = useLastFM("rachelled75", "12cfeef09cd104b4ffb6eaa7c16c65bb");
  const [ready, setReady] = useState<boolean>(false);

  // ready set to true after 1.8 seconds
  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1800);
  }, []);

  if (lastFM.status !== "playing" || !ready) {
    return (
      <a
        href="#"
        className="opacity-0 -translate-y-[35%]"
        aria-label="void"
      ></a>
    );
  }

  return (
    <a
      href={lastFM.song.url}
      className="transition overflow-hidden flex h-[7rem] wp-full md:w-[20rem] gap-4 md:pr-8 bg-none md:bg-[#DE2D4E] p-4 md:rounded-full"
    >
      <div className="border-2 h-full overflow-hidden rounded-full aspect-square animate-spinDJ">
        <img
          src={lastFM.song.art ? lastFM.song.art : "../../public/record.webp"}
          className="w-full h-full aspect-square border-double"
          alt="album art"
          width={80}
          height={80}
        ></img>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center text-left w-[calc(100%-7rem)]">
        <p className="text-sm">Listening to </p>
        <p className="w-full pb-1 overflow-hidden text-2xl font-bold leading-5 text-ellipsis whitespace-nowrap">
          {lastFM.song.name}
        </p>
        <span className="w-full overflow-hidden text-lg leading-5 text-ellipsis whitespace-nowrap">
          {lastFM.song.artist} - {lastFM.song.album}
        </span>
      </div>
    </a>
  );
};

export default CurrentlyPlaying;
