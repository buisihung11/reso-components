/* eslint-disable react/prop-types */
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps
} from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { InputProps } from '../../types'

const ResoFormSelect = ({ name, control, options, ...props }: InputProps) => {
  const { fieldProps } = props
  const {
    label,
    size = 'small',
    fullWidth = false,
    disabled = false,
    multiple = false
  } = fieldProps as SelectProps

  return (
    <Controller
      render={({ field, fieldState }) => (
        <FormControl
          error={Boolean(fieldState.error)}
          fullWidth={fullWidth}
          size={size}
          disabled={disabled}
        >
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <Select
            multiple={multiple}
            id={name}
            label={label}
            {...field}
            {...(fieldProps as SelectProps)}
            error={Boolean(fieldState.error)}
            value={field.value || []}
          >
            {options?.map(({ label, value, id }) => (
              <MenuItem value={value} key={`${id}`}>
                {label}
              </MenuItem>
            ))}
            {!options?.length && (
              <MenuItem value='' disabled key={`${name}-select-empty`}>
                Trống
              </MenuItem>
            )}
          </Select>
          <FormHelperText>
            {fieldState.error && fieldState.error.message}
          </FormHelperText>
        </FormControl>
      )}
      name={name}
      control={control}
      defaultValue={multiple ? [] : ''}
      {...props}
    />
  )
}

export default ResoFormSelect
