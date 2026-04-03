import { FC } from 'react'
import { TextProps } from './text.props'
import styles from './text.module.css'

const Text: FC<TextProps> = ({ text }) => {
    return <p className={styles.text}>{text}</p>
}

export default Text
