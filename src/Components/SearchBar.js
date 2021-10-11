import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Form,InputField, Button } from './StyledComponents/SearchBar.style';
export const SearchBar =  function SearchBar({search,data}) {

  const [Searchvalue, setSearchValues] = useState("");
  let history = useHistory();

  // const [error, setErrors] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    search(Searchvalue);
      history.push(
        {
          pathname: "/result"
        }
      );

  }

  return (
  <>
    <Form onSubmit = {submitHandler}>
      <InputField name = "search"  onChange = {(e) => setSearchValues(e.target.value)} type="text"/>
      <Button>Search</Button>
    </Form> 
  </>
  )
}


