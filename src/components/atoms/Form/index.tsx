import { useState } from 'react';
import style from './styles.module.css';
import Button from '../Button';
  
  function InputForm() {

    const [year, setYear] = useState('');
  let newYear = year;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newYear = e.currentTarget.year.value;
    setYear(newYear);
  }
  
return(
  <form onSubmit={handleSubmit}>
  <input
    type="number"
    name="year"
    min="1920"
    max="2024"
    value={newYear}
    onChange={(e) => setYear(e.target.value)}
  />
  <Button title="Search" className="btn btn-primary" onClick={() => {window.location.href=`/search/${newYear}`}} />
</form>
)}
export default InputForm;

