import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from '@tanstack/react-router';
import { Track } from '../../../api/TrackDataType';
import AudioPlayer from '../AudioPlayer';


interface SongCardProps {
    song: Track;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
    return (
        
            <Card
                style={{ width: 200 }}
                cover={<img alt={song.name} src={song.imageUrl} />}
            >
                <Link to={song.externalUrls}>
                <Card.Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={song.name} />
                <p>Artist: {song.artists}</p>
                </Link>
                <p>From album: {song.albumName}</p>
                <AudioPlayer src={song.previewUrl}/>
            </Card>
    );
};

export default SongCard;
