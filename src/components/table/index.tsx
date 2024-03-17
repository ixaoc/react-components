import { FC, PropsWithChildren, Children, isValidElement, useState, useEffect } from 'react'
import styles from './index.module.sass'
import clsx from 'clsx'

export const Table: FC<PropsWithChildren & { className?: any }> = ({className, children}) => {
	const headers: {[key: number]: any} = {}
	let headersReady = false

	const trClassNames = {
		thead: undefined,
		tbody: undefined
	}

	const data: any[] = []

	Children.map(children, wrapper => {
		if (isValidElement(wrapper)) {
			console.log(wrapper['props'])
			const item:{[key: number]: any} = {}
			let currentHeaderKey = 0

			trClassNames.thead = wrapper.props.theadClassName
			trClassNames.tbody = wrapper.props.className

      Children.map(wrapper.props.children, (child, index: number) => {   
				if (isValidElement(wrapper)) {
					console.log(child.type.name, child.props.children)


					if (child.type.name === 'Th' && !headersReady) {
						headers[Object.keys(headers).length] = child
						
					}

					if (child.type.name === 'Td') {
						item[currentHeaderKey] = child
						currentHeaderKey++
					}
				}
			})

			data.push(item)
			headersReady = true
    }	
	})

	//console.log(headers, data)
	return (
		<table className={clsx(styles.table, className)}>
      <thead>
        <tr className={trClassNames.thead}>
        	{
        		Object.keys(headers).map((key: any) => {
        			return headers[key]
        		})
        	}
        </tr>
      </thead>

      <tbody>
      	{
      		data.map((item: any, index: number) => {
      			return (
      				<tr key={index} className={trClassNames.tbody}>
      					{
      						Object.keys(headers).map((key: any) => {
			        			return item[key]
			        		})
      					}
      				</tr>
      			)
      		})
      	}
      </tbody>
    </table>
	)
}

export const Tr: FC<
	PropsWithChildren & { 
		className?: any, 
		theadClassName?: any 
	}
> = ({className, theadClassName, children}) => {
	return (
		<tr className={className}>{children}</tr>
	)
}

export const Th: FC<PropsWithChildren & { className?: any }> = ({className, children}) => {
	return (
		<th className={className}>{children}</th>
	)
}

export const Td: FC<PropsWithChildren & { className?: any }> = ({className, children}) => {
	return (
		<td className={className}>{children}</td>
	)
}
