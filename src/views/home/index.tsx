import React, { FC, Fragment, useState } from 'react'
import clsx from 'clsx'
import { Page, PageTitle } from 'layouts/main'
import { Table, Tr, Th, Td } from 'components/table'
import styles from './index.module.sass'

const data = [
  { id: 1, name: 'Petr', age: 22, gender: 'Male' },
  { id: 2, name: 'Sindy', age: 28, gender: 'Female' },
  { id: 3, name: 'Mitro', age: 32, gender: 'Male' },
  { id: 4, name: 'Karl', age: 12, gender: 'Male' },
  { id: 5, name: 'Anna', age: 24, gender: 'Female' },
  { id: 6, name: 'Yana', age: 42, gender: 'Female' },
  { id: 7, name: 'Roric', age: 45, gender: 'Male' },
]

export const HomePage: FC = () => {
  return (
    <Page>
      <PageTitle>Table</PageTitle>

      <Table className={styles.table}>
        {
          data.map((item: any) => {
            return (
              <Tr key={item.id} className={styles.tr} theadClassName={styles.theadTr}>
                <Th className={clsx(styles.th, styles.thId)}>Id</Th>
                <Td className={clsx(styles.td, styles.tdId)}>{item.id}</Td>

                <Th className={clsx(styles.th, styles.thName)}>Name</Th>
                <Td className={clsx(styles.td, styles.tdName)}>{item.name}</Td>

                <Th className={clsx(styles.th, styles.thAge)}>Age</Th>
                <Td className={clsx(styles.td, styles.tdAge)}>{item.age}</Td>

                <Th className={clsx(styles.th, styles.thGender)}>Gender</Th>
                <Td className={clsx(styles.td, styles.tdGender)}>{item.gender}</Td>
              </Tr>
            )
          })
        }
      </Table>
    </Page>
  )
}
