import React, { FC, useState, useCallback } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { Page } from 'layouts/main'
import { Label, Button } from 'components'
import styles from './index.module.sass'

export const ButtonsPage: FC = () => {
	const [color, setColor] = useState('#fff')
	const click = useCallback(() => {
		setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
	}, [])
	
  return (
  	<Page className={styles.page}>
  		<div className={styles.buttons}>
		    <div className={styles.button}>
		    	<Label className={styles.label}>Button</Label>
		    	<Button style={{'color': color}} onClick={click}>Change color</Button>
		    </div>

		    <div className={styles.button}>
		    	<Label className={styles.label}>Link (react-router)</Label>
		    	<Button component={Link} to="/table">Go by url</Button>
		    </div>

		    <div className={styles.button}>
		    	<Label className={styles.label}>Link (native)</Label>
		    	<Button component="a" href="/table">Go by url</Button>
		    </div>

		    <div className={styles.button}>
		    	<Label className={styles.label}>Button (loading...)</Label>
		    	<Button loading>Loading ...</Button>
		    </div>

		    <div className={styles.button}>
		    	<Label className={styles.label}>Button (disable)</Label>
		    	<Button disable>Disable</Button>
		    </div>
		  </div>
	  </Page>
  )
}
