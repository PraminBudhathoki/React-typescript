interface PlaylistInfoProps {
  lang: string[];
}

const PlaylistInfo = (props: PlaylistInfoProps) => {
  return (
    <div className="text-start">
      <h2>We have playlist on followiing languages</h2>
      <ol>
        {props.lang.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ol>
    </div>
  );
};

export default PlaylistInfo;
