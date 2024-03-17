import React, { FC, useEffect } from 'react'
import clsx from 'clsx'
import { actions as UserActions } from 'store/user'
import { actions as TopicActions } from 'store/topic'
import { useStore, useAction } from 'helpers/hooks'
import { Page, PageTitle } from 'layouts/main'
import { Button } from 'components'
import { Table, Tr, Th, Td } from 'components/table'
import styles from './index.module.sass'

export const LessonsPage: FC = () => {
  const { access_token, request } = useStore('user')
  const { list: topics } = useStore('topic')

  const login = useAction(UserActions.login)
  const logout = useAction(UserActions.logout)
  const getTopics = useAction(TopicActions.list)

  useEffect(() => void getTopics({}), [access_token])

  return (
    <Page>
      <PageTitle>Lessons</PageTitle>

      { !access_token && (
        <div>
          <div>Need autorization</div>

          <Button
            loading={request}
            onClick={() => {
              login({ username: 'extra', password: '123456'})
            }}
          >
            Login
          </Button>
        </div>
      )}

      { access_token && (
        <Table className={styles.table}>
          {
            topics.map((item: any) => {
              return (
                <Tr key={item.id} className={styles.tr} theadClassName={styles.theadTr}>
                  <Th className={styles.th}>Id</Th>
                  <Td className={clsx(styles.td, styles.tdId)}>{item.id}</Td>

                  <Th className={styles.th}>Title</Th>
                  <Td className={styles.td}>{item.title}</Td>

                  <Th className={styles.th}>Intro</Th>
                  <Td className={styles.td}>{item.intro}</Td>

                  <Th className={styles.th}>Content</Th>
                  <Td className={styles.td}>{item.content}</Td>
                </Tr>
              )
            })
          }
        </Table>
      )}
  	</Page>
  )
}
