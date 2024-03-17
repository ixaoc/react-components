import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { MainLayout } from 'layouts'
import { HomePage, InputPage, TablePage, ButtonsPage, SelectPage, ModalPage, MultiPage, LessonsPage } from 'views'
import clsx from 'clsx'
import styles from './app.module.sass'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "input",
        element: <InputPage />,
      },
      {
        path: "select",
        element: <SelectPage />,
      },
      {
        path: "buttons",
        element: <ButtonsPage />,
      },
      {
        path: "table",
        element: <TablePage />,
      },
      {
        path: "modal",
        element: <ModalPage />,
      },
      {
        path: "multi",
        element: <MultiPage />,
      },
      {
        path: "lessons",
        element: <LessonsPage />,
      },
    ],
  },
])

function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTimeout(() => { setReady(true) }, 1000)
  })

  return (
    <div className={clsx(styles.app, ready && styles.appReady)}>
      <div className={styles.appBlind} />

      <div className={styles.appContent}>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
