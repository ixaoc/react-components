import React, { FC } from 'react'
import clsx from 'clsx'
import { Page } from 'layouts/main'
import { Table, Tr, Th, Td } from 'components/table'
import styles from './index.module.sass'

type TableItem = {
  id: number
  name: string
  phone: string
  age: number
  gender: string
}

const data: TableItem[] = [
  { id: 1, name: 'Herbert E. Young', phone: '+1 (646) 555-3890', age: 22, gender: 'Male' },
  { id: 2, name: 'Thelma W. Goings', phone: '+1 (646) 545-2800', age: 28, gender: 'Female' },
  { id: 3, name: 'Michael G. Jessie', phone: '+1 (646) 523-3982', age: 32, gender: 'Male' },
  { id: 4, name: 'Grace S. Fournier', phone: '+1 (646) 579-1509', age: 12, gender: 'Female' },
  { id: 5, name: 'Kim C. Chandler', phone: '+1 (646) 533-3736', age: 24, gender: 'Female' },
  { id: 6, name: 'Lorie P. Meyers', phone: '+1 (646) 526-9080', age: 42, gender: 'Female' },
  { id: 7, name: 'Stanley C. Thomas', phone: '+1 (646) 588-9052', age: 45, gender: 'Male' },
]

export const TablePage: FC = () => {
  return (
    <Page>
      <Table className={styles.table}>
        {data.map((item) => (
          <Tr key={item.id} className={styles.tr} theadClassName={styles.theadTr}>
            <Th className={clsx(styles.th, styles.thId)}>Id</Th>
            <Td className={clsx(styles.td, styles.tdId)}>{item.id}</Td>

            <Th className={clsx(styles.th, styles.thName)}>Name</Th>
            <Td className={clsx(styles.td, styles.tdName)}>{item.name}</Td>

            <Th className={clsx(styles.th, styles.thPhone)}>Phone</Th>
            <Td className={clsx(styles.td, styles.tdPhone)}>{item.phone}</Td>

            <Th className={clsx(styles.th, styles.thAge)}>Age</Th>
            <Td className={clsx(styles.td, styles.tdAge)}>{item.age}</Td>

            <Th className={clsx(styles.th, styles.thGender)}>Gender</Th>
            <Td className={clsx(styles.td, styles.tdGender)}>{item.gender}</Td>
          </Tr>
        ))}
      </Table>
    </Page>
  )
}
