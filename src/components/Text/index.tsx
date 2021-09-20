import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { InputProps } from '../../types'

export const ResoFormText = ({
  name,
  defaultValue,
  control,
  rules,
  fieldProps
}: InputProps) => {
  return (
    <Controller
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...(fieldProps as TextFieldProps)}
          error={Boolean(fieldState.error)}
          helperText={
            fieldState.error
              ? fieldState.error.message
              : (fieldProps as TextFieldProps).helperText
          }
        />
      )}
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
    />
  )
}
