import { useState, useCallback } from 'react';

const UseForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ ...state });
  };
  return { state, setState, handleChange, handleSubmit };
};

export default UseForm;
