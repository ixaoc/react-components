import React, { FC, useCallback } from 'react'
import clsx from 'clsx'
import { Page } from 'layouts/main'
import { Button, showModal } from 'components'
import styles from './index.module.sass'

const LocalModal = () => {
	return (
		<div className={styles.localModal}>
			<h1 className={styles.localModalTitle}>Modal ...</h1>

			<p>Tokyo is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
			<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
			<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Tokyo, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
			<p>Tokyo is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
			<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
			<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Tokyo, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
			<p>Tokyo is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
			<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
			<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Tokyo, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
			<p>Tokyo is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
			<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
			<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Tokyo, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>

		</div>
	)
}

export const ModalPage: FC = () => {
	const openModal = useCallback(() => {showModal(LocalModal)}, [])

  return (
  	<Page className={styles.page}>
	    <Button 
	    	className={styles.button}
		    onClick={openModal}
		  >
		  	Open Modal
		  </Button>
	  </Page>
  )
}
