import { SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'

function useForm<T>(formInitialState: T) {
  const [form, setForm] = useState(formInitialState)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const clearForm = () => {
    setForm(formInitialState)
  }

  return { form, setForm, handleChange, handleSelectChange, clearForm }
}

export default useForm
