import { createFileRoute } from '@tanstack/react-router'
import InputForm from '../components/atoms/Form';
import '../index.css';

export const Route = createFileRoute('/search/')({
    component: SearchComponent,
})

function SearchComponent() {

    return (
      <div className='main-container'>
        <h6>Sorry, didn't get that.</h6>
        <InputForm />
      </div>
    )
}