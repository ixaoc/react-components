import React, { FC, useState, useRef } from 'react'
import clsx from 'clsx'
import { Page } from 'layouts/main'
import { Button } from 'components'
import { ModalMultiForm, useStepper } from 'components/multiform'
import { showModal } from 'components/modal'
import { menuItems } from './screens'
import styles from './index.module.sass'

interface IProps {
  id: number
  tabIndex?: number
  closeModal: () => void
}

const LocalModal: FC<IProps> = ({
  id,
  tabIndex = 0,
  closeModal
}) => {
	
	const title = 'Test'
	const [_selectedIndex, onChangeSelectedIndex] = useState(tabIndex)
	//const {onChangeSelectedIndex} = useStepper(actions.changeSelectedIndex)
  const modalRef = useRef(null)

  const ready = true
	const selectedIndex = !ready ? tabIndex : _selectedIndex

  const form = menuItems[selectedIndex]
  const Form = form.component

  return (
    <ModalMultiForm
      ref={modalRef}
      loading={false}
      title={title}
      className={styles.modal}

      menu={{
        format: 'list',
        items: menuItems,
        selectedIndex: selectedIndex,
        onChange: (index: number) => {
        	onChangeSelectedIndex(index)
        }
      }}
  >
      <Form />
    </ModalMultiForm>
  )
}

export const MultiPage: FC = () => {
  return (
  	<Page className={styles.page}>
	    <Button 
	    	className={styles.button}
		    onClick={() => {
		    	showModal(LocalModal)
		    }}
		  >
		  	Open MultiModal
		  </Button>
	  </Page>
  )
}
