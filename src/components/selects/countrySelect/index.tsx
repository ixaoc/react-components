import { FC } from 'react'
import styles from './index.module.sass'
import clsx from 'clsx'
import { Select } from 'components'
import { COUNTRIES } from 'helpers/data'

import { ISelect, ISelectOption } from 'components'

export type ICountrySelect = Pick<ISelect, Exclude<keyof ISelect, 'options'>> &
  Partial<Pick<ISelect, 'options'>> & {
    onChange?: (v: { index: number; option: ISelectOption }) => void
  }
export type ICountrySelectOption = ISelectOption & Required<Pick<ISelectOption, 'label'>>

export const CountrySelect: FC<ICountrySelect> = ({
  name,
  placeholder = 'Select country',
  fieldClassName,
  options,
  onChange,
  ...params
}) => {
  const defaultOptions: ICountrySelectOption[] = []

  COUNTRIES.map((country) => {
    defaultOptions.push({ label: country.label, value: country.iso2, data: country })
  })

  defaultOptions.sort((a, b) => {
    if (a.label < b.label) {
      return -1
    }
    if (a.label > b.label) {
      return 1
    }
    return 0
  })

  return (
    <Select
      name={name}
      placeholder={placeholder}
      fieldClassName={clsx(styles.select, fieldClassName)}
      options={options ?? defaultOptions}
      onChange={onChange}
      {...params}
    />
  )
}
