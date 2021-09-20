import {
  CheckboxProps,
  GridSize,
  SelectProps,
  TextFieldProps
} from '@mui/material'
import { ReactNode } from 'react'
import {
  ControllerFieldState,
  ControllerProps,
  ControllerRenderProps,
  UseFormStateReturn
} from 'react-hook-form'

export type ValueType =
  | 'text'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'option'
  | 'date'
  | 'dateRange'
  | 'time'
  | 'group'

export type ResoColumnType = {
  title: string
  name?: string
  valueType?: ValueType
  width?: boolean | GridSize | undefined
  valueEnum?: {
    value: any
    label: string | ReactNode
    [key: string]: any
  }[]
  columns?: ResoColumnType[]
  fieldProps?: TextFieldProps | SelectProps
  renderFormItem?: ({
    field,
    fieldState,
    formState
  }: {
    field: ControllerRenderProps
    fieldState: ControllerFieldState
    formState: UseFormStateReturn<any>
  }) => React.ReactElement
}

export type InputProps = Omit<ControllerProps, 'render'> & {
  fieldProps: TextFieldProps | SelectProps<any> | CheckboxProps
  options?: {
    value: any
    label: string | ReactNode
    [key: string]: any
  }[]
}
