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
                style={{ width: 200 }}
                cover={<img alt={song.name} src={song.imageUrl} />}
                className={style['card']}
            >
                <Link to={song.externalUrls}>
                <Card.Meta title={song.name} /></Link>
                <p>Artist: {song.artists}</p>
                <p>From album: {song.albumName}</p>
                <AudioPlayer src={song.previewUrl}/>
            </Card>
    );
};

export default SongCard;
