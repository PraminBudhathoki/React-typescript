// type ChannelProps = {
//   channelName: string;
// };
interface ChannelProps {
  channelName: string;
  playlistCount: number;
  noofsubscription?: number;
}
function ChannelInfo(props: ChannelProps) {
  return (
    <div>
      <h2>Welcome to {props.channelName} for learning React with typescript</h2>
      <h3>
        We also have other {props.playlistCount}+ playlist for learning
        android,kotlin,React and etc.
      </h3>
    </div>
  );
}

export default ChannelInfo;
