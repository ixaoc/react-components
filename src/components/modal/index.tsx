import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'store'
import styles from './index.module.sass'
import clsx from 'clsx'

function modalWrapper<T>(WrappedComponent: FC<T>) {
  const Component = (props: any) => {
    return (
      <div className={styles.modal}>
          <div className={styles.modalBg} onClick={props.closeModal} />

          <div className={styles.modalContent}>
            <div className={styles.modalClose} onClick={props.closeModal}>
              <div className={styles.modalCloseIcon} />
            </div>
           
            <div className={styles.modalContentInner}>
              <WrappedComponent {...props} />
            </div>
          </div>
      </div>
    )
  }

  return Component
}

export function showModal<T, O = Omit<T, 'closeModal'>>(Component: FC<T>, props: O = {} as O) {
  const Modal = modalWrapper<T>(Component)
  const modalRoot = document.getElementById('modal-root') as HTMLElement
  const modal = document.createElement('div')
  modalRoot.appendChild(modal)
  const root = createRoot(modal)
  let closed = false

  document.body.style.height = '100vh'
  document.body.style.overflow = `hidden`

  function closeModal() {
    document.body.style.height = 'auto'
    document.body.style.overflow = `auto`

    root.unmount()
    modal.remove()
    closed = true
  }

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Modal closeModal={closeModal} {...props} />
      </Provider>
    </React.StrictMode>
  )

  return { modal: modal, closeModal: closeModal, closed: () => closed}
}
