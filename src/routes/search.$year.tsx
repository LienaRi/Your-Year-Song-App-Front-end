import { createFileRoute } from '@tanstack/react-router'
import { searchedSongsQueryOptions } from '../api/queryOptions'
import { useQuery } from '@tanstack/react-query';
import Spinner from 'react-bootstrap/esm/Spinner';
import InputForm from '../components/atoms/Form';
import CardList from '../components/molecules/CardList';
import SongCard from '../components/atoms/Card';

export const Route = createFileRoute('/search/$year')({
  loader: ({ context: { queryClient }, params: { year } }) => {
    return queryClient.ensureQueryData(searchedSongsQueryOptions(Number(year)))
  },
  component: Search,
})

function Search() {
  const { year } = Route.useParams();
  const { data, isLoading } = useQuery(searchedSongsQueryOptions(Number(year)));

  if (isLoading || !data) {
    return <Spinner />
  }

  return (
    <div>
      <h1>Your Year: {year}</h1>
      <InputForm />
      <h6>Listen to a preview or get the real deal on Spotify!</h6>
      {data && data.length > 0 ? <CardList data={data} /> : <Spinner /> }
    </div>
  )
}