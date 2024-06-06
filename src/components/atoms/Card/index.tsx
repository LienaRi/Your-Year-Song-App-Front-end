import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from '@tanstack/react-router';
import { Track } from '../../../api/TrackDataType';


interface SongCardProps {
    allSongs: Track;
  }

  const SongCard: React.FC<SongCardProps> = ({ allSongs }) => {
    return (
        <Link to={allSongs.externalUrls}>
        <Card
            style={{ width: 200 }}
            cover={<img alt={allSongs.name} src={allSongs.imageUrl} />}
        >
            <Card.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={allSongs.name} />
            <p>Artist: {allSongs.artists}</p>
            <p>From album: {allSongs.albumName}</p>
        </Card>
        </Link>
    );
};

export default SongCard;
