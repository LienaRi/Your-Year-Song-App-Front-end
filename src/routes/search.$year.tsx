import { createFileRoute } from '@tanstack/react-router'
import { searchedSongsQueryOptions } from '../api/queryOptions'
import { useQuery } from '@tanstack/react-query';
import Spinner from 'react-bootstrap/esm/Spinner';
import InputForm from '../components/atoms/Form';
import CardList from '../components/molecules/CardList';
import '../index.css'

export const Route = createFileRoute('/search/$year')({
  loader: ({ context: { queryClient }, params: { year } }) => {
    return queryClient.ensureQueryData(searchedSongsQueryOptions(Number(year)))
  },
  component: Search,
})

function Search() {
  const { year } = Route.useParams();
  const { data, isLoading } = useQuery(searchedSongsQueryOptions(Number(year)));

  if (year === undefined) {
    return (
      <>
        <h1>Your Year Song App</h1>
        <h6>Sorry, didn't get that.</h6>
        <InputForm />
      </>
    )
  }

  if (isLoading || !data) {
    return <Spinner />
  }

  return (
    <div className='main-container'>
      <h2>Your Year: {year}</h2>
      <h6>Listen to a preview or get the real deal on Spotify!</h6>
      <InputForm />
      {data && data.length > 0 ? <CardList data={data} /> : <Spinner />}
    </div>
  )
}