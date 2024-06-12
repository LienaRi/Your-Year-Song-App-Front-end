import { createFileRoute } from '@tanstack/react-router'
import InputForm from '../components/atoms/Form';
import '../index.css'


export const Route = createFileRoute("/")({
  component: Index,
});


function Index() {

  return (
    <div className='main-container'>
      <h3>Select a year special for you</h3>
      <h5>Your birth year? Year of your first kiss? Graduation? The choice is yours!</h5>
      <InputForm />
    </div>
  );
}