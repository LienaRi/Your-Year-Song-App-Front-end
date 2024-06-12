import { Card } from 'antd';
import { Link } from '@tanstack/react-router';
import { Track } from '../../../api/TrackDataType';
import AudioPlayer from '../AudioPlayer';
import style from './styles.module.css';


interface SongCardProps {
    song: Track;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
    return (

        <Card
        style={{ width: 200}}
        cover={<img alt={song.name} src={song.imageUrl} />}
        className={style['card']}
    >
        <div className={style['player-container']}>
            <AudioPlayer src={song.previewUrl} />
        </div>
        <div className={style['card-content']}>
            <Link to={song.externalUrls} style={{ textDecoration: 'none' }}>
                <div className={style['title']}>{song.name}</div>
            </Link>
            <p><span className={style['row-title']}>Artist:</span> {song.artists}</p>
            <p><span className={style['row-title']}>From album:</span> {song.albumName}</p>
        </div>
    </Card>
    );
};

export default SongCard;
