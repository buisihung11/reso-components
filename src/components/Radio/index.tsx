/* eslint-disable react/prop-types */
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  SelectProps
} from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { InputProps } from '../../types'

const ResoFormRadio = ({ name, control, options, ...props }: InputProps) => {
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
          component='fieldset'
          error={Boolean(fieldState.error)}
          fullWidth={fullWidth}
          size={size}
          disabled={disabled}
        >
          <FormLabel component='legend'>{label}</FormLabel>
          <RadioGroup {...field}>
            {options?.map(({ label, value }) => (
              <FormControlLabel
                key={`${name}-radio-${value}`}
                value={value}
                control={<Radio size={size} />}
                label={label}
              />
            ))}
          </RadioGroup>
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

export default ResoFormRadio
