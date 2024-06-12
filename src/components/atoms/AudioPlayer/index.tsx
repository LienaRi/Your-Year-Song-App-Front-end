import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import style from './styles.module.css'

interface PlayerProps {
    src: string;
}

const Player: React.FC<PlayerProps> = ({ src }) => {
return (
    <AudioPlayer
        autoPlay={false}
        src={src}
        onPlay={e => console.log("onPlay")}
        showJumpControls={false}
        showSkipControls={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        customProgressBarSection={
            [
              RHAP_UI.PROGRESS_BAR,
            ]
          }
        className={style['player']}
    />
)};
export default Player