import styles from "./TranscriptionPlayer.module.scss";
import YouTube, { YouTubeProps } from 'react-youtube';

const TranscriptionPlayer = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '280',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.video}>
        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} className={styles.player}/>
      </div>
    </div>
  )
}

export default TranscriptionPlayer