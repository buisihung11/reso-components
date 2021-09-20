/* eslint-disable react/prop-types */
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  SelectProps
} from '@mui/material'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { InputProps } from '../../types'

const ResoFormCheckboxGroup = ({
  name,
  control,
  options,
  defaultValue,
  ...props
}: InputProps) => {
  const { fieldProps } = props
  const { size = 'small', disabled = false, label } = fieldProps as SelectProps

  const [checkedValues, setCheckedValues] = useState<string[]>(
    defaultValue || []
  )

  const handleSelect = (value: any) => {
    const newNames = checkedValues.includes(value)
      ? checkedValues?.filter((name) => name !== value)
      : [...(checkedValues || []), value]
    setCheckedValues(newNames)
    return newNames
  }

  return (
    <Controller
      render={({ field, fieldState }) => (
        <FormControl
          error={Boolean(fieldState.error)}
          size={size}
          disabled={disabled}
        >
          <FormLabel component='legend'>{label}</FormLabel>
          <FormGroup>
            {options?.map(({ label, value }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={field.value?.includes(value)}
                    name={name}
                    onChange={() => field.onChange(handleSelect(value))}
                  />
                }
                key={value}
                label={label}
              />
            ))}
          </FormGroup>
          <FormHelperText>
            {fieldState.error && fieldState.error.message}
          </FormHelperText>
        </FormControl>
      )}
      name={name}
      control={control}
      defaultValue={defaultValue || []}
      {...props}
    />
  )
}

const ResoFormCheckbox = ({
  name,
  control,
  options,
  defaultValue,
  ...props
}: InputProps) => {
  const { fieldProps } = props
  const { label, disabled = false } = fieldProps as SelectProps

  return (
    <Controller
      render={({ field }) => (
        <FormControlLabel
          control={
            <Checkbox
              disabled={disabled}
              {...field}
              checked={field.value}
              inputRef={field.ref}
            />
          }
          label={label}
        />
      )}
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      {...props}
    />
  )
}

ResoFormCheckbox.Group = ResoFormCheckboxGroup

export { ResoFormCheckboxGroup }
export default ResoFormCheckbox
