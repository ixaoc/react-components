import React, { FC, Fragment } from 'react'
import styles from './index.module.sass'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { actions as UserActions } from 'store/user'
import { actions as TopicActions } from 'store/topic'
import { useAction } from 'helpers/hooks'
import clsx from 'clsx'

import { Button, AuthButton } from 'components'
import { Table, Tr, Th, Td } from 'components/table'
import { User } from 'services/api'

import { Outlet, NavLink } from 'react-router-dom'
import { Navigator } from 'services/navigator'

export { Page } from './page'
export { PageTitle } from './pageTitle'

export const MainLayout: FC = () => {
  const user = useSelector(
    (state: RootState) => state.user,
  )

  const login = useAction(UserActions.login)
  const logout = useAction(UserActions.logout)


  //add useCallback
  const menuActive = ({ isActive }: { isActive: boolean }) => isActive ? styles.menuActive : undefined

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarBg} />

        <div className={styles.sidebarInner}>
          <div className={styles.logo}>React Components</div>

          <nav className={styles.menu}>
            <NavLink to="/" className={menuActive}>Home</NavLink>
            <NavLink to="/input" className={menuActive}>Input</NavLink>
            <NavLink to="/select" className={menuActive}>Select</NavLink>
            <NavLink to="/buttons" className={menuActive}>Buttons</NavLink>

            <NavLink to="/table" className={menuActive}>Table</NavLink>
            {/*<NavLink to="/tabs" className={menuActive}>Tabs</NavLink>*/}

            <NavLink to="/modal" className={menuActive}>Modal</NavLink>
            {/*<NavLink to="/multi" className={menuActive}>Multi</NavLink> */}

            <NavLink to="/lessons" className={menuActive}>Lessons</NavLink>
          </nav>

          {
            user.access_token.length === 0 ? (
              <Button
                fw
                loading={user.request}
                onClick={() => {
                  login({ username: 'extra', password: '123456'})
                }}
              >
                Login
              </Button>
            ) : (
              <Button fw onClick={() => {logout()}}>Logout</Button>
            )
          }
        </div>
      </div>

      <div className={styles.content}>
        <Navigator />
        <Outlet />
      </div>
    </div>
  )
}

