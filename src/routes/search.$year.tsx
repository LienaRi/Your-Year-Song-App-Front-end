import { createFileRoute } from '@tanstack/react-router'
import { searchedSongsQueryOptions } from '../api/queryOptions'
import { useQuery } from '@tanstack/react-query';
import Spinner from 'react-bootstrap/esm/Spinner';
import { Album } from '../api/fetchSongs';
import InputForm from '../components/atoms/Form';

export const Route = createFileRoute('/search/$year')({
    loader: ({ context: { queryClient }, params: { year } }) => {
        return queryClient.ensureQueryData(searchedSongsQueryOptions(Number(year)))
      },
    component: Search,
})

function Search(){
    const { year } = Route.useParams();
    const { data, isLoading } = useQuery(searchedSongsQueryOptions(Number(year)));

    if (isLoading || !data) {
      return <Spinner />
    }
  
    return (
      <div>
        <h1>Your Year: {year}</h1>
        <InputForm />
        <ul>
          {data && data.map((item: Album) => 
          <li key={item.id}>{item.name} - {item.artists[0].name}</li>)
          }
        </ul>
      </div>
    )
  }