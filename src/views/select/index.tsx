import React, { FC, useState } from 'react'
import clsx from 'clsx'
import { Page } from 'layouts/main'
import { Select, LanguageSelect, CountrySelect } from 'components'
import styles from './index.module.sass'

export const SelectPage: FC = () => {
	const [defaultValue, setDefaultValue] = useState(1)
	const [languageValue, setLanguageValue] = useState('zh')
	const [countryValue, setCountryValue] = useState('id')

  return (
  	<Page className={styles.page}>
  		<div className={styles.selects}>
		    <Select
		    	label="Select legend"
		    	value={defaultValue}
		    	options={[
		    		{ label: 'Messi', value: 1, },
		    		{ label: 'Ronaldo', value: 2, },
		    		{ label: 'Holand', value: 3, },
		    		{ label: 'Rammpart', value: 4, },
		    	]}
		    	onChange={({ option: { value }}) => {
		    		setDefaultValue(value)
		    	}}
		    />

		    <LanguageSelect
		    	label="Select language"
		    	value={languageValue}
		    	onChange={({ option: { value }}) => {
		    		setLanguageValue(value)
		    	}}
		    />

		    <CountrySelect
		    	label="Select country"
		    	value={countryValue}
		    	onChange={({ option: { value }}) => {
		    		setCountryValue(value)
		    	}}
		    />
		  </div>
	  </Page>
  )
}
