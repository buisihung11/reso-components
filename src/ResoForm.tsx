import { Box, Grid, Stack } from '@mui/material'
import Button from '@mui/material/Button'
import React, { ReactNode } from 'react'
import { Controller, useForm, UseFormProps } from 'react-hook-form'
import { InputProps, ResoColumnType, ValueType } from './types'
import { buildFormItem } from './utils/utils'

type FormLayoutType = 'embed' | 'form' | 'modal' | 'drawer'

type FormProps = {
  size: 'small' | 'medium' | undefined
  layoutType?: FormLayoutType
  onFinish?: (values: any) => Promise<void | boolean | undefined> | void
  columns: ResoColumnType[]
  formProps?: UseFormProps
} & typeof defaultProps

const defaultProps = {
  size: 'small',
  layoutType: 'form'
}

const ResoForm = ({ formProps, columns, onFinish, size }: FormProps) => {
  const form = useForm(formProps)

  const renderContent = (columns: ResoColumnType[]): ReactNode[] => {
    const grid: ReactNode[] = []
    const gridItems: ReactNode[] = []

    columns.forEach((col, index) => {
      console.log(`col ${index + 1}`, col)
      if (col.valueType !== 'group') {
        if (col.name) {
          const itemProps: {
            valueType: ValueType
            formProps: InputProps
          } = {
            valueType: col.valueType as ValueType,
            formProps: {
              name: col.name,
              control: form.control,
              fieldProps: {
                ...col.fieldProps,
                label: col.title,
                fullWidth: true,
                size: size || 'small'
              },
              options: col.valueEnum
            }
          }

          const item = col.renderFormItem ? (
            <Controller
              control={form.control}
              render={col.renderFormItem}
              name={col.name}
            />
          ) : (
            <Grid item xs={col.width}>
              {buildFormItem(itemProps)}
            </Grid>
          )
          gridItems.push(item)
        }
      } else {
        if (col.columns) {
          grid.push(...renderContent(col.columns))
        }
      }
    })
    grid.push(
      <Box>
        <Grid container spacing={2} alignItems='start'>
          {gridItems}
        </Grid>
      </Box>
    )
    return grid
  }

  return (
    <form
      onSubmit={form.handleSubmit((values) => {
        if (onFinish) {
          onFinish(values)
        }
      })}
    >
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Stack spacing={2}>{renderContent(columns)}</Stack>
        <Box>
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Box>
      </Stack>
    </form>
  )
}

ResoForm.defaultProps = defaultProps

export default ResoForm
// type InputProps = {
//   name: string
//   label: string
// }
