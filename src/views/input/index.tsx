import React, { FC, ChangeEvent, useRef, useState, useEffect, useCallback } from 'react'
import clsx from 'clsx'
import { Page } from 'layouts/main'
import { Input, PasswordInput, SearchInput } from 'components'
import styles from './index.module.sass'

export const InputPage: FC = () => {
	const ref = useRef<HTMLInputElement>(null)

	const [value, setValue] = useState('')
	const [helloValue, setHelloValue] = useState('Hello')
	const [searchValue, setSearchValue] = useState('I search ...')
	
	const [show, setShow] = useState(false)

	useEffect(() => {
		console.log(ref?.current?.value)
	})

	const changeValue = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => void setValue(e.target.value), []
	)

	const changeHelloValue = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => void setHelloValue(e.target.value), []
	)

	const changeSearchValue = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => void setSearchValue(e.target.value), []
	)

	const handleOnClear = useCallback(
		() => void setValue(''), []
	)

	const handleHelloOnClear = useCallback(
		() => void setHelloValue(''), []
	)

	const handleSearchOnClear = useCallback(
		() => void setSearchValue(''), []
	)

	const handleOnShowHide = useCallback(
		() => void setShow(!show), [show]
	)
	
  return (
  	<Page className={styles.page}>
  		<div className={styles.content}>
  			<div className={styles.inputs}>
  				<div className={styles.inputsItem}>
			  		<Input 
			  			ref={ref}
			  			value={value}
			  			onChange={changeValue}
			  		/>

			  		<Input 
			  			label="Label & placeholder & hint"
			  			value={value}
			  			placeholder="Placeholder"
			  			onChange={changeValue}
			  			hint="Hint"
			  		/>

			  		<Input 
			  			value={helloValue}
			  			placeholder="Placeholder"
			  			onChange={changeHelloValue}
			  			rightAddon={{
			          name: 'clear',
			          onClear: handleHelloOnClear
			        }}
			  		/>

			  		<PasswordInput 
			  			label="Password input"
			  			placeholder="Placeholder"
			  			value={value}
			  			onChange={changeValue}
			  		/>

			  		<SearchInput
			  			value={searchValue}
			  			onChange={changeSearchValue}
			  			onClear={handleSearchOnClear}
			  		/>

			  		<Input 
			  			disabled={true}
			  			value={value}
			  			onChange={changeValue}
			  			
			  		/> 		
			  	</div>

			  	<div className={styles.inputsItem}>
			  		<Input 
			  			appearance="inside"
			  			label="with label"
			  			value={value}
			  			onChange={changeValue}
			  			rightAddon={{
			          name: 'clear',
			          onClear: handleOnClear
			        }}
			  		/>

			  		<Input 
			  			appearance="inside"
			  			label="Cool label"
			  			value={helloValue}
			  			onChange={changeHelloValue}
			  		/>

			  		<Input 
			  			appearance="inside"
			  			label="Cool label"
			  			placeholder="Placeholder"
			  			value={value}
			  			onChange={changeValue}
			  		/>

			  		<Input 
			  			appearance="inside"
			  			label="Cool label"
			  			value={value}
			  			onChange={changeValue}
			  			error={{
			  				message: 'Error message'
			  			}}
			  		/>

			  		<Input 
			  			appearance="inside"
			  			label="Cool label"
			  			disabled={true}
			  			value={helloValue}
			  			onChange={changeHelloValue}
			  		/>

			  		<Input 
			  			appearance="inside"
			  			label="Cool label"
			  			disabled={true}
			  			value={value}
			  			onChange={changeValue}
			  		/>
			  	</div>
			  </div>
	  	</div>
	  </Page>
  )
}
