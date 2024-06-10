import { Row } from "antd";
import SongCard from "../../atoms/Card";
import { Track} from "../../../api/TrackDataType";


interface CardListProps {
  data: Track[];
}
const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <Row gutter={[16, 16]} style={{ padding: '20px' }}>
      {data && data.map(track => (
        <SongCard key={track.id} song={track} />
      ))}
    </Row>
  );
};

export default CardList;