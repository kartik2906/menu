import React, {useState} from 'react'
import {Form,InputField, Button } from './StyledComponents/SearchBar.style';
export const SearchBar =  function SearchBar({search}) {

  const [value, setValues] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    search(value);
  }
  return (
    <Form onSubmit = {submitHandler}>
      <InputField onChange = {(e) => setValues(e.target.value)} type="text"/>
      <Button>Search</Button>
    </Form>
  )
}


